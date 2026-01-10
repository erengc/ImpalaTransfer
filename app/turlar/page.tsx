'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Clock, Users, Star, Heart, Calendar, CheckCircle, ArrowRight, Mail, Phone, Plane } from 'lucide-react';
import Link from 'next/link';

export default function TurlarPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [language, setLanguage] = useState<'tr' | 'en' | 'de' | 'ru' | 'ar'>('tr');
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage as 'tr' | 'en' | 'de' | 'ru' | 'ar');
    }
  }, []);

   const changeLanguage = (newLang: 'tr' | 'en' | 'de' | 'ru' | 'ar') => {
    setLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

  const languages = {
    tr: { name: 'Türkçe', flag: '🇹🇷', code: 'TR' },
    en: { name: 'English', flag: '🇬🇧', code: 'EN' },
    de: { name: 'Deutsch', flag: '🇩🇪', code: 'DE' },
    ru: { name: 'Русский', flag: '🇷🇺', code: 'RU' },
    ar: { name: 'العربية', flag: '🇸🇦', code: 'AR' }
  };

  const translations = {
    tr: {
      nav_back: '← Ana Sayfa',
      hero_title_1: 'Türkiye\'yi',
      hero_title_2: 'Keşfedin',
      hero_subtitle: 'Profesyonel rehberler ve VIP transferlerle unutulmaz bir deneyim!',
      feature_guide: 'Profesyonel Rehber',
      feature_transfer: 'VIP Transfer',
      feature_tickets: 'Tüm Giriş Ücretleri',
      feature_private: 'Özel Turlar',
      stat_tours: 'Farklı Tur',
      stat_customers: 'Mutlu Müşteri',
      stat_rating: 'Puan',
      scroll_text: 'Aşağı Kaydır',
      category_all: 'Tümü',
      category_city: 'Şehir',
      category_bosphorus: 'Boğaz',
      category_nature: 'Doğa',
      category_culture: 'Kültür',
      tour_duration: 'Süre',
      tour_group: 'Grup',
      tour_highlights: 'Turda neler var:',
      tour_per_person: 'Kişi başı',
      tour_details: 'Detaylar',
      cta_title: 'Özel Tur Talep Edin',
      cta_subtitle: 'Kendi özel turunuzu oluşturmak ister misiniz?',
      cta_button: 'WhatsApp ile İletişime Geç',
          tour_1_name: '8 Saatlik İstanbul Turu',
    tour_1_desc: 'İstanbul\'un en önemli noktalarını 8 saatlik kapsamlı turla keşfedin. Tarihi yarımada, Boğaz ve modern İstanbul.',
    tour_1_highlight_1: 'Sultanahmet',
    tour_1_highlight_2: 'Ayasofya',
    tour_1_highlight_3: 'Topkapı Sarayı',
    tour_1_highlight_4: 'Boğaz Turu',
    tour_1_included_1: 'Profesyonel Rehber',
    tour_1_included_2: 'VIP Transfer',
    tour_1_included_3: 'Giriş Ücretleri',
    tour_1_included_4: 'Öğle Yemeği',
    
    tour_2_name: '12 Saatlik İstanbul Turu',
    tour_2_desc: 'İstanbul\'u gündüz ve gece keşfedin! Tam gün tur + gece İstanbul\'un ışıltılı atmosferi.',
    tour_2_highlight_1: 'Tarihi Yarımada',
    tour_2_highlight_2: 'Boğaz Gezisi',
    tour_2_highlight_3: 'Gece Turu',
    tour_2_highlight_4: 'Galata Kulesi',
    tour_2_included_1: 'Uzman Rehber',
    tour_2_included_2: 'Lüks Transfer',
    tour_2_included_3: 'Tüm Giriş Biletleri',
    tour_2_included_4: 'Akşam Yemeği',
    
    tour_3_name: 'Kapadokya Turu',
    tour_3_desc: 'Kapadokya\'nın büyülü vadilerini, peri bacalarını ve yer altı şehirlerini keşfedin.',
    tour_3_highlight_1: 'Balon Turu',
    tour_3_highlight_2: 'Göreme Açık Hava Müzesi',
    tour_3_highlight_3: 'Yeraltı Şehri',
    tour_3_highlight_4: 'Avanos',
    tour_3_included_1: 'Uçak Bileti',
    tour_3_included_2: 'Otel Konaklama',
    tour_3_included_3: 'Rehber',
    tour_3_included_4: 'Tüm Transferler',
    tour_3_included_5: 'Kahvaltı & Akşam Yemeği',
    
    tour_4_name: 'Cruise Dinner + Boğaz Turu',
    tour_4_desc: 'Boğaz\'ın muhteşem manzarası eşliğinde lezzetli akşam yemeği ve canlı müzik.',
    tour_4_highlight_1: 'Özel Yat',
    tour_4_highlight_2: 'Açık Büfe Yemek',
    tour_4_highlight_3: 'Canlı Müzik',
    tour_4_highlight_4: 'İçki Servisi',
    tour_4_included_1: 'VIP Transfer',
    tour_4_included_2: 'Yat Kiralama',
    tour_4_included_3: 'Açık Büfe',
    tour_4_included_4: 'İçecekler',
    tour_4_included_5: 'Eğlence',
    
    tour_5_name: 'Anadolu Tur & Transfer',
    tour_5_desc: 'Anadolu\'nun tarihi ve doğal güzelliklerini keşfedin. İhlara Vadisi, Konya, Pamukkale...',
    tour_5_highlight_1: 'İhlara Vadisi',
    tour_5_highlight_2: 'Konya Mevlana',
    tour_5_highlight_3: 'Pamukkale',
    tour_5_highlight_4: 'Antik Kentler',
    tour_5_included_1: 'Lüks Otobüs',
    tour_5_included_2: 'Otel Konaklaması',
    tour_5_included_3: 'Rehber',
    tour_5_included_4: 'Kahvaltı & Akşam Yemekleri',
    tour_5_included_5: 'Giriş Ücretleri',
    
    tour_6_name: 'Karadeniz Tur & Transfer',
    tour_6_desc: 'Karadeniz\'in eşsiz doğası, Sümela Manastırı, Uzungöl ve yaylalar...',
    tour_6_highlight_1: 'Sümela Manastırı',
    tour_6_highlight_2: 'Uzungöl',
    tour_6_highlight_3: 'Ayder Yaylası',
    tour_6_highlight_4: 'Rize Çay Bahçeleri',
    tour_6_included_1: 'VIP Transfer',
    tour_6_included_2: 'Boutique Oteller',
    tour_6_included_3: 'Profesyonel Rehber',
    tour_6_included_4: 'Tüm Öğünler',
    tour_6_included_5: 'Aktiviteler',
    
    tour_7_name: 'Ege Tur & Transfer',
    tour_7_desc: 'Ege\'nin antik kentleri, termal havuzları ve güzel sahilleri ile unutulmaz bir yolculuk.',
    tour_7_highlight_1: 'Efes Antik Kenti',
    tour_7_highlight_2: 'Pamukkale',
    tour_7_highlight_3: 'Çeşme',
    tour_7_highlight_4: 'Alaçatı',
    tour_7_included_1: 'Konforlu Transfer',
    tour_7_included_2: 'Otel Konaklama',
    tour_7_included_3: 'Rehber',
    tour_7_included_4: 'Kahvaltılar',
    tour_7_included_5: 'Antik Kent Biletleri',
    footer_description: 'İstanbul\'un en güvenilir ve konforlu transfer hizmeti. 2010\'dan beri yanınızdayız.',
    footer_quick_links: 'Hızlı Linkler',
    footer_home: 'Ana Sayfa',
    footer_fleet: 'Araç Filomuz',
    footer_tours: 'Turlarımız',
    footer_gallery: 'Galeri',
    footer_reviews: 'Müşteri Yorumları',
    footer_faq: 'SSS',
    footer_services: 'Hizmetlerimiz',
    footer_airport: 'Havalimanı Transfer',
    footer_city: 'Şehir İçi Transfer',
    footer_intercity: 'Şehirler Arası Transfer',
    footer_vip: 'VIP Transfer',
    footer_group: 'Grup Transferi',
    footer_contact: 'İletişim',
    footer_address: 'Atatürk Mahallesi',
    footer_location: 'İstanbul, Türkiye',
    footer_open: '7/24 Açık',
    footer_open_desc: 'Her gün hizmetinizdeyiz',
    footer_rights: 'Tüm hakları saklıdır.',
    footer_privacy: 'Gizlilik Politikası',
    footer_terms: 'Kullanım Koşulları',
    footer_kvkk: 'KVKK',
    },
    en: {
      nav_back: '← Home',
      hero_title_1: 'Discover',
      hero_title_2: 'Turkey',
      hero_subtitle: 'An unforgettable experience with professional guides and VIP transfers!',
      feature_guide: 'Professional Guide',
      feature_transfer: 'VIP Transfer',
      feature_tickets: 'All Entrance Fees',
      feature_private: 'Private Tours',
      stat_tours: 'Different Tours',
      stat_customers: 'Happy Customers',
      stat_rating: 'Rating',
      scroll_text: 'Scroll Down',
      category_all: 'All',
      category_city: 'City',
      category_bosphorus: 'Bosphorus',
      category_nature: 'Nature',
      category_culture: 'Culture',
      tour_duration: 'Duration',
      tour_group: 'Group',
      tour_highlights: 'What\'s included:',
      tour_per_person: 'Per person',
      tour_details: 'Details',
      cta_title: 'Request Custom Tour',
      cta_subtitle: 'Would you like to create your own custom tour?',
      cta_button: 'Contact via WhatsApp',
      tour_1_name: '8 Hour Istanbul Tour',
    tour_1_desc: 'Discover Istanbul\'s most important landmarks with a comprehensive 8-hour tour. Historic peninsula, Bosphorus and modern Istanbul.',
    tour_1_highlight_1: 'Sultanahmet',
    tour_1_highlight_2: 'Hagia Sophia',
    tour_1_highlight_3: 'Topkapi Palace',
    tour_1_highlight_4: 'Bosphorus Tour',
    tour_1_included_1: 'Professional Guide',
    tour_1_included_2: 'VIP Transfer',
    tour_1_included_3: 'Entrance Fees',
    tour_1_included_4: 'Lunch',
    
    tour_2_name: '12 Hour Istanbul Tour',
    tour_2_desc: 'Discover Istanbul day and night! Full day tour + Istanbul\'s sparkling nighttime atmosphere.',
    tour_2_highlight_1: 'Historic Peninsula',
    tour_2_highlight_2: 'Bosphorus Cruise',
    tour_2_highlight_3: 'Night Tour',
    tour_2_highlight_4: 'Galata Tower',
    tour_2_included_1: 'Expert Guide',
    tour_2_included_2: 'Luxury Transfer',
    tour_2_included_3: 'All Entrance Tickets',
    tour_2_included_4: 'Dinner',
    
    tour_3_name: 'Cappadocia Tour',
    tour_3_desc: 'Discover Cappadocia\'s magical valleys, fairy chimneys and underground cities.',
    tour_3_highlight_1: 'Balloon Tour',
    tour_3_highlight_2: 'Goreme Open Air Museum',
    tour_3_highlight_3: 'Underground City',
    tour_3_highlight_4: 'Avanos',
    tour_3_included_1: 'Flight Ticket',
    tour_3_included_2: 'Hotel Accommodation',
    tour_3_included_3: 'Guide',
    tour_3_included_4: 'All Transfers',
    tour_3_included_5: 'Breakfast & Dinner',
    
    tour_4_name: 'Cruise Dinner + Bosphorus Tour',
    tour_4_desc: 'Delicious dinner with magnificent Bosphorus views and live music.',
    tour_4_highlight_1: 'Private Yacht',
    tour_4_highlight_2: 'Open Buffet',
    tour_4_highlight_3: 'Live Music',
    tour_4_highlight_4: 'Beverage Service',
    tour_4_included_1: 'VIP Transfer',
    tour_4_included_2: 'Yacht Rental',
    tour_4_included_3: 'Open Buffet',
    tour_4_included_4: 'Beverages',
    tour_4_included_5: 'Entertainment',
    
    tour_5_name: 'Anatolia Tour & Transfer',
    tour_5_desc: 'Discover Anatolia\'s historical and natural beauties. Ihlara Valley, Konya, Pamukkale...',
    tour_5_highlight_1: 'Ihlara Valley',
    tour_5_highlight_2: 'Konya Mevlana',
    tour_5_highlight_3: 'Pamukkale',
    tour_5_highlight_4: 'Ancient Cities',
    tour_5_included_1: 'Luxury Bus',
    tour_5_included_2: 'Hotel Accommodation',
    tour_5_included_3: 'Guide',
    tour_5_included_4: 'Breakfast & Dinners',
    tour_5_included_5: 'Entrance Fees',
    
    tour_6_name: 'Black Sea Tour & Transfer',
    tour_6_desc: 'Black Sea\'s unique nature, Sumela Monastery, Uzungol and highlands...',
    tour_6_highlight_1: 'Sumela Monastery',
    tour_6_highlight_2: 'Uzungol',
    tour_6_highlight_3: 'Ayder Plateau',
    tour_6_highlight_4: 'Rize Tea Gardens',
    tour_6_included_1: 'VIP Transfer',
    tour_6_included_2: 'Boutique Hotels',
    tour_6_included_3: 'Professional Guide',
    tour_6_included_4: 'All Meals',
    tour_6_included_5: 'Activities',
    
    tour_7_name: 'Aegean Tour & Transfer',
    tour_7_desc: 'An unforgettable journey with Aegean\'s ancient cities, thermal pools and beautiful coasts.',
    tour_7_highlight_1: 'Ephesus Ancient City',
    tour_7_highlight_2: 'Pamukkale',
    tour_7_highlight_3: 'Cesme',
    tour_7_highlight_4: 'Alacati',
    tour_7_included_1: 'Comfortable Transfer',
    tour_7_included_2: 'Hotel Accommodation',
    tour_7_included_3: 'Guide',
    tour_7_included_4: 'Breakfasts',
    tour_7_included_5: 'Ancient City Tickets',
    footer_description: 'Istanbul\'s most reliable and comfortable transfer service. We\'ve been with you since 2010.',
    footer_quick_links: 'Quick Links',
    footer_home: 'Home',
    footer_fleet: 'Our Fleet',
    footer_tours: 'Our Tours',
    footer_gallery: 'Gallery',
    footer_reviews: 'Customer Reviews',
    footer_faq: 'FAQ',
    footer_services: 'Our Services',
    footer_airport: 'Airport Transfer',
    footer_city: 'City Transfer',
    footer_intercity: 'Intercity Transfer',
    footer_vip: 'VIP Transfer',
    footer_group: 'Group Transfer',
    footer_contact: 'Contact',
    footer_address: 'Ataturk District',
    footer_location: 'Istanbul, Turkey',
    footer_open: '24/7 Open',
    footer_open_desc: 'At your service every day',
    footer_rights: 'All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Use',
    footer_kvkk: 'GDPR',
    },
    de: {
      nav_back: '← Startseite',
    hero_title_1: 'Entdecken Sie',
    hero_title_2: 'die Türkei',
    hero_subtitle: 'Ein unvergessliches Erlebnis mit professionellen Guides und VIP-Transfers!',
    feature_guide: 'Professioneller Guide',
    feature_transfer: 'VIP-Transfer',
    feature_tickets: 'Alle Eintrittsgelder',
    feature_private: 'Private Touren',
    stat_tours: 'Verschiedene Touren',
    stat_customers: 'Zufriedene Kunden',
    stat_rating: 'Bewertung',
    scroll_text: 'Nach unten scrollen',
    category_all: 'Alle',
    category_city: 'Stadt',
    category_bosphorus: 'Bosporus',
    category_nature: 'Natur',
    category_culture: 'Kultur',
    tour_duration: 'Dauer',
    tour_group: 'Gruppe',
    tour_highlights: 'Was ist enthalten:',
    tour_per_person: 'Pro Person',
    tour_details: 'Details',
    cta_title: 'Individuelle Tour Anfragen',
    cta_subtitle: 'Möchten Sie Ihre eigene individuelle Tour erstellen?',
    cta_button: 'Kontakt über WhatsApp',
    
    // Touren
    tour_1_name: '8-Stunden Istanbul Tour',
    tour_1_desc: 'Entdecken Sie Istanbuls wichtigste Sehenswürdigkeiten mit einer umfassenden 8-Stunden-Tour. Historische Halbinsel, Bosporus und modernes Istanbul.',
    tour_1_highlight_1: 'Sultanahmet',
    tour_1_highlight_2: 'Hagia Sophia',
    tour_1_highlight_3: 'Topkapi-Palast',
    tour_1_highlight_4: 'Bosporus-Tour',
    tour_1_included_1: 'Professioneller Guide',
    tour_1_included_2: 'VIP-Transfer',
    tour_1_included_3: 'Eintrittsgelder',
    tour_1_included_4: 'Mittagessen',
    
    tour_2_name: '12-Stunden Istanbul Tour',
    tour_2_desc: 'Entdecken Sie Istanbul bei Tag und Nacht! Ganztägige Tour + Istanbuls funkelnde Nachtkulisse.',
    tour_2_highlight_1: 'Historische Halbinsel',
    tour_2_highlight_2: 'Bosporus-Kreuzfahrt',
    tour_2_highlight_3: 'Nachttour',
    tour_2_highlight_4: 'Galata-Turm',
    tour_2_included_1: 'Experten-Guide',
    tour_2_included_2: 'Luxus-Transfer',
    tour_2_included_3: 'Alle Eintrittskarten',
    tour_2_included_4: 'Abendessen',
    
    tour_3_name: 'Kappadokien Tour',
    tour_3_desc: 'Entdecken Sie Kappadokiens magische Täler, Feenkamine und unterirdische Städte.',
    tour_3_highlight_1: 'Ballonfahrt',
    tour_3_highlight_2: 'Göreme Freilichtmuseum',
    tour_3_highlight_3: 'Unterirdische Stadt',
    tour_3_highlight_4: 'Avanos',
    tour_3_included_1: 'Flugticket',
    tour_3_included_2: 'Hotel-Unterkunft',
    tour_3_included_3: 'Guide',
    tour_3_included_4: 'Alle Transfers',
    tour_3_included_5: 'Frühstück & Abendessen',
    
    tour_4_name: 'Kreuzfahrt Dinner + Bosporus Tour',
    tour_4_desc: 'Köstliches Abendessen mit herrlichem Bosporus-Blick und Live-Musik.',
    tour_4_highlight_1: 'Private Yacht',
    tour_4_highlight_2: 'Offenes Buffet',
    tour_4_highlight_3: 'Live-Musik',
    tour_4_highlight_4: 'Getränke-Service',
    tour_4_included_1: 'VIP-Transfer',
    tour_4_included_2: 'Yacht-Miete',
    tour_4_included_3: 'Offenes Buffet',
    tour_4_included_4: 'Getränke',
    tour_4_included_5: 'Unterhaltung',
    
    tour_5_name: 'Anatolien Tour & Transfer',
    tour_5_desc: 'Entdecken Sie Anatoliens historische und natürliche Schönheiten. Ihlara-Tal, Konya, Pamukkale...',
    tour_5_highlight_1: 'Ihlara-Tal',
    tour_5_highlight_2: 'Konya Mevlana',
    tour_5_highlight_3: 'Pamukkale',
    tour_5_highlight_4: 'Antike Städte',
    tour_5_included_1: 'Luxusbus',
    tour_5_included_2: 'Hotel-Unterkunft',
    tour_5_included_3: 'Guide',
    tour_5_included_4: 'Frühstück & Abendessen',
    tour_5_included_5: 'Eintrittsgelder',
    
    tour_6_name: 'Schwarzes Meer Tour & Transfer',
    tour_6_desc: 'Einzigartige Natur des Schwarzen Meeres, Sumela-Kloster, Uzungöl und Hochebenen...',
    tour_6_highlight_1: 'Sumela-Kloster',
    tour_6_highlight_2: 'Uzungöl',
    tour_6_highlight_3: 'Ayder Hochebene',
    tour_6_highlight_4: 'Rize Teegärten',
    tour_6_included_1: 'VIP-Transfer',
    tour_6_included_2: 'Boutique-Hotels',
    tour_6_included_3: 'Professioneller Guide',
    tour_6_included_4: 'Alle Mahlzeiten',
    tour_6_included_5: 'Aktivitäten',
    
    tour_7_name: 'Ägäis Tour & Transfer',
    tour_7_desc: 'Eine unvergessliche Reise mit antiken Städten, Thermalbädern und schönen Küsten der Ägäis.',
    tour_7_highlight_1: 'Antike Stadt Ephesus',
    tour_7_highlight_2: 'Pamukkale',
    tour_7_highlight_3: 'Çeşme',
    tour_7_highlight_4: 'Alaçatı',
    tour_7_included_1: 'Komfortabler Transfer',
    tour_7_included_2: 'Hotel-Unterkunft',
    tour_7_included_3: 'Guide',
    tour_7_included_4: 'Frühstück',
    tour_7_included_5: 'Tickets für antike Städte',
    footer_description: 'Istanbuls zuverlässigster und komfortabelster Transferservice. Seit 2010 an Ihrer Seite.',
    footer_quick_links: 'Schnelllinks',
    footer_home: 'Startseite',
    footer_fleet: 'Unsere Flotte',
    footer_tours: 'Unsere Touren',
    footer_gallery: 'Galerie',
    footer_reviews: 'Kundenbewertungen',
    footer_faq: 'FAQ',
    footer_services: 'Unsere Dienstleistungen',
    footer_airport: 'Flughafentransfer',
    footer_city: 'Stadttransfer',
    footer_intercity: 'Intercity-Transfer',
    footer_vip: 'VIP-Transfer',
    footer_group: 'Gruppentransfer',
    footer_contact: 'Kontakt',
    footer_address: 'Atatürk Bezirk',
    footer_location: 'Istanbul, Türkei',
    footer_open: '24/7 Geöffnet',
    footer_open_desc: 'Jeden Tag für Sie da',
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_privacy: 'Datenschutzrichtlinie',
    footer_terms: 'Nutzungsbedingungen',
    footer_kvkk: 'DSGVO',
      
    },
    ru: {
      nav_back: '← Главная',
    hero_title_1: 'Откройте для себя',
    hero_title_2: 'Турцию',
    hero_subtitle: 'Незабываемые впечатления с профессиональными гидами и VIP-трансферами!',
    feature_guide: 'Профессиональный гид',
    feature_transfer: 'VIP трансфер',
    feature_tickets: 'Все входные билеты',
    feature_private: 'Частные туры',
    stat_tours: 'Различных туров',
    stat_customers: 'Довольных клиентов',
    stat_rating: 'Рейтинг',
    scroll_text: 'Прокрутите вниз',
    category_all: 'Все',
    category_city: 'Город',
    category_bosphorus: 'Босфор',
    category_nature: 'Природа',
    category_culture: 'Культура',
    tour_duration: 'Продолжительность',
    tour_group: 'Группа',
    tour_highlights: 'Что включено:',
    tour_per_person: 'На человека',
    tour_details: 'Подробнее',
    cta_title: 'Запросить индивидуальный тур',
    cta_subtitle: 'Хотите создать свой собственный тур?',
    cta_button: 'Связаться через WhatsApp',
    
    // Туры
    tour_1_name: '8-часовой тур по Стамбулу',
    tour_1_desc: 'Откройте для себя самые важные достопримечательности Стамбула с 8-часовым туром. Исторический полуостров, Босфор и современный Стамбул.',
    tour_1_highlight_1: 'Султанахмет',
    tour_1_highlight_2: 'Святая София',
    tour_1_highlight_3: 'Дворец Топкапы',
    tour_1_highlight_4: 'Тур по Босфору',
    tour_1_included_1: 'Профессиональный гид',
    tour_1_included_2: 'VIP трансфер',
    tour_1_included_3: 'Входные билеты',
    tour_1_included_4: 'Обед',
    
    tour_2_name: '12-часовой тур по Стамбулу',
    tour_2_desc: 'Откройте Стамбул днем и ночью! Полнодневный тур + ночная атмосфера Стамбула.',
    tour_2_highlight_1: 'Исторический полуостров',
    tour_2_highlight_2: 'Круиз по Босфору',
    tour_2_highlight_3: 'Ночной тур',
    tour_2_highlight_4: 'Башня Галата',
    tour_2_included_1: 'Экспертный гид',
    tour_2_included_2: 'Роскошный трансфер',
    tour_2_included_3: 'Все входные билеты',
    tour_2_included_4: 'Ужин',
    
    tour_3_name: 'Тур в Каппадокию',
    tour_3_desc: 'Откройте волшебные долины, каменные столбы и подземные города Каппадокии.',
    tour_3_highlight_1: 'Полет на воздушном шаре',
    tour_3_highlight_2: 'Музей Гёреме',
    tour_3_highlight_3: 'Подземный город',
    tour_3_highlight_4: 'Аванос',
    tour_3_included_1: 'Авиабилет',
    tour_3_included_2: 'Проживание в отеле',
    tour_3_included_3: 'Гид',
    tour_3_included_4: 'Все трансферы',
    tour_3_included_5: 'Завтрак и ужин',
    
    tour_4_name: 'Круизный ужин + тур по Босфору',
    tour_4_desc: 'Вкусный ужин с великолепным видом на Босфор и живая музыка.',
    tour_4_highlight_1: 'Частная яхта',
    tour_4_highlight_2: 'Открытый буфет',
    tour_4_highlight_3: 'Живая музыка',
    tour_4_highlight_4: 'Напитки',
    tour_4_included_1: 'VIP трансфер',
    tour_4_included_2: 'Аренда яхты',
    tour_4_included_3: 'Открытый буфет',
    tour_4_included_4: 'Напитки',
    tour_4_included_5: 'Развлечения',
    
    tour_5_name: 'Тур по Анатолии и трансфер',
    tour_5_desc: 'Откройте исторические и природные красоты Анатолии. Долина Ихлара, Конья, Памуккале...',
    tour_5_highlight_1: 'Долина Ихлара',
    tour_5_highlight_2: 'Мавзолей Мевланы в Конье',
    tour_5_highlight_3: 'Памуккале',
    tour_5_highlight_4: 'Древние города',
    tour_5_included_1: 'Роскошный автобус',
    tour_5_included_2: 'Проживание в отеле',
    tour_5_included_3: 'Гид',
    tour_5_included_4: 'Завтрак и ужин',
    tour_5_included_5: 'Входные билеты',
    
    tour_6_name: 'Тур по Черному морю и трансфер',
    tour_6_desc: 'Уникальная природа Черного моря, монастырь Сумела, Узунгёль и высокогорья...',
    tour_6_highlight_1: 'Монастырь Сумела',
    tour_6_highlight_2: 'Узунгёль',
    tour_6_highlight_3: 'Плато Айдер',
    tour_6_highlight_4: 'Чайные сады Ризе',
    tour_6_included_1: 'VIP трансфер',
    tour_6_included_2: 'Бутик-отели',
    tour_6_included_3: 'Профессиональный гид',
    tour_6_included_4: 'Все блюда',
    tour_6_included_5: 'Мероприятия',
    
    tour_7_name: 'Тур по Эгейскому региону и трансфер',
    tour_7_desc: 'Незабываемое путешествие с древними городами, термальными бассейнами и красивыми побережьями Эгейского моря.',
    tour_7_highlight_1: 'Древний город Эфес',
    tour_7_highlight_2: 'Памуккале',
    tour_7_highlight_3: 'Чешме',
    tour_7_highlight_4: 'Алачаты',
    tour_7_included_1: 'Комфортный трансфер',
    tour_7_included_2: 'Проживание в отеле',
    tour_7_included_3: 'Гид',
    tour_7_included_4: 'Завтраки',
    tour_7_included_5: 'Билеты в древние города',
    footer_description: 'Самый надежный и комфортный трансфер в Стамбуле. С вами с 2010 года.',
    footer_quick_links: 'Быстрые ссылки',
    footer_home: 'Главная',
    footer_fleet: 'Наш автопарк',
    footer_tours: 'Наши туры',
    footer_gallery: 'Галерея',
    footer_reviews: 'Отзывы клиентов',
    footer_faq: 'Вопросы',
    footer_services: 'Наши услуги',
    footer_airport: 'Трансфер из аэропорта',
    footer_city: 'Городской трансфер',
    footer_intercity: 'Междугородний трансфер',
    footer_vip: 'VIP трансфер',
    footer_group: 'Групповой трансфер',
    footer_contact: 'Контакты',
    footer_address: 'Район Ататюрк',
    footer_location: 'Стамбул, Турция',
    footer_open: 'Круглосуточно',
    footer_open_desc: 'К вашим услугам каждый день',
    footer_rights: 'Все права защищены.',
    footer_privacy: 'Политика конфиденциальности',
    footer_terms: 'Условия использования',
    footer_kvkk: 'GDPR',
    },
    ar: {
      nav_back: '← الرئيسية',
    hero_title_1: 'اكتشف',
    hero_title_2: 'تركيا',
    hero_subtitle: 'تجربة لا تُنسى مع مرشدين محترفين ونقل VIP!',
    feature_guide: 'مرشد محترف',
    feature_transfer: 'نقل VIP',
    feature_tickets: 'جميع رسوم الدخول',
    feature_private: 'جولات خاصة',
    stat_tours: 'جولات مختلفة',
    stat_customers: 'عملاء سعداء',
    stat_rating: 'التقييم',
    scroll_text: 'قم بالتمرير لأسفل',
    category_all: 'الكل',
    category_city: 'المدينة',
    category_bosphorus: 'البوسفور',
    category_nature: 'الطبيعة',
    category_culture: 'الثقافة',
    tour_duration: 'المدة',
    tour_group: 'مجموعة',
    tour_highlights: 'ما هو متضمن:',
    tour_per_person: 'للشخص الواحد',
    tour_details: 'التفاصيل',
    cta_title: 'اطلب جولة مخصصة',
    cta_subtitle: 'هل ترغب في إنشاء جولتك الخاصة؟',
    cta_button: 'اتصل عبر WhatsApp',
    
    // الجولات
    tour_1_name: 'جولة إسطنبول 8 ساعات',
    tour_1_desc: 'اكتشف أهم معالم إسطنبول مع جولة شاملة مدتها 8 ساعات. شبه الجزيرة التاريخية والبوسفور وإسطنبول الحديثة.',
    tour_1_highlight_1: 'السلطان أحمد',
    tour_1_highlight_2: 'آيا صوفيا',
    tour_1_highlight_3: 'قصر توبكابي',
    tour_1_highlight_4: 'جولة البوسفور',
    tour_1_included_1: 'مرشد محترف',
    tour_1_included_2: 'نقل VIP',
    tour_1_included_3: 'رسوم الدخول',
    tour_1_included_4: 'الغداء',
    
    tour_2_name: 'جولة إسطنبول 12 ساعة',
    tour_2_desc: 'اكتشف إسطنبول ليلاً ونهاراً! جولة يوم كامل + أجواء إسطنبول الليلية المتلألئة.',
    tour_2_highlight_1: 'شبه الجزيرة التاريخية',
    tour_2_highlight_2: 'رحلة بحرية في البوسفور',
    tour_2_highlight_3: 'جولة ليلية',
    tour_2_highlight_4: 'برج غلطة',
    tour_2_included_1: 'مرشد خبير',
    tour_2_included_2: 'نقل فاخر',
    tour_2_included_3: 'جميع تذاكر الدخول',
    tour_2_included_4: 'العشاء',
    
    tour_3_name: 'جولة كابادوكيا',
    tour_3_desc: 'اكتشف وديان كابادوكيا السحرية ومداخن الجن والمدن تحت الأرض.',
    tour_3_highlight_1: 'رحلة المنطاد',
    tour_3_highlight_2: 'متحف غوريمي المفتوح',
    tour_3_highlight_3: 'مدينة تحت الأرض',
    tour_3_highlight_4: 'أفانوس',
    tour_3_included_1: 'تذكرة الطيران',
    tour_3_included_2: 'الإقامة في الفندق',
    tour_3_included_3: 'مرشد',
    tour_3_included_4: 'جميع النقلات',
    tour_3_included_5: 'الإفطار والعشاء',
    
    tour_4_name: 'عشاء بحري + جولة البوسفور',
    tour_4_desc: 'عشاء لذيذ مع إطلالة رائعة على البوسفور وموسيقى حية.',
    tour_4_highlight_1: 'يخت خاص',
    tour_4_highlight_2: 'بوفيه مفتوح',
    tour_4_highlight_3: 'موسيقى حية',
    tour_4_highlight_4: 'خدمة المشروبات',
    tour_4_included_1: 'نقل VIP',
    tour_4_included_2: 'استئجار يخت',
    tour_4_included_3: 'بوفيه مفتوح',
    tour_4_included_4: 'المشروبات',
    tour_4_included_5: 'الترفيه',
    
    tour_5_name: 'جولة الأناضول ونقل',
    tour_5_desc: 'اكتشف جمال الأناضول التاريخي والطبيعي. وادي إهلارا، قونية، باموكالي...',
    tour_5_highlight_1: 'وادي إهلارا',
    tour_5_highlight_2: 'مولانا قونية',
    tour_5_highlight_3: 'باموكالي',
    tour_5_highlight_4: 'المدن القديمة',
    tour_5_included_1: 'حافلة فاخرة',
    tour_5_included_2: 'الإقامة في الفندق',
    tour_5_included_3: 'مرشد',
    tour_5_included_4: 'الإفطار والعشاء',
    tour_5_included_5: 'رسوم الدخول',
    
    tour_6_name: 'جولة البحر الأسود ونقل',
    tour_6_desc: 'طبيعة البحر الأسود الفريدة، دير سوميلا، أوزونغول والهضاب...',
    tour_6_highlight_1: 'دير سوميلا',
    tour_6_highlight_2: 'أوزونغول',
    tour_6_highlight_3: 'هضبة أيدر',
    tour_6_highlight_4: 'حدائق الشاي في ريزا',
    tour_6_included_1: 'نقل VIP',
    tour_6_included_2: 'فنادق بوتيك',
    tour_6_included_3: 'مرشد محترف',
    tour_6_included_4: 'جميع الوجبات',
    tour_6_included_5: 'الأنشطة',
    
    tour_7_name: 'جولة بحر إيجه ونقل',
    tour_7_desc: 'رحلة لا تُنسى مع المدن القديمة والحمامات الحرارية والسواحل الجميلة لبحر إيجه.',
    tour_7_highlight_1: 'مدينة أفسس القديمة',
    tour_7_highlight_2: 'باموكالي',
    tour_7_highlight_3: 'تشيشمة',
    tour_7_highlight_4: 'ألاتشاتي',
    tour_7_included_1: 'نقل مريح',
    tour_7_included_2: 'الإقامة في الفندق',
    tour_7_included_3: 'مرشد',
    tour_7_included_4: 'الإفطار',
    tour_7_included_5: 'تذاكر المدن القديمة',
    footer_description: 'خدمة النقل الأكثر موثوقية وراحة في إسطنبول. نحن معك منذ عام 2010.',
    footer_quick_links: 'روابط سريعة',
    footer_home: 'الرئيسية',
    footer_fleet: 'أسطولنا',
    footer_tours: 'جولاتنا',
    footer_gallery: 'المعرض',
    footer_reviews: 'آراء العملاء',
    footer_faq: 'الأسئلة الشائعة',
    footer_services: 'خدماتنا',
    footer_airport: 'نقل المطار',
    footer_city: 'النقل الحضري',
    footer_intercity: 'النقل بين المدن',
    footer_vip: 'نقل VIP',
    footer_group: 'نقل جماعي',
    footer_contact: 'اتصل بنا',
    footer_address: 'حي أتاتورك',
    footer_location: 'إسطنبول، تركيا',
    footer_open: 'مفتوح 24/7',
    footer_open_desc: 'في خدمتك كل يوم',
    footer_rights: 'جميع الحقوق محفوظة.',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'شروط الاستخدام',
    footer_kvkk: 'GDPR',
    }
  };

  const t = (key: keyof typeof translations.tr) => translations[language][key];

const tours = [
  {
    id: 1,
    name: t('tour_1_name'),
    category: 'city',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532713/train-7824162_1920_pwl8qb.jpg',
    duration: '8 ' + t('tour_duration'),
    rating: 4.9,
    reviews: 187,
    description: t('tour_1_desc'),
    highlights: [t('tour_1_highlight_1'), t('tour_1_highlight_2'), t('tour_1_highlight_3'), t('tour_1_highlight_4')],
    included: [t('tour_1_included_1'), t('tour_1_included_2'), t('tour_1_included_3'), t('tour_1_included_4')]
  },
  {
    id: 2,
    name: t('tour_2_name'),
    category: 'city',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/night-4914430_1920_zzh7pj.jpg',
    duration: '12 ' + t('tour_duration'),
    rating: 5.0,
    reviews: 243,
    description: t('tour_2_desc'),
    highlights: [t('tour_2_highlight_1'), t('tour_2_highlight_2'), t('tour_2_highlight_3'), t('tour_2_highlight_4')],
    included: [t('tour_2_included_1'), t('tour_2_included_2'), t('tour_2_included_3'), t('tour_2_included_4')]
  },
  {
    id: 3,
    name: t('tour_3_name'),
    category: 'nature',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/hot-air-balloon-7217173_1920_vwfat9.jpg',
    duration: '2 ' + t('tour_duration'),
    rating: 5.0,
    reviews: 412,
    description: t('tour_3_desc'),
    highlights: [t('tour_3_highlight_1'), t('tour_3_highlight_2'), t('tour_3_highlight_3'), t('tour_3_highlight_4')],
    included: [t('tour_3_included_1'), t('tour_3_included_2'), t('tour_3_included_3'), t('tour_3_included_4'), t('tour_3_included_5')]
  },
  {
    id: 4,
    name: t('tour_4_name'),
    category: 'bosphorus',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/cruise-ship-778533_1280_yjgmso.jpg',
    duration: '4 ' + t('tour_duration'),
    rating: 4.8,
    reviews: 298,
    description: t('tour_4_desc'),
    highlights: [t('tour_4_highlight_1'), t('tour_4_highlight_2'), t('tour_4_highlight_3'), t('tour_4_highlight_4')],
    included: [t('tour_4_included_1'), t('tour_4_included_2'), t('tour_4_included_3'), t('tour_4_included_4'), t('tour_4_included_5')]
  },
  {
    id: 5,
    name: t('tour_5_name'),
    category: 'nature',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532709/ihlara-vadisi-nasil-gidilir-800x500_ebkwmg.jpg',
    duration: '3 ' + t('tour_duration'),
    rating: 4.9,
    reviews: 156,
    description: t('tour_5_desc'),
    highlights: [t('tour_5_highlight_1'), t('tour_5_highlight_2'), t('tour_5_highlight_3'), t('tour_5_highlight_4')],
    included: [t('tour_5_included_1'), t('tour_5_included_2'), t('tour_5_included_3'), t('tour_5_included_4'), t('tour_5_included_5')]
  },
  {
    id: 6,
    name: t('tour_6_name'),
    category: 'nature',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/sumela-5035247_1280_n2qju5.jpg',
    duration: '4 ' + t('tour_duration'),
    rating: 5.0,
    reviews: 189,
    description: t('tour_6_desc'),
    highlights: [t('tour_6_highlight_1'), t('tour_6_highlight_2'), t('tour_6_highlight_3'), t('tour_6_highlight_4')],
    included: [t('tour_6_included_1'), t('tour_6_included_2'), t('tour_6_included_3'), t('tour_6_included_4'), t('tour_6_included_5')]
  },
  {
    id: 7,
    name: t('tour_7_name'),
    category: 'culture',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532971/7797e86ed5112d0b409213a2b7f304d9_bo3wth.jpg',
    duration: '3 ' + t('tour_duration'),
    rating: 4.9,
    reviews: 224,
    description: t('tour_7_desc'),
    highlights: [t('tour_7_highlight_1'), t('tour_7_highlight_2'), t('tour_7_highlight_3'), t('tour_7_highlight_4')],
    included: [t('tour_7_included_1'), t('tour_7_included_2'), t('tour_7_included_3'), t('tour_7_included_4'), t('tour_7_included_5')]
  }
];

const categories = [
  { key: 'all', label: t('category_all') },
  { key: 'city', label: t('category_city') },
  { key: 'bosphorus', label: t('category_bosphorus') },
  { key: 'nature', label: t('category_nature') },
  { key: 'culture', label: t('category_culture') }
];

  const filteredTours = selectedCategory === 'all' 
  ? tours 
  : tours.filter(tour => tour.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <img 
          src="/icon.png" 
          alt="İstanbul Transfer Logo" 
          className="w-6 h-6"
        />
        <h1 className="text-2xl font-bold text-secondary-500">Impala Transfer</h1>
      </Link>
      
      <div className="flex items-center space-x-4">
        {/* Dil Seçici */}
        <div className="relative">
          <motion.button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center space-x-2 text-gray-700 bg-gray-100 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition border-2 border-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">{languages[language].flag}</span>
            <span className="text-base">{languages[language].code}</span>
            <svg className={`w-4 h-4 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>

          {showLangMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200 min-w-[180px] z-50"
            >
              {Object.entries(languages).map(([code, lang]) => (
                <button
                  key={code}
                  onClick={() => {
                    changeLanguage(code as any);
                    setShowLangMenu(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 transition ${
                    language === code ? 'bg-primary-50 border-l-4 border-primary-500' : ''
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-sm">{lang.name}</div>
                    <div className="text-xs text-gray-500">{lang.code}</div>
                  </div>
                  {language === code && (
                    <svg className="w-5 h-5 text-primary-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        <Link 
          href="/"
          className="text-gray-700 hover:text-primary-500 font-medium transition"
        >
          {t('nav_back')}
        </Link>
      </div>
    </div>
  </div>
</nav>

{/* Hero Section - Modern & Şık */}
<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
  {/* Background with Parallax Effect */}
  <div className="absolute inset-0">
    <motion.div 
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full"
    >
      <img
        src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071"
        alt="İstanbul"
        className="w-full h-full object-cover"
      />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
    
    {/* Animated Overlay Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-10 py-20">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black mb-6 leading-none"
      >
        <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
  {t('hero_title_1')}
</span>
<br />
<span className="text-white drop-shadow-2xl">{t('hero_title_2')}</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl md:text-2xl text-gray-300 mb-10 font-montserrat font-medium max-w-2xl mx-auto leading-relaxed"
      >
        {t('hero_subtitle')}
      </motion.p>

      {/* Feature Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
       {[
  { icon: Users, text: t('feature_guide') },
  { icon: Car, text: t('feature_transfer') },
  { icon: CheckCircle, text: t('feature_tickets') },
  { icon: Heart, text: t('feature_private') }
].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-3 rounded-xl shadow-xl hover:bg-white/20 transition"
          >
            <item.icon className="w-5 h-5 text-primary-400" />
            <span className="text-white font-semibold text-sm">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
      >
        {[
  { number: '7+', label: t('stat_tours') },
  { number: '1000+', label: t('stat_customers') },
  { number: '4.9', label: t('stat_rating') }
].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl md:text-4xl font-black text-primary-500 mb-1">
              {stat.number}
            </div>
            <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <div className="flex flex-col items-center">
      <span className="text-white/60 text-xs font-semibold mb-2 uppercase tracking-wider">
        {t('scroll_text')}
      </span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  </motion.div>
</section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
  {categories.map((category) => (
    <motion.button
      key={category.key}
      onClick={() => setSelectedCategory(category.key)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-2 rounded-full font-semibold transition ${
        selectedCategory === category.key
          ? 'bg-primary-500 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {category.label}
    </motion.button>
  ))}
</div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{filteredTours.map((tour, idx) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
onClick={() => {
  if (tour.id === 1) window.location.href = '/turlar/istanbul-tour';
  if (tour.id === 2) window.location.href = '/turlar/istanbul-12-hour';
  if (tour.id === 3) window.location.href = '/turlar/kapadokya-tour';
  if (tour.id === 4) window.location.href = '/turlar/cruise-dinner';
  if (tour.id === 5) window.location.href = '/turlar/anadolu-tour';
  if (tour.id === 6) window.location.href = '/turlar/karadeniz-tour';
  if (tour.id === 7) window.location.href = '/turlar/ege-tour';
}}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
              >
                <div className="relative h-56">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-bold text-sm">{tour.rating}</span>
                    <span className="text-gray-500 text-xs">({tour.reviews})</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{tour.description}</p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary-500" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary-500" />
                      <span>{t('tour_group')}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">{t('tour_highlights')}</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
</div>
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={(e) => {
    e.stopPropagation();
    if (tour.id === 1) window.location.href = '/turlar/istanbul-tour';
    if (tour.id === 2) window.location.href = '/turlar/istanbul-12-hour';
    if (tour.id === 3) window.location.href = '/turlar/kapadokya-tour';
    if (tour.id === 4) window.location.href = '/turlar/cruise-dinner';
    if (tour.id === 5) window.location.href = '/turlar/anadolu-tour';
    if (tour.id === 6) window.location.href = '/turlar/karadeniz-tour';
    if (tour.id === 7) window.location.href = '/turlar/ege-tour';
  }}
  className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition flex items-center space-x-2"
>
  <span>{t('tour_details')}</span>
  <ArrowRight className="w-4 h-4" />
</motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-accent text-white relative overflow-hidden">
        {/* Dekoratif Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-playfair font-black mb-4 text-black drop-shadow-2xl">
  {t('cta_title')}
</h3>
<p className="text-xl md:text-2xl mb-8 text-black font-montserrat font-semibold drop-shadow-lg">
  {t('cta_subtitle')}
</p>
          <motion.a
            href="https://wa.me/905016206952?text=Özel%20tur%20hakkında%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-black text-primary-500 px-10 py-5 rounded-full font-bold hover:bg-green-900 transition shadow-2xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>{t('cta_button')}</span>
          </motion.a>  
        </div>
      </section>
<footer className="bg-black text-white py-8 md:py-12 relative overflow-hidden">
  {/* Dekoratif Pattern */}
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
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
  className="w-6 h-6"
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
              href="#" 
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
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-primary-500 transition flex items-center group"
            >
              <span className="mr-2 group-hover:translate-x-1 transition">→</span> 
              {t('footer_gallery')}
            </a>
          </li>
          <li>
            <a 
              href="#" 
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
            {t('footer_airport')}
          </li>
          <li className="flex items-center">
            <Car className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-500" />
            {t('footer_city')}
          </li>
          <li className="flex items-center">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-500" />
            {t('footer_intercity')}
          </li>
          <li className="flex items-center">
            <Star className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-500" />
            {t('footer_vip')}
          </li>
          <li className="flex items-center">
            <Users className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-500" />
           {t('footer_group')}
          </li>
        </ul>
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
  <p>{t('footer_location')}</p>
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
  &copy; 2024 İstanbul Transfer Impala. {t('footer_rights')}
</p>
        <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
          <a href="#" className="text-gray-500 hover:text-primary-500 transition">{t('footer_privacy')}</a>
          <a href="#" className="text-gray-500 hover:text-primary-500 transition">{t('footer_terms')}</a>
          <a href="#" className="text-gray-500 hover:text-primary-500 transition">{t('footer_kvkk')}</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}