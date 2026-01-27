"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, Scale, User } from "lucide-react";
import Link from "next/link";

export default function MentionsLegales() {
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
            <Scale className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-slate-300">
              Informations légales
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mentions Légales
          </h1>
          <p className="text-xl text-slate-400">
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
            dans l&apos;économie numérique
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Éditeur du site */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-white">
                1. Éditeur du site
              </h2>
            </div>
            <div className="text-slate-300 space-y-2">
              <p>
                <strong>Nom :</strong> Jessy DAVID
              </p>
              <p>
                <strong>Adresse :</strong> Angers, France
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@jessy-david.dev"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  contact@jessy-david.dev
                </a>
              </p>
              <p>
                <strong>Site web :</strong>{" "}
                <a
                  href="https://jessy-david.dev"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  https://jessy-david.dev
                </a>
              </p>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white">2. Hébergeur</h2>
            </div>
            <div className="text-slate-300 space-y-2">
              <p>
                <strong>Nom :</strong> QuantumCraft Studios
              </p>
              <p>
                <strong>Adresse :</strong> 58 RUE DE MONCEAU 75008 PARIS, FRANCE
              </p>
              <p>
                <strong>Site web :</strong>{" "}
                <a
                  href="https://quantumcraft-studios.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  https://quantumcraft-studios.com
                </a>
              </p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              3. Propriété intellectuelle
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos,
                logos, graphismes, etc.) est la propriété exclusive de Jessy
                DAVID, sauf mention contraire. Toute reproduction,
                représentation, modification, publication, adaptation de tout ou
                partie des éléments du site, quel que soit le moyen ou le
                procédé utilisé, est interdite sans l&apos;autorisation écrite
                préalable de Jessy DAVID.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l&apos;un
                quelconque des éléments qu&apos;il contient sera considérée
                comme constitutive d&apos;une contrefaçon et poursuivie
                conformément aux dispositions des articles L.335-2 et suivants
                du Code de Propriété Intellectuelle.
              </p>
            </div>
          </div>

          {/* Limitation de responsabilité */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              4. Limitation de responsabilité
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Jessy DAVID s&apos;efforce d&apos;assurer au mieux de ses
                possibilités l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site, dont il se réserve le droit
                de corriger, à tout moment et sans préavis, le contenu.
                Toutefois, Jessy DAVID ne peut garantir l&apos;exactitude, la
                précision ou l&apos;exhaustivité des informations mises à
                disposition sur ce site.
              </p>
              <p>
                En conséquence, Jessy DAVID décline toute responsabilité pour
                toute imprécision, inexactitude ou omission portant sur des
                informations disponibles sur ce site.
              </p>
            </div>
          </div>

          {/* Liens hypertextes */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              5. Liens hypertextes
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Le site jessy-david.dev peut contenir des liens hypertextes vers
                d&apos;autres sites. Jessy DAVID n&apos;exerce aucun contrôle
                sur ces sites et décline toute responsabilité quant à leur
                contenu. La décision d&apos;activer les liens appartient
                exclusivement aux visiteurs du site.
              </p>
            </div>
          </div>

          {/* Protection des données */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              6. Protection des données personnelles
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi n° 78-17 du 6 janvier 1978 modifiée (loi
                Informatique et Libertés), vous disposez d&apos;un droit
                d&apos;accès, de rectification, de suppression et
                d&apos;opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour plus d&apos;informations sur la collecte et le traitement
                de vos données, veuillez consulter la{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Politique de Confidentialité
                </Link>
                .
              </p>
              <p>
                Pour exercer vos droits, vous pouvez me contacter à
                l&apos;adresse suivante :{" "}
                <a
                  href="mailto:contact@jessy-david.dev"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  contact@jessy-david.dev
                </a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">7. Cookies</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Ce site utilise des cookies pour améliorer l&apos;expérience
                utilisateur. Pour plus d&apos;informations sur
                l&apos;utilisation des cookies, veuillez consulter la{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Politique de Confidentialité
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Loi applicable */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              8. Droit applicable et juridiction
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige, les tribunaux français seront seuls
                compétents.
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
