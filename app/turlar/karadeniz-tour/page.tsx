'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Clock, Users, CheckCircle, ArrowLeft, Phone, Mountain, Sparkles, Trees } from 'lucide-react';
import Link from 'next/link';

export default function KaradenizTurDetay() {
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
      hero_title: 'Karadeniz Tur & Transfer',
      hero_custom: 'Size Özel Rota',
      hero_flexible: 'Esnek Grup',
      hero_special: 'Özel Fiyat Teklifi',
      
      overview_title: 'Yemyeşil Karadeniz\'i Keşfedin',
      overview_p1: 'Dağlarıyla, yaylalarıyla, turkuaz gölleriyle, çay bahçeleriyle ve eşsiz doğasıyla Karadeniz bölgesi sizi bekliyor! Sümela Manastırı\'nın mistik atmosferinden Uzungöl\'ün huzuruna, Ayder Yaylası\'nın yeşil yamaçlarından Rize\'nin çay bahçelerine kadar...',
      overview_p2_bold: 'Her tur isteğinize özel planlanır!',
      overview_p2: 'Süre, rota ve bütçenize uygun paket oluştururuz. Profesyonel şoför ve rehber eşliğinde, konforlu araçlarla yemyeşil Karadeniz\'de unutulmaz bir yolculuk!',
      
      locations_title: 'Bu Turda Neler Görebilirsiniz?',
      locations_subtitle: 'Size özel rotanıza göre aşağıdaki lokasyonlardan seçim yapabilirsiniz:',
      loc_1: '🏔️ Sümela Manastırı',
      loc_1_desc: 'Kayalara oyulmuş tarihi manastır - Trabzon',
      loc_2: '💚 Uzungöl',
      loc_2_desc: 'Turkuaz göl, yayla evleri, doğa yürüyüşü',
      loc_3: '🌊 Ayder Yaylası',
      loc_3_desc: 'Yeşil yaylalar, şelaleler, termal kaplıcalar - Rize',
      loc_4: '🍃 Çay Bahçeleri',
      loc_4_desc: 'Çay toplama deneyimi, çay fabrikası - Rize',
      loc_5: '🏰 Trabzon Kalesi',
      loc_5_desc: 'Tarihi kale, Atatürk Köşkü',
      loc_6: '🌲 Fırtına Deresi',
      loc_6_desc: 'Köprüler, kanyonlar, rafting',
      loc_7: '🏛️ Zilkale',
      loc_7_desc: 'Ortaçağ kalesi, panoramik manzara',
      loc_8: '🌄 Hıdırnebi Yaylası',
      loc_8_desc: 'Bulutların üzerinde yayla',
      loc_9: '💧 Sera Gölü',
      loc_9_desc: 'Saklı cennet, yaylalar arası',
      loc_10: '🌿 Pokut Yaylası',
      loc_10_desc: 'Yeşilin her tonu, doğa kampı',
      loc_11: '🏞️ Altındere Vadisi',
      loc_11_desc: 'Doğa parkı, trekking rotaları',
      loc_12: '🎣 Balık Sezonu',
      loc_12_desc: 'Hamsi, alabalık, Karadeniz mutfağı',
      locations_climate: 'Karadeniz İklimi:',
      locations_climate_desc: 'Bölge yağışlı bir iklime sahiptir. Yanınıza yağmurluk ve rahat ayakkabı almayı unutmayın!',
      locations_important: 'Önemli Not:',
      locations_important_desc: 'Yukarıdaki tüm lokasyonlar TEKLİF amaçlıdır. Sürenize, bütçenize ve ilgi alanlarınıza göre',
      locations_important_bold: 'size özel rota',
      locations_important_desc2: 'oluştururuz!',
      
      included_title: 'Transfer Hizmetimize Dahil',
      inc_1: 'Profesyonel, deneyimli şoför hizmeti',
      inc_2: 'Temiz, klimali, konforlu araçlar (Vito, Sprinter, Midibus)',
      inc_3: 'Yakıt ve araç sigortası',
      inc_4: 'İstanbul - Karadeniz arası transfer',
      inc_5: 'Karadeniz içi tüm transferler',
      inc_6: 'Esnek rota planlaması (yayla, göl, şelale molları)',
      inc_7: 'İstediğiniz noktalarda fotoğraf durakları',
      inc_8: 'WhatsApp üzerinden 7/24 destek',
      included_note: 'Not:',
      included_note_desc: 'Konaklama (yayla evleri/oteller), yemek, müze giriş ücretleri ve rehber hizmeti isteğe bağlıdır. Talebinize göre',
      included_note_bold: 'tam paket',
      included_note_desc2: 'de sunabiliriz!',
      
      how_title: 'Nasıl Çalışır?',
      how_1_title: 'Bizimle İletişime Geçin',
      how_1_desc: 'WhatsApp, telefon veya e-posta ile ulaşın',
      how_2_title: 'İhtiyaçlarınızı Belirtin',
      how_2_desc: 'Hangi yerleri görmek istiyorsunuz? Kaç gün? Kaç kişi? Bütçeniz?',
      how_3_title: 'Özel Teklif Alın',
      how_3_desc: 'Size özel Karadeniz rotası ve fiyat teklifi sunuyoruz',
      how_4_title: 'Onaylayın ve Yola Çıkın',
      how_4_desc: 'Rezervasyon yapın, biz gerisini halledelim!',
      
      packages_title: 'Popüler Paket Önerileri',
      package_1_title: '⚡ Hızlı Tur',
      package_1_duration: '2 Gün / 1 Gece',
      package_1_1: '✓ Trabzon → Sümela → Uzungöl',
      package_1_2: '✓ Çay Bahçeleri',
      package_1_3: '✓ Çabuk dönüş isteyenler için',
      package_2_title: '🌿 Klasik Tur',
      package_2_duration: '4 Gün / 3 Gece',
      package_2_1: '✓ Trabzon + Uzungöl + Ayder',
      package_2_2: '✓ Yaylalar + Çay Bahçeleri',
      package_2_3: '✓ En popüler seçim!',
      package_3_title: '🏔️ Tam Tur',
      package_3_duration: '6+ Gün / 5+ Gece',
      package_3_1: '✓ Tüm Karadeniz kıyı şeridi (Sinop, Samsun, Ordu, Giresun, Trabzon, Rize, Artvin)',
      package_3_2: '✓ Tüm yaylalar ve gizli cennetler',
      package_3_3: '✓ Detaylı keşif isteyenler için',
      packages_note: 'Yukarıdaki paketler sadece',
      packages_note_bold: 'örnek',
      packages_note_desc: 'paketlerdir. Size özel düzenlemeler yapılabilir!',
      
      sidebar_title: 'Size Özel Karadeniz Turu',
      sidebar_subtitle: 'İhtiyaçlarınıza göre özel fiyat teklifi',
      sidebar_route: '🗺️ Rotanız',
      sidebar_duration: '🕐 Süreniz',
      sidebar_group: '👥 Grup Büyüklüğünüz',
      sidebar_budget: '💰 Bütçeniz',
      sidebar_result: '= Size Özel Fiyat!',
      sidebar_whatsapp: 'WhatsApp ile Teklif Al',
      sidebar_call: 'Hemen Ara: 0501 620 69 52',
      sidebar_support: '7/24 Müşteri Desteği',
      sidebar_note: '🌿 Doğa tutkunları için özel Karadeniz turları! Detaylar için bizi arayın.',
    },
    
    en: {
      nav_back: 'All Tours',
      hero_title: 'Black Sea Tour & Transfer',
      hero_custom: 'Custom Route for You',
      hero_flexible: 'Flexible Group',
      hero_special: 'Special Price Offer',
      
      overview_title: 'Discover Lush Green Black Sea',
      overview_p1: 'The Black Sea region awaits you with its mountains, plateaus, turquoise lakes, tea gardens and unique nature! From the mystical atmosphere of Sumela Monastery to the peace of Uzungol, from the green slopes of Ayder Plateau to Rize\'s tea gardens...',
      overview_p2_bold: 'Every tour is planned specially for you!',
      overview_p2: 'We create packages suitable for your duration, route and budget. An unforgettable journey in the lush green Black Sea with professional driver and guide, in comfortable vehicles!',
      
      locations_title: 'What Can You See on This Tour?',
      locations_subtitle: 'You can choose from the following locations according to your custom route:',
      loc_1: '🏔️ Sumela Monastery',
      loc_1_desc: 'Historic monastery carved into rocks - Trabzon',
      loc_2: '💚 Uzungol',
      loc_2_desc: 'Turquoise lake, plateau houses, nature walk',
      loc_3: '🌊 Ayder Plateau',
      loc_3_desc: 'Green plateaus, waterfalls, thermal springs - Rize',
      loc_4: '🍃 Tea Gardens',
      loc_4_desc: 'Tea picking experience, tea factory - Rize',
      loc_5: '🏰 Trabzon Castle',
      loc_5_desc: 'Historic castle, Atatürk Mansion',
      loc_6: '🌲 Firtina Stream',
      loc_6_desc: 'Bridges, canyons, rafting',
      loc_7: '🏛️ Zilkale',
      loc_7_desc: 'Medieval castle, panoramic view',
      loc_8: '🌄 Hidirnebi Plateau',
      loc_8_desc: 'Plateau above the clouds',
      loc_9: '💧 Sera Lake',
      loc_9_desc: 'Hidden paradise, between plateaus',
      loc_10: '🌿 Pokut Plateau',
      loc_10_desc: 'Every shade of green, nature camp',
      loc_11: '🏞️ Altindere Valley',
      loc_11_desc: 'Nature park, trekking routes',
      loc_12: '🎣 Fish Season',
      loc_12_desc: 'Anchovy, trout, Black Sea cuisine',
      locations_climate: 'Black Sea Climate:',
      locations_climate_desc: 'The region has a rainy climate. Don\'t forget to bring raincoat and comfortable shoes!',
      locations_important: 'Important Note:',
      locations_important_desc: 'All locations above are for PROPOSAL purposes. According to your time, budget and interests, we create a',
      locations_important_bold: 'custom route for you',
      locations_important_desc2: '!',
      
      included_title: 'Included in Our Transfer Service',
      inc_1: 'Professional, experienced driver service',
      inc_2: 'Clean, air-conditioned, comfortable vehicles (Vito, Sprinter, Midibus)',
      inc_3: 'Fuel and vehicle insurance',
      inc_4: 'Transfer between Istanbul - Black Sea',
      inc_5: 'All transfers within Black Sea',
      inc_6: 'Flexible route planning (plateau, lake, waterfall stops)',
      inc_7: 'Photo stops at points you want',
      inc_8: '24/7 support via WhatsApp',
      included_note: 'Note:',
      included_note_desc: 'Accommodation (plateau houses/hotels), meals, museum entrance fees and guide service are optional. We can also offer a',
      included_note_bold: 'full package',
      included_note_desc2: 'according to your request!',
      
      how_title: 'How It Works?',
      how_1_title: 'Contact Us',
      how_1_desc: 'Reach us via WhatsApp, phone or email',
      how_2_title: 'Specify Your Needs',
      how_2_desc: 'Which places do you want to see? How many days? How many people? Your budget?',
      how_3_title: 'Get Custom Quote',
      how_3_desc: 'We offer you custom Black Sea route and price quote',
      how_4_title: 'Confirm and Depart',
      how_4_desc: 'Make reservation, we handle the rest!',
      
      packages_title: 'Popular Package Suggestions',
      package_1_title: '⚡ Quick Tour',
      package_1_duration: '2 Days / 1 Night',
      package_1_1: '✓ Trabzon → Sumela → Uzungol',
      package_1_2: '✓ Tea Gardens',
      package_1_3: '✓ For quick return',
      package_2_title: '🌿 Classic Tour',
      package_2_duration: '4 Days / 3 Nights',
      package_2_1: '✓ Trabzon + Uzungol + Ayder',
      package_2_2: '✓ Plateaus + Tea Gardens',
      package_2_3: '✓ Most popular choice!',
      package_3_title: '🏔️ Full Tour',
      package_3_duration: '6+ Days / 5+ Nights',
      package_3_1: '✓ Entire Black Sea coastline (Sinop, Samsun, Ordu, Giresun, Trabzon, Rize, Artvin)',
      package_3_2: '✓ All plateaus and hidden paradises',
      package_3_3: '✓ For detailed exploration',
      packages_note: 'The packages above are just',
      packages_note_bold: 'sample',
      packages_note_desc: 'packages. Custom arrangements can be made!',
      
      sidebar_title: 'Custom Black Sea Tour for You',
      sidebar_subtitle: 'Custom price quote based on your needs',
      sidebar_route: '🗺️ Your Route',
      sidebar_duration: '🕐 Your Duration',
      sidebar_group: '👥 Your Group Size',
      sidebar_budget: '💰 Your Budget',
      sidebar_result: '= Your Custom Price!',
      sidebar_whatsapp: 'Get Quote via WhatsApp',
      sidebar_call: 'Call Now: 0501 620 69 52',
      sidebar_support: '24/7 Customer Support',
      sidebar_note: '🌿 Special Black Sea tours for nature lovers! Call us for details.',
    },
    
    de: {
      nav_back: 'Alle Touren',
      hero_title: 'Schwarzmeer-Tour & Transfer',
      hero_custom: 'Individuelle Route für Sie',
      hero_flexible: 'Flexible Gruppe',
      hero_special: 'Sonderpreisangebot',
      
      overview_title: 'Entdecken Sie das üppig grüne Schwarze Meer',
      overview_p1: 'Die Schwarzmeerregion erwartet Sie mit ihren Bergen, Hochebenen, türkisfarbenen Seen, Teegärten und einzigartiger Natur! Von der mystischen Atmosphäre des Sumela-Klosters bis zur Ruhe von Uzungöl, von den grünen Hängen der Ayder-Hochebene bis zu Rizes Teegärten...',
      overview_p2_bold: 'Jede Tour wird speziell für Sie geplant!',
      overview_p2: 'Wir erstellen Pakete passend zu Ihrer Dauer, Route und Budget. Eine unvergessliche Reise im üppig grünen Schwarzen Meer mit professionellem Fahrer und Guide, in komfortablen Fahrzeugen!',
      
      locations_title: 'Was können Sie auf dieser Tour sehen?',
      locations_subtitle: 'Sie können aus den folgenden Orten entsprechend Ihrer individuellen Route wählen:',
      loc_1: '🏔️ Sumela-Kloster',
      loc_1_desc: 'Historisches in Felsen gemeißeltes Kloster - Trabzon',
      loc_2: '💚 Uzungöl',
      loc_2_desc: 'Türkisfarbener See, Hochebenenhäuser, Naturwanderung',
      loc_3: '🌊 Ayder-Hochebene',
      loc_3_desc: 'Grüne Hochebenen, Wasserfälle, Thermalquellen - Rize',
      loc_4: '🍃 Teegärten',
      loc_4_desc: 'Teepflückerlebnis, Teefabrik - Rize',
      loc_5: '🏰 Trabzon-Burg',
      loc_5_desc: 'Historische Burg, Atatürk-Villa',
      loc_6: '🌲 Fırtına-Bach',
      loc_6_desc: 'Brücken, Schluchten, Rafting',
      loc_7: '🏛️ Zilkale',
      loc_7_desc: 'Mittelalterliche Burg, Panoramablick',
      loc_8: '🌄 Hıdırnebi-Hochebene',
      loc_8_desc: 'Hochebene über den Wolken',
      loc_9: '💧 Sera-See',
      loc_9_desc: 'Verstecktes Paradies, zwischen Hochebenen',
      loc_10: '🌿 Pokut-Hochebene',
      loc_10_desc: 'Jeder Grünton, Naturcamp',
      loc_11: '🏞️ Altındere-Tal',
      loc_11_desc: 'Naturpark, Trekkingrouten',
      loc_12: '🎣 Fischsaison',
      loc_12_desc: 'Sardellen, Forelle, Schwarzmeerküche',
      locations_climate: 'Schwarzmeerklima:',
      locations_climate_desc: 'Die Region hat ein regnerisches Klima. Vergessen Sie nicht, Regenmantel und bequeme Schuhe mitzubringen!',
      locations_important: 'Wichtiger Hinweis:',
      locations_important_desc: 'Alle oben genannten Orte dienen zu VORSCHLAGSZWECKEN. Entsprechend Ihrer Zeit, Budget und Interessen erstellen wir eine',
      locations_important_bold: 'individuelle Route für Sie',
      locations_important_desc2: '!',
      
      included_title: 'In unserem Transfer-Service enthalten',
      inc_1: 'Professioneller, erfahrener Fahrer-Service',
      inc_2: 'Saubere, klimatisierte, komfortable Fahrzeuge (Vito, Sprinter, Midibus)',
      inc_3: 'Kraftstoff und Fahrzeugversicherung',
      inc_4: 'Transfer zwischen Istanbul - Schwarzes Meer',
      inc_5: 'Alle Transfers innerhalb des Schwarzen Meeres',
      inc_6: 'Flexible Routenplanung (Hochebene, See, Wasserfall-Stopps)',
      inc_7: 'Fotostopps an gewünschten Punkten',
      inc_8: '24/7 Support via WhatsApp',
      included_note: 'Hinweis:',
      included_note_desc: 'Unterkunft (Hochebenenhäuser/Hotels), Mahlzeiten, Museums-Eintrittsgelder und Guide-Service sind optional. Wir können auch ein',
      included_note_bold: 'Komplettpaket',
      included_note_desc2: 'nach Ihrer Anfrage anbieten!',
      
      how_title: 'Wie funktioniert es?',
      how_1_title: 'Kontaktieren Sie uns',
      how_1_desc: 'Erreichen Sie uns per WhatsApp, Telefon oder E-Mail',
      how_2_title: 'Geben Sie Ihre Bedürfnisse an',
      how_2_desc: 'Welche Orte möchten Sie sehen? Wie viele Tage? Wie viele Personen? Ihr Budget?',
      how_3_title: 'Individuelles Angebot erhalten',
      how_3_desc: 'Wir bieten Ihnen individuelle Schwarzmeer-Route und Preisangebot',
      how_4_title: 'Bestätigen und abreisen',
      how_4_desc: 'Reservierung vornehmen, wir kümmern uns um den Rest!',
      
      packages_title: 'Beliebte Paketvorschläge',
      package_1_title: '⚡ Schnell-Tour',
      package_1_duration: '2 Tage / 1 Nacht',
      package_1_1: '✓ Trabzon → Sumela → Uzungöl',
      package_1_2: '✓ Teegärten',
      package_1_3: '✓ Für schnelle Rückkehr',
      package_2_title: '🌿 Klassische Tour',
      package_2_duration: '4 Tage / 3 Nächte',
      package_2_1: '✓ Trabzon + Uzungöl + Ayder',
      package_2_2: '✓ Hochebenen + Teegärten',
      package_2_3: '✓ Beliebteste Wahl!',
      package_3_title: '🏔️ Vollständige Tour',
      package_3_duration: '6+ Tage / 5+ Nächte',
      package_3_1: '✓ Gesamte Schwarzmeerküste (Sinop, Samsun, Ordu, Giresun, Trabzon, Rize, Artvin)',
      package_3_2: '✓ Alle Hochebenen und versteckte Paradiese',
      package_3_3: '✓ Für detaillierte Erkundung',
      packages_note: 'Die Pakete oben sind nur',
      packages_note_bold: 'Beispiel',
      packages_note_desc: '-Pakete. Individuelle Anpassungen können vorgenommen werden!',
      
      sidebar_title: 'Individuelle Schwarzmeer-Tour für Sie',
      sidebar_subtitle: 'Individuelles Preisangebot basierend auf Ihren Bedürfnissen',
      sidebar_route: '🗺️ Ihre Route',
      sidebar_duration: '🕐 Ihre Dauer',
      sidebar_group: '👥 Ihre Gruppengröße',
      sidebar_budget: '💰 Ihr Budget',
      sidebar_result: '= Ihr individueller Preis!',
      sidebar_whatsapp: 'Angebot per WhatsApp',
      sidebar_call: 'Jetzt anrufen: 0501 620 69 52',
      sidebar_support: '24/7 Kundensupport',
      sidebar_note: '🌿 Spezielle Schwarzmeer-Touren für Naturliebhaber! Rufen Sie uns für Details an.',
    },
    
    ru: {
      nav_back: 'Все туры',
      hero_title: 'Черноморский тур и трансфер',
      hero_custom: 'Индивидуальный маршрут для вас',
      hero_flexible: 'Гибкая группа',
      hero_special: 'Специальное предложение',
      
      overview_title: 'Откройте для себя пышное зеленое Черное море',
      overview_p1: 'Черноморский регион ждет вас со своими горами, плато, бирюзовыми озерами, чайными садами и уникальной природой! От мистической атмосферы монастыря Сумела до спокойствия Узунгёля, от зеленых склонов плато Айдер до чайных садов Ризе...',
      overview_p2_bold: 'Каждый тур планируется специально для вас!',
      overview_p2: 'Мы создаем пакеты, подходящие для вашей продолжительности, маршрута и бюджета. Незабываемое путешествие по пышному зеленому Черному морю с профессиональным водителем и гидом, в комфортабельных автомобилях!',
      
      locations_title: 'Что вы можете увидеть в этом туре?',
      locations_subtitle: 'Вы можете выбрать из следующих мест согласно вашему индивидуальному маршруту:',
      loc_1: '🏔️ Монастырь Сумела',
      loc_1_desc: 'Исторический монастырь, высеченный в скалах - Трабзон',
      loc_2: '💚 Узунгёль',
      loc_2_desc: 'Бирюзовое озеро, дома на плато, прогулка по природе',
      loc_3: '🌊 Плато Айдер',
      loc_3_desc: 'Зеленые плато, водопады, термальные источники - Ризе',
      loc_4: '🍃 Чайные сады',
      loc_4_desc: 'Опыт сбора чая, чайная фабрика - Ризе',
      loc_5: '🏰 Трабзонская крепость',
      loc_5_desc: 'Историческая крепость, особняк Ататюрка',
      loc_6: '🌲 Ручей Фыртына',
      loc_6_desc: 'Мосты, каньоны, рафтинг',
      loc_7: '🏛️ Зилкале',
      loc_7_desc: 'Средневековая крепость, панорамный вид',
      loc_8: '🌄 Плато Хыдырнеби',
      loc_8_desc: 'Плато над облаками',
      loc_9: '💧 Озеро Сера',
      loc_9_desc: 'Скрытый рай, между плато',
      loc_10: '🌿 Плато Покут',
      loc_10_desc: 'Каждый оттенок зеленого, природный лагерь',
      loc_11: '🏞️ Долина Алтындере',
      loc_11_desc: 'Природный парк, треккинговые маршруты',
      loc_12: '🎣 Рыбный сезон',
      loc_12_desc: 'Анчоусы, форель, черноморская кухня',
      locations_climate: 'Черноморский климат:',
      locations_climate_desc: 'Регион имеет дождливый климат. Не забудьте взять дождевик и удобную обувь!',
      locations_important: 'Важное примечание:',
      locations_important_desc: 'Все вышеперечисленные места предназначены для ПРЕДЛОЖЕНИЯ. Согласно вашему времени, бюджету и интересам, мы создаем',
      locations_important_bold: 'индивидуальный маршрут для вас',
      locations_important_desc2: '!',
      
      included_title: 'Включено в нашу трансферную услугу',
      inc_1: 'Профессиональный опытный водитель',
      inc_2: 'Чистые, кондиционированные, комфортабельные автомобили (Vito, Sprinter, Midibus)',
      inc_3: 'Топливо и страховка автомобиля',
      inc_4: 'Трансфер между Стамбулом - Черным морем',
      inc_5: 'Все трансферы внутри Черного моря',
      inc_6: 'Гибкое планирование маршрута (плато, озеро, водопад-остановки)',
      inc_7: 'Фото-остановки в нужных вам местах',
      inc_8: 'Поддержка 24/7 через WhatsApp',
      included_note: 'Примечание:',
      included_note_desc: 'Проживание (дома на плато/отели), питание, входные билеты в музеи и услуги гида опциональны. Мы также можем предложить',
      included_note_bold: 'полный пакет',
      included_note_desc2: 'по вашему запросу!',
      
      how_title: 'Как это работает?',
      how_1_title: 'Свяжитесь с нами',
      how_1_desc: 'Свяжитесь с нами через WhatsApp, телефон или электронную почту',
      how_2_title: 'Укажите ваши потребности',
      how_2_desc: 'Какие места вы хотите увидеть? Сколько дней? Сколько человек? Ваш бюджет?',
      how_3_title: 'Получите индивидуальное предложение',
      how_3_desc: 'Мы предлагаем вам индивидуальный черноморский маршрут и ценовое предложение',
      how_4_title: 'Подтвердите и отправляйтесь',
      how_4_desc: 'Сделайте бронирование, мы позаботимся об остальном!',
      
      packages_title: 'Популярные варианты пакетов',
      package_1_title: '⚡ Быстрый тур',
      package_1_duration: '2 дня / 1 ночь',
      package_1_1: '✓ Трабзон → Сумела → Узунгёль',
      package_1_2: '✓ Чайные сады',
      package_1_3: '✓ Для быстрого возвращения',
      package_2_title: '🌿 Классический тур',
      package_2_duration: '4 дня / 3 ночи',
      package_2_1: '✓ Трабзон + Узунгёль + Айдер',
      package_2_2: '✓ Плато + Чайные сады',
      package_2_3: '✓ Самый популярный выбор!',
      package_3_title: '🏔️ Полный тур',
      package_3_duration: '6+ дней / 5+ ночей',
      package_3_1: '✓ Все черноморское побережье (Синоп, Самсун, Орду, Гиресун, Трабзон, Ризе, Артвин)',
      package_3_2: '✓ Все плато и скрытые райские уголки',
      package_3_3: '✓ Для детального исследования',
      packages_note: 'Пакеты выше - это всего лишь',
      packages_note_bold: 'примерные',
      packages_note_desc: 'пакеты. Могут быть внесены индивидуальные изменения!',
      
      sidebar_title: 'Индивидуальный черноморский тур для вас',
      sidebar_subtitle: 'Индивидуальное ценовое предложение на основе ваших потребностей',
      sidebar_route: '🗺️ Ваш маршрут',
      sidebar_duration: '🕐 Ваша продолжительность',
      sidebar_group: '👥 Размер вашей группы',
      sidebar_budget: '💰 Ваш бюджет',
      sidebar_result: '= Ваша индивидуальная цена!',
      sidebar_whatsapp: 'Получить предложение в WhatsApp',
      sidebar_call: 'Позвоните сейчас: 0501 620 69 52',
      sidebar_support: 'Поддержка клиентов 24/7',
      sidebar_note: '🌿 Специальные черноморские туры для любителей природы! Звоните для получения подробностей.',
    },
    
    ar: {
      nav_back: 'جميع الجولات',
      hero_title: 'جولة البحر الأسود والنقل',
      hero_custom: 'مسار مخصص لك',
      hero_flexible: 'مجموعة مرنة',
      hero_special: 'عرض سعر خاص',
      
      overview_title: 'اكتشف البحر الأسود الأخضر المورق',
      overview_p1: 'منطقة البحر الأسود تنتظرك بجبالها وهضابها وبحيراتها الفيروزية وحدائق الشاي والطبيعة الفريدة! من الأجواء الصوفية لدير سوميلا إلى سلام أوزونغول، من المنحدرات الخضراء لهضبة آيدر إلى حدائق الشاي في ريزه...',
      overview_p2_bold: 'كل جولة مخططة خصيصًا لك!',
      overview_p2: 'نحن نقوم بإنشاء باقات مناسبة لمدتك ومسارك وميزانيتك. رحلة لا تُنسى في البحر الأسود الأخضر المورق مع سائق ومرشد محترفين، في مركبات مريحة!',
      
      locations_title: 'ماذا يمكنك أن ترى في هذه الجولة؟',
      locations_subtitle: 'يمكنك الاختيار من الأماكن التالية وفقًا لمسارك المخصص:',
      loc_1: '🏔️ دير سوميلا',
      loc_1_desc: 'دير تاريخي منحوت في الصخور - طرابزون',
      loc_2: '💚 أوزونغول',
      loc_2_desc: 'بحيرة فيروزية، منازل الهضبة، مشي في الطبيعة',
      loc_3: '🌊 هضبة آيدر',
      loc_3_desc: 'هضاب خضراء، شلالات، ينابيع حرارية - ريزه',
      loc_4: '🍃 حدائق الشاي',
      loc_4_desc: 'تجربة قطف الشاي، مصنع الشاي - ريزه',
      loc_5: '🏰 قلعة طرابزون',
      loc_5_desc: 'قلعة تاريخية، قصر أتاتورك',
      loc_6: '🌲 نهر فيرتينا',
      loc_6_desc: 'جسور، أخاديد، رافتينغ',
      loc_7: '🏛️ زيلكالي',
      loc_7_desc: 'قلعة من العصور الوسطى، منظر بانورامي',
      loc_8: '🌄 هضبة هيديرنبي',
      loc_8_desc: 'هضبة فوق السحاب',
      loc_9: '💧 بحيرة سيرا',
      loc_9_desc: 'جنة مخفية، بين الهضاب',
      loc_10: '🌿 هضبة بوكوت',
      loc_10_desc: 'كل درجات الأخضر، مخيم طبيعي',
      loc_11: '🏞️ وادي ألتيندري',
      loc_11_desc: 'حديقة طبيعية، طرق تسلق',
      loc_12: '🎣 موسم الأسماك',
      loc_12_desc: 'الأنشوجة، سمك السلمون المرقط، مطبخ البحر الأسود',
      locations_climate: 'مناخ البحر الأسود:',
      locations_climate_desc: 'المنطقة لديها مناخ ممطر. لا تنسى إحضار معطف المطر والأحذية المريحة!',
      locations_important: 'ملاحظة مهمة:',
      locations_important_desc: 'جميع الأماكن المذكورة أعلاه لأغراض الاقتراح. وفقًا لوقتك وميزانيتك واهتماماتك، نقوم بإنشاء',
      locations_important_bold: 'مسار مخصص لك',
      locations_important_desc2: '!',
      
      included_title: 'مشمول في خدمة النقل لدينا',
      inc_1: 'خدمة سائق محترف وذو خبرة',
      inc_2: 'مركبات نظيفة ومكيفة ومريحة (Vito, Sprinter, Midibus)',
      inc_3: 'الوقود وتأمين المركبة',
      inc_4: 'النقل بين إسطنبول - البحر الأسود',
      inc_5: 'جميع التنقلات داخل البحر الأسود',
      inc_6: 'تخطيط مسار مرن (هضبة، بحيرة، توقفات شلال)',
      inc_7: 'توقفات للصور في النقاط التي تريدها',
      inc_8: 'دعم 24/7 عبر WhatsApp',
      included_note: 'ملاحظة:',
      included_note_desc: 'الإقامة (منازل الهضبة/الفنادق)، الوجبات، رسوم دخول المتاحف وخدمة المرشد اختيارية. يمكننا أيضًا تقديم',
      included_note_bold: 'باقة كاملة',
      included_note_desc2: 'حسب طلبك!',
      
      how_title: 'كيف يعمل؟',
      how_1_title: 'اتصل بنا',
      how_1_desc: 'تواصل معنا عبر WhatsApp أو الهاتف أو البريد الإلكتروني',
      how_2_title: 'حدد احتياجاتك',
      how_2_desc: 'ما هي الأماكن التي تريد رؤيتها؟ كم يوم؟ كم شخص؟ ميزانيتك؟',
      how_3_title: 'احصل على عرض مخصص',
      how_3_desc: 'نقدم لك مسار البحر الأسود المخصص وعرض السعر',
      how_4_title: 'تأكيد والمغادرة',
      how_4_desc: 'قم بالحجز، نحن نتعامل مع الباقي!',
      
      packages_title: 'اقتراحات الباقات الشعبية',
      package_1_title: '⚡ جولة سريعة',
      package_1_duration: '2 أيام / ليلة واحدة',
      package_1_1: '✓ طرابزون → سوميلا → أوزونغول',
      package_1_2: '✓ حدائق الشاي',
      package_1_3: '✓ للعودة السريعة',
      package_2_title: '🌿 جولة كلاسيكية',
      package_2_duration: '4 أيام / 3 ليالٍ',
      package_2_1: '✓ طرابزون + أوزونغول + آيدر',
      package_2_2: '✓ الهضاب + حدائق الشاي',
      package_2_3: '✓ الاختيار الأكثر شعبية!',
      package_3_title: '🏔️ جولة كاملة',
      package_3_duration: '6+ أيام / 5+ ليالٍ',
      package_3_1: '✓ كامل ساحل البحر الأسود (سينوب، سامسون، أوردو، جيرسون، طرابزون، ريزه، أرتفين)',
      package_3_2: '✓ جميع الهضاب والجنات المخفية',
      package_3_3: '✓ للاستكشاف التفصيلي',
      packages_note: 'الباقات أعلاه هي مجرد باقات',
      packages_note_bold: 'نموذجية',
      packages_note_desc: '. يمكن إجراء ترتيبات مخصصة!',
      
      sidebar_title: 'جولة البحر الأسود المخصصة لك',
      sidebar_subtitle: 'عرض سعر مخصص بناءً على احتياجاتك',
      sidebar_route: '🗺️ مسارك',
      sidebar_duration: '🕐 مدتك',
      sidebar_group: '👥 حجم مجموعتك',
      sidebar_budget: '💰 ميزانيتك',
      sidebar_result: '= سعرك المخصص!',
      sidebar_whatsapp: 'احصل على عرض عبر WhatsApp',
      sidebar_call: 'اتصل الآن: 0501 620 69 52',
      sidebar_support: 'دعم العملاء 24/7',
      sidebar_note: '🌿 جولات البحر الأسود الخاصة لمحبي الطبيعة! اتصل بنا للحصول على التفاصيل.',
    }
  };

  const t = (key: keyof typeof translations.tr) => translations[language][key];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
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
          src="https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/sumela-5035247_1280_n2qju5.jpg"
          alt="Karadeniz Turu"
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
                  <Trees className="w-5 h-5" />
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
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Trees className="w-6 h-6 text-green-600" />
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
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('locations_title')}</h2>
                </div>

                <p className="text-gray-600 mb-6">
                  {t('locations_subtitle')}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[...Array(12)].map((_, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-md transition group">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition">{t(`loc_${idx+1}` as any)}</h3>
                      <p className="text-sm text-gray-600">{t(`loc_${idx+1}_desc` as any)}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-lg">
                  <p className="text-gray-800 font-semibold">
                    ☔ <strong>{t('locations_climate')}</strong> {t('locations_climate_desc')}
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
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8"
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
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                  <div className="border-2 border-primary-500 rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-bold text-primary-500 mb-3">{t('package_1_title')}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('package_1_duration')}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3].map(i => (
                        <li key={i}>{t(`package_1_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 border-green-500 rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-bold text-green-600 mb-3">{t('package_2_title')}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('package_2_duration')}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3].map(i => (
                        <li key={i}>{t(`package_2_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 border-blue-500 rounded-xl p-6 hover:shadow-xl transition md:col-span-2">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">{t('package_3_title')}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('package_3_duration')}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {[1,2,3].map(i => (
                        <li key={i}>{t(`package_3_${i}` as any)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-6">
                  💡 {t('packages_note')} <strong>{t('packages_note_bold')}</strong> {t('packages_note_desc')}
                </p>
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
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trees className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('sidebar_title')}</h3>
                  <p className="text-gray-600">{t('sidebar_subtitle')}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl">
                    <p className="text-center text-gray-700 font-semibold">
                      {t('sidebar_route')}<br />
                      {t('sidebar_duration')}<br />
                      {t('sidebar_group')}<br />
                      {t('sidebar_budget')}<br />
                      <span className="text-green-600 text-xl font-black">{t('sidebar_result')}</span>
                    </p>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/905016206952?text=Merhaba!%20Karadeniz%20Turu%20hakkında%20bilgi%20almak%20istiyorum.%20Size%20özel%20paket%20ve%20fiyat%20teklifi%20alabilir%20miyim?"
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

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-xs text-green-900 font-semibold">
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