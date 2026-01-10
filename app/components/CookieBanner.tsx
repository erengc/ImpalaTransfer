'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, CheckCircle } from 'lucide-react';

interface CookieBannerProps {
  language: 'tr' | 'en' | 'de' | 'ru' | 'ar';
}

const translations = {
  tr: {
    cookie_title: '🍪 Çerez Kullanımı',
    cookie_description: 'Web sitemizde size en iyi deneyimi sunabilmek için çerezler kullanıyoruz. Zorunlu çerezler sitenin çalışması için gereklidir. Analiz ve pazarlama çerezleri için izninize ihtiyacımız var. Detaylı bilgi için',
    cookie_privacy_link: 'Gizlilik Politikamızı',
    cookie_privacy_text: 'inceleyebilirsiniz.',
    cookie_accept_all: '✓ Tümünü Kabul Et',
    cookie_reject: '✗ Reddet',
    cookie_customize: '⚙️ Özelleştir',
    cookie_preferences: 'Çerez Tercihleri',
    cookie_necessary: 'Zorunlu Çerezler',
    cookie_necessary_desc: 'Web sitesinin temel işlevleri için gereklidir. Rezervasyon formu, güvenlik özellikleri vb.',
    cookie_always_active: 'Her Zaman Aktif',
    cookie_analytics: '📊 Analiz Çerezleri',
    cookie_analytics_desc: 'Ziyaretçi istatistikleri, sayfa görüntüleme sayıları gibi verileri toplamamıza yardımcı olur.',
    cookie_marketing: '🎯 Pazarlama Çerezleri',
    cookie_marketing_desc: 'Size özel teklifler ve kampanyalar sunmak için kullanılır.',
    cookie_optional: 'İsteğe Bağlı',
    cookie_save_preferences: '✓ Tercihleri Kaydet',
    cookie_cancel: 'İptal',
  },
  en: {
    cookie_title: '🍪 Cookie Usage',
    cookie_description: 'We use cookies to provide you with the best experience on our website. Necessary cookies are required for the site to function. We need your permission for analytics and marketing cookies. For detailed information',
    cookie_privacy_link: 'Privacy Policy',
    cookie_privacy_text: 'you can review our',
    cookie_accept_all: '✓ Accept All',
    cookie_reject: '✗ Reject',
    cookie_customize: '⚙️ Customize',
    cookie_preferences: 'Cookie Preferences',
    cookie_necessary: 'Necessary Cookies',
    cookie_necessary_desc: 'Required for basic website functions. Reservation form, security features, etc.',
    cookie_always_active: 'Always Active',
    cookie_analytics: '📊 Analytics Cookies',
    cookie_analytics_desc: 'Helps us collect data such as visitor statistics, page view counts.',
    cookie_marketing: '🎯 Marketing Cookies',
    cookie_marketing_desc: 'Used to offer you personalized offers and campaigns.',
    cookie_optional: 'Optional',
    cookie_save_preferences: '✓ Save Preferences',
    cookie_cancel: 'Cancel',
  },
  de: {
    cookie_title: '🍪 Cookie-Verwendung',
    cookie_description: 'Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten. Notwendige Cookies sind für die Funktion der Website erforderlich. Für Analyse- und Marketing-Cookies benötigen wir Ihre Erlaubnis. Für detaillierte Informationen',
    cookie_privacy_link: 'Datenschutzrichtlinie',
    cookie_privacy_text: 'können Sie unsere',
    cookie_accept_all: '✓ Alle Akzeptieren',
    cookie_reject: '✗ Ablehnen',
    cookie_customize: '⚙️ Anpassen',
    cookie_preferences: 'Cookie-Einstellungen',
    cookie_necessary: 'Notwendige Cookies',
    cookie_necessary_desc: 'Erforderlich für grundlegende Website-Funktionen. Reservierungsformular, Sicherheitsfunktionen usw.',
    cookie_always_active: 'Immer Aktiv',
    cookie_analytics: '📊 Analyse-Cookies',
    cookie_analytics_desc: 'Hilft uns, Daten wie Besucherstatistiken, Seitenaufrufe zu sammeln.',
    cookie_marketing: '🎯 Marketing-Cookies',
    cookie_marketing_desc: 'Wird verwendet, um Ihnen personalisierte Angebote und Kampagnen anzubieten.',
    cookie_optional: 'Optional',
    cookie_save_preferences: '✓ Einstellungen Speichern',
    cookie_cancel: 'Abbrechen',
  },
  ru: {
    cookie_title: '🍪 Использование файлов cookie',
    cookie_description: 'Мы используем файлы cookie, чтобы предоставить вам лучший опыт на нашем сайте. Необходимые файлы cookie требуются для работы сайта. Нам нужно ваше разрешение на аналитические и маркетинговые файлы cookie. Для подробной информации',
    cookie_privacy_link: 'Политику конфиденциальности',
    cookie_privacy_text: 'вы можете ознакомиться с нашей',
    cookie_accept_all: '✓ Принять все',
    cookie_reject: '✗ Отклонить',
    cookie_customize: '⚙️ Настроить',
    cookie_preferences: 'Настройки файлов cookie',
    cookie_necessary: 'Необходимые файлы cookie',
    cookie_necessary_desc: 'Требуются для основных функций сайта. Форма бронирования, функции безопасности и т.д.',
    cookie_always_active: 'Всегда активно',
    cookie_analytics: '📊 Аналитические файлы cookie',
    cookie_analytics_desc: 'Помогает нам собирать данные, такие как статистика посетителей, количество просмотров страниц.',
    cookie_marketing: '🎯 Маркетинговые файлы cookie',
    cookie_marketing_desc: 'Используется для предложения вам персонализированных предложений и кампаний.',
    cookie_optional: 'Необязательно',
    cookie_save_preferences: '✓ Сохранить настройки',
    cookie_cancel: 'Отмена',
  },
  ar: {
    cookie_title: '🍪 استخدام ملفات تعريف الارتباط',
    cookie_description: 'نستخدم ملفات تعريف الارتباط لنوفر لك أفضل تجربة على موقعنا. ملفات تعريف الارتباط الضرورية مطلوبة لعمل الموقع. نحتاج إلى إذنك لملفات تعريف الارتباط التحليلية والتسويقية. للحصول على معلومات مفصلة',
    cookie_privacy_link: 'سياسة الخصوصية',
    cookie_privacy_text: 'يمكنك مراجعة',
    cookie_accept_all: '✓ قبول الكل',
    cookie_reject: '✗ رفض',
    cookie_customize: '⚙️ تخصيص',
    cookie_preferences: 'تفضيلات ملفات تعريف الارتباط',
    cookie_necessary: 'ملفات تعريف الارتباط الضرورية',
    cookie_necessary_desc: 'مطلوبة للوظائف الأساسية للموقع. نموذج الحجز، ميزات الأمان، إلخ.',
    cookie_always_active: 'نشط دائمًا',
    cookie_analytics: '📊 ملفات تعريف الارتباط التحليلية',
    cookie_analytics_desc: 'يساعدنا في جمع البيانات مثل إحصاءات الزوار، عدد مشاهدات الصفحة.',
    cookie_marketing: '🎯 ملفات تعريف الارتباط التسويقية',
    cookie_marketing_desc: 'تستخدم لتقديم عروض وحملات مخصصة لك.',
    cookie_optional: 'اختياري',
    cookie_save_preferences: '✓ حفظ التفضيلات',
    cookie_cancel: 'إلغاء',
  }
};

