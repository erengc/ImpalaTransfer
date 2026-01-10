'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Clock, Users, CheckCircle, ArrowLeft, Phone, Mountain, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AnadoluTurDetay() {
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
      hero_title: 'Anadolu Tur & Transfer',
      hero_custom: 'Size Özel Rota',
      hero_flexible: 'Esnek Grup',
      hero_special: 'Özel Fiyat Teklifi',
      
      overview_title: 'Anadolu\'nun Büyüsünü Keşfedin',
      overview_p1: 'Binlerce yıllık tarihe sahip Anadolu topraklarında, doğanın harikalarını ve kültürel zenginlikleri keşfetmeye hazır olun! Kapadokya\'nın peri bacalarından Pamukkale\'nin beyaz travertenlerine, Konya\'nın mistik atmosferinden antik kentlerin görkemli kalıntılarına kadar...',
      overview_p2_bold: 'Her tur isteğinize özel planlanır!',
      overview_p2: 'Süre, rota ve bütçenize uygun paket oluştururuz. Profesyonel şoför ve rehber eşliğinde, konforlu araçlarla güvenli yolculuk garantisi veriyoruz.',
      
      locations_title: 'Bu Turda Neler Görebilirsiniz?',
      locations_subtitle: 'Size özel rotanıza göre aşağıdaki lokasyonlardan seçim yapabilirsiniz:',
      loc_1: '🎈 Kapadokya',
      loc_1_desc: 'Peri bacaları, yeraltı şehirleri, mağara otelleri',
      loc_2: '💧 Pamukkale',
      loc_2_desc: 'Beyaz travertenler, termal havuzlar, Hierapolis',
      loc_3: '🕌 Konya',
      loc_3_desc: 'Mevlana Müzesi, Selçuklu eserleri',
      loc_4: '🏛️ Efes',
      loc_4_desc: 'Antik kent, Artemis Tapınağı',
      loc_5: '🌊 Antalya',
      loc_5_desc: 'Düden Şelalesi, Kaleiçi, plajlar',
      loc_6: '🏰 Ankara',
      loc_6_desc: 'Anıtkabir, Anadolu Medeniyetleri Müzesi',
      loc_7: '🗿 Nemrut Dağı',
      loc_7_desc: 'Dev heykeller, gün doğumu',
      loc_8: '🏞️ İhlara Vadisi',
      loc_8_desc: 'Kanyonlar, kiliseler, doğa yürüyüşü',
      loc_9: '🕍 Şanlıurfa',
      loc_9_desc: 'Balıklıgöl, Göbeklitepe',
      loc_10: '🏜️ Mardin',
      loc_10_desc: 'Taş evler, tarihi sokaklar',
      loc_11: '🌅 Kaş-Fethiye',
      loc_11_desc: 'Ölüdeniz, mavi lagün',
      loc_12: '🧿 Bodrum',
      loc_12_desc: 'Bodrum Kalesi, marinalar',
      locations_important: 'Önemli Not:',
      locations_important_desc: 'Yukarıdaki tüm lokasyonlar TEKLİF amaçlıdır. Sürenize, bütçenize ve ilgi alanlarınıza göre',
      locations_important_bold: 'size özel rota',
      locations_important_desc2: 'oluştururuz!',
      
      included_title: 'Transfer Hizmetimize Dahil',
      inc_1: 'Profesyonel, deneyimli şoför hizmeti',
      inc_2: 'Temiz, klimali, konforlu araçlar (Vito, Sprinter, Midibus)',
      inc_3: 'Yakıt ve araç sigortası',
      inc_4: 'Şehir içi ve şehirler arası transfer',
      inc_5: 'Esnek rota planlaması',
      inc_6: 'İstediğiniz noktalarda mola ve fotoğraf durakları',
      inc_7: 'WhatsApp üzerinden 7/24 destek',
      included_note: 'Not:',
      included_note_desc: 'Konaklama, yemek, müze giriş ücretleri ve rehber hizmeti isteğe bağlıdır. Talebinize göre',
      included_note_bold: 'tam paket',
      included_note_desc2: 'de sunabiliriz!',
      
      how_title: 'Nasıl Çalışır?',
      how_1_title: 'Bizimle İletişime Geçin',
      how_1_desc: 'WhatsApp, telefon veya e-posta ile ulaşın',
      how_2_title: 'İhtiyaçlarınızı Belirtin',
      how_2_desc: 'Hangi şehirler? Kaç gün? Kaç kişi? Bütçeniz?',
      how_3_title: 'Özel Teklif Alın',
      how_3_desc: 'Size özel rota ve fiyat teklifi sunuyoruz',
      how_4_title: 'Onaylayın ve Yola Çıkın',
      how_4_desc: 'Rezervasyon yapın, biz gerisini halledelim!',
      
      sidebar_title: 'Size Özel Paket',
      sidebar_subtitle: 'İhtiyaçlarınıza göre özel fiyat teklifi',
      sidebar_route: '🎯 Rotanız',
      sidebar_duration: '🕐 Süreniz',
      sidebar_group: '👥 Grup Büyüklüğünüz',
      sidebar_budget: '💰 Bütçeniz',
      sidebar_result: '= Size Özel Fiyat!',
      sidebar_whatsapp: 'WhatsApp ile Teklif Al',
      sidebar_call: 'Hemen Ara: 0501 620 69 52',
      sidebar_support: '7/24 Müşteri Desteği',
      sidebar_note: '⚡ Hızlı Yanıt Garantisi: Talebinize 1 saat içinde dönüş yapıyoruz!',
    },
    
    en: {
      nav_back: 'All Tours',
      hero_title: 'Anatolia Tour & Transfer',
      hero_custom: 'Custom Route for You',
      hero_flexible: 'Flexible Group',
      hero_special: 'Special Price Offer',
      
      overview_title: 'Discover the Magic of Anatolia',
      overview_p1: 'Get ready to discover the wonders of nature and cultural riches in Anatolia, which has thousands of years of history! From the fairy chimneys of Cappadocia to the white travertines of Pamukkale, from the mystical atmosphere of Konya to the magnificent remains of ancient cities...',
      overview_p2_bold: 'Every tour is planned specially for you!',
      overview_p2: 'We create packages suitable for your duration, route and budget. We guarantee safe travel with professional driver and guide, in comfortable vehicles.',
      
      locations_title: 'What Can You See on This Tour?',
      locations_subtitle: 'You can choose from the following locations according to your custom route:',
      loc_1: '🎈 Cappadocia',
      loc_1_desc: 'Fairy chimneys, underground cities, cave hotels',
      loc_2: '💧 Pamukkale',
      loc_2_desc: 'White travertines, thermal pools, Hierapolis',
      loc_3: '🕌 Konya',
      loc_3_desc: 'Mevlana Museum, Seljuk artifacts',
      loc_4: '🏛️ Ephesus',
      loc_4_desc: 'Ancient city, Temple of Artemis',
      loc_5: '🌊 Antalya',
      loc_5_desc: 'Düden Waterfall, Kaleiçi, beaches',
      loc_6: '🏰 Ankara',
      loc_6_desc: 'Anıtkabir, Museum of Anatolian Civilizations',
      loc_7: '🗿 Mount Nemrut',
      loc_7_desc: 'Giant statues, sunrise',
      loc_8: '🏞️ Ihlara Valley',
      loc_8_desc: 'Canyons, churches, nature hiking',
      loc_9: '🕍 Şanlıurfa',
      loc_9_desc: 'Balıklıgöl, Göbekli Tepe',
      loc_10: '🏜️ Mardin',
      loc_10_desc: 'Stone houses, historic streets',
      loc_11: '🌅 Kaş-Fethiye',
      loc_11_desc: 'Ölüdeniz, blue lagoon',
      loc_12: '🧿 Bodrum',
      loc_12_desc: 'Bodrum Castle, marinas',
      locations_important: 'Important Note:',
      locations_important_desc: 'All locations above are for PROPOSAL purposes. According to your time, budget and interests, we create a',
      locations_important_bold: 'custom route for you',
      locations_important_desc2: '!',
      
      included_title: 'Included in Our Transfer Service',
      inc_1: 'Professional, experienced driver service',
      inc_2: 'Clean, air-conditioned, comfortable vehicles (Vito, Sprinter, Midibus)',
      inc_3: 'Fuel and vehicle insurance',
      inc_4: 'Intracity and intercity transfers',
      inc_5: 'Flexible route planning',
      inc_6: 'Breaks and photo stops at points you want',
      inc_7: '24/7 support via WhatsApp',
      included_note: 'Note:',
      included_note_desc: 'Accommodation, meals, museum entrance fees and guide service are optional. We can also offer a',
      included_note_bold: 'full package',
      included_note_desc2: 'according to your request!',
      
      how_title: 'How It Works?',
      how_1_title: 'Contact Us',
      how_1_desc: 'Reach us via WhatsApp, phone or email',
      how_2_title: 'Specify Your Needs',
      how_2_desc: 'Which cities? How many days? How many people? Your budget?',
      how_3_title: 'Get Custom Quote',
      how_3_desc: 'We offer you custom route and price quote',
      how_4_title: 'Confirm and Depart',
      how_4_desc: 'Make reservation, we handle the rest!',
      
      sidebar_title: 'Custom Package for You',
      sidebar_subtitle: 'Custom price quote based on your needs',
      sidebar_route: '🎯 Your Route',
      sidebar_duration: '🕐 Your Duration',
      sidebar_group: '👥 Your Group Size',
      sidebar_budget: '💰 Your Budget',
      sidebar_result: '= Your Custom Price!',
      sidebar_whatsapp: 'Get Quote via WhatsApp',
      sidebar_call: 'Call Now: 0501 620 69 52',
      sidebar_support: '24/7 Customer Support',
      sidebar_note: '⚡ Fast Response Guarantee: We respond to your request within 1 hour!',
    },
    
    de: {
      nav_back: 'Alle Touren',
      hero_title: 'Anatolien-Tour & Transfer',
      hero_custom: 'Individuelle Route für Sie',
      hero_flexible: 'Flexible Gruppe',
      hero_special: 'Sonderpreisangebot',
      
      overview_title: 'Entdecken Sie die Magie Anatoliens',
      overview_p1: 'Machen Sie sich bereit, die Naturwunder und kulturellen Reichtümer Anatoliens mit seiner tausendjährigen Geschichte zu entdecken! Von den Feenkaminen Kappadokiens bis zu den weißen Travertinen von Pamukkale, von der mystischen Atmosphäre Konyas bis zu den prächtigen Überresten antiker Städte...',
      overview_p2_bold: 'Jede Tour wird speziell für Sie geplant!',
      overview_p2: 'Wir erstellen Pakete passend zu Ihrer Dauer, Route und Budget. Wir garantieren sichere Reisen mit professionellem Fahrer und Guide, in komfortablen Fahrzeugen.',
      
      locations_title: 'Was können Sie auf dieser Tour sehen?',
      locations_subtitle: 'Sie können aus den folgenden Orten entsprechend Ihrer individuellen Route wählen:',
      loc_1: '🎈 Kappadokien',
      loc_1_desc: 'Feenkamine, unterirdische Städte, Höhlenhotels',
      loc_2: '💧 Pamukkale',
      loc_2_desc: 'Weiße Travertinen, Thermalbecken, Hierapolis',
      loc_3: '🕌 Konya',
      loc_3_desc: 'Mevlana-Museum, Seldschukische Artefakte',
      loc_4: '🏛️ Ephesus',
      loc_4_desc: 'Antike Stadt, Artemis-Tempel',
      loc_5: '🌊 Antalya',
      loc_5_desc: 'Düden-Wasserfall, Kaleiçi, Strände',
      loc_6: '🏰 Ankara',
      loc_6_desc: 'Anıtkabir, Museum für anatolische Zivilisationen',
      loc_7: '🗿 Berg Nemrut',
      loc_7_desc: 'Riesenstatuen, Sonnenaufgang',
      loc_8: '🏞️ Ihlara-Tal',
      loc_8_desc: 'Schluchten, Kirchen, Naturwanderung',
      loc_9: '🕍 Şanlıurfa',
      loc_9_desc: 'Balıklıgöl, Göbekli Tepe',
      loc_10: '🏜️ Mardin',
      loc_10_desc: 'Steinhäuser, historische Straßen',
      loc_11: '🌅 Kaş-Fethiye',
      loc_11_desc: 'Ölüdeniz, blaue Lagune',
      loc_12: '🧿 Bodrum',
      loc_12_desc: 'Bodrum-Burg, Jachthäfen',
      locations_important: 'Wichtiger Hinweis:',
      locations_important_desc: 'Alle oben genannten Orte dienen zu VORSCHLAGSZWECKEN. Entsprechend Ihrer Zeit, Budget und Interessen erstellen wir eine',
      locations_important_bold: 'individuelle Route für Sie',
      locations_important_desc2: '!',
      
      included_title: 'In unserem Transfer-Service enthalten',
      inc_1: 'Professioneller, erfahrener Fahrer-Service',
      inc_2: 'Saubere, klimatisierte, komfortable Fahrzeuge (Vito, Sprinter, Midibus)',
      inc_3: 'Kraftstoff und Fahrzeugversicherung',
      inc_4: 'Innerstadt- und Intercity-Transfers',
      inc_5: 'Flexible Routenplanung',
      inc_6: 'Pausen und Fotostopps an gewünschten Punkten',
      inc_7: '24/7 Support via WhatsApp',
      included_note: 'Hinweis:',
      included_note_desc: 'Unterkunft, Mahlzeiten, Museums-Eintrittsgelder und Guide-Service sind optional. Wir können auch ein',
      included_note_bold: 'Komplettpaket',
      included_note_desc2: 'nach Ihrer Anfrage anbieten!',
      
      how_title: 'Wie funktioniert es?',
      how_1_title: 'Kontaktieren Sie uns',
      how_1_desc: 'Erreichen Sie uns per WhatsApp, Telefon oder E-Mail',
      how_2_title: 'Geben Sie Ihre Bedürfnisse an',
      how_2_desc: 'Welche Städte? Wie viele Tage? Wie viele Personen? Ihr Budget?',
      how_3_title: 'Individuelles Angebot erhalten',
      how_3_desc: 'Wir bieten Ihnen individuelle Route und Preisangebot',
      how_4_title: 'Bestätigen und abreisen',
      how_4_desc: 'Reservierung vornehmen, wir kümmern uns um den Rest!',
      
      sidebar_title: 'Individuelles Paket für Sie',
      sidebar_subtitle: 'Individuelles Preisangebot basierend auf Ihren Bedürfnissen',
      sidebar_route: '🎯 Ihre Route',
      sidebar_duration: '🕐 Ihre Dauer',
      sidebar_group: '👥 Ihre Gruppengröße',
      sidebar_budget: '💰 Ihr Budget',
      sidebar_result: '= Ihr individueller Preis!',
      sidebar_whatsapp: 'Angebot per WhatsApp',
      sidebar_call: 'Jetzt anrufen: 0501 620 69 52',
      sidebar_support: '24/7 Kundensupport',
      sidebar_note: '⚡ Schnelle Antwortgarantie: Wir antworten innerhalb 1 Stunde auf Ihre Anfrage!',
    },
    
    ru: {
      nav_back: 'Все туры',
      hero_title: 'Анатолийский тур и трансфер',
      hero_custom: 'Индивидуальный маршрут для вас',
      hero_flexible: 'Гибкая группа',
      hero_special: 'Специальное предложение',
      
      overview_title: 'Откройте магию Анатолии',
      overview_p1: 'Будьте готовы открыть чудеса природы и культурные богатства Анатолии с ее тысячелетней историей! От сказочных дымоходов Каппадокии до белых травертинов Памуккале, от мистической атмосферы Коньи до великолепных остатков древних городов...',
      overview_p2_bold: 'Каждый тур планируется специально для вас!',
      overview_p2: 'Мы создаем пакеты, подходящие для вашей продолжительности, маршрута и бюджета. Мы гарантируем безопасное путешествие с профессиональным водителем и гидом, в комфортабельных автомобилях.',
      
      locations_title: 'Что вы можете увидеть в этом туре?',
      locations_subtitle: 'Вы можете выбрать из следующих мест согласно вашему индивидуальному маршруту:',
      loc_1: '🎈 Каппадокия',
      loc_1_desc: 'Сказочные дымоходы, подземные города, пещерные отели',
      loc_2: '💧 Памуккале',
      loc_2_desc: 'Белые травертины, термальные бассейны, Иераполис',
      loc_3: '🕌 Конья',
      loc_3_desc: 'Музей Мевланы, артефакты Сельджуков',
      loc_4: '🏛️ Эфес',
      loc_4_desc: 'Древний город, Храм Артемиды',
      loc_5: '🌊 Анталья',
      loc_5_desc: 'Водопад Дюден, Калеичи, пляжи',
      loc_6: '🏰 Анкара',
      loc_6_desc: 'Аныткабир, Музей анатолийских цивилизаций',
      loc_7: '🗿 Гора Немрут',
      loc_7_desc: 'Гигантские статуи, восход солнца',
      loc_8: '🏞️ Долина Ихлара',
      loc_8_desc: 'Каньоны, церкви, пешие прогулки',
      loc_9: '🕍 Шанлыурфа',
      loc_9_desc: 'Балыклыгёль, Гёбекли-Тепе',
      loc_10: '🏜️ Мардин',
      loc_10_desc: 'Каменные дома, исторические улицы',
      loc_11: '🌅 Каш-Фетхие',
      loc_11_desc: 'Олюдениз, голубая лагуна',
      loc_12: '🧿 Бодрум',
      loc_12_desc: 'Замок Бодрум, марины',
      locations_important: 'Важное примечание:',
      locations_important_desc: 'Все вышеперечисленные места предназначены для ПРЕДЛОЖЕНИЯ. Согласно вашему времени, бюджету и интересам, мы создаем',
      locations_important_bold: 'индивидуальный маршрут для вас',
      locations_important_desc2: '!',
      
      included_title: 'Включено в нашу трансферную услугу',
      inc_1: 'Профессиональный опытный водитель',
      inc_2: 'Чистые, кондиционированные, комфортабельные автомобили (Vito, Sprinter, Midibus)',
      inc_3: 'Топливо и страховка автомобиля',
      inc_4: 'Внутригородские и междугородние трансферы',
      inc_5: 'Гибкое планирование маршрута',
      inc_6: 'Остановки и фото-остановки в нужных вам местах',
      inc_7: 'Поддержка 24/7 через WhatsApp',
      included_note: 'Примечание:',
      included_note_desc: 'Проживание, питание, входные билеты в музеи и услуги гида опциональны. Мы также можем предложить',
      included_note_bold: 'полный пакет',
      included_note_desc2: 'по вашему запросу!',
      
      how_title: 'Как это работает?',
      how_1_title: 'Свяжитесь с нами',
      how_1_desc: 'Свяжитесь с нами через WhatsApp, телефон или электронную почту',
      how_2_title: 'Укажите ваши потребности',
      how_2_desc: 'Какие города? Сколько дней? Сколько человек? Ваш бюджет?',
      how_3_title: 'Получите индивидуальное предложение',
      how_3_desc: 'Мы предлагаем вам индивидуальный маршрут и ценовое предложение',
      how_4_title: 'Подтвердите и отправляйтесь',
      how_4_desc: 'Сделайте бронирование, мы позаботимся об остальном!',
      
      sidebar_title: 'Индивидуальный пакет для вас',
      sidebar_subtitle: 'Индивидуальное ценовое предложение на основе ваших потребностей',
      sidebar_route: '🎯 Ваш маршрут',
      sidebar_duration: '🕐 Ваша продолжительность',
      sidebar_group: '👥 Размер вашей группы',
      sidebar_budget: '💰 Ваш бюджет',
      sidebar_result: '= Ваша индивидуальная цена!',
      sidebar_whatsapp: 'Получить предложение в WhatsApp',
      sidebar_call: 'Позвоните сейчас: 0501 620 69 52',
      sidebar_support: 'Поддержка клиентов 24/7',
      sidebar_note: '⚡ Гарантия быстрого ответа: Мы отвечаем на ваш запрос в течение 1 часа!',
    },
    
    ar: {
      nav_back: 'جميع الجولات',
      hero_title: 'جولة الأناضول والنقل',
      hero_custom: 'مسار مخصص لك',
      hero_flexible: 'مجموعة مرنة',
      hero_special: 'عرض سعر خاص',
      
      overview_title: 'اكتشف سحر الأناضول',
      overview_p1: 'كن مستعدًا لاكتشاف عجائب الطبيعة والثروات الثقافية في الأناضول ذات التاريخ الممتد لآلاف السنين! من المداخن الخيالية في كابادوكيا إلى الترافرتين الأبيض في باموكالي، من الأجواء الصوفية في قونية إلى البقايا الرائعة للمدن القديمة...',
      overview_p2_bold: 'كل جولة مخططة خصيصًا لك!',
      overview_p2: 'نحن نقوم بإنشاء باقات مناسبة لمدتك ومسارك وميزانيتك. نضمن سفرًا آمنًا مع سائق ومرشد محترفين، في مركبات مريحة.',
      
      locations_title: 'ماذا يمكنك أن ترى في هذه الجولة؟',
      locations_subtitle: 'يمكنك الاختيار من الأماكن التالية وفقًا لمسارك المخصص:',
      loc_1: '🎈 كابادوكيا',
      loc_1_desc: 'المداخن الخيالية، المدن تحت الأرض، فنادق الكهوف',
      loc_2: '💧 باموكالي',
      loc_2_desc: 'ترافرتين أبيض، حمامات حرارية، هيرابوليس',
      loc_3: '🕌 قونية',
      loc_3_desc: 'متحف مولانا، آثار السلاجقة',
      loc_4: '🏛️ أفسس',
      loc_4_desc: 'مدينة قديمة، معبد أرتميس',
      loc_5: '🌊 أنطاليا',
      loc_5_desc: 'شلالات دودن، كاليجي، شواطئ',
      loc_6: '🏰 أنقرة',
      loc_6_desc: 'أنيتكابير، متحف الحضارات الأناضولية',
      loc_7: '🗿 جبل نمرود',
      loc_7_desc: 'تماثيل عملاقة، شروق الشمس',
      loc_8: '🏞️ وادي إهلارا',
      loc_8_desc: 'أخاديد، كنائس، مشي في الطبيعة',
      loc_9: '🕍 شانلي أورفا',
      loc_9_desc: 'باليكليغول، غوبكلي تبه',
      loc_10: '🏜️ ماردين',
      loc_10_desc: 'منازل حجرية، شوارع تاريخية',
      loc_11: '🌅 كاش-فتحية',
      loc_11_desc: 'أولودينيز، البحيرة الزرقاء',
      loc_12: '🧿 بودروم',
      loc_12_desc: 'قلعة بودروم، المراسي',
      locations_important: 'ملاحظة مهمة:',
      locations_important_desc: 'جميع الأماكن المذكورة أعلاه لأغراض الاقتراح. وفقًا لوقتك وميزانيتك واهتماماتك، نقوم بإنشاء',
      locations_important_bold: 'مسار مخصص لك',
      locations_important_desc2: '!',
      
      included_title: 'مشمول في خدمة النقل لدينا',
      inc_1: 'خدمة سائق محترف وذو خبرة',
      inc_2: 'مركبات نظيفة ومكيفة ومريحة (Vito, Sprinter, Midibus)',
      inc_3: 'الوقود وتأمين المركبة',
      inc_4: 'النقل داخل المدينة وبين المدن',
      inc_5: 'تخطيط مسار مرن',
      inc_6: 'توقفات واستراحات للصور في النقاط التي تريدها',
      inc_7: 'دعم 24/7 عبر WhatsApp',
      included_note: 'ملاحظة:',
      included_note_desc: 'الإقامة، الوجبات، رسوم دخول المتاحف وخدمة المرشد اختيارية. يمكننا أيضًا تقديم',
      included_note_bold: 'باقة كاملة',
      included_note_desc2: 'حسب طلبك!',
      
      how_title: 'كيف يعمل؟',
      how_1_title: 'اتصل بنا',
      how_1_desc: 'تواصل معنا عبر WhatsApp أو الهاتف أو البريد الإلكتروني',
      how_2_title: 'حدد احتياجاتك',
      how_2_desc: 'أي مدن؟ كم يوم؟ كم شخص؟ ميزانيتك؟',
      how_3_title: 'احصل على عرض مخصص',
      how_3_desc: 'نقدم لك مسار وعرض سعر مخصص',
      how_4_title: 'تأكيد والمغادرة',
      how_4_desc: 'قم بالحجز، نحن نتعامل مع الباقي!',
      
      sidebar_title: 'باقة مخصصة لك',
      sidebar_subtitle: 'عرض سعر مخصص بناءً على احتياجاتك',
      sidebar_route: '🎯 مسارك',
      sidebar_duration: '🕐 مدتك',
      sidebar_group: '👥 حجم مجموعتك',
      sidebar_budget: '💰 ميزانيتك',
      sidebar_result: '= سعرك المخصص!',
      sidebar_whatsapp: 'احصل على عرض عبر WhatsApp',
      sidebar_call: 'اتصل الآن: 0501 620 69 52',
      sidebar_support: 'دعم العملاء 24/7',
      sidebar_note: '⚡ ضمان الرد السريع: نرد على طلبك خلال ساعة واحدة!',
    }
  };

  const t = (key: keyof typeof translations.tr) => translations[language][key];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
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
          src="https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532709/ihlara-vadisi-nasil-gidilir-800x500_ebkwmg.jpg"
          alt="Anadolu Turu"
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
                  <Mountain className="w-5 h-5" />
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
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mountain className="w-6 h-6 text-orange-600" />
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
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('locations_title')}</h2>
                </div>

                <p className="text-gray-600 mb-6">
                  {t('locations_subtitle')}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: t('loc_1'), desc: t('loc_1_desc') },
                    { name: t('loc_2'), desc: t('loc_2_desc') },
                    { name: t('loc_3'), desc: t('loc_3_desc') },
                    { name: t('loc_4'), desc: t('loc_4_desc') },
                    { name: t('loc_5'), desc: t('loc_5_desc') },
                    { name: t('loc_6'), desc: t('loc_6_desc') },
                    { name: t('loc_7'), desc: t('loc_7_desc') },
                    { name: t('loc_8'), desc: t('loc_8_desc') },
                    { name: t('loc_9'), desc: t('loc_9_desc') },
                    { name: t('loc_10'), desc: t('loc_10_desc') },
                    { name: t('loc_11'), desc: t('loc_11_desc') },
                    { name: t('loc_12'), desc: t('loc_12_desc') }
                  ].map((place, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 hover:border-primary-500 hover:shadow-md transition group">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-500 transition">{place.name}</h3>
                      <p className="text-sm text-gray-600">{place.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-primary-50 to-accent/10 border-l-4 border-primary-500 rounded-lg">
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
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8"
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
                      <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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
            </div>

            {/* Sağ Kolon - İletişim Kartı */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-2xl p-8 sticky top-24"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('sidebar_title')}</h3>
                  <p className="text-gray-600">{t('sidebar_subtitle')}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-primary-50 to-accent/10 p-4 rounded-xl">
                    <p className="text-center text-gray-700 font-semibold">
                      {t('sidebar_route')}<br />
                      {t('sidebar_duration')}<br />
                      {t('sidebar_group')}<br />
                      {t('sidebar_budget')}<br />
                      <span className="text-primary-500 text-xl font-black">{t('sidebar_result')}</span>
                    </p>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/905016206952?text=Merhaba!%20Anadolu%20Turu%20hakkında%20bilgi%20almak%20istiyorum.%20Size%20özel%20paket%20ve%20fiyat%20teklifi%20alabilir%20miyim?"
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