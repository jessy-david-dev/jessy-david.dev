"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check, Settings } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
};

const COOKIE_CONSENT_KEY = "cookie-consent";
const COOKIE_PREFERENCES_KEY = "cookie-preferences";

function getInitialPreferences(): CookiePreferences {
  if (typeof window === "undefined") {
    return { necessary: true, analytics: false };
  }
  const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (savedPreferences) {
    try {
      return JSON.parse(savedPreferences);
    } catch {
      return { necessary: true, analytics: false };
    }
  }
  return { necessary: true, analytics: false };
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(
    getInitialPreferences,
  );

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Délai pour ne pas afficher immédiatement au chargement
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Appliquer les préférences sauvegardées au chargement
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPreferences) {
        try {
          const prefs = JSON.parse(savedPreferences);
          if (prefs.analytics) {
            // @ts-expect-error - gtag n'est pas typé
            window.gtag?.("consent", "update", {
              analytics_storage: "granted",
            });
          }
        } catch {
          // Ignorer les erreurs de parsing
        }
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = { necessary: true, analytics: true };
    saveConsent(newPreferences);
  };

  const handleRejectAll = () => {
    const newPreferences = { necessary: true, analytics: false };
    saveConsent(newPreferences);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Activer/désactiver Google Analytics selon le consentement
    if (prefs.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
  };

  const enableAnalytics = () => {
    // Active Google Analytics via GTM Consent Mode
    if (typeof window !== "undefined") {
      // @ts-expect-error - gtag n'est pas typé
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
      // Envoyer un événement pour GTM
      // @ts-expect-error - dataLayer n'est pas typé
      window.dataLayer?.push({ event: "cookie_consent_analytics" });
    }
  };

  const disableAnalytics = () => {
    // Désactive Google Analytics via GTM Consent Mode
    if (typeof window !== "undefined") {
      // @ts-expect-error - gtag n'est pas typé
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  // Fonction pour rouvrir la bannière (appelable depuis le footer)
  useEffect(() => {
    const handleOpenCookieSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener("openCookieSettings", handleOpenCookieSettings);
    return () =>
      window.removeEventListener(
        "openCookieSettings",
        handleOpenCookieSettings,
      );
  }, []);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Cookie className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Gestion des cookies
                  </h3>
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-700"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                {!showSettings ? (
                  <>
                    <p className="text-slate-300 mb-6">
                      Ce site utilise des cookies pour améliorer votre
                      expérience. Les cookies nécessaires sont essentiels au bon
                      fonctionnement du site. Vous pouvez choisir
                      d&apos;accepter ou de refuser les cookies analytiques.{" "}
                      <Link
                        href="/politique-de-confidentialite"
                        className="text-blue-400 hover:text-blue-300 transition-colors underline"
                      >
                        En savoir plus
                      </Link>
                    </p>

                    {/* Boutons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleRejectAll}
                        className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors"
                      >
                        Refuser tout
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Personnaliser
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="flex-1 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all"
                      >
                        Accepter tout
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-slate-300 mb-6">
                      Personnalisez vos préférences de cookies ci-dessous.
                    </p>

                    {/* Options de cookies */}
                    <div className="space-y-4 mb-6">
                      {/* Cookies nécessaires */}
                      <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">
                            Cookies nécessaires
                          </h4>
                          <p className="text-sm text-slate-400">
                            Essentiels au fonctionnement du site (session,
                            sécurité, préférences).
                          </p>
                        </div>
                        <div className="ml-4">
                          <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-blue-600" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Cookies analytiques */}
                      <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">
                            Cookies analytiques
                          </h4>
                          <p className="text-sm text-slate-400">
                            Google Analytics pour comprendre comment vous
                            utilisez ce site.
                          </p>
                        </div>
                        <div className="ml-4">
                          <button
                            onClick={() =>
                              setPreferences((prev) => ({
                                ...prev,
                                analytics: !prev.analytics,
                              }))
                            }
                            className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                              preferences.analytics
                                ? "bg-blue-600 justify-end"
                                : "bg-slate-600 justify-start"
                            }`}
                            aria-label={
                              preferences.analytics
                                ? "Désactiver les cookies analytiques"
                                : "Activer les cookies analytiques"
                            }
                          >
                            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                              {preferences.analytics && (
                                <Check className="w-3 h-3 text-blue-600" />
                              )}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Boutons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setShowSettings(false)}
                        className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors"
                      >
                        Retour
                      </button>
                      <button
                        onClick={handleSavePreferences}
                        className="flex-1 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all"
                      >
                        Sauvegarder mes choix
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
