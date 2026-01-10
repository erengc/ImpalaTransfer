'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Clock, Users, CheckCircle, ArrowLeft, Phone, Ship, Sparkles, Music, Utensils, Star } from 'lucide-react';
import Link from 'next/link';

export default function CruiseDinnerDetay() {
  const [language, setLanguage] = useState<'tr' | 'en' | 'de' | 'ru' | 'ar'>('tr');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // localStorage'dan dil tercihini oku
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage as 'tr' | 'en' | 'de' | 'ru' | 'ar');
    }
  }, []);

  // Dil değiştirme fonksiyonu
  const changeLanguage = (newLang: 'tr' | 'en' | 'de' | 'ru' | 'ar') => {
    setLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const languages = {
    tr: { name: 'Türkçe', flag: '🇹🇷', code: 'TR' },
    en: { name: 'English', flag: '🇬🇧', code: 'EN' },
    de: { name: 'Deutsch', flag: '🇩🇪', code: 'DE' },
    ru: { name: 'Русский', flag: '🇷🇺', code: 'RU' },
    ar: { name: 'العربية', flag: '🇸🇦', code: 'AR' }
  };

  const translations = {
    tr: {
      nav_back: 'Tüm Turlar',
      hero_title: 'Cruise Dinner + Boğaz Turu',
      hero_subtitle: 'İstanbul Boğazı\'nda romantik bir akşam yemeği, canlı müzik ve muhteşem manzara eşliğinde...',
      hero_luxury: 'Lüks Tekne',
      hero_music: 'Canlı Müzik',
      hero_buffet: 'Açık Büfe',
      hero_special: 'Özel Fiyat Teklifi',
      
      overview_title: 'Boğaz\'da Unutulmaz Bir Gece',
      overview_p1: 'İstanbul Boğazı\'nın eşsiz manzarasında, lüks teknelerde unutulmaz bir akşam yemeği deneyimi yaşayın! Rumeli ve Anadolu yakasının tarihi semtlerini, köprüleri, sarayları ve yalıları seyrederken nefis yemeklerin tadını çıkarın.',
      overview_p2: 'Profesyonel müzisyenlerin canlı performansları, oryantal dans gösterileri ve DJ performansı eşliğinde İstanbul\'un ışıl ışıl gecesine tanık olun. Kız Kulesi\'nin romantik ışıklarından Boğaziçi Köprüsü\'nün görkemli görüntüsüne kadar her an fotoğraf karesinde saklamak isteyeceğiniz anılarla dolu!',
      
      schedule_title: 'Program Akışı',
      time_1: '19:30',
      schedule_1_title: 'Karşılama & Toplanma',
      schedule_1_desc: 'Otelden alınma ve iskeleye transfer (transfer dahil)',
      time_2: '20:00',
      schedule_2_title: 'Tekneye Biniş & Hoş Geldin İkramı',
      schedule_2_desc: 'Karşılama içeceği ve teknede yerinize yerleşme',
      time_3: '20:30',
      schedule_3_title: 'Akşam Yemeği Başlangıcı',
      schedule_3_desc: 'Açık büfe akşam yemeği, soğuk ve sıcak mezeler, ana yemekler, salatalar',
      time_4: '21:00',
      schedule_4_title: 'Boğaz Turu Başlıyor',
      schedule_4_desc: 'Kız Kulesi, Dolmabahçe Sarayı, Çırağan Sarayı, Ortaköy, Rumeli Hisarı, Fatih Sultan Mehmet Köprüsü',
      time_5: '21:30',
      schedule_5_title: 'Canlı Müzik & Dans Gösterileri',
      schedule_5_desc: 'Türk halk müziği, pop müzik, oryantal dans gösterisi, DJ performansı',
      time_6: '23:00',
      schedule_6_title: 'İskeleye Dönüş',
      schedule_6_desc: 'Tekne iskelesine yanaşır ve otellerinize transfer (transfer dahil)',
      schedule_note: 'Gece Turları:',
      schedule_note_desc: 'Her akşam kalkan turlarımız var! Özel günler (sevgililer günü, yılbaşı) için özel programlar düzenliyoruz.',
      
      menu_title: 'Açık Büfe Menü',
      menu_cold: 'Soğuk Mezeler & Salatalar',
      menu_cold_1: '• Çoban Salatası',
      menu_cold_2: '• Mevsim Yeşillikleri',
      menu_cold_3: '• Humus',
      menu_cold_4: '• Haydari',
      menu_cold_5: '• Cacık',
      menu_cold_6: '• Patlıcan Salatası',
      menu_cold_7: '• Beyaz Peynir',
      menu_cold_8: '• Zeytinler',
      menu_hot: 'Sıcak Mezeler',
      menu_hot_1: '• Sigara Böreği',
      menu_hot_2: '• Çiğ Börek',
      menu_hot_3: '• Kalamar Tava',
      menu_hot_4: '• Karides Güveç',
      menu_hot_5: '• Midye Dolma',
      menu_hot_6: '• Paçanga Böreği',
      menu_main: 'Ana Yemekler',
      menu_main_1: '• Izgara Köfte',
      menu_main_2: '• Tavuk Şiş',
      menu_main_3: '• Balık (mevsime göre)',
      menu_main_4: '• Etli Sebze Yemekleri',
      menu_main_5: '• Makarna',
      menu_main_6: '• Pilav Çeşitleri',
      menu_dessert: 'Tatlılar & İçecekler',
      menu_dessert_1: '• Baklava',
      menu_dessert_2: '• Sütlaç',
      menu_dessert_3: '• Mevsim Meyveleri',
      menu_dessert_4: '• Alkolsüz İçecekler (sınırsız)',
      menu_dessert_5: '• Çay & Kahve',
      menu_dessert_6: '• Su',
      menu_alcohol: 'Alkollü İçecekler:',
      menu_alcohol_desc: 'Tekne barında ayrı ücret karşılığında satılmaktadır.',
      
      included_title: 'Pakete Dahil Olanlar',
      inc_1: 'Otel karşılama ve iskele transferi (gidiş-dönüş)',
      inc_2: 'Lüks cruise teknesi ile 3 saatlik Boğaz turu',
      inc_3: 'Açık büfe akşam yemeği (başlangıç, ana yemek, tatlı)',
      inc_4: 'Alkolsüz içecekler (sınırsız)',
      inc_5: 'Canlı müzik performansı',
      inc_6: 'Oryantal dans gösterisi',
      inc_7: 'DJ performansı',
      inc_8: 'Profesyonel fotoğrafçı (fotoğraflar ekstra ücretli)',
      inc_9: 'Tekne sigortası',
      included_note: 'Not:',
      included_note_desc: 'Transfer sadece İstanbul Avrupa yakası otellerinden yapılmaktadır. Anadolu yakası için ek ücret talep edilebilir.',
      
      important_title: 'Önemli Bilgiler',
      imp_1: 'Rezervasyon en az 24 saat önceden yapılmalıdır.',
      imp_2: 'Kış aylarında (Kasım-Mart) hava şartlarına göre turlar iptal edilebilir.',
      imp_3: 'Tekne üzerinde rahat kıyafetler tercih edilmelidir.',
      imp_4: 'Çocuklar için özel indirimler mevcuttur (0-6 yaş ücretsiz, 7-12 yaş %50 indirimli).',
      imp_5: 'Özel günler (Sevgililer Günü, Yılbaşı) için özel fiyatlandırma uygulanır.',
      imp_6: 'Grup rezervasyonları (20+ kişi) için özel fiyat alınız.',
      imp_7: 'Fotoğraf ve video çekimi serbesttir.',
      imp_8: 'Deniz tutması için ilaç yanınızda bulunabilir.',
      
      sidebar_title: 'Boğaz\'da Romantik Gece',
      sidebar_subtitle: 'Size özel fiyat teklifi alın',
      sidebar_people: '👥 Kişi Sayınız',
      sidebar_date: '📅 Tarih Tercihiniz',
      sidebar_special: '🎉 Özel Gün mü?',
      sidebar_result: '= Size Özel Fiyat!',
      sidebar_whatsapp: 'WhatsApp ile Rezervasyon',
      sidebar_call: 'Hemen Ara: 0501 620 69 52',
      sidebar_support: '7/24 Rezervasyon Hattı',
      sidebar_note_1: 'Evlilik teklifi için özel sürpriz organizasyonlar!',
      sidebar_note_2: 'Özel günleriniz için masa rezervasyonu yapılabilir',
    },
    
    en: {
      nav_back: 'All Tours',
      hero_title: 'Cruise Dinner + Bosphorus Tour',
      hero_subtitle: 'A romantic dinner on the Istanbul Bosphorus, accompanied by live music and magnificent views...',
      hero_luxury: 'Luxury Yacht',
      hero_music: 'Live Music',
      hero_buffet: 'Open Buffet',
      hero_special: 'Special Price Offer',
      
      overview_title: 'An Unforgettable Night on the Bosphorus',
      overview_p1: 'Experience an unforgettable dinner on luxury yachts with the unique view of the Istanbul Bosphorus! Enjoy delicious food while watching the historic districts, bridges, palaces and mansions of the Rumeli and Anatolian sides.',
      overview_p2: 'Witness Istanbul\'s sparkling night accompanied by live performances by professional musicians, oriental dance shows and DJ performances. From the romantic lights of the Maiden\'s Tower to the magnificent view of the Bosphorus Bridge, every moment is full of memories you\'ll want to capture!',
      
      schedule_title: 'Program Schedule',
      time_1: '7:30 PM',
      schedule_1_title: 'Pick-up & Meeting',
      schedule_1_desc: 'Hotel pick-up and transfer to pier (transfer included)',
      time_2: '8:00 PM',
      schedule_2_title: 'Boarding & Welcome Drink',
      schedule_2_desc: 'Welcome drink and settling in your seats',
      time_3: '8:30 PM',
      schedule_3_title: 'Dinner Starts',
      schedule_3_desc: 'Open buffet dinner, cold and hot appetizers, main courses, salads',
      time_4: '9:00 PM',
      schedule_4_title: 'Bosphorus Tour Starts',
      schedule_4_desc: 'Maiden\'s Tower, Dolmabahçe Palace, Çırağan Palace, Ortaköy, Rumeli Fortress, Fatih Sultan Mehmet Bridge',
      time_5: '9:30 PM',
      schedule_5_title: 'Live Music & Dance Shows',
      schedule_5_desc: 'Turkish folk music, pop music, oriental dance show, DJ performance',
      time_6: '11:00 PM',
      schedule_6_title: 'Return to Pier',
      schedule_6_desc: 'Yacht docks at pier and transfer to your hotels (transfer included)',
      schedule_note: 'Night Tours:',
      schedule_note_desc: 'We have tours departing every evening! We organize special programs for special occasions (Valentine\'s Day, New Year).',
      
      menu_title: 'Open Buffet Menu',
      menu_cold: 'Cold Appetizers & Salads',
      menu_cold_1: '• Shepherd\'s Salad',
      menu_cold_2: '• Seasonal Greens',
      menu_cold_3: '• Hummus',
      menu_cold_4: '• Haydari',
      menu_cold_5: '• Tzatziki',
      menu_cold_6: '• Eggplant Salad',
      menu_cold_7: '• White Cheese',
      menu_cold_8: '• Olives',
      menu_hot: 'Hot Appetizers',
      menu_hot_1: '• Cheese Rolls',
      menu_hot_2: '• Raw Börek',
      menu_hot_3: '• Fried Calamari',
      menu_hot_4: '• Shrimp Casserole',
      menu_hot_5: '• Stuffed Mussels',
      menu_hot_6: '• Paçanga Böreği',
      menu_main: 'Main Courses',
      menu_main_1: '• Grilled Meatballs',
      menu_main_2: '• Chicken Skewers',
      menu_main_3: '• Fish (seasonal)',
      menu_main_4: '• Meat Vegetable Dishes',
      menu_main_5: '• Pasta',
      menu_main_6: '• Rice Varieties',
      menu_dessert: 'Desserts & Beverages',
      menu_dessert_1: '• Baklava',
      menu_dessert_2: '• Rice Pudding',
      menu_dessert_3: '• Seasonal Fruits',
      menu_dessert_4: '• Soft Drinks (unlimited)',
      menu_dessert_5: '• Tea & Coffee',
      menu_dessert_6: '• Water',
      menu_alcohol: 'Alcoholic Beverages:',
      menu_alcohol_desc: 'Sold separately at the yacht bar for an additional fee.',
      
      included_title: 'Included in Package',
      inc_1: 'Hotel pick-up and pier transfer (round trip)',
      inc_2: '3-hour Bosphorus tour on luxury cruise yacht',
      inc_3: 'Open buffet dinner (appetizers, main course, dessert)',
      inc_4: 'Soft drinks (unlimited)',
      inc_5: 'Live music performance',
      inc_6: 'Oriental dance show',
      inc_7: 'DJ performance',
      inc_8: 'Professional photographer (photos extra charge)',
      inc_9: 'Yacht insurance',
      included_note: 'Note:',
      included_note_desc: 'Transfer is only from Istanbul European side hotels. Additional fee may be charged for Asian side.',
      
      important_title: 'Important Information',
      imp_1: 'Reservation must be made at least 24 hours in advance.',
      imp_2: 'In winter months (November-March) tours may be canceled due to weather conditions.',
      imp_3: 'Comfortable clothing is preferred on the yacht.',
      imp_4: 'Special discounts available for children (0-6 years free, 7-12 years 50% discount).',
      imp_5: 'Special pricing applies for special occasions (Valentine\'s Day, New Year).',
      imp_6: 'Get special price for group reservations (20+ people).',
      imp_7: 'Photo and video shooting is free.',
      imp_8: 'Medication for seasickness may be kept with you.',
      
      sidebar_title: 'Romantic Night on Bosphorus',
      sidebar_subtitle: 'Get your custom price quote',
      sidebar_people: '👥 Number of People',
      sidebar_date: '📅 Date Preference',
      sidebar_special: '🎉 Special Occasion?',
      sidebar_result: '= Your Custom Price!',
      sidebar_whatsapp: 'Book via WhatsApp',
      sidebar_call: 'Call Now: 0501 620 69 52',
      sidebar_support: '24/7 Reservation Line',
      sidebar_note_1: 'Special surprise arrangements for marriage proposals!',
      sidebar_note_2: 'Table reservation available for your special occasions',
    },
    
    de: {
      nav_back: 'Alle Touren',
      hero_title: 'Cruise Dinner + Bosporus-Tour',
      hero_subtitle: 'Ein romantisches Abendessen auf dem Istanbul-Bosporus, begleitet von Live-Musik und herrlichen Aussichten...',
      hero_luxury: 'Luxus-Yacht',
      hero_music: 'Live-Musik',
      hero_buffet: 'Offenes Buffet',
      hero_special: 'Sonderpreisangebot',
      
      overview_title: 'Eine unvergessliche Nacht auf dem Bosporus',
      overview_p1: 'Erleben Sie ein unvergessliches Abendessen auf Luxusyachten mit der einzigartigen Aussicht auf den Istanbul-Bosporus! Genießen Sie köstliches Essen, während Sie die historischen Viertel, Brücken, Paläste und Villen der Rumeli- und Anatolischen Seite beobachten.',
      overview_p2: 'Erleben Sie Istanbuls funkelnde Nacht, begleitet von Live-Auftritten professioneller Musiker, orientalischen Tanzshows und DJ-Performances. Von den romantischen Lichtern des Mädchenturms bis zur prächtigen Aussicht auf die Bosporus-Brücke ist jeder Moment voller Erinnerungen, die Sie festhalten möchten!',
      
      schedule_title: 'Programmablauf',
      time_1: '19:30',
      schedule_1_title: 'Abholung & Treffen',
      schedule_1_desc: 'Hotelabholung und Transfer zum Pier (Transfer inklusive)',
      time_2: '20:00',
      schedule_2_title: 'Boarding & Willkommensgetränk',
      schedule_2_desc: 'Willkommensgetränk und Platzierung auf Ihren Plätzen',
      time_3: '20:30',
      schedule_3_title: 'Abendessen beginnt',
      schedule_3_desc: 'Offenes Buffet-Abendessen, kalte und warme Vorspeisen, Hauptgerichte, Salate',
      time_4: '21:00',
      schedule_4_title: 'Bosporus-Tour beginnt',
      schedule_4_desc: 'Mädchenturm, Dolmabahçe-Palast, Çırağan-Palast, Ortaköy, Rumeli-Festung, Fatih-Sultan-Mehmet-Brücke',
      time_5: '21:30',
      schedule_5_title: 'Live-Musik & Tanzshows',
      schedule_5_desc: 'Türkische Volksmusik, Popmusik, orientalische Tanzshow, DJ-Performance',
      time_6: '23:00',
      schedule_6_title: 'Rückkehr zum Pier',
      schedule_6_desc: 'Yacht legt am Pier an und Transfer zu Ihren Hotels (Transfer inklusive)',
      schedule_note: 'Nacht-Touren:',
      schedule_note_desc: 'Wir haben jeden Abend Touren! Wir organisieren spezielle Programme für besondere Anlässe (Valentinstag, Silvester).',
      
      menu_title: 'Offenes Buffet-Menü',
      menu_cold: 'Kalte Vorspeisen & Salate',
      menu_cold_1: '• Hirtensalat',
      menu_cold_2: '• Saisongrün',
      menu_cold_3: '• Hummus',
      menu_cold_4: '• Haydari',
      menu_cold_5: '• Tzatziki',
      menu_cold_6: '• Auberginensalat',
      menu_cold_7: '• Weißkäse',
      menu_cold_8: '• Oliven',
      menu_hot: 'Warme Vorspeisen',
      menu_hot_1: '• Käserollen',
      menu_hot_2: '• Roher Börek',
      menu_hot_3: '• Gebratene Calamari',
      menu_hot_4: '• Garnelen-Auflauf',
      menu_hot_5: '• Gefüllte Muscheln',
      menu_hot_6: '• Paçanga Böreği',
      menu_main: 'Hauptgerichte',
      menu_main_1: '• Gegrillte Fleischbällchen',
      menu_main_2: '• Hähnchen-Spieße',
      menu_main_3: '• Fisch (saisonal)',
      menu_main_4: '• Fleisch-Gemüsegerichte',
      menu_main_5: '• Pasta',
      menu_main_6: '• Reis-Sorten',
      menu_dessert: 'Desserts & Getränke',
      menu_dessert_1: '• Baklava',
      menu_dessert_2: '• Reispudding',
      menu_dessert_3: '• Saisonfrüchte',
      menu_dessert_4: '• Alkoholfreie Getränke (unbegrenzt)',
      menu_dessert_5: '• Tee & Kaffee',
      menu_dessert_6: '• Wasser',
      menu_alcohol: 'Alkoholische Getränke:',
      menu_alcohol_desc: 'Werden separat an der Yacht-Bar gegen Aufpreis verkauft.',
      
      included_title: 'Im Paket enthalten',
      inc_1: 'Hotelabholung und Pier-Transfer (Hin- und Rückfahrt)',
      inc_2: '3-stündige Bosporus-Tour auf Luxus-Cruise-Yacht',
      inc_3: 'Offenes Buffet-Abendessen (Vorspeisen, Hauptgericht, Dessert)',
      inc_4: 'Alkoholfreie Getränke (unbegrenzt)',
      inc_5: 'Live-Musik-Performance',
      inc_6: 'Orientalische Tanzshow',
      inc_7: 'DJ-Performance',
      inc_8: 'Professioneller Fotograf (Fotos gegen Aufpreis)',
      inc_9: 'Yacht-Versicherung',
      included_note: 'Hinweis:',
      included_note_desc: 'Transfer erfolgt nur von Hotels auf der europäischen Seite Istanbuls. Für die asiatische Seite kann eine zusätzliche Gebühr erhoben werden.',
      
      important_title: 'Wichtige Informationen',
      imp_1: 'Reservierung muss mindestens 24 Stunden im Voraus erfolgen.',
      imp_2: 'In Wintermonaten (November-März) können Touren wetterbedingt abgesagt werden.',
      imp_3: 'Bequeme Kleidung wird auf der Yacht bevorzugt.',
      imp_4: 'Spezielle Ermäßigungen für Kinder verfügbar (0-6 Jahre kostenlos, 7-12 Jahre 50% Rabatt).',
      imp_5: 'Spezielle Preise gelten für besondere Anlässe (Valentinstag, Silvester).',
      imp_6: 'Erhalten Sie Sonderpreise für Gruppenreservierungen (20+ Personen).',
      imp_7: 'Foto- und Videoaufnahmen sind kostenlos.',
      imp_8: 'Medikamente gegen Seekrankheit können mitgebracht werden.',
      
      sidebar_title: 'Romantische Nacht am Bosporus',
      sidebar_subtitle: 'Erhalten Sie Ihr individuelles Preisangebot',
      sidebar_people: '👥 Personenanzahl',
      sidebar_date: '📅 Datumswunsch',
      sidebar_special: '🎉 Besonderer Anlass?',
      sidebar_result: '= Ihr individueller Preis!',
      sidebar_whatsapp: 'Buchen per WhatsApp',
      sidebar_call: 'Jetzt anrufen: 0501 620 69 52',
      sidebar_support: '24/7 Reservierungslinie',
      sidebar_note_1: 'Besondere Überraschungsarrangements für Heiratsanträge!',
      sidebar_note_2: 'Tischreservierung für Ihre besonderen Anlässe verfügbar',
    },
    
    ru: {
      nav_back: 'Все туры',
      hero_title: 'Круизный ужин + тур по Босфору',
      hero_subtitle: 'Романтический ужин на Стамбульском Босфоре в сопровождении живой музыки и великолепных видов...',
      hero_luxury: 'Роскошная яхта',
      hero_music: 'Живая музыка',
      hero_buffet: 'Шведский стол',
      hero_special: 'Специальное предложение',
      
      overview_title: 'Незабываемая ночь на Босфоре',
      overview_p1: 'Испытайте незабываемый ужин на роскошных яхтах с уникальным видом на Стамбульский Босфор! Наслаждайтесь вкусной едой, наблюдая за историческими районами, мостами, дворцами и особняками румелийской и анатолийской сторон.',
      overview_p2: 'Станьте свидетелем сверкающей ночи Стамбула в сопровождении живых выступлений профессиональных музыкантов, шоу восточных танцев и диджей-выступлений. От романтических огней Девичьей башни до великолепного вида на мост через Босфор - каждый момент полон воспоминаний, которые вы захотите запечатлеть!',
      
      schedule_title: 'Расписание программы',
      time_1: '19:30',
      schedule_1_title: 'Встреча и сбор',
      schedule_1_desc: 'Трансфер из отеля к пристани (трансфер включен)',
      time_2: '20:00',
      schedule_2_title: 'Посадка и приветственный напиток',
      schedule_2_desc: 'Приветственный напиток и размещение на ваших местах',
      time_3: '20:30',
      schedule_3_title: 'Начало ужина',
      schedule_3_desc: 'Ужин "шведский стол", холодные и горячие закуски, основные блюда, салаты',
      time_4: '21:00',
      schedule_4_title: 'Начало тура по Босфору',
      schedule_4_desc: 'Девичья башня, дворец Долмабахче, дворец Чираган, Ортакёй, крепость Румели, мост Фатих Султан Мехмет',
      time_5: '21:30',
      schedule_5_title: 'Живая музыка и танцевальные шоу',
      schedule_5_desc: 'Турецкая народная музыка, поп-музыка, шоу восточных танцев, диджей-выступление',
      time_6: '23:00',
      schedule_6_title: 'Возвращение к пристани',
      schedule_6_desc: 'Яхта пришвартовывается у пристани и трансфер в ваши отели (трансфер включен)',
      schedule_note: 'Ночные туры:',
      schedule_note_desc: 'У нас туры отправляются каждый вечер! Мы организуем специальные программы для особых случаев (День святого Валентина, Новый год).',
      
      menu_title: 'Меню "шведский стол"',
      menu_cold: 'Холодные закуски и салаты',
      menu_cold_1: '• Салат Чобан',
      menu_cold_2: '• Сезонная зелень',
      menu_cold_3: '• Хумус',
      menu_cold_4: '• Хайдари',
      menu_cold_5: '• Дзадзыки',
      menu_cold_6: '• Салат из баклажанов',
      menu_cold_7: '• Белый сыр',
      menu_cold_8: '• Оливки',
      menu_hot: 'Горячие закуски',
      menu_hot_1: '• Сырные рулетики',
      menu_hot_2: '• Сырой бёрек',
      menu_hot_3: '• Жареные кальмары',
      menu_hot_4: '• Креветки в горшочке',
      menu_hot_5: '• Фаршированные мидии',
      menu_hot_6: '• Пачанга бёреги',
      menu_main: 'Основные блюда',
      menu_main_1: '• Жареные котлеты',
      menu_main_2: '• Куриные шашлыки',
      menu_main_3: '• Рыба (сезонная)',
      menu_main_4: '• Мясные овощные блюда',
      menu_main_5: '• Паста',
      menu_main_6: '• Виды риса',
      menu_dessert: 'Десерты и напитки',
      menu_dessert_1: '• Пахлава',
      menu_dessert_2: '• Рисовый пудинг',
      menu_dessert_3: '• Сезонные фрукты',
      menu_dessert_4: '• Безалкогольные напитки (неограниченно)',
      menu_dessert_5: '• Чай и кофе',
      menu_dessert_6: '• Вода',
      menu_alcohol: 'Алкогольные напитки:',
      menu_alcohol_desc: 'Продаются отдельно в баре яхты за дополнительную плату.',
      
      included_title: 'Включено в пакет',
      inc_1: 'Трансфер из отеля к пристани (туда и обратно)',
      inc_2: '3-часовой тур по Босфору на роскошной круизной яхте',
      inc_3: 'Ужин "шведский стол" (закуски, основное блюдо, десерт)',
      inc_4: 'Безалкогольные напитки (неограниченно)',
      inc_5: 'Живое музыкальное выступление',
      inc_6: 'Шоу восточных танцев',
      inc_7: 'Диджей-выступление',
      inc_8: 'Профессиональный фотограф (фотографии за дополнительную плату)',
      inc_9: 'Страховка яхты',
      included_note: 'Примечание:',
      included_note_desc: 'Трансфер осуществляется только из отелей на европейской стороне Стамбула. За азиатскую сторону может взиматься дополнительная плата.',
      
      important_title: 'Важная информация',
      imp_1: 'Бронирование должно быть сделано не менее чем за 24 часа.',
      imp_2: 'В зимние месяцы (ноябрь-март) туры могут быть отменены из-за погодных условий.',
      imp_3: 'На яхте предпочтительна удобная одежда.',
      imp_4: 'Специальные скидки для детей (0-6 лет бесплатно, 7-12 лет скидка 50%).',
      imp_5: 'Специальные цены действуют для особых случаев (День святого Валентина, Новый год).',
      imp_6: 'Получите специальную цену для групповых бронирований (20+ человек).',
      imp_7: 'Фото- и видеосъемка бесплатна.',
      imp_8: 'Лекарство от морской болезни можно держать при себе.',
      
      sidebar_title: 'Романтическая ночь на Босфоре',
      sidebar_subtitle: 'Получите индивидуальное ценовое предложение',
      sidebar_people: '👥 Количество человек',
      sidebar_date: '📅 Предпочтение по дате',
      sidebar_special: '🎉 Особый случай?',
      sidebar_result: '= Ваша индивидуальная цена!',
      sidebar_whatsapp: 'Бронировать через WhatsApp',
      sidebar_call: 'Позвоните сейчас: 0501 620 69 52',
      sidebar_support: 'Линия бронирования 24/7',
      sidebar_note_1: 'Специальные сюрпризы для предложений руки и сердца!',
      sidebar_note_2: 'Доступна резервация столика для ваших особых случаев',
    },
    
    ar: {
      nav_back: 'جميع الجولات',
      hero_title: 'عشاء رحلة بحرية + جولة البوسفور',
      hero_subtitle: 'عشاء رومانسي على البوسفور في إسطنبول، مصحوبًا بموسيقى حية ومناظر رائعة...',
      hero_luxury: 'يخت فاخر',
      hero_music: 'موسيقى حية',
      hero_buffet: 'بوفيه مفتوح',
      hero_special: 'عرض سعر خاص',
      
      overview_title: 'ليلة لا تُنسى على البوسفور',
      overview_p1: 'استمتع بعشاء لا يُنسى على اليخوت الفاخرة مع المنظر الفريد لبوسفور إسطنبول! استمتع بالطعام اللذيذ أثناء مشاهدة الأحياء التاريخية والجسور والقصور والفيلات في جانبي روميلي والأناضول.',
      overview_p2: 'كن شاهدًا على ليلة إسطنبول المتلألئة مصحوبة بعروض حية لموسيقيين محترفين وعروض رقص شرقي وأداء دي جي. من الأضواء الرومانسية لبرج الفتاة إلى المنظر الرائع لجسر البوسفور، كل لحظة مليئة بالذكريات التي ستريد التقاطها!',
      
      schedule_title: 'جدول البرنامج',
      time_1: '7:30 مساءً',
      schedule_1_title: 'الاستقبال والتجمع',
      schedule_1_desc: 'الاستلام من الفندق والنقل إلى الرصيف (النقل مشمول)',
      time_2: '8:00 مساءً',
      schedule_2_title: 'الصعود ومشروب الترحيب',
      schedule_2_desc: 'مشروب الترحيب والجلوس في أماكنكم',
      time_3: '8:30 مساءً',
      schedule_3_title: 'بداية العشاء',
      schedule_3_desc: 'عشاء بوفيه مفتوح، مقبلات باردة وساخنة، أطباق رئيسية، سلطات',
      time_4: '9:00 مساءً',
      schedule_4_title: 'بداية جولة البوسفور',
      schedule_4_desc: 'برج الفتاة، قصر دولما باهتشة، قصر شيراغان، أورتاكوي، حصن روميلي، جسر السلطان محمد الفاتح',
      time_5: '9:30 مساءً',
      schedule_5_title: 'الموسيقى الحية وعروض الرقص',
      schedule_5_desc: 'الموسيقى الشعبية التركية، موسيقى البوب، عرض الرقص الشرقي، أداء دي جي',
      time_6: '11:00 مساءً',
      schedule_6_title: 'العودة إلى الرصيف',
      schedule_6_desc: 'رسو اليخت في الرصيف والنقل إلى فنادقكم (النقل مشمول)',
      schedule_note: 'جولات ليلية:',
      schedule_note_desc: 'لدينا جولات تغادر كل مساء! نقوم بتنظيم برامج خاصة للمناسبات الخاصة (عيد الحب، رأس السنة).',
      
      menu_title: 'قائمة البوفيه المفتوح',
      menu_cold: 'المقبلات الباردة والسلطات',
      menu_cold_1: '• سلطة الراعي',
      menu_cold_2: '• خضروات موسمية',
      menu_cold_3: '• حمص',
      menu_cold_4: '• هايداري',
      menu_cold_5: '• تزاتزيكي',
      menu_cold_6: '• سلطة الباذنجان',
      menu_cold_7: '• جبن أبيض',
      menu_cold_8: '• زيتون',
      menu_hot: 'المقبلات الساخنة',
      menu_hot_1: '• لفائف الجبن',
      menu_hot_2: '• بوريك نيء',
      menu_hot_3: '• كالاماري مقلي',
      menu_hot_4: '• طاجن الروبيان',
      menu_hot_5: '• بلح البحر المحشي',
      menu_hot_6: '• باتشانجا بوريجي',
      menu_main: 'الأطباق الرئيسية',
      menu_main_1: '• كفتة مشوية',
      menu_main_2: '• أسياخ الدجاج',
      menu_main_3: '• السمك (حسب الموسم)',
      menu_main_4: '• أطباق اللحم والخضار',
      menu_main_5: '• معكرونة',
      menu_main_6: '• أنواع الأرز',
      menu_dessert: 'الحلويات والمشروبات',
      menu_dessert_1: '• بقلاوة',
      menu_dessert_2: '• أرز بالحليب',
      menu_dessert_3: '• فواكه موسمية',
      menu_dessert_4: '• مشروبات غير كحولية (غير محدودة)',
      menu_dessert_5: '• شاي وقهوة',
      menu_dessert_6: '• ماء',
      menu_alcohol: 'المشروبات الكحولية:',
      menu_alcohol_desc: 'تباع بشكل منفصل في بار اليخت مقابل رسوم إضافية.',
      
      included_title: 'مشمول في الباقة',
      inc_1: 'الاستلام من الفندق والنقل إلى الرصيف (ذهاب وإياب)',
      inc_2: 'جولة البوسفور لمدة 3 ساعات على يخت فاخر',
      inc_3: 'عشاء بوفيه مفتوح (مقبلات، طبق رئيسي، حلوى)',
      inc_4: 'مشروبات غير كحولية (غير محدودة)',
      inc_5: 'أداء موسيقي حي',
      inc_6: 'عرض رقص شرقي',
      inc_7: 'أداء دي جي',
      inc_8: 'مصور محترف (الصور برسوم إضافية)',
      inc_9: 'تأمين اليخت',
      included_note: 'ملاحظة:',
      included_note_desc: 'النقل فقط من فنادق الجانب الأوروبي لإسطنبول. قد يتم فرض رسوم إضافية للجانب الآسيوي.',
      
      important_title: 'معلومات مهمة',
      imp_1: 'يجب إجراء الحجز قبل 24 ساعة على الأقل.',
      imp_2: 'في أشهر الشتاء (نوفمبر-مارس) قد يتم إلغاء الجولات بسبب الظروف الجوية.',
      imp_3: 'يُفضل الملابس المريحة على اليخت.',
      imp_4: 'خصومات خاصة متاحة للأطفال (0-6 سنوات مجانًا، 7-12 سنة خصم 50٪).',
      imp_5: 'تطبق أسعار خاصة للمناسبات الخاصة (عيد الحب، رأس السنة).',
      imp_6: 'احصل على سعر خاص للحجوزات الجماعية (20+ شخص).',
      imp_7: 'التصوير الفوتوغرافي والفيديو مجاني.',
      imp_8: 'يمكن الاحتفاظ بدواء دوار البحر معك.',
      
      sidebar_title: 'ليلة رومانسية على البوسفور',
      sidebar_subtitle: 'احصل على عرض السعر المخصص',
      sidebar_people: '👥 عدد الأشخاص',
      sidebar_date: '📅 تفضيل التاريخ',
      sidebar_special: '🎉 مناسبة خاصة؟',
      sidebar_result: '= سعرك المخصص!',
      sidebar_whatsapp: 'احجز عبر WhatsApp',
      sidebar_call: 'اتصل الآن: 0501 620 69 52',
      sidebar_support: 'خط الحجز 24/7',
      sidebar_note_1: 'ترتيبات مفاجأة خاصة لطلبات الزواج!',
      sidebar_note_2: 'حجز طاولة متاح لمناسباتك الخاصة',
    }
  };

  const t = (key: keyof typeof translations.tr) => translations[language][key];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
                href="/turlar"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 font-medium transition"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{t('nav_back')}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dzb0zzsl4/video/upload/v1761926873/WhatsApp_Video_2025-10-27_saat_11.36.22_d4404c2c_yutqr7.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-playfair font-black mb-4 drop-shadow-2xl">
                {t('hero_title')}
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow-lg">
                {t('hero_subtitle')}
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Ship className="w-5 h-5" />
                  <span className="font-semibold">{t('hero_luxury')}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Music className="w-5 h-5" />
                  <span className="font-semibold">{t('hero_music')}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Utensils className="w-5 h-5" />
                  <span className="font-semibold">{t('hero_buffet')}</span>
                </div>
                <div className="flex items-center space-x-2 bg-primary-500 px-4 py-2 rounded-full">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-bold">{t('hero_special')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sol Kolon - Detaylar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Genel Bakış */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Ship className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('overview_title')}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  {t('overview_p1')}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('overview_p2')}
                </p>
              </motion.div>

              {/* Cruise Programı */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('schedule_title')}</h2>
                </div>

                <div className="space-y-6">
                  {[
                    { time: t('time_1'), title: t('schedule_1_title'), desc: t('schedule_1_desc'), color: 'blue' },
                    { time: t('time_2'), title: t('schedule_2_title'), desc: t('schedule_2_desc'), color: 'purple' },
                    { time: t('time_3'), title: t('schedule_3_title'), desc: t('schedule_3_desc'), color: 'orange' },
                    { time: t('time_4'), title: t('schedule_4_title'), desc: t('schedule_4_desc'), color: 'green' },
                    { time: t('time_5'), title: t('schedule_5_title'), desc: t('schedule_5_desc'), color: 'pink' },
                    { time: t('time_6'), title: t('schedule_6_title'), desc: t('schedule_6_desc'), color: 'indigo' }
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-start space-x-4 p-4 bg-gradient-to-r from-${item.color}-50 to-${item.color === 'blue' ? 'cyan' : item.color === 'purple' ? 'pink' : item.color === 'orange' ? 'amber' : item.color === 'green' ? 'emerald' : item.color === 'pink' ? 'rose' : 'blue'}-50 rounded-xl`}>
                      <div className={`w-16 h-16 bg-${item.color}-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm`}>
                        {item.time}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-primary-50 to-accent/10 border-l-4 border-primary-500 rounded-lg">
                  <p className="text-gray-800 font-semibold">
                    🌙 <strong>{t('schedule_note')}</strong> {t('schedule_note_desc')}
                  </p>
                </div>
              </motion.div>

              {/* Menü */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('menu_title')}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl">
                    <h3 className="font-bold text-amber-900 mb-4 flex items-center text-lg">
                      <span className="text-2xl mr-2">🥗</span>
                      {t('menu_cold')}
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3,4,5,6,7,8].map(i => (
                        <li key={i}>{t(`menu_cold_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl">
                    <h3 className="font-bold text-red-900 mb-4 flex items-center text-lg">
                      <span className="text-2xl mr-2">🍲</span>
                      {t('menu_hot')}
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3,4,5,6].map(i => (
                        <li key={i}>{t(`menu_hot_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h3 className="font-bold text-green-900 mb-4 flex items-center text-lg">
                      <span className="text-2xl mr-2">🍖</span>
                      {t('menu_main')}
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3,4,5,6].map(i => (
                        <li key={i}>{t(`menu_main_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                    <h3 className="font-bold text-pink-900 mb-4 flex items-center text-lg">
                      <span className="text-2xl mr-2">🍰</span>
                      {t('menu_dessert')}
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3,4,5,6].map(i => (
                        <li key={i}>{t(`menu_dessert_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-5 bg-red-50 border-l-4 border-red-500 rounded-lg">
                  <p className="text-red-900 font-semibold text-sm">
                    🍷 <strong>{t('menu_alcohol')}</strong> {t('menu_alcohol_desc')}
                  </p>
                </div>
              </motion.div>

              {/* Dahil Olanlar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('included_title')}</h2>
                </div>
                <div className="space-y-3">
                  {[1,2,3,4,5,6,7,8,9].map(i => (
                    <div key={i} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{t(`inc_${i}` as any)}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                  <p className="text-blue-900 font-semibold">
                    ℹ️ <strong>{t('included_note')}</strong> {t('included_note_desc')}
                  </p>
                </div>
              </motion.div>

              {/* Önemli Notlar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">{t('important_title')}</h2>
                <div className="space-y-4">
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className="flex items-start space-x-3 p-3 bg-white rounded-lg border-l-4 border-amber-400">
                      <span className="text-amber-700 font-semibold text-2xl">•</span>
                      <span className="text-gray-700">{t(`imp_${i}` as any)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sağ Kolon - Rezervasyon Kartı */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-2xl p-8 sticky top-24"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ship className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('sidebar_title')}</h3>
                  <p className="text-gray-600">{t('sidebar_subtitle')}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-2 border-primary-500">
                    <p className="text-center text-gray-700 font-semibold">
                      {t('sidebar_people')}<br />
                      {t('sidebar_date')}<br />
                      {t('sidebar_special')}<br />
                      <span className="text-primary-500 text-xl font-black">{t('sidebar_result')}</span>
                    </p>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/905016206952?text=Merhaba!%20Cruise%20Dinner%20%2B%20Boğaz%20Turu%20hakkında%20bilgi%20almak%20istiyorum.%20Size%20özel%20fiyat%20teklifi%20alabilir%20miyim?"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition flex items-center justify-center space-x-2 shadow-lg mb-4"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('sidebar_whatsapp')}</span>
                </motion.a>

                <motion.a
                  href="tel:+905016206952"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-500 text-black py-4 rounded-xl font-bold hover:bg-primary-600 transition flex items-center justify-center space-x-2 shadow-lg mb-4"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('sidebar_call')}</span>
                </motion.a>

                <p className="text-center text-sm text-gray-500 mb-4">
                  {t('sidebar_support')}
                </p>

                <div className="space-y-3">
                  <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                    <p className="text-xs text-pink-900 font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      {t('sidebar_note_1')}
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="text-xs text-purple-900 font-semibold flex items-center">
                      <Music className="w-4 h-4 mr-2" />
                      {t('sidebar_note_2')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}