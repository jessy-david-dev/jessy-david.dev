"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cookie,
  Database,
  Eye,
  Lock,
  Mail,
  Shield,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export default function PolitiqueDeConfidentialite() {
  return (
    <section className="min-h-screen py-20 bg-slate-900 relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Retour à l&apos;accueil
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-slate-300">
              Protection de vos données
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-slate-400">
            Conformément au RGPD et à la loi n° 78-17 du 6 janvier 1978 modifiée
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Introduction */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Lock className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>
                La présente politique de confidentialité a pour but
                d&apos;informer les utilisateurs du site jessy-david.dev de la
                manière dont leurs données personnelles sont collectées,
                traitées et protégées, conformément au Règlement Général sur la
                Protection des Données (RGPD - Règlement UE 2016/679) et à la
                loi n° 78-17 du 6 janvier 1978 relative à l&apos;informatique,
                aux fichiers et aux libertés, modifiée par la loi n° 2004-801 du
                6 août 2004.
              </p>
              <p>
                <strong>Responsable du traitement :</strong> Jessy DAVID
                <br />
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@jessy-david.dev"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  contact@jessy-david.dev
                </a>
              </p>
            </div>
          </div>

          {/* Données collectées */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white">
                2. Données personnelles collectées
              </h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>
                Je collecte les données personnelles suivantes dans le cadre de
                l&apos;utilisation de ce site :
              </p>
              <div className="bg-slate-900/50 rounded-xl p-4">
                <h3 className="font-semibold text-white mb-3">
                  Via le formulaire de contact :
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>
                    <strong>Nom et prénom</strong> - pour vous identifier
                  </li>
                  <li>
                    <strong>Adresse email</strong> - pour vous répondre
                  </li>
                  <li>
                    <strong>Message</strong> - pour comprendre votre demande
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4">
                <h3 className="font-semibold text-white mb-3">
                  Données techniques automatiquement collectées :
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Adresse IP (anonymisée)</li>
                  <li>Type de navigateur et système d&apos;exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>
                    Source de trafic (moteur de recherche, lien direct, etc.)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Finalités */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Eye className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-xl font-bold text-white">
                3. Finalités du traitement
              </h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>
                Les données personnelles sont collectées pour les finalités
                suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <strong>Répondre à vos demandes de contact</strong> - Base
                  légale : consentement
                </li>
                <li>
                  <strong>Améliorer l&apos;expérience utilisateur</strong> -
                  Base légale : intérêt légitime
                </li>
                <li>
                  <strong>Analyser les statistiques de fréquentation</strong> -
                  Base légale : consentement (cookies)
                </li>
                <li>
                  <strong>Assurer la sécurité du site</strong> (protection
                  anti-spam via Cloudflare Turnstile) - Base légale : intérêt
                  légitime
                </li>
              </ul>
            </div>
          </div>

          {/* Durée de conservation */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              4. Durée de conservation des données
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Vos données personnelles sont conservées pour une durée limitée
                :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <strong>Données du formulaire de contact :</strong> 3 ans à
                  compter du dernier contact
                </li>
                <li>
                  <strong>Cookies analytiques :</strong> 13 mois maximum
                </li>
                <li>
                  <strong>Logs de sécurité :</strong> 12 mois
                </li>
              </ul>
              <p>
                À l&apos;expiration de ces délais, vos données sont supprimées
                ou anonymisées.
              </p>
            </div>
          </div>

          {/* Destinataires */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              5. Destinataires des données
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Vos données personnelles sont strictement confidentielles et ne
                sont communiquées qu&apos;aux destinataires suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <strong>Jessy DAVID</strong> - Responsable du traitement
                </li>
                <li>
                  <strong>Hébergeur (QuantumCraft Studios)</strong> - pour le
                  stockage technique
                </li>
                <li>
                  <strong>Cloudflare</strong> - pour la protection anti-spam
                  (Turnstile)
                </li>
                <li>
                  <strong>Fournisseur d&apos;emails</strong> - pour l&apos;envoi
                  des messages de contact
                </li>
              </ul>
              <p>
                Je ne vends, ne loue, ni ne partage vos données personnelles
                avec des tiers à des fins commerciales.
              </p>
            </div>
          </div>

          {/* Transferts hors UE */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              6. Transferts de données hors UE
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Certains de mes prestataires (hébergeur, Cloudflare) peuvent
                être situés en dehors de l&apos;Union Européenne. Dans ce cas,
                je m&apos;assure que ces transferts sont encadrés par des
                garanties appropriées conformément au RGPD (Clauses
                Contractuelles Types, Data Privacy Framework, etc.).
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Cookie className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="text-xl font-bold text-white">
                7. Cookies et traceurs
              </h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>
                Ce site utilise des cookies pour assurer son bon fonctionnement
                et améliorer votre expérience de navigation.
              </p>

              <div className="bg-slate-900/50 rounded-xl p-4">
                <h3 className="font-semibold text-white mb-3">
                  Cookies strictement nécessaires (exemptés de consentement) :
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>
                    <strong>Session</strong> - Maintien de la session de
                    navigation
                  </li>
                  <li>
                    <strong>Sécurité (Cloudflare Turnstile)</strong> -
                    Protection anti-spam
                  </li>
                  <li>
                    <strong>Préférences cookies</strong> - Mémorisation de vos
                    choix
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4">
                <h3 className="font-semibold text-white mb-3">
                  Cookies analytiques (soumis à consentement) :
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>
                    <strong>Google Analytics</strong> - Analyse du trafic et
                    comportement des visiteurs
                  </li>
                </ul>
              </div>

              <p>
                Vous pouvez à tout moment modifier vos préférences en matière de
                cookies via la bannière de gestion des cookies accessible depuis
                le bas de page.
              </p>
            </div>
          </div>

          {/* Droits des utilisateurs */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <UserCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold text-white">8. Vos droits</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>
                Conformément au RGPD et à la loi Informatique et Libertés, vous
                disposez des droits suivants sur vos données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <strong>Droit d&apos;accès</strong> - Obtenir une copie de vos
                  données
                </li>
                <li>
                  <strong>Droit de rectification</strong> - Corriger des données
                  inexactes
                </li>
                <li>
                  <strong>Droit à l&apos;effacement</strong> - Demander la
                  suppression de vos données
                </li>
                <li>
                  <strong>Droit à la limitation</strong> - Limiter le traitement
                  de vos données
                </li>
                <li>
                  <strong>Droit d&apos;opposition</strong> - Vous opposer au
                  traitement
                </li>
                <li>
                  <strong>Droit à la portabilité</strong> - Recevoir vos données
                  dans un format structuré
                </li>
                <li>
                  <strong>Droit de retirer votre consentement</strong> - À tout
                  moment
                </li>
              </ul>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mt-4">
                <p className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    Pour exercer vos droits, contactez-moi à :{" "}
                    <a
                      href="mailto:contact@jessy-david.dev"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      contact@jessy-david.dev
                    </a>
                    <br />
                    Je répondrai à votre demande dans un délai maximum de 30
                    jours.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Réclamation CNIL */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              9. Réclamation auprès de la CNIL
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Si vous estimez que le traitement de vos données personnelles
                constitue une violation de vos droits, vous pouvez introduire
                une réclamation auprès de la Commission Nationale de
                l&apos;Informatique et des Libertés (CNIL) :
              </p>
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p>
                  <strong>CNIL</strong>
                </p>
                <p>3 Place de Fontenoy - TSA 80715</p>
                <p>75334 PARIS CEDEX 07</p>
                <p>
                  Site web :{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              10. Sécurité des données
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Je mets en œuvre toutes les mesures techniques et
                organisationnelles appropriées pour garantir un niveau de
                sécurité adapté au risque :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Chiffrement SSL/TLS des communications</li>
                <li>Protection contre les attaques (Cloudflare)</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Mises à jour régulières de sécurité</li>
              </ul>
            </div>
          </div>

          {/* Modifications */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              11. Modifications de la politique
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Je me réserve le droit de modifier cette politique de
                confidentialité à tout moment. En cas de modification
                substantielle, je vous en informerai par une notification
                visible sur ce site. La date de dernière mise à jour sera
                toujours indiquée en bas de cette page.
              </p>
            </div>
          </div>

          {/* Date de mise à jour */}
          <div className="text-center text-slate-500 text-sm pt-8">
            Dernière mise à jour : Janvier 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
