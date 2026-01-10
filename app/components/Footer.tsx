'use client';

import { motion } from 'framer-motion';
import { Car, Plane, MapPin, Star, Users, Phone, Mail, Clock, FileText, Shield } from 'lucide-react';

interface FooterProps {
  language: 'tr' | 'en' | 'de' | 'ru' | 'ar';
}

const translations = {
  tr: {
    footer_description: 'İstanbul\'un en güvenilir ve konforlu transfer hizmeti. 2010\'dan beri yanınızdayız.',
    footer_quick_links: 'Hızlı Linkler',
    footer_home: 'Ana Sayfa',
    footer_fleet: 'Araç Filomuz',
    footer_tours: 'Turlarımız',
    footer_service_areas: 'Hizmet Bölgeleri',
    footer_reviews: 'Müşteri Yorumları',
    footer_faq: 'SSS',
    footer_services: 'Hizmetlerimiz',
    footer_airport_transfer: 'Havalimanı Transfer',
    footer_city_transfer: 'Şehir İçi Transfer',
    footer_intercity_transfer: 'Şehirler Arası Transfer',
    footer_vip_transfer: 'VIP Transfer',
    footer_group_transfer: 'Grup Transferi',
    footer_documents: 'Belgelerimiz',
    footer_d2_certificate: 'D2 Yetki Belgesi',
    footer_d2_desc: 'Ulaştırma Bakanlığı',
    footer_tursab_certificate: 'TURSAB Belgesi',
    footer_tursab_desc: 'A Grubu Seyahat Acentası',
    footer_view_document: 'Belgeyi Görüntüle',
    footer_contact: 'İletişim',
    footer_address: 'Atatürk Mahallesi',
    footer_city: 'İstanbul, Türkiye',
    footer_open: '7/24 Açık',
    footer_open_desc: 'Her gün hizmetinizdeyiz',
    footer_rights: 'Tüm hakları saklıdır.',
    footer_privacy: 'Gizlilik Politikası',
    footer_terms: 'Kullanım Koşulları',
    footer_kvkk: 'KVKK',
  },
  en: {
    footer_description: 'Istanbul\'s most reliable and comfortable transfer service. We\'ve been with you since 2010.',
    footer_quick_links: 'Quick Links',
    footer_home: 'Home',
    footer_fleet: 'Our Fleet',
    footer_tours: 'Our Tours',
    footer_service_areas: 'Service Areas',
    footer_reviews: 'Customer Reviews',
    footer_faq: 'FAQ',
    footer_services: 'Our Services',
    footer_airport_transfer: 'Airport Transfer',
    footer_city_transfer: 'City Transfer',
    footer_intercity_transfer: 'Intercity Transfer',
    footer_vip_transfer: 'VIP Transfer',
    footer_group_transfer: 'Group Transfer',
    footer_documents: 'Our Documents',
    footer_d2_certificate: 'D2 Authorization Certificate',
    footer_d2_desc: 'Ministry of Transport',
    footer_tursab_certificate: 'TURSAB Certificate',
    footer_tursab_desc: 'Group A Travel Agency',
    footer_view_document: 'View Document',
    footer_contact: 'Contact',
    footer_address: 'Ataturk District',
    footer_city: 'Istanbul, Turkey',
    footer_open: '24/7 Open',
    footer_open_desc: 'At your service every day',
    footer_rights: 'All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Use',
    footer_kvkk: 'GDPR',
  },
  de: {
    footer_description: 'Istanbuls zuverlässigster und komfortabelster Transferservice. Seit 2010 an Ihrer Seite.',
    footer_quick_links: 'Schnelllinks',
    footer_home: 'Startseite',
    footer_fleet: 'Unsere Flotte',
    footer_tours: 'Unsere Touren',
    footer_service_areas: 'Servicebereiche',
    footer_reviews: 'Kundenbewertungen',
    footer_faq: 'FAQ',
    footer_services: 'Unsere Dienstleistungen',
    footer_airport_transfer: 'Flughafentransfer',
    footer_city_transfer: 'Stadttransfer',
    footer_intercity_transfer: 'Intercity-Transfer',
    footer_vip_transfer: 'VIP-Transfer',
    footer_group_transfer: 'Gruppentransfer',
    footer_documents: 'Unsere Dokumente',
    footer_d2_certificate: 'D2 Zertifikat',
    footer_d2_desc: 'Verkehrsministerium',
    footer_tursab_certificate: 'TURSAB Zertifikat',
    footer_tursab_desc: 'Gruppe A Reisebüro',
    footer_view_document: 'Dokument ansehen',
    footer_contact: 'Kontakt',
    footer_address: 'Atatürk Bezirk',
    footer_city: 'Istanbul, Türkei',
    footer_open: '24/7 Geöffnet',
    footer_open_desc: 'Jeden Tag für Sie da',
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_privacy: 'Datenschutzrichtlinie',
    footer_terms: 'Nutzungsbedingungen',
    footer_kvkk: 'DSGVO',
  },
  ru: {
    footer_description: 'Самый надежный и комфортный трансфер в Стамбуле. С вами с 2010 года.',
    footer_quick_links: 'Быстрые ссылки',
    footer_home: 'Главная',
    footer_fleet: 'Наш автопарк',
    footer_tours: 'Наши туры',
    footer_service_areas: 'Зоны обслуживания',
    footer_reviews: 'Отзывы клиентов',
    footer_faq: 'Вопросы',
    footer_services: 'Наши услуги',
    footer_airport_transfer: 'Трансфер из аэропорта',
    footer_city_transfer: 'Городской трансфер',
    footer_intercity_transfer: 'Междугородний трансфер',
    footer_vip_transfer: 'VIP трансфер',
    footer_group_transfer: 'Групповой трансфер',
    footer_documents: 'Наши документы',
    footer_d2_certificate: 'Сертификат D2',
    footer_d2_desc: 'Министерство транспорта',
    footer_tursab_certificate: 'Сертификат TURSAB',
    footer_tursab_desc: 'Туристическое агентство группы A',
    footer_view_document: 'Просмотреть документ',
    footer_contact: 'Контакты',
    footer_address: 'Район Ататюрк',
    footer_city: 'Стамбул, Турция',
    footer_open: 'Круглосуточно',
    footer_open_desc: 'К вашим услугам каждый день',
    footer_rights: 'Все права защищены.',
    footer_privacy: 'Политика конфиденциальности',
    footer_terms: 'Условия использования',
    footer_kvkk: 'GDPR',
  },
  ar: {
    footer_description: 'خدمة النقل الأكثر موثوقية وراحة في إسطنبول. نحن معك منذ عام 2010.',
    footer_quick_links: 'روابط سريعة',
    footer_home: 'الرئيسية',
    footer_fleet: 'أسطولنا',
    footer_tours: 'جولاتنا',
    footer_service_areas: 'مناطق الخدمة',
    footer_reviews: 'آراء العملاء',
    footer_faq: 'الأسئلة الشائعة',
    footer_services: 'خدماتنا',
    footer_airport_transfer: 'نقل المطار',
    footer_city_transfer: 'النقل الحضري',
    footer_intercity_transfer: 'النقل بين المدن',
    footer_vip_transfer: 'نقل VIP',
    footer_group_transfer: 'نقل جماعي',
    footer_documents: 'وثائقنا',
    footer_d2_certificate: 'شهادة D2',
    footer_d2_desc: 'وزارة النقل',
    footer_tursab_certificate: 'شهادة TURSAB',
    footer_tursab_desc: 'وكالة سفر من المجموعة A',
    footer_view_document: 'عرض الوثيقة',
    footer_contact: 'اتصل بنا',
    footer_address: 'حي أتاتورك',
    footer_city: 'إسطنبول، تركيا',
    footer_open: 'مفتوح 24/7',
    footer_open_desc: 'في خدمتك كل يوم',
    footer_rights: 'جميع الحقوق محفوظة.',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'شروط الاستخدام',
    footer_kvkk: 'GDPR',
  }
};

