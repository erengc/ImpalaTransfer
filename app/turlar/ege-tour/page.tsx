'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Clock, Users, CheckCircle, ArrowLeft, Phone, Waves, Sparkles, Sun } from 'lucide-react';
import Link from 'next/link';

export default function EgeTurDetay() {
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
      hero_title: 'Ege Tur & Transfer',
      hero_custom: 'Size Özel Rota',
      hero_flexible: 'Esnek Grup',
      hero_special: 'Özel Fiyat Teklifi',
      
      overview_title: 'Turkuaz Ege\'yi Keşfedin',
      overview_p1: 'Masmavi denizi, beyaz kumlu plajları, antik kentleri, zeytinlikleri ve mis gibi kokularıyla Ege bölgesi sizi bekliyor! Efes Antik Kenti\'nin görkemli sütunlarından Pamukkale\'nin beyaz travertenlerine, Bodrum\'un marinalarından Kaş\'ın turkuaz koylarına kadar...',
      overview_p2_bold: 'Her tur isteğinize özel planlanır!',
      overview_p2: 'Süre, rota ve bütçenize uygun paket oluştururuz. Profesyonel şoför ve rehber eşliğinde, konforlu araçlarla güneşli Ege\'de unutulmaz bir yolculuk!',
      
      locations_title: 'Bu Turda Neler Görebilirsiniz?',
      locations_subtitle: 'Size özel rotanıza göre aşağıdaki lokasyonlardan seçim yapabilirsiniz:',
      loc_1: '🏛️ Efes Antik Kenti',
      loc_1_desc: 'Roma İmparatorluğu\'nun en büyük şehri - İzmir',
      loc_2: '💧 Pamukkale Travertenleri',
      loc_2_desc: 'Beyaz cennet, termal havuzlar - Denizli',
      loc_3: '🏖️ Ölüdeniz',
      loc_3_desc: 'Mavi lagün, yamaç paraşütü - Fethiye',
      loc_4: '⛵ Bodrum',
      loc_4_desc: 'Bodrum Kalesi, marinalar, gece hayatı',
      loc_5: '🏝️ Kaş-Kalkan',
      loc_5_desc: 'Sakin koylar, dalış, antik tiyatro',
      loc_6: '🌊 Çeşme-Alaçatı',
      loc_6_desc: 'Rüzgar sörfü, taş evler, plajlar - İzmir',
      loc_7: '🏺 Hierapolis',
      loc_7_desc: 'Antik kent, nekropol alanı - Pamukkale',
      loc_8: '🏰 Marmaris',
      loc_8_desc: 'Kale, marina, tekne turları',
      loc_9: '🦅 Dalyan',
      loc_9_desc: 'Caretta caretta, Kral kaya mezarları',
      loc_10: '🏛️ Didim',
      loc_10_desc: 'Apollon Tapınağı, Altınkum Plajı',
      loc_11: '🌅 Kuşadası',
      loc_11_desc: 'Güvercinada, alışveriş, gemi limanı',
      loc_12: '🫒 Şirince Köyü',
      loc_12_desc: 'Taş evler, şarap, zeytin bahçeleri',
      locations_note: 'Yaz Sezonu:',
      locations_note_desc: 'Ege bölgesi Haziran-Eylül arası çok sıcak olur. Güneş kremi, şapka ve bol su tüketin!',
      locations_important: 'Önemli Not:',
      locations_important_desc: 'Yukarıdaki tüm lokasyonlar TEKLİF amaçlıdır. Sürenize, bütçenize ve ilgi alanlarınıza göre',
      locations_important_bold: 'size özel rota',
      locations_important_desc2: 'oluştururuz!',
      
      included_title: 'Transfer Hizmetimize Dahil',
      inc_1: 'Profesyonel, deneyimli şoför hizmeti',
      inc_2: 'Temiz, klimali, konforlu araçlar (Vito, Sprinter, Midibus)',
      inc_3: 'Yakıt ve araç sigortası',
      inc_4: 'İstanbul - Ege bölgesi arası transfer',
      inc_5: 'Ege içi tüm transferler (şehirler arası)',
      inc_6: 'Esnek rota planlaması (plaj, antik kent, köy molları)',
      inc_7: 'İstediğiniz noktalarda fotoğraf ve deniz durakları',
      inc_8: 'WhatsApp üzerinden 7/24 destek',
      included_note: 'Not:',
      included_note_desc: 'Konaklama (otel/pansiyon), yemek, müze giriş ücretleri, tekne turları ve rehber hizmeti isteğe bağlıdır. Talebinize göre',
      included_note_bold: 'tam paket',
      included_note_desc2: 'de sunabiliriz!',
      
      how_title: 'Nasıl Çalışır?',
      how_1_title: 'Bizimle İletişime Geçin',
      how_1_desc: 'WhatsApp, telefon veya e-posta ile ulaşın',
      how_2_title: 'İhtiyaçlarınızı Belirtin',
      how_2_desc: 'Plaj mı, antik kent mi, yoksa her ikisi mi? Kaç gün? Kaç kişi? Bütçeniz?',
      how_3_title: 'Özel Teklif Alın',
      how_3_desc: 'Size özel Ege rotası ve fiyat teklifi sunuyoruz',
      how_4_title: 'Onaylayın ve Yola Çıkın',
      how_4_desc: 'Rezervasyon yapın, biz gerisini halledelim!',
      
      packages_title: 'Popüler Paket Önerileri',
      package_1_title: '🏖️ Deniz Turu',
      package_1_duration: '3 Gün / 2 Gece',
      package_1_1: '✓ Bodrum → Marmaris → Fethiye',
      package_1_2: '✓ Plajlar ve tekne turları',
      package_1_3: '✓ Deniz tutkunları için',
      package_2_title: '🏛️ Kültür Turu',
      package_2_duration: '4 Gün / 3 Gece',
      package_2_1: '✓ Efes + Pamukkale + Hierapolis',
      package_2_2: '✓ Antik kentler',
      package_2_3: '✓ Tarih severler için',
      package_3_title: '🌊 Komple Ege Turu',
      package_3_duration: '7+ Gün / 6+ Gece',
      package_3_1: '✓ İzmir + Çeşme + Bodrum + Pamukkale + Fethiye + Kaş + Antalya',
      package_3_2: '✓ Hem deniz hem kültür hem doğa',
      package_3_3: '✓ Kapsamlı Ege deneyimi',
      packages_note: 'Yukarıdaki paketler sadece',
      packages_note_bold: 'örnek',
      packages_note_desc: 'paketlerdir. Size özel düzenlemeler yapılabilir!',
      
      activities_title: 'Özel Aktiviteler (Ekstra)',
      activity_1: 'Yamaç Paraşütü',
      activity_1_loc: 'Ölüdeniz',
      activity_2: 'Tekne Turu',
      activity_2_loc: 'Bodrum-Marmaris',
      activity_3: 'Dalış',
      activity_3_loc: 'Kaş',
      activity_4: 'Sörf',
      activity_4_loc: 'Alaçatı',
      activity_5: 'Balık Avı',
      activity_5_loc: 'Datça',
      activity_6: 'Şarap Turu',
      activity_6_loc: 'Şirince',
      activities_note: 'Bu aktiviteler',
      activities_note_bold: 'ekstra ücretlidir',
      activities_note_desc: 've size özel ayarlanabilir!',
      
      sidebar_title: 'Size Özel Ege Turu',
      sidebar_subtitle: 'İhtiyaçlarınıza göre özel fiyat teklifi',
      sidebar_route: '🗺️ Rotanız',
      sidebar_duration: '🕐 Süreniz',
      sidebar_group: '👥 Grup Büyüklüğünüz',
      sidebar_budget: '💰 Bütçeniz',
      sidebar_result: '= Size Özel Fiyat!',
      sidebar_whatsapp: 'WhatsApp ile Teklif Al',
      sidebar_call: 'Hemen Ara: 0501 620 69 52',
      sidebar_support: '7/24 Müşteri Desteği',
      sidebar_note: '☀️ Erken rezervasyonda %10 indirim! Detaylar için bizi arayın.',
    },
    
    en: {
      nav_back: 'All Tours',
      hero_title: 'Aegean Tour & Transfer',
      hero_custom: 'Custom Route for You',
      hero_flexible: 'Flexible Group',
      hero_special: 'Special Price Offer',
      
      overview_title: 'Discover Turquoise Aegean',
      overview_p1: 'The Aegean region awaits you with its azure sea, white sandy beaches, ancient cities, olive groves and wonderful scents! From the magnificent columns of Ancient Ephesus to the white travertines of Pamukkale, from Bodrum\'s marinas to the turquoise bays of Kaş...',
      overview_p2_bold: 'Every tour is planned specially for you!',
      overview_p2: 'We create packages suitable for your duration, route and budget. An unforgettable journey in sunny Aegean with professional driver and guide, in comfortable vehicles!',
      
      locations_title: 'What Can You See on This Tour?',
      locations_subtitle: 'You can choose from the following locations according to your custom route:',
      loc_1: '🏛️ Ancient City of Ephesus',
      loc_1_desc: 'Largest city of Roman Empire - Izmir',
      loc_2: '💧 Pamukkale Travertines',
      loc_2_desc: 'White paradise, thermal pools - Denizli',
      loc_3: '🏖️ Ölüdeniz',
      loc_3_desc: 'Blue lagoon, paragliding - Fethiye',
      loc_4: '⛵ Bodrum',
      loc_4_desc: 'Bodrum Castle, marinas, nightlife',
      loc_5: '🏝️ Kaş-Kalkan',
      loc_5_desc: 'Calm bays, diving, ancient theater',
      loc_6: '🌊 Çeşme-Alaçatı',
      loc_6_desc: 'Windsurfing, stone houses, beaches - Izmir',
      loc_7: '🏺 Hierapolis',
      loc_7_desc: 'Ancient city, necropolis area - Pamukkale',
      loc_8: '🏰 Marmaris',
      loc_8_desc: 'Castle, marina, boat tours',
      loc_9: '🦅 Dalyan',
      loc_9_desc: 'Caretta caretta, Lycian rock tombs',
      loc_10: '🏛️ Didim',
      loc_10_desc: 'Temple of Apollo, Altınkum Beach',
      loc_11: '🌅 Kuşadası',
      loc_11_desc: 'Pigeon Island, shopping, cruise port',
      loc_12: '🫒 Şirince Village',
      loc_12_desc: 'Stone houses, wine, olive gardens',
      locations_note: 'Summer Season:',
      locations_note_desc: 'Aegean region is very hot between June-September. Use sunscreen, hat and drink plenty of water!',
      locations_important: 'Important Note:',
      locations_important_desc: 'All locations above are for PROPOSAL purposes. According to your time, budget and interests, we create a',
      locations_important_bold: 'custom route for you',
      locations_important_desc2: '!',
      
      included_title: 'Included in Our Transfer Service',
      inc_1: 'Professional, experienced driver service',
      inc_2: 'Clean, air-conditioned, comfortable vehicles (Vito, Sprinter, Midibus)',
      inc_3: 'Fuel and vehicle insurance',
      inc_4: 'Transfer between Istanbul - Aegean region',
      inc_5: 'All transfers within Aegean (intercity)',
      inc_6: 'Flexible route planning (beach, ancient city, village stops)',
      inc_7: 'Photo and sea stops at points you want',
      inc_8: '24/7 support via WhatsApp',
      included_note: 'Note:',
      included_note_desc: 'Accommodation (hotel/pension), meals, museum entrance fees, boat tours and guide service are optional. We can also offer a',
      included_note_bold: 'full package',
      included_note_desc2: 'according to your request!',
      
      how_title: 'How It Works?',
      how_1_title: 'Contact Us',
      how_1_desc: 'Reach us via WhatsApp, phone or email',
      how_2_title: 'Specify Your Needs',
      how_2_desc: 'Beach, ancient city, or both? How many days? How many people? Your budget?',
      how_3_title: 'Get Custom Quote',
      how_3_desc: 'We offer you custom Aegean route and price quote',
      how_4_title: 'Confirm and Depart',
      how_4_desc: 'Make reservation, we handle the rest!',
      
      packages_title: 'Popular Package Suggestions',
      package_1_title: '🏖️ Sea Tour',
      package_1_duration: '3 Days / 2 Nights',
      package_1_1: '✓ Bodrum → Marmaris → Fethiye',
      package_1_2: '✓ Beaches and boat tours',
      package_1_3: '✓ For sea enthusiasts',
      package_2_title: '🏛️ Culture Tour',
      package_2_duration: '4 Days / 3 Nights',
      package_2_1: '✓ Ephesus + Pamukkale + Hierapolis',
      package_2_2: '✓ Ancient cities',
      package_2_3: '✓ For history lovers',
      package_3_title: '🌊 Complete Aegean Tour',
      package_3_duration: '7+ Days / 6+ Nights',
      package_3_1: '✓ Izmir + Çeşme + Bodrum + Pamukkale + Fethiye + Kaş + Antalya',
      package_3_2: '✓ Sea, culture and nature',
      package_3_3: '✓ Comprehensive Aegean experience',
      packages_note: 'The packages above are just',
      packages_note_bold: 'sample',
      packages_note_desc: 'packages. Custom arrangements can be made!',
      
      activities_title: 'Special Activities (Extra)',
      activity_1: 'Paragliding',
      activity_1_loc: 'Ölüdeniz',
      activity_2: 'Boat Tour',
      activity_2_loc: 'Bodrum-Marmaris',
      activity_3: 'Diving',
      activity_3_loc: 'Kaş',
      activity_4: 'Surfing',
      activity_4_loc: 'Alaçatı',
      activity_5: 'Fishing',
      activity_5_loc: 'Datça',
      activity_6: 'Wine Tour',
      activity_6_loc: 'Şirince',
      activities_note: 'These activities are',
      activities_note_bold: 'extra charged',
      activities_note_desc: 'and can be customized for you!',
      
      sidebar_title: 'Custom Aegean Tour for You',
      sidebar_subtitle: 'Custom price quote based on your needs',
      sidebar_route: '🗺️ Your Route',
      sidebar_duration: '🕐 Your Duration',
      sidebar_group: '👥 Your Group Size',
      sidebar_budget: '💰 Your Budget',
      sidebar_result: '= Your Custom Price!',
      sidebar_whatsapp: 'Get Quote via WhatsApp',
      sidebar_call: 'Call Now: 0501 620 69 52',
      sidebar_support: '24/7 Customer Support',
      sidebar_note: '☀️ 10% discount on early bookings! Call us for details.',
    },
    
    de: {
      nav_back: 'Alle Touren',
      hero_title: 'Ägäis-Tour & Transfer',
      hero_custom: 'Individuelle Route für Sie',
      hero_flexible: 'Flexible Gruppe',
      hero_special: 'Sonderpreisangebot',
      
      overview_title: 'Entdecken Sie die Türkisfarbene Ägäis',
      overview_p1: 'Die Ägäis-Region erwartet Sie mit ihrem azurblauen Meer, weißen Sandstränden, antiken Städten, Olivenhainen und wunderbaren Düften! Von den prächtigen Säulen von Ephesus bis zu den weißen Travertinen von Pamukkale, von Bodrums Jachthäfen bis zu den türkisfarbenen Buchten von Kaş...',
      overview_p2_bold: 'Jede Tour wird speziell für Sie geplant!',
      overview_p2: 'Wir erstellen Pakete passend zu Ihrer Dauer, Route und Budget. Eine unvergessliche Reise in der sonnigen Ägäis mit professionellem Fahrer und Guide, in komfortablen Fahrzeugen!',
      
      locations_title: 'Was können Sie auf dieser Tour sehen?',
      locations_subtitle: 'Sie können aus den folgenden Orten entsprechend Ihrer individuellen Route wählen:',
      loc_1: '🏛️ Antike Stadt Ephesus',
      loc_1_desc: 'Größte Stadt des Römischen Reiches - Izmir',
      loc_2: '💧 Pamukkale Travertinen',
      loc_2_desc: 'Weißes Paradies, Thermalbecken - Denizli',
      loc_3: '🏖️ Ölüdeniz',
      loc_3_desc: 'Blaue Lagune, Paragliding - Fethiye',
      loc_4: '⛵ Bodrum',
      loc_4_desc: 'Bodrum-Burg, Jachthäfen, Nachtleben',
      loc_5: '🏝️ Kaş-Kalkan',
      loc_5_desc: 'Ruhige Buchten, Tauchen, antikes Theater',
      loc_6: '🌊 Çeşme-Alaçatı',
      loc_6_desc: 'Windsurfen, Steinhäuser, Strände - Izmir',
      loc_7: '🏺 Hierapolis',
      loc_7_desc: 'Antike Stadt, Nekropole - Pamukkale',
      loc_8: '🏰 Marmaris',
      loc_8_desc: 'Burg, Jachthafen, Bootstouren',
      loc_9: '🦅 Dalyan',
      loc_9_desc: 'Caretta caretta, Lykische Felsengräber',
      loc_10: '🏛️ Didim',
      loc_10_desc: 'Apollo-Tempel, Altınkum Strand',
      loc_11: '🌅 Kuşadası',
      loc_11_desc: 'Taubeninsel, Shopping, Kreuzfahrthafen',
      loc_12: '🫒 Şirince Dorf',
      loc_12_desc: 'Steinhäuser, Wein, Olivengärten',
      locations_note: 'Sommersaison:',
      locations_note_desc: 'Die Ägäis-Region ist zwischen Juni-September sehr heiß. Benutzen Sie Sonnencreme, Hut und trinken Sie viel Wasser!',
      locations_important: 'Wichtiger Hinweis:',
      locations_important_desc: 'Alle oben genannten Orte dienen zu VORSCHLAGSZWECKEN. Entsprechend Ihrer Zeit, Budget und Interessen erstellen wir eine',
      locations_important_bold: 'individuelle Route für Sie',
      locations_important_desc2: '!',
      
      included_title: 'In unserem Transfer-Service enthalten',
      inc_1: 'Professioneller, erfahrener Fahrer-Service',
      inc_2: 'Saubere, klimatisierte, komfortable Fahrzeuge (Vito, Sprinter, Midibus)',
      inc_3: 'Kraftstoff und Fahrzeugversicherung',
      inc_4: 'Transfer zwischen Istanbul - Ägäis-Region',
      inc_5: 'Alle Transfers innerhalb der Ägäis (zwischen Städten)',
      inc_6: 'Flexible Routenplanung (Strand, antike Stadt, Dorfstopps)',
      inc_7: 'Foto- und Meerstopps an gewünschten Punkten',
      inc_8: '24/7 Support via WhatsApp',
      included_note: 'Hinweis:',
      included_note_desc: 'Unterkunft (Hotel/Pension), Mahlzeiten, Museums-Eintrittsgelder, Bootstouren und Guide-Service sind optional. Wir können auch ein',
      included_note_bold: 'Komplettpaket',
      included_note_desc2: 'nach Ihrer Anfrage anbieten!',
      
      how_title: 'Wie funktioniert es?',
      how_1_title: 'Kontaktieren Sie uns',
      how_1_desc: 'Erreichen Sie uns per WhatsApp, Telefon oder E-Mail',
      how_2_title: 'Geben Sie Ihre Bedürfnisse an',
      how_2_desc: 'Strand, antike Stadt oder beides? Wie viele Tage? Wie viele Personen? Ihr Budget?',
      how_3_title: 'Individuelles Angebot erhalten',
      how_3_desc: 'Wir bieten Ihnen individuelle Ägäis-Route und Preisangebot',
      how_4_title: 'Bestätigen und abreisen',
      how_4_desc: 'Reservierung vornehmen, wir kümmern uns um den Rest!',
      
      packages_title: 'Beliebte Paketvorschläge',
      package_1_title: '🏖️ Meer-Tour',
      package_1_duration: '3 Tage / 2 Nächte',
      package_1_1: '✓ Bodrum → Marmaris → Fethiye',
      package_1_2: '✓ Strände und Bootstouren',
      package_1_3: '✓ Für Meerliebhaber',
      package_2_title: '🏛️ Kultur-Tour',
      package_2_duration: '4 Tage / 3 Nächte',
      package_2_1: '✓ Ephesus + Pamukkale + Hierapolis',
      package_2_2: '✓ Antike Städte',
      package_2_3: '✓ Für Geschichtsliebhaber',
      package_3_title: '🌊 Komplette Ägäis-Tour',
      package_3_duration: '7+ Tage / 6+ Nächte',
      package_3_1: '✓ Izmir + Çeşme + Bodrum + Pamukkale + Fethiye + Kaş + Antalya',
      package_3_2: '✓ Meer, Kultur und Natur',
      package_3_3: '✓ Umfassendes Ägäis-Erlebnis',
      packages_note: 'Die Pakete oben sind nur',
      packages_note_bold: 'Beispiel',
      packages_note_desc: '-Pakete. Individuelle Anpassungen können vorgenommen werden!',
      
      activities_title: 'Besondere Aktivitäten (Extra)',
      activity_1: 'Paragliding',
      activity_1_loc: 'Ölüdeniz',
      activity_2: 'Bootstour',
      activity_2_loc: 'Bodrum-Marmaris',
      activity_3: 'Tauchen',
      activity_3_loc: 'Kaş',
      activity_4: 'Surfen',
      activity_4_loc: 'Alaçatı',
      activity_5: 'Angeln',
      activity_5_loc: 'Datça',
      activity_6: 'Wein-Tour',
      activity_6_loc: 'Şirince',
      activities_note: 'Diese Aktivitäten sind',
      activities_note_bold: 'extra gebührenpflichtig',
      activities_note_desc: 'und können für Sie angepasst werden!',
      
      sidebar_title: 'Individuelle Ägäis-Tour für Sie',
      sidebar_subtitle: 'Individuelles Preisangebot basierend auf Ihren Bedürfnissen',
      sidebar_route: '🗺️ Ihre Route',
      sidebar_duration: '🕐 Ihre Dauer',
      sidebar_group: '👥 Ihre Gruppengröße',
      sidebar_budget: '💰 Ihr Budget',
      sidebar_result: '= Ihr individueller Preis!',
      sidebar_whatsapp: 'Angebot per WhatsApp',
      sidebar_call: 'Jetzt anrufen: 0501 620 69 52',
      sidebar_support: '24/7 Kundensupport',
      sidebar_note: '☀️ 10% Rabatt bei Frühbuchungen! Rufen Sie uns für Details an.',
    },
    
    ru: {
      nav_back: 'Все туры',
      hero_title: 'Эгейский тур и трансфер',
      hero_custom: 'Индивидуальный маршрут для вас',
      hero_flexible: 'Гибкая группа',
      hero_special: 'Специальное предложение',
      
      overview_title: 'Откройте бирюзовое Эгейское море',
      overview_p1: 'Эгейский регион ждет вас со своим лазурным морем, белыми песчаными пляжами, древними городами, оливковыми рощами и чудесными ароматами! От величественных колонн древнего Эфеса до белых травертинов Памуккале, от марин Бодрума до бирюзовых бухт Каша...',
      overview_p2_bold: 'Каждый тур планируется специально для вас!',
      overview_p2: 'Мы создаем пакеты, подходящие для вашей продолжительности, маршрута и бюджета. Незабываемое путешествие в солнечном Эгейском море с профессиональным водителем и гидом, в комфортабельных автомобилях!',
      
      locations_title: 'Что вы можете увидеть в этом туре?',
      locations_subtitle: 'Вы можете выбрать из следующих мест согласно вашему индивидуальному маршруту:',
      loc_1: '🏛️ Древний город Эфес',
      loc_1_desc: 'Крупнейший город Римской империи - Измир',
      loc_2: '💧 Травертины Памуккале',
      loc_2_desc: 'Белый рай, термальные бассейны - Денизли',
      loc_3: '🏖️ Олюдениз',
      loc_3_desc: 'Голубая лагуна, парапланеризм - Фетхие',
      loc_4: '⛵ Бодрум',
      loc_4_desc: 'Замок Бодрум, марины, ночная жизнь',
      loc_5: '🏝️ Каш-Калкан',
      loc_5_desc: 'Спокойные бухты, дайвинг, древний театр',
      loc_6: '🌊 Чешме-Алачаты',
      loc_6_desc: 'Виндсерфинг, каменные дома, пляжи - Измир',
      loc_7: '🏺 Иераполис',
      loc_7_desc: 'Древний город, некрополь - Памуккале',
      loc_8: '🏰 Мармарис',
      loc_8_desc: 'Замок, марина, лодочные туры',
      loc_9: '🦅 Дальян',
      loc_9_desc: 'Caretta caretta, Ликийские гробницы',
      loc_10: '🏛️ Дидим',
      loc_10_desc: 'Храм Аполлона, пляж Алтынкум',
      loc_11: '🌅 Кушадасы',
      loc_11_desc: 'Остров Голубей, шоппинг, круизный порт',
      loc_12: '🫒 Деревня Шириндже',
      loc_12_desc: 'Каменные дома, вино, оливковые сады',
      locations_note: 'Летний сезон:',
      locations_note_desc: 'Эгейский регион очень жаркий между июнем-сентябрем. Используйте солнцезащитный крем, шляпу и пейте много воды!',
      locations_important: 'Важное примечание:',
      locations_important_desc: 'Все вышеперечисленные места предназначены для ПРЕДЛОЖЕНИЯ. Согласно вашему времени, бюджету и интересам, мы создаем',
      locations_important_bold: 'индивидуальный маршрут для вас',
      locations_important_desc2: '!',
      
      included_title: 'Включено в нашу трансферную услугу',
      inc_1: 'Профессиональный опытный водитель',
      inc_2: 'Чистые, кондиционированные, комфортабельные автомобили (Vito, Sprinter, Midibus)',
      inc_3: 'Топливо и страховка автомобиля',
      inc_4: 'Трансфер между Стамбулом - Эгейским регионом',
      inc_5: 'Все трансферы внутри Эгейского моря (между городами)',
      inc_6: 'Гибкое планирование маршрута (пляж, древний город, деревенские остановки)',
      inc_7: 'Фото и морские остановки в нужных вам местах',
      inc_8: 'Поддержка 24/7 через WhatsApp',
      included_note: 'Примечание:',
      included_note_desc: 'Проживание (гостиница/пансион), питание, входные билеты в музеи, лодочные туры и услуги гида опциональны. Мы также можем предложить',
      included_note_bold: 'полный пакет',
      included_note_desc2: 'по вашему запросу!',
      
      how_title: 'Как это работает?',
      how_1_title: 'Свяжитесь с нами',
      how_1_desc: 'Свяжитесь с нами через WhatsApp, телефон или электронную почту',
      how_2_title: 'Укажите ваши потребности',
      how_2_desc: 'Пляж, древний город или оба? Сколько дней? Сколько человек? Ваш бюджет?',
      how_3_title: 'Получите индивидуальное предложение',
      how_3_desc: 'Мы предлагаем вам индивидуальный эгейский маршрут и ценовое предложение',
      how_4_title: 'Подтвердите и отправляйтесь',
      how_4_desc: 'Сделайте бронирование, мы позаботимся об остальном!',
      
      packages_title: 'Популярные варианты пакетов',
      package_1_title: '🏖️ Морской тур',
      package_1_duration: '3 дня / 2 ночи',
      package_1_1: '✓ Бодрум → Мармарис → Фетхие',
      package_1_2: '✓ Пляжи и лодочные туры',
      package_1_3: '✓ Для любителей моря',
      package_2_title: '🏛️ Культурный тур',
      package_2_duration: '4 дня / 3 ночи',
      package_2_1: '✓ Эфес + Памуккале + Иераполис',
      package_2_2: '✓ Древние города',
      package_2_3: '✓ Для любителей истории',
      package_3_title: '🌊 Полный эгейский тур',
      package_3_duration: '7+ дней / 6+ ночей',
      package_3_1: '✓ Измир + Чешме + Бодрум + Памуккале + Фетхие + Каш + Анталья',
      package_3_2: '✓ Море, культура и природа',
      package_3_3: '✓ Всестороннее эгейское впечатление',
      packages_note: 'Пакеты выше - это всего лишь',
      packages_note_bold: 'примерные',
      packages_note_desc: 'пакеты. Могут быть внесены индивидуальные изменения!',
      
      activities_title: 'Особые мероприятия (дополнительно)',
      activity_1: 'Парапланеризм',
      activity_1_loc: 'Олюдениз',
      activity_2: 'Лодочный тур',
      activity_2_loc: 'Бодрум-Мармарис',
      activity_3: 'Дайвинг',
      activity_3_loc: 'Каш',
      activity_4: 'Серфинг',
      activity_4_loc: 'Алачаты',
      activity_5: 'Рыбалка',
      activity_5_loc: 'Датча',
      activity_6: 'Винный тур',
      activity_6_loc: 'Шириндже',
      activities_note: 'Эти мероприятия',
      activities_note_bold: 'оплачиваются дополнительно',
      activities_note_desc: 'и могут быть настроены для вас!',
      
      sidebar_title: 'Индивидуальный эгейский тур для вас',
      sidebar_subtitle: 'Индивидуальное ценовое предложение на основе ваших потребностей',
      sidebar_route: '🗺️ Ваш маршрут',
      sidebar_duration: '🕐 Ваша продолжительность',
      sidebar_group: '👥 Размер вашей группы',
      sidebar_budget: '💰 Ваш бюджет',
      sidebar_result: '= Ваша индивидуальная цена!',
      sidebar_whatsapp: 'Получить предложение в WhatsApp',
      sidebar_call: 'Позвоните сейчас: 0501 620 69 52',
      sidebar_support: 'Поддержка клиентов 24/7',
      sidebar_note: '☀️ Скидка 10% при ранних бронированиях! Звоните для получения подробностей.',
    },
    
    ar: {
      nav_back: 'جميع الجولات',
      hero_title: 'جولة بحر إيجه والنقل',
      hero_custom: 'مسار مخصص لك',
      hero_flexible: 'مجموعة مرنة',
      hero_special: 'عرض سعر خاص',
      
      overview_title: 'اكتشف بحر إيجه الفيروزي',
      overview_p1: 'منطقة بحر إيجه تنتظرك ببحرها الأزرق، شواطئها الرملية البيضاء، مدنها القديمة، بساتين الزيتون والروائح الرائعة! من الأعمدة الرائعة لأفسس القديمة إلى الترافرتين الأبيض في باموكالي، من مراسي بودروم إلى خلجان كاش الفيروزية...',
      overview_p2_bold: 'كل جولة مخططة خصيصًا لك!',
      overview_p2: 'نحن نقوم بإنشاء باقات مناسبة لمدتك ومسارك وميزانيتك. رحلة لا تُنسى في بحر إيجه المشمس مع سائق ومرشد محترفين، في مركبات مريحة!',
      
      locations_title: 'ماذا يمكنك أن ترى في هذه الجولة؟',
      locations_subtitle: 'يمكنك الاختيار من الأماكن التالية وفقًا لمسارك المخصص:',
      loc_1: '🏛️ مدينة أفسس القديمة',
      loc_1_desc: 'أكبر مدينة في الإمبراطورية الرومانية - إزمير',
      loc_2: '💧 ترافرتين باموكالي',
      loc_2_desc: 'الجنة البيضاء، حمامات حرارية - دنيزلي',
      loc_3: '🏖️ أولودينيز',
      loc_3_desc: 'البحيرة الزرقاء، الطيران الشراعي - فتحية',
      loc_4: '⛵ بودروم',
      loc_4_desc: 'قلعة بودروم، المراسي، الحياة الليلية',
      loc_5: '🏝️ كاش-كالكان',
      loc_5_desc: 'خلجان هادئة، الغوص، المسرح القديم',
      loc_6: '🌊 تشيشمي-آلاتشاتي',
      loc_6_desc: 'ركوب الأمواج بالرياح، منازل حجرية، شواطئ - إزمير',
      loc_7: '🏺 هيرابوليس',
      loc_7_desc: 'مدينة قديمة، منطقة المقبرة - باموكالي',
      loc_8: '🏰 مرمريس',
      loc_8_desc: 'القلعة، المارينا، جولات القوارب',
      loc_9: '🦅 داليان',
      loc_9_desc: 'Caretta caretta، مقابر صخرية ليقية',
      loc_10: '🏛️ ديديم',
      loc_10_desc: 'معبد أبولو، شاطئ ألتينكوم',
      loc_11: '🌅 كوشاداسي',
      loc_11_desc: 'جزيرة الحمام، التسوق، ميناء الرحلات البحرية',
      loc_12: '🫒 قرية شيرينجي',
      loc_12_desc: 'منازل حجرية، نبيذ، حدائق زيتون',
      locations_note: 'الموسم الصيفي:',
      locations_note_desc: 'منطقة بحر إيجه حارة جدًا بين يونيو-سبتمبر. استخدم واقي الشمس والقبعة واشرب الكثير من الماء!',
      locations_important: 'ملاحظة مهمة:',
      locations_important_desc: 'جميع الأماكن المذكورة أعلاه لأغراض الاقتراح. وفقًا لوقتك وميزانيتك واهتماماتك، نقوم بإنشاء',
      locations_important_bold: 'مسار مخصص لك',
      locations_important_desc2: '!',
      
      included_title: 'مشمول في خدمة النقل لدينا',
      inc_1: 'خدمة سائق محترف وذو خبرة',
      inc_2: 'مركبات نظيفة ومكيفة ومريحة (Vito, Sprinter, Midibus)',
      inc_3: 'الوقود وتأمين المركبة',
      inc_4: 'النقل بين إسطنبول - منطقة بحر إيجه',
      inc_5: 'جميع التنقلات داخل بحر إيجه (بين المدن)',
      inc_6: 'تخطيط مسار مرن (الشاطئ، المدينة القديمة، توقفات القرية)',
      inc_7: 'توقفات للصور والبحر في النقاط التي تريدها',
      inc_8: 'دعم 24/7 عبر WhatsApp',
      included_note: 'ملاحظة:',
      included_note_desc: 'الإقامة (فندق/نزل)، الوجبات، رسوم دخول المتاحف، جولات القوارب وخدمة المرشد اختيارية. يمكننا أيضًا تقديم',
      included_note_bold: 'باقة كاملة',
      included_note_desc2: 'حسب طلبك!',
      
      how_title: 'كيف يعمل؟',
      how_1_title: 'اتصل بنا',
      how_1_desc: 'تواصل معنا عبر WhatsApp أو الهاتف أو البريد الإلكتروني',
      how_2_title: 'حدد احتياجاتك',
      how_2_desc: 'الشاطئ، المدينة القديمة أو كليهما؟ كم يوم؟ كم شخص؟ ميزانيتك؟',
      how_3_title: 'احصل على عرض مخصص',
      how_3_desc: 'نقدم لك مسار بحر إيجه المخصص وعرض السعر',
      how_4_title: 'تأكيد والمغادرة',
      how_4_desc: 'قم بالحجز، نحن نتعامل مع الباقي!',
      
      packages_title: 'اقتراحات الباقات الشعبية',
      package_1_title: '🏖️ جولة البحر',
      package_1_duration: '3 أيام / ليلتين',
      package_1_1: '✓ بودروم → مرمريس → فتحية',
      package_1_2: '✓ الشواطئ وجولات القوارب',
      package_1_3: '✓ لعشاق البحر',
      package_2_title: '🏛️ جولة الثقافة',
      package_2_duration: '4 أيام / 3 ليالٍ',
      package_2_1: '✓ أفسس + باموكالي + هيرابوليس',
      package_2_2: '✓ المدن القديمة',
      package_2_3: '✓ لعشاق التاريخ',
      package_3_title: '🌊 جولة بحر إيجه الكاملة',
      package_3_duration: '7+ أيام / 6+ ليالٍ',
      package_3_1: '✓ إزمير + تشيشمي + بودروم + باموكالي + فتحية + كاش + أنطاليا',
      package_3_2: '✓ البحر والثقافة والطبيعة',
      package_3_3: '✓ تجربة شاملة لبحر إيجه',
      packages_note: 'الباقات أعلاه هي مجرد باقات',
      packages_note_bold: 'نموذجية',
      packages_note_desc: '. يمكن إجراء ترتيبات مخصصة!',
      
      activities_title: 'أنشطة خاصة (إضافية)',
      activity_1: 'الطيران الشراعي',
      activity_1_loc: 'أولودينيز',
      activity_2: 'جولة القارب',
      activity_2_loc: 'بودروم-مرمريس',
      activity_3: 'الغوص',
      activity_3_loc: 'كاش',
      activity_4: 'ركوب الأمواج',
      activity_4_loc: 'آلاتشاتي',
      activity_5: 'صيد السمك',
      activity_5_loc: 'داتشا',
      activity_6: 'جولة النبيذ',
      activity_6_loc: 'شيرينجي',
      activities_note: 'هذه الأنشطة',
      activities_note_bold: 'مدفوعة إضافيًا',
      activities_note_desc: 'ويمكن تخصيصها لك!',
      
      sidebar_title: 'جولة بحر إيجه المخصصة لك',
      sidebar_subtitle: 'عرض سعر مخصص بناءً على احتياجاتك',
      sidebar_route: '🗺️ مسارك',
      sidebar_duration: '🕐 مدتك',
      sidebar_group: '👥 حجم مجموعتك',
      sidebar_budget: '💰 ميزانيتك',
      sidebar_result: '= سعرك المخصص!',
      sidebar_whatsapp: 'احصل على عرض عبر WhatsApp',
      sidebar_call: 'اتصل الآن: 0501 620 69 52',
      sidebar_support: 'دعم العملاء 24/7',
      sidebar_note: '☀️ خصم 10٪ على الحجوزات المبكرة! اتصل بنا للحصول على التفاصيل.',
    }
  };

  const t = (key: keyof typeof translations.tr) => translations[language][key];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
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
          src="https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532971/7797e86ed5112d0b409213a2b7f304d9_bo3wth.jpg"
          alt="Ege Turu"
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
                  <Waves className="w-5 h-5" />
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
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Waves className="w-6 h-6 text-blue-600" />
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
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-600" />
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
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition group">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">{place.name}</h3>
                      <p className="text-sm text-gray-600">{place.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg">
                  <p className="text-gray-800 font-semibold">
                    ☀️ <strong>{t('locations_note')}</strong> {t('locations_note_desc')}
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
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8"
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
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                  <div className="border-2 border-cyan-500 rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-bold text-cyan-600 mb-3">{t('package_1_title')}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('package_1_duration')}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>{t('package_1_1')}</li>
                      <li>{t('package_1_2')}</li>
                      <li>{t('package_1_3')}</li>
                    </ul>
                  </div>
                  <div className="border-2 border-amber-500 rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-bold text-amber-600 mb-3">{t('package_2_title')}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('package_2_duration')}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>{t('package_2_1')}</li>
                      <li>{t('package_2_2')}</li>
                      <li>{t('package_2_3')}</li>
                    </ul>
                  </div>
                  <div className="border-2 border-primary-500 rounded-xl p-6 hover:shadow-xl transition md:col-span-2">
                    <h3 className="text-xl font-bold text-primary-500 mb-3">{t('package_3_title')}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('package_3_duration')}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>{t('package_3_1')}</li>
                      <li>{t('package_3_2')}</li>
                      <li>{t('package_3_3')}</li>
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
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">{t('activities_title')}</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: '🪂', name: t('activity_1'), location: t('activity_1_loc') },
                    { icon: '⛵', name: t('activity_2'), location: t('activity_2_loc') },
                    { icon: '🤿', name: t('activity_3'), location: t('activity_3_loc') },
                    { icon: '🏄', name: t('activity_4'), location: t('activity_4_loc') },
                    { icon: '🎣', name: t('activity_5'), location: t('activity_5_loc') },
                    { icon: '🍇', name: t('activity_6'), location: t('activity_6_loc') }
                  ].map((activity, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl text-center hover:shadow-md transition">
                      <span className="text-4xl mb-2 block">{activity.icon}</span>
                      <h3 className="font-bold text-gray-900">{activity.name}</h3>
                      <p className="text-xs text-gray-500">{activity.location}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-600 mt-4">
                  {t('activities_note')} <strong>{t('activities_note_bold')}</strong> {t('activities_note_desc')}
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
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('sidebar_title')}</h3>
                  <p className="text-gray-600">{t('sidebar_subtitle')}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
                    <p className="text-center text-gray-700 font-semibold">
                      {t('sidebar_route')}<br />
                      {t('sidebar_duration')}<br />
                      {t('sidebar_group')}<br />
                      {t('sidebar_budget')}<br />
                      <span className="text-blue-600 text-xl font-black">{t('sidebar_result')}</span>
                    </p>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/905016206952?text=Merhaba!%20Ege%20Turu%20hakkında%20bilgi%20almak%20istiyorum.%20Size%20özel%20paket%20ve%20fiyat%20teklifi%20alabilir%20miyim?"
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

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-xs text-blue-900 font-semibold">
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