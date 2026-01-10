'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Clock, Users, CheckCircle, ArrowLeft, Phone, Mountain, Sparkles, Wind, Camera } from 'lucide-react';
import Link from 'next/link';

export default function KapadokyaTurDetay() {
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
      hero_title: 'Kapadokya Tur & Transfer',
      hero_custom: 'Size Özel Rota',
      hero_flexible: 'Esnek Grup',
      hero_special: 'Özel Fiyat Teklifi',
      
      overview_title: 'Masallar Diyarı Kapadokya',
      overview_p1: 'Dünyanın en büyüleyici doğal oluşumlarından birine ev sahipliği yapan Kapadokya, peri bacaları, yeraltı şehirleri, kaya kiliseler ve sıcak hava balonlarıyla sizi büyülemeye hazır! UNESCO Dünya Mirası Listesi\'nde yer alan bu eşsiz bölgede, tarihin derinliklerine yolculuk yapacaksınız.',
      overview_p2_bold: 'Her tur isteğinize özel planlanır!',
      overview_p2: 'Süre, rota ve bütçenize uygun paket oluştururuz. Profesyonel şoför ve rehber eşliğinde, konforlu araçlarla mistik Kapadokya\'da unutulmaz anlar yaşayın!',
      
      locations_title: 'Bu Turda Neler Görebilirsiniz?',
      locations_subtitle: 'Size özel rotanıza göre aşağıdaki lokasyonlardan seçim yapabilirsiniz:',
      loc_1: '🎈 Sıcak Hava Balonu',
      loc_1_desc: 'Gün doğumunda bulutların üzerinde',
      loc_2: '🏛️ Göreme Açık Hava Müzesi',
      loc_2_desc: 'UNESCO Dünya Mirası, kaya kiliseleri',
      loc_3: '🍄 Paşabağ Peri Bacaları',
      loc_3_desc: 'Mantar şeklindeki doğal formasyonlar',
      loc_4: '🏰 Uçhisar Kalesi',
      loc_4_desc: 'En yüksek kaya kale, panoramik manzara',
      loc_5: '⛏️ Derinkuyu Yeraltı Şehri',
      loc_5_desc: '8 katlı, 20.000 kişilik antik kent',
      loc_6: '⛏️ Kaymaklı Yeraltı Şehri',
      loc_6_desc: 'İç içe geçmiş tüneller ve odalar',
      loc_7: '🌄 Güvercinlik Vadisi',
      loc_7_desc: 'Romantik gün batımı noktası',
      loc_8: '🏺 Avanos',
      loc_8_desc: 'Çömlekçilik atölyeleri, Kızılırmak kenarı',
      loc_9: '🌹 Gül Vadisi (Rose Valley)',
      loc_9_desc: 'Pembe kayalıklar, trekking',
      loc_10: '❤️ Aşk Vadisi (Love Valley)',
      loc_10_desc: 'İkonik peri bacaları',
      loc_11: '🏞️ Ihlara Vadisi',
      loc_11_desc: 'Kanyonlar, nehir kenarı yürüyüş',
      loc_12: '🏛️ Selime Katedrali',
      loc_12_desc: 'Kayalara oyulmuş dev kilise',
      loc_13: '🏠 Çavuşin Köyü',
      loc_13_desc: 'Tarihi taş evler, kiliseler',
      loc_14: '🌙 Ortahisar Kalesi',
      loc_14_desc: 'Kaya oyma kale',
      loc_15: '🍷 Şarap Evleri',
      loc_15_desc: 'Yerel şarap tadımı',
      loc_16: '🏨 Mağara Oteller',
      loc_16_desc: 'Eşsiz konaklama deneyimi',
      locations_balloon: 'Sıcak Hava Balonu:',
      locations_balloon_desc: 'Kapadokya\'nın en ikonik deneyimi! Sabah 05:00\'te başlar, gün doğumu ile birlikte bulutların üzerinde unutulmaz anlar yaşarsınız.',
      locations_important: 'Önemli Not:',
      locations_important_desc: 'Yukarıdaki tüm lokasyonlar TEKLİF amaçlıdır. Sürenize, bütçenize ve ilgi alanlarınıza göre',
      locations_important_bold: 'size özel rota',
      locations_important_desc2: 'oluştururuz!',
      
      included_title: 'Transfer Hizmetimize Dahil',
      inc_1: 'Profesyonel, deneyimli şoför hizmeti',
      inc_2: 'Temiz, klimali, konforlu araçlar (Vito, Sprinter, Midibus)',
      inc_3: 'Yakıt ve araç sigortası',
      inc_4: 'İstanbul - Kapadokya arası transfer (veya Ankara üzerinden)',
      inc_5: 'Kapadokya içi tüm transferler',
      inc_6: 'Esnek rota planlaması (vadiler, müzeler, atölyeler)',
      inc_7: 'İstediğiniz noktalarda fotoğraf molası',
      inc_8: 'WhatsApp üzerinden 7/24 destek',
      included_note: 'Not:',
      included_note_desc: 'Konaklama (mağara otel/standart otel), yemek, müze giriş ücretleri, balon turu, ATV safari, at safari ve rehber hizmeti isteğe bağlıdır. Talebinize göre',
      included_note_bold: 'tam paket',
      included_note_desc2: 'de sunabiliriz!',
      
      how_title: 'Nasıl Çalışır?',
      how_1_title: 'Bizimle İletişime Geçin',
      how_1_desc: 'WhatsApp, telefon veya e-posta ile ulaşın',
      how_2_title: 'İhtiyaçlarınızı Belirtin',
      how_2_desc: 'Balon turu istiyorsunuz? Kaç gün? Kaç kişi? Bütçeniz?',
      how_3_title: 'Özel Teklif Alın',
      how_3_desc: 'Size özel Kapadokya rotası ve fiyat teklifi sunuyoruz',
      how_4_title: 'Onaylayın ve Yola Çıkın',
      how_4_desc: 'Rezervasyon yapın, biz gerisini halledelim!',
      
      packages_title: 'Popüler Paket Önerileri',
      package_1_title: '⚡ Express Tur',
      package_1_duration: '2 Gün / 1 Gece',
      package_1_1: '✓ Göreme + Peri Bacaları',
      package_1_2: '✓ Yeraltı Şehri + Uçhisar',
      package_1_3: '✓ Hızlı keşif isteyenler için',
      package_2_title: '🎈 Klasik Tur',
      package_2_duration: '3 Gün / 2 Gece',
      package_2_1: '✓ Balon Turu (opsiyonel)',
      package_2_2: '✓ Ana turistik noktalar',
      package_2_3: '✓ En popüler seçim!',
      package_3_title: '🏔️ Komple Kapadokya',
      package_3_duration: '5+ Gün / 4+ Gece',
      package_3_1: '✓ Tüm vadiler, kiliseler, yeraltı şehirleri',
      package_3_2: '✓ ATV safari, at turu, Türk gecesi',
      package_3_3: '✓ Fotoğraf tutkunları ve detaylı keşif',
      package_3_4: '✓ Konya + İhlara Vadisi kombinasyonu',
      packages_note: 'Yukarıdaki paketler sadece',
      packages_note_bold: 'örnek',
      packages_note_desc: 'paketlerdir. Size özel düzenlemeler yapılabilir!',
      
      activities_title: 'Özel Aktiviteler (Ekstra)',
      activity_1: 'Sıcak Hava Balonu',
      activity_1_price: '€150-250',
      activity_2: 'ATV Safari',
      activity_2_price: '€30-50',
      activity_3: 'At Safari',
      activity_3_price: '€25-40',
      activity_4: 'Türk Gecesi',
      activity_4_price: '€40-60',
      activity_5: 'Fotoğraf Turu',
      activity_5_price: 'Özel',
      activity_6: 'Şarap Tadımı',
      activity_6_price: '€15-30',
      activities_note: 'Bu aktiviteler',
      activities_note_bold: 'ekstra ücretlidir',
      activities_note_desc: 've size özel ayarlanabilir!',
      
      photo_title: 'Fotoğraf İpuçları',
      photo_1: '📸 En iyi fotoğraf saatleri: Gün doğumu (05:30-07:00) ve gün batımı (17:30-19:00)',
      photo_2: '🎈 Balon fotoğrafları için Güvercinlik Vadisi veya Uçhisar Kalesi idealdir',
      photo_3: '👗 Renkli ve uçuşkan elbiseler peri bacalarıyla harika kontrast oluşturur',
      photo_4: '🌅 Gün batımı için Love Valley veya Rose Valley tercih edilmelidir',
      photo_5: '📱 Drone kullanımı bazı alanlarda yasaktır, önceden bilgi alın',
      photo_6: '🎥 360 derece video çekimi için GoPro veya aksiyon kamerası idealdir',
      
      sidebar_title: 'Size Özel Kapadokya Turu',
      sidebar_subtitle: 'İhtiyaçlarınıza göre özel fiyat teklifi',
      sidebar_route: '🗺️ Rotanız',
      sidebar_duration: '🕐 Süreniz',
      sidebar_group: '👥 Grup Büyüklüğünüz',
      sidebar_budget: '💰 Bütçeniz',
      sidebar_result: '= Size Özel Fiyat!',
      sidebar_whatsapp: 'WhatsApp ile Teklif Al',
      sidebar_call: 'Hemen Ara: 0501 620 69 52',
      sidebar_support: '7/24 Müşteri Desteği',
      sidebar_note: '🎈 Balon turu + transfer paketi için özel indirim! Detaylar için bizi arayın.',
    },
    
    en: {
      nav_back: 'All Tours',
      hero_title: 'Cappadocia Tour & Transfer',
      hero_custom: 'Custom Route for You',
      hero_flexible: 'Flexible Group',
      hero_special: 'Special Price Offer',
      
      overview_title: 'Fairy Tale Land Cappadocia',
      overview_p1: 'Cappadocia, home to one of the world\'s most fascinating natural formations, is ready to enchant you with fairy chimneys, underground cities, rock churches and hot air balloons! You will journey deep into history in this unique region listed on the UNESCO World Heritage List.',
      overview_p2_bold: 'Every tour is planned specially for you!',
      overview_p2: 'We create packages suitable for your duration, route and budget. Experience unforgettable moments in mystical Cappadocia with professional driver and guide, in comfortable vehicles!',
      
      locations_title: 'What Can You See on This Tour?',
      locations_subtitle: 'You can choose from the following locations according to your custom route:',
      loc_1: '🎈 Hot Air Balloon',
      loc_1_desc: 'Above the clouds at sunrise',
      loc_2: '🏛️ Göreme Open Air Museum',
      loc_2_desc: 'UNESCO World Heritage, rock churches',
      loc_3: '🍄 Paşabağ Fairy Chimneys',
      loc_3_desc: 'Mushroom-shaped natural formations',
      loc_4: '🏰 Uçhisar Castle',
      loc_4_desc: 'Highest rock castle, panoramic view',
      loc_5: '⛏️ Derinkuyu Underground City',
      loc_5_desc: '8 floors, ancient city for 20,000 people',
      loc_6: '⛏️ Kaymaklı Underground City',
      loc_6_desc: 'Intertwined tunnels and rooms',
      loc_7: '🌄 Pigeon Valley',
      loc_7_desc: 'Romantic sunset point',
      loc_8: '🏺 Avanos',
      loc_8_desc: 'Pottery workshops, Kızılırmak riverside',
      loc_9: '🌹 Rose Valley',
      loc_9_desc: 'Pink rocks, trekking',
      loc_10: '❤️ Love Valley',
      loc_10_desc: 'Iconic fairy chimneys',
      loc_11: '🏞️ Ihlara Valley',
      loc_11_desc: 'Canyons, riverside walk',
      loc_12: '🏛️ Selime Cathedral',
      loc_12_desc: 'Giant church carved into rocks',
      loc_13: '🏠 Çavuşin Village',
      loc_13_desc: 'Historic stone houses, churches',
      loc_14: '🌙 Ortahisar Castle',
      loc_14_desc: 'Rock-carved castle',
      loc_15: '🍷 Wine Houses',
      loc_15_desc: 'Local wine tasting',
      loc_16: '🏨 Cave Hotels',
      loc_16_desc: 'Unique accommodation experience',
      locations_balloon: 'Hot Air Balloon:',
      locations_balloon_desc: 'Cappadocia\'s most iconic experience! Starts at 05:00 AM, experience unforgettable moments above the clouds with sunrise.',
      locations_important: 'Important Note:',
      locations_important_desc: 'All locations above are for PROPOSAL purposes. According to your time, budget and interests, we create a',
      locations_important_bold: 'custom route for you',
      locations_important_desc2: '!',
      
      included_title: 'Included in Our Transfer Service',
      inc_1: 'Professional, experienced driver service',
      inc_2: 'Clean, air-conditioned, comfortable vehicles (Vito, Sprinter, Midibus)',
      inc_3: 'Fuel and vehicle insurance',
      inc_4: 'Transfer between Istanbul - Cappadocia (or via Ankara)',
      inc_5: 'All transfers within Cappadocia',
      inc_6: 'Flexible route planning (valleys, museums, workshops)',
      inc_7: 'Photo breaks at points you want',
      inc_8: '24/7 support via WhatsApp',
      included_note: 'Note:',
      included_note_desc: 'Accommodation (cave hotel/standard hotel), meals, museum entrance fees, balloon tour, ATV safari, horse safari and guide service are optional. We can also offer a',
      included_note_bold: 'full package',
      included_note_desc2: 'according to your request!',
      
      how_title: 'How It Works?',
      how_1_title: 'Contact Us',
      how_1_desc: 'Reach us via WhatsApp, phone or email',
      how_2_title: 'Specify Your Needs',
      how_2_desc: 'Want balloon tour? How many days? How many people? Your budget?',
      how_3_title: 'Get Custom Quote',
      how_3_desc: 'We offer you custom Cappadocia route and price quote',
      how_4_title: 'Confirm and Depart',
      how_4_desc: 'Make reservation, we handle the rest!',
      
      packages_title: 'Popular Package Suggestions',
      package_1_title: '⚡ Express Tour',
      package_1_duration: '2 Days / 1 Night',
      package_1_1: '✓ Göreme + Fairy Chimneys',
      package_1_2: '✓ Underground City + Uçhisar',
      package_1_3: '✓ For quick exploration',
      package_2_title: '🎈 Classic Tour',
      package_2_duration: '3 Days / 2 Nights',
      package_2_1: '✓ Balloon Tour (optional)',
      package_2_2: '✓ Main tourist spots',
      package_2_3: '✓ Most popular choice!',
      package_3_title: '🏔️ Complete Cappadocia',
      package_3_duration: '5+ Days / 4+ Nights',
      package_3_1: '✓ All valleys, churches, underground cities',
      package_3_2: '✓ ATV safari, horse tour, Turkish night',
      package_3_3: '✓ Photography enthusiasts and detailed exploration',
      package_3_4: '✓ Konya + Ihlara Valley combination',
      packages_note: 'The packages above are just',
      packages_note_bold: 'sample',
      packages_note_desc: 'packages. Custom arrangements can be made!',
      
      activities_title: 'Special Activities (Extra)',
      activity_1: 'Hot Air Balloon',
      activity_1_price: '€150-250',
      activity_2: 'ATV Safari',
      activity_2_price: '€30-50',
      activity_3: 'Horse Safari',
      activity_3_price: '€25-40',
      activity_4: 'Turkish Night',
      activity_4_price: '€40-60',
      activity_5: 'Photo Tour',
      activity_5_price: 'Custom',
      activity_6: 'Wine Tasting',
      activity_6_price: '€15-30',
      activities_note: 'These activities are',
      activities_note_bold: 'extra charged',
      activities_note_desc: 'and can be customized for you!',
      
      photo_title: 'Photography Tips',
      photo_1: '📸 Best photo hours: Sunrise (05:30-07:00) and sunset (17:30-19:00)',
      photo_2: '🎈 Pigeon Valley or Uçhisar Castle ideal for balloon photos',
      photo_3: '👗 Colorful and flowing dresses create great contrast with fairy chimneys',
      photo_4: '🌅 Love Valley or Rose Valley should be preferred for sunset',
      photo_5: '📱 Drone usage prohibited in some areas, get info beforehand',
      photo_6: '🎥 GoPro or action camera ideal for 360-degree video',
      
      sidebar_title: 'Custom Cappadocia Tour for You',
      sidebar_subtitle: 'Custom price quote based on your needs',
      sidebar_route: '🗺️ Your Route',
      sidebar_duration: '🕐 Your Duration',
      sidebar_group: '👥 Your Group Size',
      sidebar_budget: '💰 Your Budget',
      sidebar_result: '= Your Custom Price!',
      sidebar_whatsapp: 'Get Quote via WhatsApp',
      sidebar_call: 'Call Now: 0501 620 69 52',
      sidebar_support: '24/7 Customer Support',
      sidebar_note: '🎈 Special discount for balloon tour + transfer package! Call us for details.',
    },
    
    de: {
      nav_back: 'Alle Touren',
      hero_title: 'Kappadokien-Tour & Transfer',
      hero_custom: 'Individuelle Route für Sie',
      hero_flexible: 'Flexible Gruppe',
      hero_special: 'Sonderpreisangebot',
      
      overview_title: 'Märchenland Kappadokien',
      overview_p1: 'Kappadokien, Heimat einer der faszinierendsten Naturformationen der Welt, ist bereit, Sie mit Feenkaminen, unterirdischen Städten, Felsenkirchen und Heißluftballons zu verzaubern! Sie werden tief in die Geschichte reisen in dieser einzigartigen Region, die auf der UNESCO-Welterbeliste steht.',
      overview_p2_bold: 'Jede Tour wird speziell für Sie geplant!',
      overview_p2: 'Wir erstellen Pakete passend zu Ihrer Dauer, Route und Budget. Erleben Sie unvergessliche Momente im mystischen Kappadokien mit professionellem Fahrer und Guide, in komfortablen Fahrzeugen!',
      
      locations_title: 'Was können Sie auf dieser Tour sehen?',
      locations_subtitle: 'Sie können aus den folgenden Orten entsprechend Ihrer individuellen Route wählen:',
      loc_1: '🎈 Heißluftballon',
      loc_1_desc: 'Über den Wolken bei Sonnenaufgang',
      loc_2: '🏛️ Göreme-Freilichtmuseum',
      loc_2_desc: 'UNESCO-Welterbe, Felsenkirchen',
      loc_3: '🍄 Paşabağ-Feenkamine',
      loc_3_desc: 'Pilzförmige Naturformationen',
      loc_4: '🏰 Uçhisar-Burg',
      loc_4_desc: 'Höchste Felsenburg, Panoramablick',
      loc_5: '⛏️ Derinkuyu-Untergrundstadt',
      loc_5_desc: '8 Stockwerke, antike Stadt für 20.000 Menschen',
      loc_6: '⛏️ Kaymaklı-Untergrundstadt',
      loc_6_desc: 'Verflochtene Tunnel und Räume',
      loc_7: '🌄 Taubental',
      loc_7_desc: 'Romantischer Sonnenuntergangspunkt',
      loc_8: '🏺 Avanos',
      loc_8_desc: 'Töpferwerkstätten, Kızılırmak-Ufer',
      loc_9: '🌹 Rosental',
      loc_9_desc: 'Rosa Felsen, Trekking',
      loc_10: '❤️ Liebestal',
      loc_10_desc: 'Ikonische Feenkamine',
      loc_11: '🏞️ Ihlara-Tal',
      loc_11_desc: 'Schluchten, Flusswanderung',
      loc_12: '🏛️ Selime-Kathedrale',
      loc_12_desc: 'Riesige in Felsen gemeißelte Kirche',
      loc_13: '🏠 Çavuşin-Dorf',
      loc_13_desc: 'Historische Steinhäuser, Kirchen',
      loc_14: '🌙 Ortahisar-Burg',
      loc_14_desc: 'In Felsen gemeißelte Burg',
      loc_15: '🍷 Weinhäuser',
      loc_15_desc: 'Lokale Weinverkostung',
      loc_16: '🏨 Höhlenhotels',
      loc_16_desc: 'Einzigartiges Unterkunftserlebnis',
      locations_balloon: 'Heißluftballon:',
      locations_balloon_desc: 'Kappadokiens ikonischstes Erlebnis! Beginnt um 05:00 Uhr, erleben Sie unvergessliche Momente über den Wolken mit Sonnenaufgang.',
      locations_important: 'Wichtiger Hinweis:',
      locations_important_desc: 'Alle oben genannten Orte dienen zu VORSCHLAGSZWECKEN. Entsprechend Ihrer Zeit, Budget und Interessen erstellen wir eine',
      locations_important_bold: 'individuelle Route für Sie',
      locations_important_desc2: '!',
      
      included_title: 'In unserem Transfer-Service enthalten',
      inc_1: 'Professioneller, erfahrener Fahrer-Service',
      inc_2: 'Saubere, klimatisierte, komfortable Fahrzeuge (Vito, Sprinter, Midibus)',
      inc_3: 'Kraftstoff und Fahrzeugversicherung',
      inc_4: 'Transfer zwischen Istanbul - Kappadokien (oder über Ankara)',
      inc_5: 'Alle Transfers innerhalb Kappadokiens',
      inc_6: 'Flexible Routenplanung (Täler, Museen, Werkstätten)',
      inc_7: 'Fotopausen an gewünschten Punkten',
      inc_8: '24/7 Support via WhatsApp',
      included_note: 'Hinweis:',
      included_note_desc: 'Unterkunft (Höhlenhotel/Standardhotel), Mahlzeiten, Museums-Eintrittsgelder, Ballontour, ATV-Safari, Pferde-Safari und Guide-Service sind optional. Wir können auch ein',
      included_note_bold: 'Komplettpaket',
      included_note_desc2: 'nach Ihrer Anfrage anbieten!',
      
      how_title: 'Wie funktioniert es?',
      how_1_title: 'Kontaktieren Sie uns',
      how_1_desc: 'Erreichen Sie uns per WhatsApp, Telefon oder E-Mail',
      how_2_title: 'Geben Sie Ihre Bedürfnisse an',
      how_2_desc: 'Ballontour gewünscht? Wie viele Tage? Wie viele Personen? Ihr Budget?',
      how_3_title: 'Individuelles Angebot erhalten',
      how_3_desc: 'Wir bieten Ihnen individuelle Kappadokien-Route und Preisangebot',
      how_4_title: 'Bestätigen und abreisen',
      how_4_desc: 'Reservierung vornehmen, wir kümmern uns um den Rest!',
      
      packages_title: 'Beliebte Paketvorschläge',
      package_1_title: '⚡ Express-Tour',
      package_1_duration: '2 Tage / 1 Nacht',
      package_1_1: '✓ Göreme + Feenkamine',
      package_1_2: '✓ Untergrundstadt + Uçhisar',
      package_1_3: '✓ Für schnelle Erkundung',
      package_2_title: '🎈 Klassische Tour',
      package_2_duration: '3 Tage / 2 Nächte',
      package_2_1: '✓ Ballontour (optional)',
      package_2_2: '✓ Haupttouristenorte',
      package_2_3: '✓ Beliebteste Wahl!',
      package_3_title: '🏔️ Komplettes Kappadokien',
      package_3_duration: '5+ Tage / 4+ Nächte',
      package_3_1: '✓ Alle Täler, Kirchen, Untergrundstädte',
      package_3_2: '✓ ATV-Safari, Pferdetour, Türkische Nacht',
      package_3_3: '✓ Fotografie-Enthusiasten und detaillierte Erkundung',
      package_3_4: '✓ Konya + Ihlara-Tal Kombination',
      packages_note: 'Die Pakete oben sind nur',
      packages_note_bold: 'Beispiel',
      packages_note_desc: '-Pakete. Individuelle Anpassungen können vorgenommen werden!',
      
      activities_title: 'Besondere Aktivitäten (Extra)',
      activity_1: 'Heißluftballon',
      activity_1_price: '€150-250',
      activity_2: 'ATV-Safari',
      activity_2_price: '€30-50',
      activity_3: 'Pferde-Safari',
      activity_3_price: '€25-40',
      activity_4: 'Türkische Nacht',
      activity_4_price: '€40-60',
      activity_5: 'Foto-Tour',
      activity_5_price: 'Individuell',
      activity_6: 'Weinverkostung',
      activity_6_price: '€15-30',
      activities_note: 'Diese Aktivitäten sind',
      activities_note_bold: 'extra gebührenpflichtig',
      activities_note_desc: 'und können für Sie angepasst werden!',
      
      photo_title: 'Fotografie-Tipps',
      photo_1: '📸 Beste Fotostunden: Sonnenaufgang (05:30-07:00) und Sonnenuntergang (17:30-19:00)',
      photo_2: '🎈 Taubental oder Uçhisar-Burg ideal für Ballonfotos',
      photo_3: '👗 Farbige und fließende Kleider schaffen großen Kontrast zu Feenkaminen',
      photo_4: '🌅 Liebestal oder Rosental sollte für Sonnenuntergang bevorzugt werden',
      photo_5: '📱 Drohnennutzung in einigen Bereichen verboten, Info im Voraus einholen',
      photo_6: '🎥 GoPro oder Action-Kamera ideal für 360-Grad-Video',
      
      sidebar_title: 'Individuelle Kappadokien-Tour für Sie',
      sidebar_subtitle: 'Individuelles Preisangebot basierend auf Ihren Bedürfnissen',
      sidebar_route: '🗺️ Ihre Route',
      sidebar_duration: '🕐 Ihre Dauer',
      sidebar_group: '👥 Ihre Gruppengröße',
      sidebar_budget: '💰 Ihr Budget',
      sidebar_result: '= Ihr individueller Preis!',
      sidebar_whatsapp: 'Angebot per WhatsApp',
      sidebar_call: 'Jetzt anrufen: 0501 620 69 52',
      sidebar_support: '24/7 Kundensupport',
      sidebar_note: '🎈 Spezialrabatt für Ballontour + Transferpaket! Rufen Sie uns für Details an.',
    },
    
    ru: {
      nav_back: 'Все туры',
      hero_title: 'Каппадокийский тур и трансфер',
      hero_custom: 'Индивидуальный маршрут для вас',
      hero_flexible: 'Гибкая группа',
      hero_special: 'Специальное предложение',
      
      overview_title: 'Сказочная земля Каппадокия',
      overview_p1: 'Каппадокия, дом одного из самых захватывающих природных образований в мире, готова очаровать вас сказочными дымоходами, подземными городами, скальными церквями и воздушными шарами! Вы совершите путешествие вглубь истории в этом уникальном регионе, внесенном в список Всемирного наследия ЮНЕСКО.',
      overview_p2_bold: 'Каждый тур планируется специально для вас!',
      overview_p2: 'Мы создаем пакеты, подходящие для вашей продолжительности, маршрута и бюджета. Испытайте незабываемые моменты в мистической Каппадокии с профессиональным водителем и гидом, в комфортабельных автомобилях!',
      
      locations_title: 'Что вы можете увидеть в этом туре?',
      locations_subtitle: 'Вы можете выбрать из следующих мест согласно вашему индивидуальному маршруту:',
      loc_1: '🎈 Воздушный шар',
      loc_1_desc: 'Над облаками на рассвете',
      loc_2: '🏛️ Музей под открытым небом Гёреме',
      loc_2_desc: 'Всемирное наследие ЮНЕСКО, скальные церкви',
      loc_3: '🍄 Сказочные дымоходы Пашабаг',
      loc_3_desc: 'Грибовидные природные образования',
      loc_4: '🏰 Крепость Учхисар',
      loc_4_desc: 'Самая высокая скальная крепость, панорамный вид',
      loc_5: '⛏️ Подземный город Деринкую',
      loc_5_desc: '8 этажей, древний город на 20 000 человек',
      loc_6: '⛏️ Подземный город Каймаклы',
      loc_6_desc: 'Переплетенные туннели и комнаты',
      loc_7: '🌄 Долина голубей',
      loc_7_desc: 'Романтическая точка заката',
      loc_8: '🏺 Аванос',
      loc_8_desc: 'Гончарные мастерские, берег Кызылырмак',
      loc_9: '🌹 Долина роз',
      loc_9_desc: 'Розовые скалы, трекинг',
      loc_10: '❤️ Долина любви',
      loc_10_desc: 'Иконические сказочные дымоходы',
      loc_11: '🏞️ Долина Ихлара',
      loc_11_desc: 'Каньоны, прогулка у реки',
      loc_12: '🏛️ Собор Селиме',
      loc_12_desc: 'Гигантская церковь, высеченная в скалах',
      loc_13: '🏠 Деревня Чавушин',
      loc_13_desc: 'Исторические каменные дома, церкви',
      loc_14: '🌙 Крепость Ортахисар',
      loc_14_desc: 'Высеченная в скале крепость',
      loc_15: '🍷 Винные дома',
      loc_15_desc: 'Дегустация местного вина',
      loc_16: '🏨 Пещерные отели',
      loc_16_desc: 'Уникальный опыт размещения',
      locations_balloon: 'Воздушный шар:',
      locations_balloon_desc: 'Самое знаковое впечатление Каппадокии! Начинается в 05:00, испытайте незабываемые моменты над облаками с восходом солнца.',
      locations_important: 'Важное примечание:',
      locations_important_desc: 'Все вышеперечисленные места предназначены для ПРЕДЛОЖЕНИЯ. Согласно вашему времени, бюджету и интересам, мы создаем',
      locations_important_bold: 'индивидуальный маршрут для вас',
      locations_important_desc2: '!',
      
      included_title: 'Включено в нашу трансферную услугу',
      inc_1: 'Профессиональный опытный водитель',
      inc_2: 'Чистые, кондиционированные, комфортабельные автомобили (Vito, Sprinter, Midibus)',
      inc_3: 'Топливо и страховка автомобиля',
      inc_4: 'Трансфер между Стамбулом - Каппадокией (или через Анкару)',
      inc_5: 'Все трансферы внутри Каппадокии',
      inc_6: 'Гибкое планирование маршрута (долины, музеи, мастерские)',
      inc_7: 'Фото-остановки в нужных вам местах',
      inc_8: 'Поддержка 24/7 через WhatsApp',
      included_note: 'Примечание:',
      included_note_desc: 'Проживание (пещерный отель/стандартный отель), питание, входные билеты в музеи, тур на воздушном шаре, ATV-сафари, конное сафари и услуги гида опциональны. Мы также можем предложить',
      included_note_bold: 'полный пакет',
      included_note_desc2: 'по вашему запросу!',
      
      how_title: 'Как это работает?',
      how_1_title: 'Свяжитесь с нами',
      how_1_desc: 'Свяжитесь с нами через WhatsApp, телефон или электронную почту',
      how_2_title: 'Укажите ваши потребности',
      how_2_desc: 'Хотите тур на воздушном шаре? Сколько дней? Сколько человек? Ваш бюджет?',
      how_3_title: 'Получите индивидуальное предложение',
      how_3_desc: 'Мы предлагаем вам индивидуальный каппадокийский маршрут и ценовое предложение',
      how_4_title: 'Подтвердите и отправляйтесь',
      how_4_desc: 'Сделайте бронирование, мы позаботимся об остальном!',
      
      packages_title: 'Популярные варианты пакетов',
      package_1_title: '⚡ Экспресс-тур',
      package_1_duration: '2 дня / 1 ночь',
      package_1_1: '✓ Гёреме + Сказочные дымоходы',
      package_1_2: '✓ Подземный город + Учхисар',
      package_1_3: '✓ Для быстрого исследования',
      package_2_title: '🎈 Классический тур',
      package_2_duration: '3 дня / 2 ночи',
      package_2_1: '✓ Тур на воздушном шаре (опционально)',
      package_2_2: '✓ Основные туристические места',
      package_2_3: '✓ Самый популярный выбор!',
      package_3_title: '🏔️ Полная Каппадокия',
      package_3_duration: '5+ дней / 4+ ночи',
      package_3_1: '✓ Все долины, церкви, подземные города',
      package_3_2: '✓ ATV-сафари, конный тур, турецкая ночь',
      package_3_3: '✓ Энтузиасты фотографии и детальное исследование',
      package_3_4: '✓ Комбинация Конья + Долина Ихлара',
      packages_note: 'Пакеты выше - это всего лишь',
      packages_note_bold: 'примерные',
      packages_note_desc: 'пакеты. Могут быть внесены индивидуальные изменения!',
      
      activities_title: 'Особые мероприятия (дополнительно)',
      activity_1: 'Воздушный шар',
      activity_1_price: '€150-250',
      activity_2: 'ATV-сафари',
      activity_2_price: '€30-50',
      activity_3: 'Конное сафари',
      activity_3_price: '€25-40',
      activity_4: 'Турецкая ночь',
      activity_4_price: '€40-60',
      activity_5: 'Фото-тур',
      activity_5_price: 'Индивидуально',
      activity_6: 'Дегустация вина',
      activity_6_price: '€15-30',
      activities_note: 'Эти мероприятия',
      activities_note_bold: 'оплачиваются дополнительно',
      activities_note_desc: 'и могут быть настроены для вас!',
      
      photo_title: 'Советы по фотографии',
      photo_1: '📸 Лучшие часы для фото: Восход солнца (05:30-07:00) и закат (17:30-19:00)',
      photo_2: '🎈 Долина голубей или крепость Учхисар идеальны для фото воздушных шаров',
      photo_3: '👗 Цветные и развевающиеся платья создают отличный контраст со сказочными дымоходами',
      photo_4: '🌅 Долину любви или Долину роз следует предпочесть для заката',
      photo_5: '📱 Использование дронов запрещено в некоторых областях, получите информацию заранее',
      photo_6: '🎥 GoPro или экшн-камера идеальна для 360-градусного видео',
      
      sidebar_title: 'Индивидуальный каппадокийский тур для вас',
      sidebar_subtitle: 'Индивидуальное ценовое предложение на основе ваших потребностей',
      sidebar_route: '🗺️ Ваш маршрут',
      sidebar_duration: '🕐 Ваша продолжительность',
      sidebar_group: '👥 Размер вашей группы',
      sidebar_budget: '💰 Ваш бюджет',
      sidebar_result: '= Ваша индивидуальная цена!',
      sidebar_whatsapp: 'Получить предложение в WhatsApp',
      sidebar_call: 'Позвоните сейчас: 0501 620 69 52',
      sidebar_support: 'Поддержка клиентов 24/7',
      sidebar_note: '🎈 Специальная скидка на пакет тур на воздушном шаре + трансфер! Звоните для получения подробностей.',
    },
    
    ar: {
      nav_back: 'جميع الجولات',
      hero_title: 'جولة كابادوكيا والنقل',
      hero_custom: 'مسار مخصص لك',
      hero_flexible: 'مجموعة مرنة',
      hero_special: 'عرض سعر خاص',
      
      overview_title: 'أرض الحكايات الخيالية كابادوكيا',
      overview_p1: 'كابادوكيا، موطن لأحد أكثر التكوينات الطبيعية الساحرة في العالم، مستعدة لسحرك بالمداخن الخيالية والمدن تحت الأرض والكنائس الصخرية والمناطيد الهوائية! ستقوم برحلة عميقة في التاريخ في هذه المنطقة الفريدة المدرجة في قائمة التراث العالمي لليونسكو.',
      overview_p2_bold: 'كل جولة مخططة خصيصًا لك!',
      overview_p2: 'نحن نقوم بإنشاء باقات مناسبة لمدتك ومسارك وميزانيتك. اختبر لحظات لا تُنسى في كابادوكيا الغامضة مع سائق ومرشد محترفين، في مركبات مريحة!',
      
      locations_title: 'ماذا يمكنك أن ترى في هذه الجولة؟',
      locations_subtitle: 'يمكنك الاختيار من الأماكن التالية وفقًا لمسارك المخصص:',
      loc_1: '🎈 منطاد الهواء الساخن',
      loc_1_desc: 'فوق السحاب عند شروق الشمس',
      loc_2: '🏛️ متحف غوريمي المفتوح',
      loc_2_desc: 'تراث اليونسكو العالمي، كنائس صخرية',
      loc_3: '🍄 مداخن باشاباغ الخيالية',
      loc_3_desc: 'تكوينات طبيعية على شكل فطر',
      loc_4: '🏰 قلعة أوتشهيسار',
      loc_4_desc: 'أعلى قلعة صخرية، منظر بانورامي',
      loc_5: '⛏️ مدينة ديرينكويو تحت الأرض',
      loc_5_desc: '8 طوابق، مدينة قديمة لـ 20،000 شخص',
      loc_6: '⛏️ مدينة كايماكلي تحت الأرض',
      loc_6_desc: 'أنفاق وغرف متداخلة',
      loc_7: '🌄 وادي الحمام',
      loc_7_desc: 'نقطة غروب الشمس الرومانسية',
      loc_8: '🏺 أفانوس',
      loc_8_desc: 'ورش الفخار، ضفاف كيزيليرماك',
      loc_9: '🌹 وادي الورد',
      loc_9_desc: 'صخور وردية، تسلق',
      loc_10: '❤️ وادي الحب',
      loc_10_desc: 'المداخن الخيالية الشهيرة',
      loc_11: '🏞️ وادي إهلارا',
      loc_11_desc: 'أخاديد، مشي على ضفاف النهر',
      loc_12: '🏛️ كاتدرائية سليمي',
      loc_12_desc: 'كنيسة عملاقة منحوتة في الصخور',
      loc_13: '🏠 قرية تشافوشين',
      loc_13_desc: 'منازل حجرية تاريخية، كنائس',
      loc_14: '🌙 قلعة أورتاهيسار',
      loc_14_desc: 'قلعة منحوتة في الصخر',
      loc_15: '🍷 بيوت النبيذ',
      loc_15_desc: 'تذوق النبيذ المحلي',
      loc_16: '🏨 فنادق الكهوف',
      loc_16_desc: 'تجربة إقامة فريدة',
      locations_balloon: 'منطاد الهواء الساخن:',
      locations_balloon_desc: 'التجربة الأكثر شهرة في كابادوكيا! يبدأ في الساعة 05:00، اختبر لحظات لا تُنسى فوق السحاب مع شروق الشمس.',
      locations_important: 'ملاحظة مهمة:',
      locations_important_desc: 'جميع الأماكن المذكورة أعلاه لأغراض الاقتراح. وفقًا لوقتك وميزانيتك واهتماماتك، نقوم بإنشاء',
      locations_important_bold: 'مسار مخصص لك',
      locations_important_desc2: '!',
      
      included_title: 'مشمول في خدمة النقل لدينا',
      inc_1: 'خدمة سائق محترف وذو خبرة',
      inc_2: 'مركبات نظيفة ومكيفة ومريحة (Vito, Sprinter, Midibus)',
      inc_3: 'الوقود وتأمين المركبة',
      inc_4: 'النقل بين إسطنبول - كابادوكيا (أو عبر أنقرة)',
      inc_5: 'جميع التنقلات داخل كابادوكيا',
      inc_6: 'تخطيط مسار مرن (الوديان، المتاحف، الورش)',
      inc_7: 'توقفات للصور في النقاط التي تريدها',
      inc_8: 'دعم 24/7 عبر WhatsApp',
      included_note: 'ملاحظة:',
      included_note_desc: 'الإقامة (فندق كهف/فندق عادي)، الوجبات، رسوم دخول المتاحف، جولة المنطاد، ATV سفاري، سفاري الخيول وخدمة المرشد اختيارية. يمكننا أيضًا تقديم',
      included_note_bold: 'باقة كاملة',
      included_note_desc2: 'حسب طلبك!',
      
      how_title: 'كيف يعمل؟',
      how_1_title: 'اتصل بنا',
      how_1_desc: 'تواصل معنا عبر WhatsApp أو الهاتف أو البريد الإلكتروني',
      how_2_title: 'حدد احتياجاتك',
      how_2_desc: 'تريد جولة منطاد؟ كم يوم؟ كم شخص؟ ميزانيتك؟',
      how_3_title: 'احصل على عرض مخصص',
      how_3_desc: 'نقدم لك مسار كابادوكيا المخصص وعرض السعر',
      how_4_title: 'تأكيد والمغادرة',
      how_4_desc: 'قم بالحجز، نحن نتعامل مع الباقي!',
      
      packages_title: 'اقتراحات الباقات الشعبية',
      package_1_title: '⚡ جولة سريعة',
      package_1_duration: '2 أيام / ليلة واحدة',
      package_1_1: '✓ غوريمي + المداخن الخيالية',
      package_1_2: '✓ المدينة تحت الأرض + أوتشهيسار',
      package_1_3: '✓ للاستكشاف السريع',
      package_2_title: '🎈 جولة كلاسيكية',
      package_2_duration: '3 أيام / ليلتين',
      package_2_1: '✓ جولة المنطاد (اختياري)',
      package_2_2: '✓ أماكن السياحة الرئيسية',
      package_2_3: '✓ الاختيار الأكثر شعبية!',
      package_3_title: '🏔️ كابادوكيا الكاملة',
      package_3_duration: '5+ أيام / 4+ ليالٍ',
      package_3_1: '✓ جميع الوديان، الكنائس، المدن تحت الأرض',
      package_3_2: '✓ ATV سفاري، جولة الخيل، ليلة تركية',
      package_3_3: '✓ عشاق التصوير والاستكشاف التفصيلي',
      package_3_4: '✓ مزيج قونية + وادي إهلارا',
      packages_note: 'الباقات أعلاه هي مجرد باقات',
      packages_note_bold: 'نموذجية',
      packages_note_desc: '. يمكن إجراء ترتيبات مخصصة!',
      
      activities_title: 'أنشطة خاصة (إضافية)',
      activity_1: 'منطاد الهواء الساخن',
      activity_1_price: '€150-250',
      activity_2: 'ATV سفاري',
      activity_2_price: '€30-50',
      activity_3: 'سفاري الخيول',
      activity_3_price: '€25-40',
      activity_4: 'ليلة تركية',
      activity_4_price: '€40-60',
      activity_5: 'جولة تصوير',
      activity_5_price: 'مخصص',
      activity_6: 'تذوق النبيذ',
      activity_6_price: '€15-30',
      activities_note: 'هذه الأنشطة',
      activities_note_bold: 'مدفوعة إضافيًا',
      activities_note_desc: 'ويمكن تخصيصها لك!',
      
      photo_title: 'نصائح التصوير',
      photo_1: '📸 أفضل ساعات التصوير: شروق الشمس (05:30-07:00) وغروب الشمس (17:30-19:00)',
      photo_2: '🎈 وادي الحمام أو قلعة أوتشهيسار مثالي لصور المنطاد',
      photo_3: '👗 الفساتين الملونة والمتطايرة تخلق تباينًا رائعًا مع المداخن الخيالية',
      photo_4: '🌅 يجب تفضيل وادي الحب أو وادي الورد لغروب الشمس',
      photo_5: '📱 استخدام الطائرة بدون طيار محظور في بعض المناطق، احصل على معلومات مسبقًا',
      photo_6: '🎥 GoPro أو كاميرا الحركة مثالية لفيديو 360 درجة',
      
      sidebar_title: 'جولة كابادوكيا المخصصة لك',
      sidebar_subtitle: 'عرض سعر مخصص بناءً على احتياجاتك',
      sidebar_route: '🗺️ مسارك',
      sidebar_duration: '🕐 مدتك',
      sidebar_group: '👥 حجم مجموعتك',
      sidebar_budget: '💰 ميزانيتك',
      sidebar_result: '= سعرك المخصص!',
      sidebar_whatsapp: 'احصل على عرض عبر WhatsApp',
      sidebar_call: 'اتصل الآن: 0501 620 69 52',
      sidebar_support: 'دعم العملاء 24/7',
      sidebar_note: '🎈 خصم خاص لباقة جولة المنطاد + النقل! اتصل بنا للحصول على التفاصيل.',
    }
  };

  const t = (key: keyof typeof translations.tr) => translations[language][key];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
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
          src="https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/hot-air-balloon-7217173_1920_vwfat9.jpg"
          alt="Kapadokya Turu"
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
                  <Wind className="w-5 h-5" />
                  <span className="font-semibold">{t('hero_custom')}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">{t('hero_flexible')}</span>
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
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Mountain className="w-6 h-6 text-rose-600" />
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

              {/* Bu Turda Görebilecekleriniz */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('locations_title')}</h2>
                </div>

                <p className="text-gray-600 mb-6">
                  {t('locations_subtitle')}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[...Array(16)].map((_, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 hover:border-rose-500 hover:shadow-md transition group">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-rose-600 transition">{t(`loc_${idx+1}` as any)}</h3>
                      <p className="text-sm text-gray-600">{t(`loc_${idx+1}_desc` as any)}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 rounded-lg">
                  <p className="text-gray-800 font-semibold">
                    🎈 <strong>{t('locations_balloon')}</strong> {t('locations_balloon_desc')}
                  </p>
                </div>

                <div className="mt-4 p-5 bg-gradient-to-r from-primary-50 to-accent/10 border-l-4 border-primary-500 rounded-lg">
                  <p className="text-gray-800 font-semibold">
                    ✨ <strong>{t('locations_important')}</strong> {t('locations_important_desc')} <strong>{t('locations_important_bold')}</strong> {t('locations_important_desc2')}
                  </p>
                </div>
              </motion.div>

              {/* Hizmetlerimize Dahil Olanlar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('included_title')}</h2>
                </div>
                <div className="space-y-3">
                  {[...Array(8)].map((_, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{t(`inc_${idx+1}` as any)}</span>
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
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-lg p-8"
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
                      <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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

              {/* Popüler Paket Önerileri */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">{t('packages_title')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-amber-500 rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-bold text-amber-600 mb-3">{t('package_1_title')}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('package_1_duration')}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3].map(i => (
                        <li key={i}>{t(`package_1_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 border-rose-500 rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-bold text-rose-600 mb-3">{t('package_2_title')}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('package_2_duration')}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3].map(i => (
                        <li key={i}>{t(`package_2_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 border-purple-500 rounded-xl p-6 hover:shadow-xl transition md:col-span-2">
                    <h3 className="text-xl font-bold text-purple-600 mb-3">{t('package_3_title')}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('package_3_duration')}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3,4].map(i => (
                        <li key={i}>{t(`package_3_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-6">
                  💡 {t('packages_note')} <strong>{t('packages_note_bold')}</strong> {t('packages_note_desc')}
                </p>
              </motion.div>

              {/* Özel Aktiviteler */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">{t('activities_title')}</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: '🎈', name: t('activity_1'), price: t('activity_1_price') },
                    { icon: '🏍️', name: t('activity_2'), price: t('activity_2_price') },
                    { icon: '🐴', name: t('activity_3'), price: t('activity_3_price') },
                    { icon: '🎭', name: t('activity_4'), price: t('activity_4_price') },
                    { icon: '📸', name: t('activity_5'), price: t('activity_5_price') },
                    { icon: '🍷', name: t('activity_6'), price: t('activity_6_price') }
                  ].map((activity, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl text-center hover:shadow-md transition border border-amber-200">
                      <span className="text-4xl mb-2 block">{activity.icon}</span>
                      <h3 className="font-bold text-gray-900 mb-1">{activity.name}</h3>
                      <p className="text-xs text-amber-600 font-semibold">{activity.price}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-600 mt-4">
                  {t('activities_note')} <strong>{t('activities_note_bold')}</strong> {t('activities_note_desc')}
                </p>
              </motion.div>

              {/* Fotoğraf İpuçları */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('photo_title')}</h2>
                </div>
                <div className="space-y-3">
                  {[...Array(6)].map((_, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-white rounded-lg border-l-4 border-blue-400">
                      <span className="text-blue-700 font-semibold">{t(`photo_${idx+1}` as any)}</span>
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
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('sidebar_title')}</h3>
                  <p className="text-gray-600">{t('sidebar_subtitle')}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-xl">
                    <p className="text-center text-gray-700 font-semibold">
                      {t('sidebar_route')}<br />
                      {t('sidebar_duration')}<br />
                      {t('sidebar_group')}<br />
                      {t('sidebar_budget')}<br />
                      <span className="text-rose-600 text-xl font-black">{t('sidebar_result')}</span>
                    </p>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/905016206952?text=Merhaba!%20Kapadokya%20Turu%20hakkında%20bilgi%20almak%20istiyorum.%20Size%20özel%20paket%20ve%20fiyat%20teklifi%20alabilir%20miyim?"
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

                <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                  <p className="text-xs text-rose-900 font-semibold">
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