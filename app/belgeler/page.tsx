'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Download, Shield, Star, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function BelgelerPage() {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages = {
    tr: { name: 'Türkçe', flag: '🇹🇷', code: 'TR' },
    en: { name: 'English', flag: '🇬🇧', code: 'EN' }
  };

  const translations = {
    tr: {
      title: 'Resmi Belgelerimiz',
      subtitle: 'Yasal yetki ve kalite belgelerimiz',
      law: '6098 sayılı Türk Borçlar Kanunu ve ilgili mevzuat uyarınca',
      updated: 'Son Güncelleme: 2 Ocak 2025',
      d2_title: 'D2 Yetki Belgesi',
      d2_subtitle: 'T.C. Ulaştırma ve Altyapı Bakanlığı',
      d2_desc: 'Yurtiçi tarifesiz ticari yolcu taşımacılığı yetkisi',
      d2_number: 'Belge No: İST.U-NET.D2.34.3379',
      d2_date: 'Veriliş: 17/07/2023',
      d2_valid: 'Geçerlilik: 17/01/2029',
      tursab_title: 'TURSAB A Grubu Belgesi',
      tursab_subtitle: 'T.C. Kültür ve Turizm Bakanlığı',
      tursab_desc: 'Seyahat Acentası İşletme Belgesi',
      tursab_number: 'Belge No: 11175',
      tursab_date: 'Düzenleme: 31/01/2019',
      view: 'Belgeyi Görüntüle',
      download: 'İndir',
      back: 'Ana Sayfaya Dön',
      verified: 'Bakanlık Onaylı',
      active: 'Aktif'
    },
    en: {
      title: 'Our Official Documents',
      subtitle: 'Legal authorization and quality certificates',
      law: 'In accordance with Turkish Code of Obligations No. 6098 and relevant legislation',
      updated: 'Last Updated: January 2, 2025',
      d2_title: 'D2 Authorization Certificate',
      d2_subtitle: 'Ministry of Transport and Infrastructure',
      d2_desc: 'Domestic non-scheduled commercial passenger transport',
      d2_number: 'Certificate No: IST.U-NET.D2.34.3379',
      d2_date: 'Issue: 17/07/2023',
      d2_valid: 'Validity: 17/01/2029',
      tursab_title: 'TURSAB Group A Certificate',
      tursab_subtitle: 'Ministry of Culture and Tourism',
      tursab_desc: 'Travel Agency Operating Certificate',
      tursab_number: 'Certificate No: 11175',
      tursab_date: 'Issue: 31/01/2019',
      view: 'View Document',
      download: 'Download',
      back: 'Back to Home',
      verified: 'Ministry Approved',
      active: 'Active'
    }
  };

  const t = (key: keyof typeof translations.tr) => translations[language][key];

  const belgeler = [
    {
      id: 'd2',
      title: t('d2_title'),
      subtitle: t('d2_subtitle'),
      desc: t('d2_desc'),
      number: t('d2_number'),
      date: t('d2_date'),
      extra: t('d2_valid'),
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-400',
      pdf: '/belgeler/YetkiBelgesi_3_.pdf',
      pdfName: 'D2-Yetki-Belgesi.pdf'
    },
    {
      id: 'tursab',
      title: t('tursab_title'),
      subtitle: t('tursab_subtitle'),
      desc: t('tursab_desc'),
      number: t('tursab_number'),
      date: t('tursab_date'),
      extra: '',
      icon: Star,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-400',
      pdf: '/belgeler/TURSAB_D2.pdf',
      pdfName: 'TURSAB-Belgesi.pdf'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-primary-500" />
            <span className="font-bold text-gray-800 text-lg">Impala Transfer</span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
            >
              <span className="text-xl">{languages[language].flag}</span>
              <span className="font-bold text-sm text-gray-700">{languages[language].code}</span>
            </button>

            {showLangMenu && (
              <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-40 z-50">
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLanguage(code as 'tr' | 'en');
                      setShowLangMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3"
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero - KVKK Tarzı */}
      <div className="bg-gradient-to-br from-purple-600 via-violet-700 to-fuchsia-800 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 border-4 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: [360, 0], scale: [1.1, 1, 1.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 border-4 border-pink-300/20 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary-500 rounded-full mb-6">
              <FileText className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-black mb-4">
              {t('title')}
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-2">
              {t('subtitle')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('law')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('updated')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {belgeler.map((belge, idx) => {
              const Icon = belge.icon;
              return (
                <motion.div
                  key={belge.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-gradient-to-br ${belge.bgColor} border-2 ${belge.borderColor} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition`}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${belge.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-12 h-12" />
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-semibold">{t('verified')}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-black mb-1">{belge.title}</h2>
                    <p className="text-white/90 text-sm">{belge.subtitle}</p>
                  </div>

                  {/* Body */}
                  <div className="p-6 bg-white">
                    <p className="text-gray-700 mb-4 font-medium">{belge.desc}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-semibold">{belge.number.split(':')[0]}:</span>
                        <span className="text-gray-900 font-bold">{belge.number.split(':')[1]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-semibold">{belge.date.split(':')[0]}:</span>
                        <span className="text-gray-900 font-bold">{belge.date.split(':')[1]}</span>
                      </div>
                      {belge.extra && (
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-semibold">{belge.extra.split(':')[0]}:</span>
                          <span className="text-green-600 font-bold">{belge.extra.split(':')[1]}</span>
                        </div>
                      )}
                    </div>

                    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
                      <CheckCircle className="w-4 h-4" />
                      <span>{t('active')}</span>
                    </div>

                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => setSelectedPDF(belge.pdf)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-bold transition flex items-center justify-center space-x-2"
                      >
                        <FileText className="w-5 h-5" />
                        <span>{t('view')}</span>
                      </motion.button>
                      <motion.a
                        href={belge.pdf}
                        download={belge.pdfName}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition"
                      >
                        <Download className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent text-black px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{t('back')}</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedPDF && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedPDF(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-bold text-gray-900">
                  {belgeler.find(b => b.pdf === selectedPDF)?.title}
                </h3>
                <button
                  onClick={() => setSelectedPDF(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={selectedPDF}
                  className="w-full h-full"
                  title="Belge"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}