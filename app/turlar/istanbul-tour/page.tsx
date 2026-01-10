'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Clock, Users, CheckCircle, ArrowLeft, Phone, Sparkles, Camera, Landmark } from 'lucide-react';
import Link from 'next/link';

export default function IstanbulTurDetay() {
  const [language, setLanguage] = useState<'tr' | 'en' | 'de' | 'ru' | 'ar'>('tr');
  const [showLangMenu, setShowLangMenu] = useState(false);

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
    hero_title: '8 Saatlik İstanbul Turu',
    hero_hours: 'Saat',
    hero_private: 'Özel Tur',
    hero_special: 'Özel Fiyat Teklifi',
    
    overview_title: 'İstanbul\'u 8 Saatte Keşfedin',
    overview_p1: 'İki kıtayı birleştiren büyülü şehir İstanbul\'da, 8 saatlik özel turunuzda tarihin ve kültürün izlerini takip edin! Sultanahmet\'in görkemli eserleri, Boğaz\'ın eşsiz manzarası ve şehrin renkli mahallelerinde unutulmaz anlar yaşayın.',
    overview_p2_bold: 'Size özel araç ve şoför hizmeti!',
    overview_p2: 'İstediğiniz saatte başlayın, kendi hızınızda gezin. Profesyonel rehber, öğle yemeği ve müze giriş ücretleri isteğe bağlıdır. Konforlu araçlarımızla İstanbul\'un kalbini keşfedin!',
    
    route_title: 'Örnek Rota',
    route_subtitle: 'Aşağıdaki rota sadece bir',
    route_subtitle_bold: 'örnektir',
    route_subtitle2: '. Size özel rota oluşturabiliriz!',
    route_custom: 'Size Özel Rota:',
    route_custom_desc: 'Yukarıdaki program sadece örnektir. İstediğiniz yerleri ekleyip çıkarabiliriz!',
    
    stop_1_name: 'Sultanahmet Camii (Mavi Cami)',
    stop_1_desc: 'Osmanlı mimarisinin şaheseri',
    stop_2_name: 'Ayasofya',
    stop_2_desc: 'Bizans ve Osmanlı tarihinin birleşimi',
    stop_3_name: 'Yerebatan Sarnıcı',
    stop_3_desc: 'Yeraltı su deposu, Medusa başları',
    stop_4_name: 'Topkapı Sarayı',
    stop_4_desc: 'Osmanlı padişahlarının sarayı',
    stop_5_name: 'Kapalı Çarşı',
    stop_5_desc: 'Dünyanın en eski kapalı çarşısı',
    stop_6_name: 'Mısır Çarşısı',
    stop_6_desc: 'Baharat ve lokum cenneti',
    stop_7_name: 'Boğaz Turu (İsteğe Bağlı)',
    stop_7_desc: 'Kısa boğaz gezisi',
    stop_8_name: 'Galata Kulesi',
    stop_8_desc: 'Panoramik İstanbul manzarası',
    
    stop_time_1: '30 dk',
    stop_time_2: '45 dk',
    stop_time_3: '30 dk',
    stop_time_4: '1.5 saat',
    stop_time_5: '45 dk',
    stop_time_6: '30 dk',
    stop_time_7: '1 saat',
    stop_time_8: '30 dk',
    
    stop_free: '✓ Ücretsiz',
    stop_paid: '€ Giriş ücreti',
    
    locations_title: 'Eklenebilecek Diğer Lokasyonlar',
    loc_1: '🕌 Süleymaniye Camii',
    loc_1_desc: 'Mimar Sinan\'ın başyapıtı',
    loc_2: '🏰 Dolmabahçe Sarayı',
    loc_2_desc: 'Boğaz kıyısında saray',
    loc_3: '🌉 Galata Köprüsü',
    loc_3_desc: 'Balık ekmek ve Haliç manzarası',
    loc_4: '🎨 İstiklal Caddesi',
    loc_4_desc: 'Alışveriş ve nostaljik tramvay',
    loc_5: '🏛️ Arkeoloji Müzesi',
    loc_5_desc: 'Antik eserler',
    loc_6: '🌊 Kız Kulesi',
    loc_6_desc: 'Boğazda romantik simge',
    loc_7: '🏘️ Balat',
    loc_7_desc: 'Renkli tarihi mahalle',
    loc_8: '🏰 Rumeli Hisarı',
    loc_8_desc: 'Boğaz\'da tarihi kale',
    locations_note: 'İstediğiniz lokasyonları seçerek',
    locations_note_bold: 'kendi rotanızı',
    locations_note2: 'oluşturabilirsiniz!',
    
    included_title: 'Hizmetimize Dahil',
    inc_1: 'Konforlu, klimali özel araç (Vito/Sprinter)',
    inc_2: 'Profesyonel, deneyimli şoför',
    inc_3: '8 saat araç ve şoför hizmeti',
    inc_4: 'Otel karşılama ve bırakma',
    inc_5: 'Yakıt ve araç sigortası',
    inc_6: 'Her yolcu için ücretsiz su',
    inc_7: 'Esnek rota planlaması',
    included_note: 'Not:',
    included_note_desc: 'Müze giriş ücretleri, öğle yemeği ve profesyonel rehber hizmeti isteğe bağlıdır. Talebinize göre',
    included_note_bold: 'tam paket',
    included_note_desc2: 'sunabiliriz!',
    
    how_title: 'Nasıl Çalışır?',
    how_1_title: 'Bizimle İletişime Geçin',
    how_1_desc: 'WhatsApp, telefon veya e-posta ile ulaşın',
    how_2_title: 'Rotanızı Belirleyin',
    how_2_desc: 'Hangi yerleri görmek istiyorsunuz? Kaç kişisiniz?',
    how_3_title: 'Özel Teklif Alın',
    how_3_desc: 'Size özel İstanbul rotası ve fiyat teklifi',
    how_4_title: 'Rezervasyon Yapın',
    how_4_desc: 'Tarih ve saat belirleyin, keyfinize bakın!',
    
    photo_title: 'Fotoğraf İpuçları',
    photo_1: '📸 Sultanahmet\'te sabah erken saatler (08:00-10:00) en az kalabalık',
    photo_2: '🌅 Galata Kulesi\'nden gün batımı manzarası harika',
    photo_3: '🕌 Ayasofya içinde flash kullanmayın',
    photo_4: '🌉 Galata Köprüsü\'nden Boğaz fotoğrafı için akşam ışıkları ideal',
    photo_5: '🎨 Balat\'ta renkli evler için öğle saatleri en iyi ışık',
    photo_6: '📱 Topkapı Sarayı\'nda drone uçuşu yasak',
    
    sidebar_title: '8 Saatlik Özel Tur',
    sidebar_subtitle: 'İhtiyaçlarınıza göre özel fiyat',
    sidebar_people: '👥 Kaç Kişi?',
    sidebar_locations: '🗺️ Hangi Lokasyonlar?',
    sidebar_time: '🕐 Başlangıç Saati?',
    sidebar_extras: '🍽️ Rehber/Yemek?',
    sidebar_result: '= Size Özel Fiyat!',
    sidebar_whatsapp: 'WhatsApp ile Teklif Al',
    sidebar_call: 'Hemen Ara: 0501 620 69 52',
    sidebar_support: '7/24 Müşteri Desteği',
    sidebar_note: '🎯 Özel günler için sürpriz organizasyon! Detaylar için bizi arayın.',
  },
  
  en: {
    nav_back: 'All Tours',
    hero_title: '8 Hour Istanbul Tour',
    hero_hours: 'Hours',
    hero_private: 'Private Tour',
    hero_special: 'Special Price Offer',
    
    overview_title: 'Discover Istanbul in 8 Hours',
    overview_p1: 'Follow the traces of history and culture on your 8-hour private tour in Istanbul, the magical city that connects two continents! Experience unforgettable moments in Sultanahmet\'s magnificent monuments, the Bosphorus\' unique views, and the city\'s colorful neighborhoods.',
    overview_p2_bold: 'Private vehicle and driver service for you!',
    overview_p2: 'Start at your preferred time, explore at your own pace. Professional guide, lunch, and museum entrance fees are optional. Discover the heart of Istanbul with our comfortable vehicles!',
    
    route_title: 'Sample Route',
    route_subtitle: 'The route below is just a',
    route_subtitle_bold: 'sample',
    route_subtitle2: '. We can create a custom route for you!',
    route_custom: 'Custom Route for You:',
    route_custom_desc: 'The program above is just a sample. You can add or remove places as you wish!',
    
    stop_1_name: 'Sultanahmet Mosque (Blue Mosque)',
    stop_1_desc: 'Masterpiece of Ottoman architecture',
    stop_2_name: 'Hagia Sophia',
    stop_2_desc: 'Fusion of Byzantine and Ottoman history',
    stop_3_name: 'Basilica Cistern',
    stop_3_desc: 'Underground water reservoir, Medusa heads',
    stop_4_name: 'Topkapi Palace',
    stop_4_desc: 'Palace of Ottoman sultans',
    stop_5_name: 'Grand Bazaar',
    stop_5_desc: 'World\'s oldest covered market',
    stop_6_name: 'Spice Bazaar',
    stop_6_desc: 'Paradise of spices and Turkish delight',
    stop_7_name: 'Bosphorus Tour (Optional)',
    stop_7_desc: 'Short Bosphorus cruise',
    stop_8_name: 'Galata Tower',
    stop_8_desc: 'Panoramic Istanbul view',
    
    stop_time_1: '30 min',
    stop_time_2: '45 min',
    stop_time_3: '30 min',
    stop_time_4: '1.5 hours',
    stop_time_5: '45 min',
    stop_time_6: '30 min',
    stop_time_7: '1 hour',
    stop_time_8: '30 min',
    
    stop_free: '✓ Free',
    stop_paid: '€ Entrance fee',
    
    locations_title: 'Other Locations to Add',
    loc_1: '🕌 Suleymaniye Mosque',
    loc_1_desc: 'Architect Sinan\'s masterpiece',
    loc_2: '🏰 Dolmabahce Palace',
    loc_2_desc: 'Palace on the Bosphorus shore',
    loc_3: '🌉 Galata Bridge',
    loc_3_desc: 'Fish sandwich and Golden Horn view',
    loc_4: '🎨 Istiklal Street',
    loc_4_desc: 'Shopping and nostalgic tram',
    loc_5: '🏛️ Archaeology Museum',
    loc_5_desc: 'Ancient artifacts',
    loc_6: '🌊 Maiden\'s Tower',
    loc_6_desc: 'Romantic symbol on the Bosphorus',
    loc_7: '🏘️ Balat',
    loc_7_desc: 'Colorful historic neighborhood',
    loc_8: '🏰 Rumeli Fortress',
    loc_8_desc: 'Historic fortress on the Bosphorus',
    locations_note: 'Create',
    locations_note_bold: 'your own route',
    locations_note2: 'by selecting the locations you want!',
    
    included_title: 'Included in Our Service',
    inc_1: 'Comfortable, air-conditioned private vehicle (Vito/Sprinter)',
    inc_2: 'Professional, experienced driver',
    inc_3: '8 hours vehicle and driver service',
    inc_4: 'Hotel pick-up and drop-off',
    inc_5: 'Fuel and vehicle insurance',
    inc_6: 'Free water for each passenger',
    inc_7: 'Flexible route planning',
    included_note: 'Note:',
    included_note_desc: 'Museum entrance fees, lunch, and professional guide service are optional. We can offer a',
    included_note_bold: 'full package',
    included_note_desc2: 'according to your request!',
    
    how_title: 'How It Works?',
    how_1_title: 'Contact Us',
    how_1_desc: 'Reach us via WhatsApp, phone or email',
    how_2_title: 'Determine Your Route',
    how_2_desc: 'Which places do you want to see? How many people?',
    how_3_title: 'Get Custom Quote',
    how_3_desc: 'Custom Istanbul route and price quote for you',
    how_4_title: 'Make Reservation',
    how_4_desc: 'Set date and time, enjoy yourself!',
    
    photo_title: 'Photography Tips',
    photo_1: '📸 Sultanahmet is least crowded early morning (08:00-10:00)',
    photo_2: '🌅 Sunset view from Galata Tower is amazing',
    photo_3: '🕌 Don\'t use flash inside Hagia Sophia',
    photo_4: '🌉 Evening lights are ideal for Bosphorus photos from Galata Bridge',
    photo_5: '🎨 Noon hours offer best light for colorful houses in Balat',
    photo_6: '📱 Drone flights are prohibited at Topkapi Palace',
    
    sidebar_title: '8 Hour Private Tour',
    sidebar_subtitle: 'Custom price based on your needs',
    sidebar_people: '👥 How Many People?',
    sidebar_locations: '🗺️ Which Locations?',
    sidebar_time: '🕐 Start Time?',
    sidebar_extras: '🍽️ Guide/Meal?',
    sidebar_result: '= Your Custom Price!',
    sidebar_whatsapp: 'Get Quote via WhatsApp',
    sidebar_call: 'Call Now: 0501 620 69 52',
    sidebar_support: '24/7 Customer Support',
    sidebar_note: '🎯 Surprise organization for special occasions! Call us for details.',
  },
  
  de: {
    nav_back: 'Alle Touren',
    hero_title: '8-Stunden Istanbul Tour',
    hero_hours: 'Stunden',
    hero_private: 'Private Tour',
    hero_special: 'Sonderpreisangebot',
    
    overview_title: 'Istanbul in 8 Stunden entdecken',
    overview_p1: 'Folgen Sie den Spuren der Geschichte und Kultur auf Ihrer 8-stündigen Privattour in Istanbul, der magischen Stadt, die zwei Kontinente verbindet! Erleben Sie unvergessliche Momente in Sultanahmet\'s prächtigen Monumenten, den einzigartigen Aussichten des Bosporus und den farbenfrohen Vierteln der Stadt.',
    overview_p2_bold: 'Privates Fahrzeug und Fahrer-Service für Sie!',
    overview_p2: 'Starten Sie zu Ihrer bevorzugten Zeit, erkunden Sie in Ihrem eigenen Tempo. Professioneller Guide, Mittagessen und Museums-Eintrittsgelder sind optional. Entdecken Sie das Herz Istanbuls mit unseren komfortablen Fahrzeugen!',
    
    route_title: 'Beispielroute',
    route_subtitle: 'Die Route unten ist nur ein',
    route_subtitle_bold: 'Beispiel',
    route_subtitle2: '. Wir können eine individuelle Route für Sie erstellen!',
    route_custom: 'Individuelle Route für Sie:',
    route_custom_desc: 'Das Programm oben ist nur ein Beispiel. Sie können Orte nach Wunsch hinzufügen oder entfernen!',
    
    stop_1_name: 'Sultanahmet-Moschee (Blaue Moschee)',
    stop_1_desc: 'Meisterwerk osmanischer Architektur',
    stop_2_name: 'Hagia Sophia',
    stop_2_desc: 'Verschmelzung byzantinischer und osmanischer Geschichte',
    stop_3_name: 'Basilika-Zisterne',
    stop_3_desc: 'Unterirdisches Wasserbecken, Medusa-Köpfe',
    stop_4_name: 'Topkapi-Palast',
    stop_4_desc: 'Palast der osmanischen Sultane',
    stop_5_name: 'Großer Basar',
    stop_5_desc: 'Ältester überdachter Markt der Welt',
    stop_6_name: 'Gewürzbasar',
    stop_6_desc: 'Paradies der Gewürze und Turkish Delight',
    stop_7_name: 'Bosporus-Tour (Optional)',
    stop_7_desc: 'Kurze Bosporus-Kreuzfahrt',
    stop_8_name: 'Galata-Turm',
    stop_8_desc: 'Panorama-Blick auf Istanbul',
    
    stop_time_1: '30 Min.',
    stop_time_2: '45 Min.',
    stop_time_3: '30 Min.',
    stop_time_4: '1,5 Std.',
    stop_time_5: '45 Min.',
    stop_time_6: '30 Min.',
    stop_time_7: '1 Std.',
    stop_time_8: '30 Min.',
    
    stop_free: '✓ Kostenlos',
    stop_paid: '€ Eintrittsgebühr',
    
    locations_title: 'Weitere Orte zum Hinzufügen',
    loc_1: '🕌 Süleymaniye-Moschee',
    loc_1_desc: 'Meisterwerk des Architekten Sinan',
    loc_2: '🏰 Dolmabahçe-Palast',
    loc_2_desc: 'Palast am Bosporus-Ufer',
    loc_3: '🌉 Galata-Brücke',
    loc_3_desc: 'Fischsandwich und Goldenes Horn',
    loc_4: '🎨 Istiklal-Straße',
    loc_4_desc: 'Shopping und nostalgische Straßenbahn',
    loc_5: '🏛️ Archäologie-Museum',
    loc_5_desc: 'Antike Artefakte',
    loc_6: '🌊 Mädchenturm',
    loc_6_desc: 'Romantisches Symbol am Bosporus',
    loc_7: '🏘️ Balat',
    loc_7_desc: 'Farbenfrohe historische Nachbarschaft',
    loc_8: '🏰 Rumeli-Festung',
    loc_8_desc: 'Historische Festung am Bosporus',
    locations_note: 'Erstellen Sie',
    locations_note_bold: 'Ihre eigene Route',
    locations_note2: 'durch Auswahl der gewünschten Orte!',
    
    included_title: 'In unserem Service enthalten',
    inc_1: 'Komfortables, klimatisiertes Privatfahrzeug (Vito/Sprinter)',
    inc_2: 'Professioneller, erfahrener Fahrer',
    inc_3: '8 Stunden Fahrzeug- und Fahrer-Service',
    inc_4: 'Hotel-Abholung und -Rückgabe',
    inc_5: 'Kraftstoff und Fahrzeugversicherung',
    inc_6: 'Kostenloses Wasser für jeden Passagier',
    inc_7: 'Flexible Routenplanung',
    included_note: 'Hinweis:',
    included_note_desc: 'Museums-Eintrittsgelder, Mittagessen und professioneller Guide-Service sind optional. Wir können ein',
    included_note_bold: 'Komplettpaket',
    included_note_desc2: 'nach Ihrer Anfrage anbieten!',
    
    how_title: 'Wie funktioniert es?',
    how_1_title: 'Kontaktieren Sie uns',
    how_1_desc: 'Erreichen Sie uns per WhatsApp, Telefon oder E-Mail',
    how_2_title: 'Bestimmen Sie Ihre Route',
    how_2_desc: 'Welche Orte möchten Sie sehen? Wie viele Personen?',
    how_3_title: 'Individuelles Angebot erhalten',
    how_3_desc: 'Individuelle Istanbul-Route und Preisangebot für Sie',
    how_4_title: 'Reservierung vornehmen',
    how_4_desc: 'Datum und Zeit festlegen, genießen Sie sich!',
    
    photo_title: 'Fotografie-Tipps',
    photo_1: '📸 Sultanahmet ist frühmorgens am wenigsten überfüllt (08:00-10:00)',
    photo_2: '🌅 Sonnenuntergang vom Galata-Turm ist atemberaubend',
    photo_3: '🕌 Verwenden Sie keinen Blitz in der Hagia Sophia',
    photo_4: '🌉 Abendlichter sind ideal für Bosporus-Fotos von der Galata-Brücke',
    photo_5: '🎨 Mittagsstunden bieten das beste Licht für farbenfrohe Häuser in Balat',
    photo_6: '📱 Drohnenflüge sind im Topkapi-Palast verboten',
    
    sidebar_title: '8-Stunden-Privattour',
    sidebar_subtitle: 'Individueller Preis basierend auf Ihren Bedürfnissen',
    sidebar_people: '👥 Wie viele Personen?',
    sidebar_locations: '🗺️ Welche Orte?',
    sidebar_time: '🕐 Startzeit?',
    sidebar_extras: '🍽️ Guide/Mahlzeit?',
    sidebar_result: '= Ihr individueller Preis!',
    sidebar_whatsapp: 'Angebot per WhatsApp',
    sidebar_call: 'Jetzt anrufen: 0501 620 69 52',
    sidebar_support: '24/7 Kundensupport',
    sidebar_note: '🎯 Überraschungsorganisation für besondere Anlässe! Rufen Sie uns für Details an.',
  },
  
  ru: {
    nav_back: 'Все туры',
    hero_title: '8-часовой тур по Стамбулу',
    hero_hours: 'Часов',
    hero_private: 'Частный тур',
    hero_special: 'Специальное предложение',
    
    overview_title: 'Откройте Стамбул за 8 часов',
    overview_p1: 'Следуйте по следам истории и культуры в вашем 8-часовом частном туре по Стамбулу, волшебному городу, соединяющему два континента! Испытайте незабываемые моменты в великолепных памятниках Султанахмет, уникальных видах Босфора и красочных районах города.',
    overview_p2_bold: 'Частный автомобиль и водитель для вас!',
    overview_p2: 'Начните в удобное для вас время, исследуйте в своем темпе. Профессиональный гид, обед и входные билеты в музеи опциональны. Откройте сердце Стамбула с нашими комфортными автомобилями!',
    
    route_title: 'Примерный маршрут',
    route_subtitle: 'Маршрут ниже - это всего лишь',
    route_subtitle_bold: 'пример',
    route_subtitle2: '. Мы можем создать индивидуальный маршрут для вас!',
    route_custom: 'Индивидуальный маршрут для вас:',
    route_custom_desc: 'Программа выше - это всего лишь пример. Вы можете добавлять или удалять места по желанию!',
    
    stop_1_name: 'Мечеть Султанахмет (Голубая мечеть)',
    stop_1_desc: 'Шедевр османской архитектуры',
    stop_2_name: 'Айя-София',
    stop_2_desc: 'Слияние византийской и османской истории',
    stop_3_name: 'Цистерна Базилика',
    stop_3_desc: 'Подземное водохранилище, головы Медузы',
    stop_4_name: 'Дворец Топкапы',
    stop_4_desc: 'Дворец османских султанов',
    stop_5_name: 'Гранд Базар',
    stop_5_desc: 'Старейший крытый рынок в мире',
    stop_6_name: 'Египетский базар',
    stop_6_desc: 'Рай специй и рахат-лукума',
    stop_7_name: 'Тур по Босфору (опционально)',
    stop_7_desc: 'Короткий круиз по Босфору',
    stop_8_name: 'Башня Галата',
    stop_8_desc: 'Панорамный вид на Стамбул',
    
    stop_time_1: '30 мин',
    stop_time_2: '45 мин',
    stop_time_3: '30 мин',
    stop_time_4: '1,5 часа',
    stop_time_5: '45 мин',
    stop_time_6: '30 мин',
    stop_time_7: '1 час',
    stop_time_8: '30 мин',
    
    stop_free: '✓ Бесплатно',
    stop_paid: '€ Входной билет',
    
    locations_title: 'Другие места для добавления',
    loc_1: '🕌 Мечеть Сулеймание',
    loc_1_desc: 'Шедевр архитектора Синана',
    loc_2: '🏰 Дворец Долмабахче',
    loc_2_desc: 'Дворец на берегу Босфора',
    loc_3: '🌉 Галатский мост',
    loc_3_desc: 'Рыбный сэндвич и вид на Золотой Рог',
    loc_4: '🎨 Улица Истикляль',
    loc_4_desc: 'Шоппинг и ностальгический трамвай',
    loc_5: '🏛️ Археологический музей',
    loc_5_desc: 'Древние артефакты',
    loc_6: '🌊 Девичья башня',
    loc_6_desc: 'Романтический символ на Босфоре',
    loc_7: '🏘️ Балат',
    loc_7_desc: 'Красочный исторический район',
    loc_8: '🏰 Крепость Румели',
    loc_8_desc: 'Историческая крепость на Босфоре',
    locations_note: 'Создайте',
    locations_note_bold: 'свой собственный маршрут',
    locations_note2: ', выбрав нужные места!',
    
    included_title: 'Включено в наш сервис',
    inc_1: 'Комфортный автомобиль с кондиционером (Vito/Sprinter)',
    inc_2: 'Профессиональный опытный водитель',
    inc_3: '8 часов обслуживания автомобиля и водителя',
    inc_4: 'Трансфер из отеля и обратно',
    inc_5: 'Топливо и страховка автомобиля',
    inc_6: 'Бесплатная вода для каждого пассажира',
    inc_7: 'Гибкое планирование маршрута',
    included_note: 'Примечание:',
    included_note_desc: 'Входные билеты в музеи, обед и услуги профессионального гида опциональны. Мы можем предложить',
    included_note_bold: 'полный пакет',
    included_note_desc2: 'по вашему запросу!',
    
    how_title: 'Как это работает?',
    how_1_title: 'Свяжитесь с нами',
    how_1_desc: 'Свяжитесь с нами через WhatsApp, телефон или электронную почту',
    how_2_title: 'Определите свой маршрут',
    how_2_desc: 'Какие места вы хотите посетить? Сколько человек?',
    how_3_title: 'Получите индивидуальное предложение',
    how_3_desc: 'Индивидуальный маршрут по Стамбулу и цена для вас',
    how_4_title: 'Забронируйте',
    how_4_desc: 'Выберите дату и время, наслаждайтесь!',
    
    photo_title: 'Советы по фотографии',
    photo_1: '📸 Султанахмет наименее многолюден рано утром (08:00-10:00)',
    photo_2: '🌅 Вид на закат с башни Галата потрясающий',
    photo_3: '🕌 Не используйте вспышку внутри Айя-Софии',
    photo_4: '🌉 Вечерние огни идеальны для фото Босфора с Галатского моста',
    photo_5: '🎨 Полуденные часы дают лучший свет для цветных домов в Балате',
    photo_6: '📱 Полеты дронов запрещены во дворце Топкапы',
    
    sidebar_title: '8-часовой частный тур',
    sidebar_subtitle: 'Индивидуальная цена в зависимости от ваших потребностей',
    sidebar_people: '👥 Сколько человек?',
    sidebar_locations: '🗺️ Какие места?',
    sidebar_time: '🕐 Время начала?',
    sidebar_extras: '🍽️ Гид/Еда?',
    sidebar_result: '= Ваша индивидуальная цена!',
    sidebar_whatsapp: 'Получить предложение в WhatsApp',
    sidebar_call: 'Позвоните сейчас: 0501 620 69 52',
    sidebar_support: 'Поддержка клиентов 24/7',
    sidebar_note: '🎯 Сюрпризная организация для особых случаев! Звоните для подробностей.',
  },
  
  ar: {
    nav_back: 'جميع الجولات',
    hero_title: 'جولة إسطنبول 8 ساعات',
    hero_hours: 'ساعات',
    hero_private: 'جولة خاصة',
    hero_special: 'عرض سعر خاص',
    
    overview_title: 'اكتشف إسطنبول في 8 ساعات',
    overview_p1: 'تتبع آثار التاريخ والثقافة في جولتك الخاصة لمدة 8 ساعات في إسطنبول، المدينة السحرية التي تربط بين قارتين! اختبر لحظات لا تُنسى في معالم السلطان أحمد الرائعة، والمناظر الفريدة للبوسفور، والأحياء الملونة للمدينة.',
    overview_p2_bold: 'خدمة مركبة وسائق خاصة لك!',
    overview_p2: 'ابدأ في الوقت المفضل لديك، استكشف بوتيرتك الخاصة. المرشد المحترف والغداء ورسوم دخول المتاحف اختيارية. اكتشف قلب إسطنبول بمركباتنا المريحة!',
    
    route_title: 'مسار نموذجي',
    route_subtitle: 'المسار أدناه مجرد',
    route_subtitle_bold: 'نموذج',
    route_subtitle2: '. يمكننا إنشاء مسار مخصص لك!',
    route_custom: 'مسار مخصص لك:',
    route_custom_desc: 'البرنامج أعلاه مجرد نموذج. يمكنك إضافة أو إزالة الأماكن حسب رغبتك!',
    
    stop_1_name: 'مسجد السلطان أحمد (المسجد الأزرق)',
    stop_1_desc: 'تحفة العمارة العثمانية',
    stop_2_name: 'آيا صوفيا',
    stop_2_desc: 'اندماج التاريخ البيزنطي والعثماني',
    stop_3_name: 'صهريج البازيليك',
    stop_3_desc: 'خزان مياه تحت الأرض، رؤوس ميدوسا',
    stop_4_name: 'قصر توبكابي',
    stop_4_desc: 'قصر السلاطين العثمانيين',
    stop_5_name: 'البازار الكبير',
    stop_5_desc: 'أقدم سوق مغطى في العالم',
    stop_6_name: 'بازار التوابل',
    stop_6_desc: 'جنة التوابل والحلقوم التركي',
    stop_7_name: 'جولة البوسفور (اختياري)',
    stop_7_desc: 'رحلة بحرية قصيرة في البوسفور',
    stop_8_name: 'برج غلطة',
    stop_8_desc: 'إطلالة بانورامية على إسطنبول',
    
    stop_time_1: '30 دقيقة',
    stop_time_2: '45 دقيقة',
    stop_time_3: '30 دقيقة',
    stop_time_4: '1.5 ساعة',
    stop_time_5: '45 دقيقة',
    stop_time_6: '30 دقيقة',
    stop_time_7: '1 ساعة',
    stop_time_8: '30 دقيقة',
    
    stop_free: '✓ مجاني',
    stop_paid: '€ رسوم الدخول',
    
    locations_title: 'أماكن أخرى للإضافة',
    loc_1: '🕌 مسجد سليمانية',
    loc_1_desc: 'تحفة المعماري سنان',
    loc_2: '🏰 قصر دولما بهجة',
    loc_2_desc: 'قصر على شاطئ البوسفور',
    loc_3: '🌉 جسر غلطة',
    loc_3_desc: 'سمك السندويش ومنظر القرن الذهبي',
    loc_4: '🎨 شارع الاستقلال',
    loc_4_desc: 'التسوق والترام الحنين',
    loc_5: '🏛️ متحف الآثار',
    loc_5_desc: 'القطع الأثرية القديمة',
    loc_6: '🌊 برج الفتاة',
    loc_6_desc: 'رمز رومانسي على البوسفور',
    loc_7: '🏘️ بلاط',
    loc_7_desc: 'حي تاريخي ملون',
    loc_8: '🏰 قلعة روملي',
    loc_8_desc: 'قلعة تاريخية على البوسفور',
    locations_note: 'أنشئ',
    locations_note_bold: 'مسارك الخاص',
    locations_note2: 'من خلال اختيار الأماكن التي تريدها!',
    
    included_title: 'متضمن في خدمتنا',
    inc_1: 'مركبة خاصة مريحة مكيفة (Vito/Sprinter)',
    inc_2: 'سائق محترف ذو خبرة',
    inc_3: '8 ساعات خدمة مركبة وسائق',
    inc_4: 'استقبال من الفندق والعودة',
    inc_5: 'الوقود وتأمين المركبة',
    inc_6: 'ماء مجاني لكل راكب',
    inc_7: 'تخطيط مسار مرن',
    included_note: 'ملاحظة:',
    included_note_desc: 'رسوم دخول المتاحف والغداء وخدمة المرشد المحترف اختيارية. يمكننا تقديم',
    included_note_bold: 'باقة كاملة',
    included_note_desc2: 'حسب طلبك!',
    
    how_title: 'كيف يعمل؟',
    how_1_title: 'اتصل بنا',
    how_1_desc: 'تواصل معنا عبر WhatsApp أو الهاتف أو البريد الإلكتروني',
    how_2_title: 'حدد مسارك',
    how_2_desc: 'ما هي الأماكن التي تريد رؤيتها؟ كم عدد الأشخاص؟',
    how_3_title: 'احصل على عرض مخصص',
    how_3_desc: 'مسار إسطنبول مخصص وعرض سعر لك',
    how_4_title: 'قم بالحجز',
    how_4_desc: 'حدد التاريخ والوقت، استمتع!',
    
    photo_title: 'نصائح التصوير',
    photo_1: '📸 السلطان أحمد أقل ازدحامًا في الصباح الباكر (08:00-10:00)',
    photo_2: '🌅 منظر غروب الشمس من برج غلطة رائع',
    photo_3: '🕌 لا تستخدم الفلاش داخل آيا صوفيا',
    photo_4: '🌉 أضواء المساء مثالية لصور البوسفور من جسر غلطة',
    photo_5: '🎨 ساعات الظهيرة توفر أفضل إضاءة للمنازل الملونة في بلاط',
    photo_6: '📱 رحلات الطائرات بدون طيار محظورة في قصر توبكابي',
    
    sidebar_title: 'جولة خاصة 8 ساعات',
    sidebar_subtitle: 'سعر مخصص بناءً على احتياجاتك',
    sidebar_people: '👥 كم عدد الأشخاص؟',
    sidebar_locations: '🗺️ أي أماكن؟',
    sidebar_time: '🕐 وقت البدء؟',
    sidebar_extras: '🍽️ مرشد/وجبة؟',
    sidebar_result: '= سعرك المخصص!',
    sidebar_whatsapp: 'احصل على عرض عبر WhatsApp',
    sidebar_call: 'اتصل الآن: 0501 620 69 52',
    sidebar_support: 'دعم العملاء 24/7',
    sidebar_note: '🎯 تنظيم مفاجأة للمناسبات الخاصة! اتصل بنا للحصول على التفاصيل.',
  }
};

  const t = (key: keyof typeof translations.tr) => translations[language][key];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
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

      {/* Hero Image */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532713/train-7824162_1920_pwl8qb.jpg"
          alt="8 Saatlik İstanbul Turu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-playfair font-black mb-4 drop-shadow-2xl">
  {t('hero_title')}
</h1>
<div className="flex flex-wrap gap-4 mb-4">
  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
    <Clock className="w-5 h-5" />
    <span className="font-semibold">8 {t('hero_hours')}</span>
  </div>
  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
    <Users className="w-5 h-5" />
    <span className="font-semibold">{t('hero_private')}</span>
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
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('overview_title')}</h2>
</div>
<p className="text-gray-700 leading-relaxed text-lg mb-4">
  {t('overview_p1')}
