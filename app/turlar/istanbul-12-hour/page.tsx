'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Clock, Users, CheckCircle, ArrowLeft, Phone, Sparkles, Camera, Landmark, Ship } from 'lucide-react';
import Link from 'next/link';

export default function Istanbul12HourDetay() {
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
      hero_title: '12 Saatlik İstanbul Turu',
      hero_hours: 'Saat',
      hero_bosphorus: 'Boğaz Turu Dahil',
      hero_special: 'Özel Fiyat Teklifi',
      
      overview_title: 'İstanbul\'u 12 Saatte Tamamlayın',
      overview_p1: '12 saatlik kapsamlı İstanbul turunuzda hem tarihi yarımada, hem modern şehir, hem de Boğaz\'ın muhteşem manzarasını keşfedin! Sabahtan akşama kadar İstanbul\'un tüm güzelliklerini görün, fotoğraflar çekin ve unutulmaz anılar biriktirin.',
      overview_p2_bold: 'Size özel araç, şoför ve Boğaz turu dahil!',
      overview_p2: 'İstediğiniz saatte başlayın, kendi hızınızda gezin. Profesyonel rehber, öğle yemeği ve müze giriş ücretleri isteğe bağlıdır. Konforlu araçlarımızla İstanbul\'un her köşesini keşfedin!',
      
      route_title: 'Örnek Rota (12 Saat)',
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
      stop_5_name: 'Öğle Yemeği Molası',
      stop_5_desc: 'Fatih bölgesi veya Eminönü',
      stop_6_name: 'Kapalı Çarşı',
      stop_6_desc: 'Dünyanın en eski kapalı çarşısı',
      stop_7_name: 'Galata Kulesi',
      stop_7_desc: 'Panoramik İstanbul manzarası',
      stop_8_name: 'İstiklal Caddesi',
      stop_8_desc: 'Nostaljik tramvay ve alışveriş',
      stop_9_name: 'Dolmabahçe Sarayı (Dış Görünüm)',
      stop_9_desc: 'Boğaz kıyısında saray',
      stop_10_name: 'Boğaz Turu',
      stop_10_desc: 'Teknede 2 saat manzara keyfi',
      
      stop_time_1: '30 dk',
      stop_time_2: '45 dk',
      stop_time_3: '30 dk',
      stop_time_4: '1.5 saat',
      stop_time_5: '1 saat',
      stop_time_6: '45 dk',
      stop_time_7: '30 dk',
      stop_time_8: '45 dk',
      stop_time_9: '20 dk',
      stop_time_10: '2 saat',
      
      stop_free: '✓ Ücretsiz',
      stop_extra: '€ Ekstra',
      
      bosphorus_title: 'Boğaz Turu (Dahil)',
      bosphorus_p1: '12 saatlik turumuzda',
      bosphorus_p1_bold: '2 saatlik Boğaz turu da dahildir!',
      bosphorus_p2: 'Halka açık tekne turlarına katılarak İstanbul Boğazı\'nın iki yakasını, sarayları, yalıları ve Boğaz köprülerini göreceksiniz.',
      bosphorus_1: 'Dolmabahçe Sarayı',
      bosphorus_1_desc: 'Boğaz kıyısında',
      bosphorus_2: 'Boğaziçi Köprüsü',
      bosphorus_2_desc: 'Işıklı manzara',
      bosphorus_3: 'Rumeli Hisarı',
      bosphorus_3_desc: 'Tarihi kale',
      bosphorus_4: 'Tarihi Yalılar',
      bosphorus_4_desc: 'Osmanlı yapıları',
      bosphorus_note: '🚢 Özel tekne turu için ekstra ücret karşılığı düzenleme yapabiliriz!',
      
      included_title: 'Hizmetimize Dahil',
      inc_1: 'Konforlu, klimali özel araç (Vito/Sprinter)',
      inc_2: 'Profesyonel, deneyimli şoför',
      inc_3: '12 saat araç ve şoför hizmeti',
      inc_4: '2 saatlik Boğaz turu (halka açık tekne)',
      inc_5: 'Otel karşılama ve bırakma',
      inc_6: 'Yakıt ve araç sigortası',
      inc_7: 'Her yolcu için ücretsiz su',
      inc_8: 'Esnek rota planlaması',
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
      how_3_desc: 'Size özel 12 saatlik İstanbul rotası ve fiyat',
      how_4_title: 'Rezervasyon Yapın',
      how_4_desc: 'Tarih ve saat belirleyin, keyfinize bakın!',
      
      photo_title: '12 Saatte En İyi Fotoğraflar',
      photo_1: '📸 Sabah 08:00-10:00 Sultanahmet en az kalabalık',
      photo_2: '🌅 Öğleden sonra Galata Kulesi\'nden panoramik manzara',
      photo_3: '🚢 Boğaz turunda gün batımı saatleri ideal (öğleden sonra turları tercih edin)',
      photo_4: '🌉 Akşam Boğaz köprüleri ışıklandığında muhteşem',
      photo_5: '📱 Boğaz turunda telefon şarjınızı kontrol edin',
      photo_6: '🎥 Boğaz turunda video çekmek için Gimbal kullanın',
      
      sidebar_title: '12 Saat + Boğaz Turu',
      sidebar_subtitle: 'İhtiyaçlarınıza göre özel fiyat',
      sidebar_people: '👥 Kaç Kişi?',
      sidebar_locations: '🗺️ Hangi Lokasyonlar?',
      sidebar_time: '🕐 Başlangıç Saati?',
      sidebar_extras: '🍽️ Rehber/Yemek?',
      sidebar_result: '= Size Özel Fiyat!',
      sidebar_whatsapp: 'WhatsApp ile Teklif Al',
      sidebar_call: 'Hemen Ara: 0501 620 69 52',
      sidebar_support: '7/24 Müşteri Desteği',
      sidebar_note: '🌊 Boğaz turu dahil! Özel tekne turu için ekstra düzenleme yapılabilir.',
    },
    
    en: {
      nav_back: 'All Tours',
      hero_title: '12 Hour Istanbul Tour',
      hero_hours: 'Hours',
      hero_bosphorus: 'Bosphorus Tour Included',
      hero_special: 'Special Price Offer',
      
      overview_title: 'Complete Istanbul in 12 Hours',
      overview_p1: 'Discover the historic peninsula, modern city, and magnificent Bosphorus views in your comprehensive 12-hour Istanbul tour! See all of Istanbul\'s beauties from morning to evening, take photos and create unforgettable memories.',
      overview_p2_bold: 'Private vehicle, driver and Bosphorus tour included!',
      overview_p2: 'Start at your preferred time, explore at your own pace. Professional guide, lunch and museum entrance fees are optional. Discover every corner of Istanbul with our comfortable vehicles!',
      
      route_title: 'Sample Route (12 Hours)',
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
      stop_5_name: 'Lunch Break',
      stop_5_desc: 'Fatih district or Eminönü',
      stop_6_name: 'Grand Bazaar',
      stop_6_desc: 'World\'s oldest covered market',
      stop_7_name: 'Galata Tower',
      stop_7_desc: 'Panoramic Istanbul view',
      stop_8_name: 'Istiklal Street',
      stop_8_desc: 'Nostalgic tram and shopping',
      stop_9_name: 'Dolmabahce Palace (Exterior)',
      stop_9_desc: 'Palace on the Bosphorus shore',
      stop_10_name: 'Bosphorus Tour',
      stop_10_desc: '2 hours of scenic cruise',
      
      stop_time_1: '30 min',
      stop_time_2: '45 min',
      stop_time_3: '30 min',
      stop_time_4: '1.5 hours',
      stop_time_5: '1 hour',
      stop_time_6: '45 min',
      stop_time_7: '30 min',
      stop_time_8: '45 min',
      stop_time_9: '20 min',
      stop_time_10: '2 hours',
      
      stop_free: '✓ Free',
      stop_extra: '€ Extra',
      
      bosphorus_title: 'Bosphorus Tour (Included)',
      bosphorus_p1: 'In our 12-hour tour,',
      bosphorus_p1_bold: '2-hour Bosphorus tour is also included!',
      bosphorus_p2: 'Join public boat tours to see both sides of the Istanbul Bosphorus, palaces, waterside mansions and Bosphorus bridges.',
      bosphorus_1: 'Dolmabahce Palace',
      bosphorus_1_desc: 'On the Bosphorus shore',
      bosphorus_2: 'Bosphorus Bridge',
      bosphorus_2_desc: 'Illuminated view',
      bosphorus_3: 'Rumeli Fortress',
      bosphorus_3_desc: 'Historic fortress',
      bosphorus_4: 'Historic Mansions',
      bosphorus_4_desc: 'Ottoman buildings',
      bosphorus_note: '🚢 We can arrange a private boat tour for an additional fee!',
      
      included_title: 'Included in Our Service',
      inc_1: 'Comfortable, air-conditioned private vehicle (Vito/Sprinter)',
      inc_2: 'Professional, experienced driver',
      inc_3: '12 hours vehicle and driver service',
      inc_4: '2-hour Bosphorus tour (public boat)',
      inc_5: 'Hotel pick-up and drop-off',
      inc_6: 'Fuel and vehicle insurance',
      inc_7: 'Free water for each passenger',
      inc_8: 'Flexible route planning',
      included_note: 'Note:',
      included_note_desc: 'Museum entrance fees, lunch and professional guide service are optional. We can offer a',
      included_note_bold: 'full package',
      included_note_desc2: 'according to your request!',
      
      how_title: 'How It Works?',
      how_1_title: 'Contact Us',
      how_1_desc: 'Reach us via WhatsApp, phone or email',
      how_2_title: 'Determine Your Route',
      how_2_desc: 'Which places do you want to see? How many people?',
      how_3_title: 'Get Custom Quote',
      how_3_desc: 'Custom 12-hour Istanbul route and price for you',
      how_4_title: 'Make Reservation',
      how_4_desc: 'Set date and time, enjoy yourself!',
      
      photo_title: 'Best Photos in 12 Hours',
      photo_1: '📸 Sultanahmet is least crowded 08:00-10:00 AM',
      photo_2: '🌅 Afternoon panoramic view from Galata Tower',
      photo_3: '🚢 Sunset hours on Bosphorus tour are ideal (prefer afternoon tours)',
      photo_4: '🌉 Evening when Bosphorus bridges are illuminated is magnificent',
      photo_5: '📱 Check your phone charge during Bosphorus tour',
      photo_6: '🎥 Use Gimbal for shooting videos during Bosphorus tour',
      
      sidebar_title: '12 Hours + Bosphorus Tour',
      sidebar_subtitle: 'Custom price based on your needs',
      sidebar_people: '👥 How Many People?',
      sidebar_locations: '🗺️ Which Locations?',
      sidebar_time: '🕐 Start Time?',
      sidebar_extras: '🍽️ Guide/Meal?',
      sidebar_result: '= Your Custom Price!',
      sidebar_whatsapp: 'Get Quote via WhatsApp',
      sidebar_call: 'Call Now: 0501 620 69 52',
      sidebar_support: '24/7 Customer Support',
      sidebar_note: '🌊 Bosphorus tour included! Private boat tour can be arranged for extra.',
    },
    
    de: {
      nav_back: 'Alle Touren',
      hero_title: '12-Stunden Istanbul Tour',
      hero_hours: 'Stunden',
      hero_bosphorus: 'Bosporus-Tour inklusive',
      hero_special: 'Sonderpreisangebot',
      
      overview_title: 'Istanbul in 12 Stunden vollständig erleben',
      overview_p1: 'Entdecken Sie auf Ihrer umfassenden 12-stündigen Istanbul-Tour die historische Halbinsel, die moderne Stadt und die herrlichen Bosporus-Ausblicke! Sehen Sie von morgens bis abends alle Schönheiten Istanbuls, machen Sie Fotos und schaffen Sie unvergessliche Erinnerungen.',
      overview_p2_bold: 'Privates Fahrzeug, Fahrer und Bosporus-Tour inklusive!',
      overview_p2: 'Starten Sie zu Ihrer bevorzugten Zeit, erkunden Sie in Ihrem eigenen Tempo. Professioneller Guide, Mittagessen und Museums-Eintrittsgelder sind optional. Entdecken Sie jede Ecke Istanbuls mit unseren komfortablen Fahrzeugen!',
      
      route_title: 'Beispielroute (12 Stunden)',
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
      stop_5_name: 'Mittagspause',
      stop_5_desc: 'Fatih-Bezirk oder Eminönü',
      stop_6_name: 'Großer Basar',
      stop_6_desc: 'Ältester überdachter Markt der Welt',
      stop_7_name: 'Galata-Turm',
      stop_7_desc: 'Panorama-Blick auf Istanbul',
      stop_8_name: 'Istiklal-Straße',
      stop_8_desc: 'Nostalgische Straßenbahn und Shopping',
      stop_9_name: 'Dolmabahçe-Palast (Außenansicht)',
      stop_9_desc: 'Palast am Bosporus-Ufer',
      stop_10_name: 'Bosporus-Tour',
      stop_10_desc: '2 Stunden malerische Kreuzfahrt',
      
      stop_time_1: '30 Min.',
      stop_time_2: '45 Min.',
      stop_time_3: '30 Min.',
      stop_time_4: '1,5 Std.',
      stop_time_5: '1 Std.',
      stop_time_6: '45 Min.',
      stop_time_7: '30 Min.',
      stop_time_8: '45 Min.',
      stop_time_9: '20 Min.',
      stop_time_10: '2 Std.',
      
      stop_free: '✓ Kostenlos',
      stop_extra: '€ Extra',
      
      bosphorus_title: 'Bosporus-Tour (inklusive)',
      bosphorus_p1: 'In unserer 12-Stunden-Tour ist eine',
      bosphorus_p1_bold: '2-stündige Bosporus-Tour ebenfalls enthalten!',
      bosphorus_p2: 'Nehmen Sie an öffentlichen Bootstouren teil, um beide Seiten des Istanbul-Bosporus, Paläste, Villen am Wasser und Bosporus-Brücken zu sehen.',
      bosphorus_1: 'Dolmabahçe-Palast',
      bosphorus_1_desc: 'Am Bosporus-Ufer',
      bosphorus_2: 'Bosporus-Brücke',
      bosphorus_2_desc: 'Beleuchtete Aussicht',
      bosphorus_3: 'Rumeli-Festung',
      bosphorus_3_desc: 'Historische Festung',
      bosphorus_4: 'Historische Villen',
      bosphorus_4_desc: 'Osmanische Gebäude',
      bosphorus_note: '🚢 Wir können eine private Bootstour gegen Aufpreis arrangieren!',
      
      included_title: 'In unserem Service enthalten',
      inc_1: 'Komfortables, klimatisiertes Privatfahrzeug (Vito/Sprinter)',
      inc_2: 'Professioneller, erfahrener Fahrer',
      inc_3: '12 Stunden Fahrzeug- und Fahrer-Service',
      inc_4: '2-stündige Bosporus-Tour (öffentliches Boot)',
      inc_5: 'Hotel-Abholung und -Rückgabe',
      inc_6: 'Kraftstoff und Fahrzeugversicherung',
      inc_7: 'Kostenloses Wasser für jeden Passagier',
      inc_8: 'Flexible Routenplanung',
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
      how_3_desc: 'Individuelle 12-Stunden Istanbul-Route und Preis für Sie',
      how_4_title: 'Reservierung vornehmen',
      how_4_desc: 'Datum und Zeit festlegen, genießen Sie sich!',
      
      photo_title: 'Beste Fotos in 12 Stunden',
      photo_1: '📸 Sultanahmet ist 08:00-10:00 Uhr am wenigsten überfüllt',
      photo_2: '🌅 Nachmittags Panoramablick vom Galata-Turm',
      photo_3: '🚢 Sonnenuntergangsstunden auf Bosporus-Tour sind ideal (bevorzugen Sie Nachmittagstouren)',
      photo_4: '🌉 Abends wenn Bosporus-Brücken beleuchtet sind ist es herrlich',
      photo_5: '📱 Überprüfen Sie Ihre Telefonladung während der Bosporus-Tour',
      photo_6: '🎥 Verwenden Sie Gimbal zum Filmen während der Bosporus-Tour',
      
      sidebar_title: '12 Stunden + Bosporus-Tour',
      sidebar_subtitle: 'Individueller Preis basierend auf Ihren Bedürfnissen',
      sidebar_people: '👥 Wie viele Personen?',
      sidebar_locations: '🗺️ Welche Orte?',
      sidebar_time: '🕐 Startzeit?',
      sidebar_extras: '🍽️ Guide/Mahlzeit?',
      sidebar_result: '= Ihr individueller Preis!',
      sidebar_whatsapp: 'Angebot per WhatsApp',
      sidebar_call: 'Jetzt anrufen: 0501 620 69 52',
      sidebar_support: '24/7 Kundensupport',
      sidebar_note: '🌊 Bosporus-Tour inklusive! Private Bootstour kann extra arrangiert werden.',
    },
    
    ru: {
      nav_back: 'Все туры',
      hero_title: '12-часовой тур по Стамбулу',
      hero_hours: 'Часов',
      hero_bosphorus: 'Тур по Босфору включен',
      hero_special: 'Специальное предложение',
      
      overview_title: 'Полный Стамбул за 12 часов',
      overview_p1: 'Откройте исторический полуостров, современный город и великолепные виды Босфора в вашем всеобъемлющем 12-часовом туре по Стамбулу! Увидьте все красоты Стамбула с утра до вечера, сделайте фотографии и создайте незабываемые воспоминания.',
      overview_p2_bold: 'Частный автомобиль, водитель и тур по Босфору включены!',
      overview_p2: 'Начните в удобное для вас время, исследуйте в своем темпе. Профессиональный гид, обед и входные билеты в музеи опциональны. Откройте каждый уголок Стамбула с нашими комфортными автомобилями!',
      
      route_title: 'Примерный маршрут (12 часов)',
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
      stop_5_name: 'Обеденный перерыв',
      stop_5_desc: 'Район Фатих или Эминёню',
      stop_6_name: 'Гранд Базар',
      stop_6_desc: 'Старейший крытый рынок в мире',
      stop_7_name: 'Башня Галата',
      stop_7_desc: 'Панорамный вид на Стамбул',
      stop_8_name: 'Улица Истикляль',
      stop_8_desc: 'Ностальгический трамвай и шоппинг',
      stop_9_name: 'Дворец Долмабахче (внешний вид)',
      stop_9_desc: 'Дворец на берегу Босфора',
      stop_10_name: 'Тур по Босфору',
      stop_10_desc: '2 часа живописного круиза',
      
      stop_time_1: '30 мин',
      stop_time_2: '45 мин',
      stop_time_3: '30 мин',
      stop_time_4: '1,5 часа',
      stop_time_5: '1 час',
      stop_time_6: '45 мин',
      stop_time_7: '30 мин',
      stop_time_8: '45 мин',
      stop_time_9: '20 мин',
      stop_time_10: '2 часа',
      
      stop_free: '✓ Бесплатно',
      stop_extra: '€ Доп.',
      
      bosphorus_title: 'Тур по Босфору (включено)',
      bosphorus_p1: 'В нашем 12-часовом туре',
      bosphorus_p1_bold: '2-часовой тур по Босфору также включен!',
      bosphorus_p2: 'Присоединяйтесь к общественным лодочным турам, чтобы увидеть обе стороны Стамбульского Босфора, дворцы, прибрежные особняки и мосты через Босфор.',
      bosphorus_1: 'Дворец Долмабахче',
      bosphorus_1_desc: 'На берегу Босфора',
      bosphorus_2: 'Мост через Босфор',
      bosphorus_2_desc: 'Освещенный вид',
      bosphorus_3: 'Крепость Румели',
      bosphorus_3_desc: 'Историческая крепость',
      bosphorus_4: 'Исторические особняки',
      bosphorus_4_desc: 'Османские здания',
      bosphorus_note: '🚢 Мы можем организовать частный лодочный тур за дополнительную плату!',
      
      included_title: 'Включено в наш сервис',
      inc_1: 'Комфортный автомобиль с кондиционером (Vito/Sprinter)',
      inc_2: 'Профессиональный опытный водитель',
      inc_3: '12 часов обслуживания автомобиля и водителя',
      inc_4: '2-часовой тур по Босфору (общественная лодка)',
      inc_5: 'Трансфер из отеля и обратно',
      inc_6: 'Топливо и страховка автомобиля',
      inc_7: 'Бесплатная вода для каждого пассажира',
      inc_8: 'Гибкое планирование маршрута',
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
      how_3_desc: 'Индивидуальный 12-часовой маршрут по Стамбулу и цена для вас',
      how_4_title: 'Забронируйте',
      how_4_desc: 'Выберите дату и время, наслаждайтесь!',
      
      photo_title: 'Лучшие фото за 12 часов',
      photo_1: '📸 Султанахмет наименее многолюден 08:00-10:00',
      photo_2: '🌅 Послеобеденный панорамный вид с башни Галата',
      photo_3: '🚢 Часы заката на туре по Босфору идеальны (предпочитайте послеобеденные туры)',
      photo_4: '🌉 Вечером когда мосты через Босфор освещены - великолепно',
      photo_5: '📱 Проверьте заряд телефона во время тура по Босфору',
      photo_6: '🎥 Используйте Gimbal для съемки видео во время тура по Босфору',
      
      sidebar_title: '12 часов + тур по Босфору',
      sidebar_subtitle: 'Индивидуальная цена в зависимости от ваших потребностей',
      sidebar_people: '👥 Сколько человек?',
      sidebar_locations: '🗺️ Какие места?',
      sidebar_time: '🕐 Время начала?',
      sidebar_extras: '🍽️ Гид/Еда?',
      sidebar_result: '= Ваша индивидуальная цена!',
      sidebar_whatsapp: 'Получить предложение в WhatsApp',
      sidebar_call: 'Позвоните сейчас: 0501 620 69 52',
      sidebar_support: 'Поддержка клиентов 24/7',
      sidebar_note: '🌊 Тур по Босфору включен! Частный лодочный тур может быть организован дополнительно.',
    },
    
    ar: {
      nav_back: 'جميع الجولات',
      hero_title: 'جولة إسطنبول 12 ساعة',
      hero_hours: 'ساعات',
      hero_bosphorus: 'جولة البوسفور مشمولة',
      hero_special: 'عرض سعر خاص',
      
      overview_title: 'إسطنبول الكاملة في 12 ساعة',
      overview_p1: 'اكتشف شبه الجزيرة التاريخية والمدينة الحديثة وإطلالات البوسفور الرائعة في جولتك الشاملة لمدة 12 ساعة في إسطنبول! شاهد جميع جمال إسطنبول من الصباح إلى المساء، التقط الصور وخلق ذكريات لا تُنسى.',
      overview_p2_bold: 'مركبة خاصة وسائق وجولة البوسفور مشمولة!',
      overview_p2: 'ابدأ في الوقت المفضل لديك، استكشف بوتيرتك الخاصة. المرشد المحترف والغداء ورسوم دخول المتاحف اختيارية. اكتشف كل زاوية من إسطنبول بمركباتنا المريحة!',
      
      route_title: 'مسار نموذجي (12 ساعة)',
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
      stop_5_name: 'استراحة الغداء',
      stop_5_desc: 'منطقة الفاتح أو إمينونو',
      stop_6_name: 'البازار الكبير',
      stop_6_desc: 'أقدم سوق مغطى في العالم',
      stop_7_name: 'برج غلطة',
      stop_7_desc: 'إطلالة بانورامية على إسطنبول',
      stop_8_name: 'شارع الاستقلال',
      stop_8_desc: 'الترام الحنين والتسوق',
      stop_9_name: 'قصر دولما بهجة (المنظر الخارجي)',
      stop_9_desc: 'قصر على شاطئ البوسفور',
      stop_10_name: 'جولة البوسفور',
      stop_10_desc: 'ساعتان من الرحلة البحرية الخلابة',
      
      stop_time_1: '30 دقيقة',
      stop_time_2: '45 دقيقة',
      stop_time_3: '30 دقيقة',
      stop_time_4: '1.5 ساعة',
      stop_time_5: '1 ساعة',
      stop_time_6: '45 دقيقة',
      stop_time_7: '30 دقيقة',
      stop_time_8: '45 دقيقة',
      stop_time_9: '20 دقيقة',
      stop_time_10: '2 ساعة',
      
      stop_free: '✓ مجاني',
      stop_extra: '€ إضافي',
      
      bosphorus_title: 'جولة البوسفور (مشمولة)',
      bosphorus_p1: 'في جولتنا لمدة 12 ساعة،',
      bosphorus_p1_bold: 'جولة البوسفور لمدة ساعتين مشمولة أيضًا!',
      bosphorus_p2: 'انضم إلى جولات القوارب العامة لرؤية جانبي البوسفور في إسطنبول، والقصور، والقصور المائية وجسور البوسفور.',
      bosphorus_1: 'قصر دولما بهجة',
      bosphorus_1_desc: 'على شاطئ البوسفور',
      bosphorus_2: 'جسر البوسفور',
      bosphorus_2_desc: 'منظر مضاء',
      bosphorus_3: 'قلعة روملي',
      bosphorus_3_desc: 'قلعة تاريخية',
      bosphorus_4: 'القصور التاريخية',
      bosphorus_4_desc: 'مباني عثمانية',
      bosphorus_note: '🚢 يمكننا ترتيب جولة قارب خاصة مقابل رسوم إضافية!',
      
      included_title: 'متضمن في خدمتنا',
      inc_1: 'مركبة خاصة مريحة مكيفة (Vito/Sprinter)',
      inc_2: 'سائق محترف ذو خبرة',
      inc_3: '12 ساعة خدمة مركبة وسائق',
      inc_4: 'جولة البوسفور لمدة ساعتين (قارب عام)',
      inc_5: 'استقبال من الفندق والعودة',
      inc_6: 'الوقود وتأمين المركبة',
      inc_7: 'ماء مجاني لكل راكب',
      inc_8: 'تخطيط مسار مرن',
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
      how_3_desc: 'مسار إسطنبول المخصص لمدة 12 ساعة والسعر لك',
      how_4_title: 'قم بالحجز',
      how_4_desc: 'حدد التاريخ والوقت، استمتع!',
      
      photo_title: 'أفضل الصور في 12 ساعة',
      photo_1: '📸 السلطان أحمد أقل ازدحامًا 08:00-10:00',
      photo_2: '🌅 منظر بانورامي بعد الظهر من برج غلطة',
      photo_3: '🚢 ساعات غروب الشمس في جولة البوسفور مثالية (فضل جولات بعد الظهر)',
      photo_4: '🌉 المساء عندما تضاء جسور البوسفور رائع',
      photo_5: '📱 تحقق من شحن هاتفك أثناء جولة البوسفور',
      photo_6: '🎥 استخدم Gimbal لتصوير مقاطع الفيديو أثناء جولة البوسفور',
      
      sidebar_title: '12 ساعة + جولة البوسفور',
      sidebar_subtitle: 'سعر مخصص بناءً على احتياجاتك',
      sidebar_people: '👥 كم عدد الأشخاص؟',
      sidebar_locations: '🗺️ أي أماكن؟',
      sidebar_time: '🕐 وقت البدء؟',
      sidebar_extras: '🍽️ مرشد/وجبة؟',
      sidebar_result: '= سعرك المخصص!',
      sidebar_whatsapp: 'احصل على عرض عبر WhatsApp',
      sidebar_call: 'اتصل الآن: 0501 620 69 52',
      sidebar_support: 'دعم العملاء 24/7',
      sidebar_note: '🌊 جولة البوسفور مشمولة! يمكن ترتيب جولة قارب خاصة بشكل إضافي.',
    }
  };

  const t = (key: keyof typeof translations.tr) => translations[language][key];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50">
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
          src="https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/night-4914430_1920_zzh7pj.jpg"
          alt="12 Saatlik İstanbul Turu"
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
                  <span className="font-semibold">12 {t('hero_hours')}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Ship className="w-5 h-5" />
                  <span className="font-semibold">{t('hero_bosphorus')}</span>
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
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-indigo-600" />
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
                      free: false 
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
                      free: true 
                    },
                    { 
                      name: t('stop_9_name'), 
                      desc: t('stop_9_desc'),
                      time: t('stop_time_9'),
                      free: true 
                    },
                    { 
                      name: t('stop_10_name'), 
                      desc: t('stop_10_desc'),
                      time: t('stop_time_10'),
                      free: false 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition border-l-4 border-indigo-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
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
                              {item.free ? t('stop_free') : t('stop_extra')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-primary-50 to-accent/10 border-l-4 border-primary-500 rounded-lg">
                  <p className="text-gray-800 font-semibold">
                    ✨ <strong>{t('route_custom')}</strong> {t('route_custom_desc')}
                  </p>
                </div>
              </motion.div>

              {/* Boğaz Turu Detayları */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Ship className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('bosphorus_title')}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('bosphorus_p1')} <strong>{t('bosphorus_p1_bold')}</strong> {t('bosphorus_p2')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: '🏰', name: t('bosphorus_1'), desc: t('bosphorus_1_desc') },
                    { icon: '🌉', name: t('bosphorus_2'), desc: t('bosphorus_2_desc') },
                    { icon: '🏛️', name: t('bosphorus_3'), desc: t('bosphorus_3_desc') },
                    { icon: '🏘️', name: t('bosphorus_4'), desc: t('bosphorus_4_desc') }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl hover:shadow-md transition">
                      <span className="text-3xl mb-2 block">{item.icon}</span>
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-blue-100 border-l-4 border-blue-500 rounded">
                  <p className="text-blue-900 text-sm font-semibold">
                    {t('bosphorus_note')}
                  </p>
                </div>
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
                    t('inc_7'),
                    t('inc_8')
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
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8"
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
                      <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-pink-600" />
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
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-white rounded-lg border-l-4 border-pink-400">
                      <span className="text-pink-700 font-semibold">{tip}</span>
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
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ship className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('sidebar_title')}</h3>
                  <p className="text-gray-600">{t('sidebar_subtitle')}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                    <p className="text-center text-gray-700 font-semibold">
                      {t('sidebar_people')}<br />
                      {t('sidebar_locations')}<br />
                      {t('sidebar_time')}<br />
                      {t('sidebar_extras')}<br />
                      <span className="text-indigo-600 text-xl font-black">{t('sidebar_result')}</span>
                    </p>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/905016206952?text=Merhaba!%2012%20Saatlik%20İstanbul%20Turu%20%2B%20Boğaz%20Turu%20hakkında%20bilgi%20almak%20istiyorum.%20Size%20özel%20fiyat%20teklifi%20alabilir%20miyim?"
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

                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-xs text-indigo-900 font-semibold">
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