export default function CookieBanner({ language }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  const t = (key: keyof typeof translations.tr) => translations[language][key];

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
              
              {!showSettings && (
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-accent rounded-2xl flex items-center justify-center shadow-lg">
                        <Cookie className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
                        {t('cookie_title')}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {t('cookie_description')}{' '}
                        <a href="/gizlilik-politikasi" className="text-primary-500 hover:text-primary-600 font-semibold underline">
                          {t('cookie_privacy_link')}
                        </a>{' '}
                        {t('cookie_privacy_text')}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full md:w-auto">
                      <motion.button
                        onClick={handleAcceptAll}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition text-sm md:text-base whitespace-nowrap"
                      >
                        {t('cookie_accept_all')}
                      </motion.button>
                      
                      <motion.button
                        onClick={handleRejectAll}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition text-sm md:text-base whitespace-nowrap shadow-lg"
                      >
                        {t('cookie_reject')}
                      </motion.button>
                      
                      <motion.button
                        onClick={() => setShowSettings(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-800 border-2 border-gray-700 text-white px-6 py-3 rounded-xl font-bold hover:border-primary-500 hover:bg-primary-500 transition text-sm md:text-base whitespace-nowrap shadow-lg"
                      >
                        {t('cookie_customize')}
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {showSettings && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-gray-200 p-6 md:p-8 bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary-500" />
                      {t('cookie_preferences')}
                    </h4>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-gray-600 transition"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Zorunlu Çerezler */}
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <h5 className="font-bold text-gray-900">{t('cookie_necessary')}</h5>
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                              {t('cookie_always_active')}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {t('cookie_necessary_desc')}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-12 h-7 bg-green-500 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                            <div className="w-5 h-5 bg-white rounded-full shadow"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Analiz Çerezleri */}
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="font-bold text-gray-900">{t('cookie_analytics')}</h5>
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-bold">
                              {t('cookie_optional')}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {t('cookie_analytics_desc')}
                          </p>
                        </div>
                        <button
                          onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                          className="flex-shrink-0"
                        >
                          <div className={`w-12 h-7 rounded-full flex items-center transition-all duration-300 px-1 ${
                            preferences.analytics 
                              ? 'bg-green-500 justify-end' 
                              : 'bg-gray-300 justify-start'
                          }`}>
                            <div className="w-5 h-5 bg-white rounded-full shadow"></div>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Pazarlama Çerezleri */}
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="font-bold text-gray-900">{t('cookie_marketing')}</h5>
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-bold">
                              {t('cookie_optional')}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {t('cookie_marketing_desc')}
                          </p>
                        </div>
                        <button
                          onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                          className="flex-shrink-0"
                        >
                          <div className={`w-12 h-7 rounded-full flex items-center transition-all duration-300 px-1 ${
                            preferences.marketing 
                              ? 'bg-green-500 justify-end' 
                              : 'bg-gray-300 justify-start'
                          }`}>
                            <div className="w-5 h-5 bg-white rounded-full shadow"></div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <motion.button
                      onClick={handleSavePreferences}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
                    >
                      {t('cookie_save_preferences')}
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setShowSettings(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 sm:flex-none bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-700 transition shadow-lg"
                    >
                      {t('cookie_cancel')}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}