</p>
<p className="text-gray-700 leading-relaxed text-lg">
  <strong>{t('overview_p2_bold')}</strong> {t('overview_p2')}
</p>
              </motion.div>

              {/* Örnek Program */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('route_title')}</h2>
</div>

<p className="text-gray-600 mb-6">
  {t('route_subtitle')} <strong>{t('route_subtitle_bold')}</strong>{t('route_subtitle2')}
</p>

                <div className="space-y-4">
                  {[
  { 
    name: t('stop_1_name'), 
    desc: t('stop_1_desc'),
    time: t('stop_time_1'),
    free: true 
  },
  { 
    name: t('stop_2_name'), 
    desc: t('stop_2_desc'),
    time: t('stop_time_2'),
    free: false 
  },
  { 
    name: t('stop_3_name'), 
    desc: t('stop_3_desc'),
    time: t('stop_time_3'),
    free: false 
  },
  { 
    name: t('stop_4_name'), 
    desc: t('stop_4_desc'),
    time: t('stop_time_4'),
    free: false 
  },
  { 
    name: t('stop_5_name'), 
    desc: t('stop_5_desc'),
    time: t('stop_time_5'),
    free: true 
  },
  { 
    name: t('stop_6_name'), 
    desc: t('stop_6_desc'),
    time: t('stop_time_6'),
    free: true 
  },
  { 
    name: t('stop_7_name'), 
    desc: t('stop_7_desc'),
    time: t('stop_time_7'),
    free: false 
  },
  { 
    name: t('stop_8_name'), 
    desc: t('stop_8_desc'),
    time: t('stop_time_8'),
    free: false 
  }
].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition border-l-4 border-primary-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-bold text-gray-900 mb-1">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-xs text-gray-500">{item.time}</p>
                           <span className={`text-xs font-semibold ${item.free ? 'text-green-600' : 'text-amber-600'}`}>
  {item.free ? t('stop_free') : t('stop_paid')}
</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-primary-50 to-accent/10 border-l-4 border-primary-500 rounded-lg">
                  <p className="text-gray-800 font-semibold">
                    ✨ <strong>Size Özel Rota:</strong> Yukarıdaki program sadece örnektir. 
                    İstediğiniz yerleri ekleyip çıkarabiliriz!
                  </p>
                </div>
              </motion.div>

              {/* Alternatif Lokasyonlar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">{t('locations_title')}</h2>

<div className="grid md:grid-cols-2 gap-4">
  {[
    { name: t('loc_1'), desc: t('loc_1_desc') },
    { name: t('loc_2'), desc: t('loc_2_desc') },
    { name: t('loc_3'), desc: t('loc_3_desc') },
    { name: t('loc_4'), desc: t('loc_4_desc') },
    { name: t('loc_5'), desc: t('loc_5_desc') },
    { name: t('loc_6'), desc: t('loc_6_desc') },
    { name: t('loc_7'), desc: t('loc_7_desc') },
    { name: t('loc_8'), desc: t('loc_8_desc') }
  ].map((place, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-md transition group">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600 transition">{place.name}</h3>
                      <p className="text-sm text-gray-600">{place.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
  💡 {t('locations_note')} <strong>{t('locations_note_bold')}</strong> {t('locations_note2')}
</p>
              </motion.div>

              {/* Transfer Hizmeti */}
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
  {[
    t('inc_1'),
    t('inc_2'),
    t('inc_3'),
    t('inc_4'),
    t('inc_5'),
    t('inc_6'),
    t('inc_7')
  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                  <p className="text-blue-900 font-semibold">
  ℹ️ <strong>{t('included_note')}</strong> {t('included_note_desc')} <strong>{t('included_note_bold')}</strong> {t('included_note_desc2')}
</p>
                </div>
              </motion.div>

              {/* Nasıl Çalışır */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">{t('how_title')}</h2>
<div className="space-y-6">
  {[
    { step: '1', title: t('how_1_title'), desc: t('how_1_desc') },
    { step: '2', title: t('how_2_title'), desc: t('how_2_desc') },
    { step: '3', title: t('how_3_title'), desc: t('how_3_desc') },
    { step: '4', title: t('how_4_title'), desc: t('how_4_desc') }
  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fotoğraf İpuçları */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('photo_title')}</h2>
</div>
<div className="space-y-3">
  {[
    t('photo_1'),
    t('photo_2'),
    t('photo_3'),
    t('photo_4'),
    t('photo_5'),
    t('photo_6')
  ].map((tip, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-white rounded-lg border-l-4 border-purple-400">
                      <span className="text-purple-700 font-semibold">{tip}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sağ Kolon - İletişim Kartı */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-2xl p-8 sticky top-24"
              >
                <div className="text-center mb-6">
  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
    <Landmark className="w-10 h-10 text-white" />
  </div>
  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('sidebar_title')}</h3>
  <p className="text-gray-600">{t('sidebar_subtitle')}</p>
</div>

<div className="space-y-4 mb-6">
  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl">
    <p className="text-center text-gray-700 font-semibold">
      {t('sidebar_people')}<br />
      {t('sidebar_locations')}<br />
      {t('sidebar_time')}<br />
      {t('sidebar_extras')}<br />
      <span className="text-red-600 text-xl font-black">{t('sidebar_result')}</span>
    </p>
  </div>
</div>

                <motion.a
  href="https://wa.me/905016206952?text=Merhaba!%208%20Saatlik%20İstanbul%20Turu%20hakkında%20bilgi%20almak%20istiyorum.%20Size%20özel%20fiyat%20teklifi%20alabilir%20miyim?"
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

<div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
  <p className="text-xs text-red-900 font-semibold">
    {t('sidebar_note')}
  </p>
</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}