export default function Footer({ language }: FooterProps) {
  const t = (key: keyof typeof translations.tr) => translations[language][key];

  return (
    <footer className="bg-black text-white py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(212, 175, 55, 0.3) 35px,
            rgba(212, 175, 55, 0.3) 70px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo & Sosyal Medya */}
          <div>
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <img 
                  src="/icon.png" 
                  alt="İstanbul Transfer Logo" 
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </motion.div>
              <h3 className="text-lg md:text-xl font-black">Impala Transfer</h3>
            </div>
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
              {t('footer_description')}
            </p>
            <div className="flex space-x-3">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }} 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }} 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }} 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-base md:text-lg font-black mb-3 md:mb-4 text-primary-500">{t('footer_quick_links')}</h4>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li>
                <a href="/" className="text-gray-400 hover:text-primary-500 transition flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition">→</span> 
                  {t('footer_home')}
                </a>
              </li>
              <li>
                <a 
                  href="#vehicles" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#vehicles')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-primary-500 transition flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition">→</span> 
                  {t('footer_fleet')}
                </a>
              </li>
              <li>
                <a 
                  href="/turlar"
                  className="text-gray-400 hover:text-primary-500 transition flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition">→</span> 
                  {t('footer_tours')}
                </a>
              </li>
              <li>
                <a 
                  href="#service-areas" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#service-areas')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-primary-500 transition flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition">→</span> 
                  {t('footer_service_areas')}
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-primary-500 transition flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition">→</span> 
                  {t('footer_reviews')}
                </a>
              </li>
              <li>
                <a href="/sss" className="text-gray-400 hover:text-primary-500 transition flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition">→</span> 
                  {t('footer_faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h4 className="text-base md:text-lg font-black mb-3 md:mb-4 text-primary-500">{t('footer_services')}</h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm md:text-base">
              <li className="flex items-center">
                <Plane className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-500" />
                {t('footer_airport_transfer')}
              </li>
              <li className="flex items-center">
                <Car className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-500" />
                {t('footer_city_transfer')}
              </li>
              <li className="flex items-center">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-500" />
                {t('footer_intercity_transfer')}
              </li>
              <li className="flex items-center">
                <Star className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-500" />
                {t('footer_vip_transfer')}
              </li>
              <li className="flex items-center">
                <Users className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-500" />
                {t('footer_group_transfer')}
              </li>
            </ul>
          </div>

          {/* YENİ: Belgelerimiz */}
          <div>
            <h4 className="text-base md:text-lg font-black mb-3 md:mb-4 text-primary-500 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              {t('footer_documents')}
            </h4>
            <div className="space-y-3">
              {/* D2 Yetki Belgesi */}
              <motion.a
                href="/belgeler"
                whileHover={{ x: 5 }}
                className="block bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:border-primary-500 transition group"
              >
                <div className="flex items-start space-x-2">
                  <div className="bg-primary-500/10 p-2 rounded">
                    <FileText className="w-4 h-4 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm mb-0.5 group-hover:text-primary-500 transition">
                      {t('footer_d2_certificate')}
                    </p>
                    <p className="text-gray-500 text-xs">{t('footer_d2_desc')}</p>
                  </div>
                </div>
              </motion.a>

              {/* TURSAB Belgesi */}
              <motion.a
                href="/belgeler"
                whileHover={{ x: 5 }}
                className="block bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:border-primary-500 transition group"
              >
                <div className="flex items-start space-x-2">
                  <div className="bg-primary-500/10 p-2 rounded">
                    <FileText className="w-4 h-4 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm mb-0.5 group-hover:text-primary-500 transition">
                      {t('footer_tursab_certificate')}
                    </p>
                    <p className="text-gray-500 text-xs">{t('footer_tursab_desc')}</p>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-base md:text-lg font-black mb-3 md:mb-4 text-primary-500">{t('footer_contact')}</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li className="flex items-start space-x-2 md:space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+905016206952" className="hover:text-primary-500 transition">
                    0501 620 69 52
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@istanbultransfer.com" className="hover:text-primary-500 transition">
                    info@istanbultransfer.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p>{t('footer_address')}</p>
                  <p>{t('footer_city')}</p>
                </div>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary-500">{t('footer_open')}</p>
                  <p className="text-xs md:text-sm">{t('footer_open_desc')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              &copy; 2024 Istanbul Transfer Impala. {t('footer_rights')}
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
              <a href="/gizlilik-politikasi" className="text-gray-500 hover:text-primary-500 transition">
                {t('footer_privacy')}
              </a>
              <a href="/kullanim-kosullari" className="text-gray-500 hover:text-primary-500 transition">
                {t('footer_terms')}
              </a>
              <a href="/kvkk" className="text-gray-500 hover:text-primary-500 transition">
                {t('footer_kvkk')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}