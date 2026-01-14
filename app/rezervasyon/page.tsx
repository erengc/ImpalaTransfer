'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Car, Users, MapPin, Clock, CheckCircle, ArrowLeft, Star, Plane, Mail, Phone, Briefcase, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { useCurrency } from '../contexts/CurrencyContext';
import CurrencySwitcher from '../components/CurrencySwitcher';

function RezervasyonContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Currency hook ekle
  const { convertPrice, getCurrencySymbol } = useCurrency();
  
  // URL Parametreleri
  const pickupLocation = searchParams.get('pickup') || '';
  const dropoffLocation = searchParams.get('dropoff') || '';
  const date = searchParams.get('date') || '';
  const time = searchParams.get('time') || '';
  const returnDate = searchParams.get('returnDate') || '';
  const returnTime = searchParams.get('returnTime') || '';
  const passengers = searchParams.get('passengers') || '1';
  const isRoundTrip = searchParams.get('roundTrip') === 'true';
  
const [distance, setDistance] = useState(0);
const [duration, setDuration] = useState(0);

useEffect(() => {
  // Client-side'da random değer üret
  const randomDistance = Math.floor(Math.random() * 50) + 10;
  setDistance(randomDistance);
  setDuration(Math.floor(randomDistance / 0.8));
}, []);

  // --- DİL SİSTEMİ ---
  const [language, setLanguage] = useState<'tr' | 'en' | 'de' | 'ru' | 'ar'>('tr');
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage as 'tr' | 'en' | 'de' | 'ru' | 'ar');
    }
  }, []);

  // ... (TÜM DİĞER KODLARIN BURAYA GELMESİ - translations, vehicles, handleReservation vb.)
  // ... (return kısmı da dahil TÜM JSX BURAYA)

  const changeLanguage = (newLang: 'tr' | 'en' | 'de' | 'ru' | 'ar') => {
    setLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
    setShowLangMenu(false);
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
      back: 'Geri Dön',
      select_vehicle: 'ARAÇ SEÇİMİ',
      popular: 'EN POPÜLER',
      discount: 'İNDİRİM',
      person: 'Kişi',
      luggage: 'Valiz',
      book_now: 'Rezervasyon Yap',
      get_info: 'Bilgi Al',
      whatsapp: 'WhatsApp',
      
      // Sidebar
      greet_airport: 'Havalimanı Karşılama',
      greet_desc_ist: 'İstanbul Havalimanı\'nda sizi karşılıyoruz',
      greet_desc_saw: 'Sabiha Gökçen Havalimanı\'nda sizi karşılıyoruz',
      res_details: 'Rezervasyon Detayları',
      lbl_from: 'NEREDEN',
      lbl_to: 'NEREYE',
      lbl_date: 'BAŞLANGIÇ TARİHİ',
      lbl_return: 'DÖNÜŞ TARİHİ',
      lbl_dist: 'Mesafe',
      lbl_dur: 'Süre',
      lbl_pass: 'Yolcu Sayısı',
      lbl_min: 'Dk',
      type_one: 'Tek Yön',
      type_round: 'Gidiş-Dönüş',
      sidebar_note: 'Aracınızı seçin ve konforlu bir yolculuğa atılın.',
      
      // Contact Box
      contact_title: 'Sorularınız mı var?',
      contact_desc: '7/24 müşteri hizmetlerimizden destek alabilirsiniz.',
      contact_btn: 'WhatsApp ile İletişime Geç',

      // Araç Özellikleri
      feat_wifi: 'WiFi',
      feat_ac: 'Klima',
      feat_water: 'Su İkramı',
      feat_light: 'Işıklandırma',
      feat_premium: 'Premium İç Dizayn',
      feat_wide: 'Geniş İç Alan',
      feat_luxury: 'Lüks Koltuklar',
      feat_tv: 'TV',
      feat_music: 'Müzik Sistemi'
    },
    en: {
      back: 'Go Back',
      select_vehicle: 'VEHICLE SELECTION',
      popular: 'MOST POPULAR',
      discount: 'DISCOUNT',
      person: 'Person',
      luggage: 'Luggage',
      book_now: 'Book Now',
      get_info: 'Get Info',
      whatsapp: 'WhatsApp',
      
      greet_airport: 'Airport Greeting',
      greet_desc_ist: 'We greet you at Istanbul Airport',
      greet_desc_saw: 'We greet you at Sabiha Gokcen Airport',
      res_details: 'Reservation Details',
      lbl_from: 'FROM',
      lbl_to: 'TO',
      lbl_date: 'START DATE',
      lbl_return: 'RETURN DATE',
      lbl_dist: 'Distance',
      lbl_dur: 'Duration',
      lbl_pass: 'Passengers',
      lbl_min: 'Min',
      type_one: 'One Way',
      type_round: 'Round Trip',
      sidebar_note: 'Select your vehicle and embark on a comfortable journey.',
      
      contact_title: 'Have Questions?',
      contact_desc: 'You can get support from our customer service 24/7.',
      contact_btn: 'Contact via WhatsApp',

      feat_wifi: 'WiFi',
      feat_ac: 'A/C',
      feat_water: 'Free Water',
      feat_light: 'Ambiance Lighting',
      feat_premium: 'Premium Interior',
      feat_wide: 'Spacious Interior',
      feat_luxury: 'Luxury Seats',
      feat_tv: 'TV',
      feat_music: 'Sound System'
    },
    de: {
      back: 'Zurück',
      select_vehicle: 'FAHRZEUGAUSWAHL',
      popular: 'BELIEBTESTE',
      discount: 'RABATT',
      person: 'Personen',
      luggage: 'Gepäck',
      book_now: 'Jetzt Buchen',
      get_info: 'Info Erhalten',
      whatsapp: 'WhatsApp',
      
      greet_airport: 'Flughafenempfang',
      greet_desc_ist: 'Wir begrüßen Sie am Flughafen Istanbul',
      greet_desc_saw: 'Wir begrüßen Sie am Flughafen Sabiha Gökcen',
      res_details: 'Reservierungsdetails',
      lbl_from: 'VON',
      lbl_to: 'NACH',
      lbl_date: 'STARTDATUM',
      lbl_return: 'RÜCKDATUM',
      lbl_dist: 'Entfernung',
      lbl_dur: 'Dauer',
      lbl_pass: 'Passagiere',
      lbl_min: 'Min',
      type_one: 'Einfache Fahrt',
      type_round: 'Hin- und Rückfahrt',
      sidebar_note: 'Wählen Sie Ihr Fahrzeug und beginnen Sie eine komfortable Reise.',
      
      contact_title: 'Haben Sie Fragen?',
      contact_desc: 'Sie können rund um die Uhr Unterstützung erhalten.',
      contact_btn: 'Kontakt per WhatsApp',

      feat_wifi: 'WLAN',
      feat_ac: 'Klimaanlage',
      feat_water: 'Wasser',
      feat_light: 'Beleuchtung',
      feat_premium: 'Premium-Interieur',
      feat_wide: 'Geräumig',
      feat_luxury: 'Luxussitze',
      feat_tv: 'TV',
      feat_music: 'Soundsystem'
    },
    ru: {
      back: 'Назад',
      select_vehicle: 'ВЫБОР АВТОМОБИЛЯ',
      popular: 'ПОПУЛЯРНОЕ',
      discount: 'СКИДКА',
      person: 'Чел.',
      luggage: 'Багаж',
      book_now: 'Забронировать',
      get_info: 'Получить инфо',
      whatsapp: 'WhatsApp',
      
      greet_airport: 'Встреча в аэропорту',
      greet_desc_ist: 'Мы встречаем вас в аэропорту Стамбула',
      greet_desc_saw: 'Мы встречаем вас в аэропорту Сабиха Гёкчен',
      res_details: 'Детали бронирования',
      lbl_from: 'ОТКУДА',
      lbl_to: 'КУДА',
      lbl_date: 'ДАТА НАЧАЛА',
      lbl_return: 'ДАТА ВОЗВРАТА',
      lbl_dist: 'Расстояние',
      lbl_dur: 'Время',
      lbl_pass: 'Пассажиры',
      lbl_min: 'Мин',
      type_one: 'В одну сторону',
      type_round: 'Туда и обратно',
      sidebar_note: 'Выберите автомобиль и отправляйтесь в комфортное путешествие.',
      
      contact_title: 'Есть вопросы?',
      contact_desc: 'Вы можете получить поддержку 24/7.',
      contact_btn: 'Связаться через WhatsApp',

      feat_wifi: 'WiFi',
      feat_ac: 'Кондиционер',
      feat_water: 'Вода',
      feat_light: 'Подсветка',
      feat_premium: 'Премиум салон',
      feat_wide: 'Просторный салон',
      feat_luxury: 'Люкс сиденья',
      feat_tv: 'ТВ',
      feat_music: 'Аудиосистема'
    },
    ar: {
      back: 'رجوع',
      select_vehicle: 'اختيار المركبة',
      popular: 'الأكثر شيوعًا',
      discount: 'خصم',
      person: 'شخص',
      luggage: 'حقيبة',
      book_now: 'احجز الآن',
      get_info: 'احصل على معلومات',
      whatsapp: 'واتساب',
      
      greet_airport: 'استقبال المطار',
      greet_desc_ist: 'نستقبلك في مطار إسطنبول',
      greet_desc_saw: 'نستقبلك في مطار صبيحة كوكجن',
      res_details: 'تفاصيل الحجز',
      lbl_from: 'من',
      lbl_to: 'إلى',
      lbl_date: 'تاريخ البدء',
      lbl_return: 'تاريخ العودة',
      lbl_dist: 'المسافة',
      lbl_dur: 'المدة',
      lbl_pass: 'الركاب',
      lbl_min: 'دقيقة',
      type_one: 'اتجاه واحد',
      type_round: 'ذهاب وعودة',
      sidebar_note: 'اختر مركبتك وانطلق في رحلة مريحة.',
      
      contact_title: 'هل لديك أسئلة؟',
      contact_desc: 'يمكنك الحصول على الدعم من خدمة العملاء على مدار 24 ساعة.',
      contact_btn: 'تواصل عبر واتساب',

      feat_wifi: 'واي فاي',
      feat_ac: 'تكييف',
      feat_water: 'ماء مجاني',
      feat_light: 'إضاءة محيطة',
      feat_premium: 'تصميم داخلي فاخر',
      feat_wide: 'مساحة واسعة',
      feat_luxury: 'مقاعد فاخرة',
      feat_tv: 'تلفاز',
      feat_music: 'نظام صوتي'
    }
  };

  const t = (key: keyof typeof translations.tr): any => {
    // @ts-ignore
    return translations[language]?.[key] || translations['tr'][key];
  };

  const isRtl = language === 'ar';

  const isIstanbulAirport = 
  pickupLocation.toLowerCase().includes('istanbul') && 
  (pickupLocation.toLowerCase().includes('havalimanı') || pickupLocation.toLowerCase().includes('airport')) ||
  dropoffLocation.toLowerCase().includes('istanbul') && 
  (dropoffLocation.toLowerCase().includes('havalimanı') || dropoffLocation.toLowerCase().includes('airport'));

const isSabihaAirport = 
  pickupLocation.toLowerCase().includes('sabiha') || 
  dropoffLocation.toLowerCase().includes('sabiha');

  // FİYATLANDIRMA SİSTEMİ (EUR Bazlı)
const getPricing = (vehicleId: number) => {
  let basePrice = 0;
  let discountPercent = 0;

  // Havalimanına göre baz fiyat belirleme
  if (isSabihaAirport) {
    // Sabiha Gökçen
    if (vehicleId === 1) { // Standart Vito
      basePrice = 70;
      discountPercent = 10;
    } else if (vehicleId === 2) { // VIP Vito
      basePrice = 90;
      discountPercent = 8;
    } else if (vehicleId === 3) { // Sprinter
      basePrice = 120;
      discountPercent = 5;
    }
  } else {
    // İstanbul Havalimanı
    if (vehicleId === 1) { // Standart Vito
      basePrice = 60;
      discountPercent = 12;
    } else if (vehicleId === 2) { // VIP Vito
      basePrice = 80;
      discountPercent = 10;
    } else if (vehicleId === 3) { // Sprinter
      basePrice = 100;
      discountPercent = 6;
    }
  }

  // Gidiş-dönüş için %5 ekstra indirim
  if (isRoundTrip) {
    const roundTripPrice = basePrice * 2;
    const roundTripDiscount = roundTripPrice * 0.05;
    basePrice = roundTripPrice - roundTripDiscount;
    discountPercent = discountPercent + 5;
  }

  const originalPrice = basePrice / (1 - discountPercent / 100);
  const discountedPrice = basePrice;

  return {
    originalPrice,
    discountedPrice,
    discountPercent
  };
};

  // --- ARAÇ VERİLERİ (Features key olarak değiştirildi) ---
  const vehicles = [
    {
      id: 1,
      name: 'Standart Vito',
      type: 'Mercedes Vito',
      image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762107314/2020-Mercedes-Vito-8591981-removebg-preview_wbdmiq.png',
      interiorImage: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762109949/IMG-20250320-WA0012_qtwowm.jpg',
      personCapacity: 6,
      luggageCapacity: 6,
      basePrice: 450,
      features: ['feat_wifi', 'feat_ac', 'feat_water'],
      discount: 15
    },
    {
      id: 2,
      name: 'VIP Vito',
      type: 'Mercedes Vito VIP',
      image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762104475/a_4_qfbgz7.png',
      interiorImage: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1761926794/WhatsApp_G%C3%B6rsel_2025-10-25_saat_00.10.11_d08204a9_klagiy.jpg',
      personCapacity: 4,
      luggageCapacity: 4,
      basePrice: 650,
      features: ['feat_wifi', 'feat_ac', 'feat_water', 'feat_light', 'feat_premium'],
      discount: 10,
      isPopular: true
    },
    {
      id: 3,
      name: 'Mercedes Sprinter',
      type: 'Mercedes Sprinter',
      image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762104480/a_1_fpfeoh.png',
      interiorImage: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762107866/primo-vip-sprinter-12-passenger-inside-side-view-updated-1858712634_i6ygpo.jpg',
      personCapacity: 19,
      luggageCapacity: 20,
      basePrice: 850,
      features: ['feat_wifi', 'feat_ac', 'feat_water', 'feat_wide'],
      discount: 10
    },
    {
      id: 4,
      name: 'Midibus Private',
      type: 'Temsa MD9',
      image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762108018/Temsa-MD9-2008954479-removebg-preview_hjukzo.png',
      interiorImage: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800',
      personCapacity: 26,
      luggageCapacity: 26,
      basePrice: 1200,
      features: ['feat_wifi', 'feat_ac', 'feat_water', 'feat_luxury'],
      discount: 0
    },
    {
      id: 5,
      name: 'Bus Private',
      type: 'Turistik Otobüs',
      image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762108017/55-passenger-charter-bus-columbia-4189493930-removebg-preview_zatlaj.png',
      interiorImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
      personCapacity: 45,
      luggageCapacity: 45,
      basePrice: 1800,
      features: ['feat_wifi', 'feat_ac', 'feat_water', 'feat_tv', 'feat_music'],
      discount: 0
    }
  ];

const filteredVehicles = vehicles.filter(vehicle => {
  const passengerCount = parseInt(passengers);
  if (vehicle.id === 1 && passengerCount > 6) return false; // Standart Vito 1-6 kişi
  if (vehicle.id === 2 && passengerCount > 4) return false; // VIP Vito 1-4 kişi
  // Sprinter tüm yolcu sayılarında gösterilsin
  return true;
});

  const handleReservation = (vehicle: typeof vehicles[0], priceEUR: number, showPrice: boolean) => {
  const passengerCount = parseInt(passengers);
  const convertedPrice = convertPrice(priceEUR);
  const currencySymbol = getCurrencySymbol();
  
  // Sprinter (7+ kişi), Midibus veya Bus = WhatsApp'a yönlendir
  if ((vehicle.id === 3 && passengerCount >= 7) || vehicle.id === 4 || vehicle.id === 5) {
    let message = '';
    if (language === 'tr') {
      message = `🚐 *${vehicle.name} Bilgi Talebi*\n\n📍 *GÜZERGAH*\n🟢 Nereden: ${pickupLocation}\n🔴 Nereye: ${dropoffLocation}\n\n📅 *TARİH & SAAT*\n➡️ Gidiş: ${date} - ${time}\n${isRoundTrip ? `⬅️ Dönüş: ${returnDate} - ${returnTime}\n` : ''}\n👥 Yolcu: ${passengers}\n\n💬 Detaylı fiyat teklifi almak istiyorum.`;
    } else {
      message = `🚐 *${vehicle.name} Request*\n\n📍 *ROUTE*\n🟢 From: ${pickupLocation}\n🔴 To: ${dropoffLocation}\n\n📅 *DATE & TIME*\n➡️ Dep: ${date} - ${time}\n${isRoundTrip ? `⬅️ Ret: ${returnDate} - ${returnTime}\n` : ''}\n👥 Pax: ${passengers}\n\n💬 I would like to get a detailed price quote.`;
    }
    
    const whatsappUrl = `https://wa.me/905016206952?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    return;
  }
  
  // Standart Vito, VIP Vito veya Sprinter (7'den az kişi) = Normal rezervasyon
  if (vehicle.id === 1 || vehicle.id === 2 || (vehicle.id === 3 && passengerCount < 7)) {
    const params = new URLSearchParams({
      pickup: pickupLocation,
      dropoff: dropoffLocation,
      date: date,
      time: time,
      passengers: passengers,
      vehicle: vehicle.name,
      price: `${convertedPrice}${currencySymbol}`,
      roundTrip: isRoundTrip.toString(),
      ...(isRoundTrip && { returnDate, returnTime })
    });
    router.push(`/rezervasyon/rezervasyon-detay?${params.toString()}`);
  }
};

  return (
    <div className={`min-h-screen bg-cream-50 relative ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 z-0">
  {/* Premium Beige Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8] via-[#ede8df] to-[#e8e3d8]"></div>
  
  {/* Glowing Orbs */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Primary Turkuaz */}
    <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-conic from-[#14B8A6]/50 via-[#0D9488]/25 to-transparent blur-[140px]"></div>
    
    {/* Crimson Accent */}
    <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-conic from-[#DC143C]/45 via-[#B91C1C]/20 to-transparent blur-[130px]"></div>
    
    {/* Gold Luxury */}
    <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-gradient-conic from-[#FFD700]/40 via-[#F59E0B]/18 to-transparent blur-[120px]"></div>
    
    {/* Deep Purple */}
    <div className="absolute bottom-0 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-conic from-[#8B5CF6]/35 via-[#7C3AED]/15 to-transparent blur-[125px]"></div>
  </div>
  
  {/* Hexagon Pattern - Daha belirgin */}
  <div className="absolute inset-0 opacity-[0.12]">
    <svg className="w-full h-full">
      <defs>
        <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
          <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="rgba(20, 184, 166, 0.8)" strokeWidth="1.5"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  </div>
  
  {/* Animated Gradient Lines - Daha belirgin */}
  <div className="absolute inset-0 opacity-[0.25]">
    <div className="absolute inset-0" style={{
      backgroundImage: `
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 80px,
          rgba(20, 184, 166, 0.4) 80px,
          rgba(20, 184, 166, 0.4) 82px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 80px,
          rgba(220, 20, 60, 0.3) 80px,
          rgba(220, 20, 60, 0.3) 82px
        )
      `
    }}></div>
  </div>
  
  {/* Spotlight Effect */}
  <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>
</div>

      <div className="relative z-10">
        {/* Navbar */}
        <div className="bg-cream-100/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b-2 border-crimson-500/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.back()}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition rtl:space-x-reverse"
                >
                  <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                  <span className="font-semibold">{t('back')}</span>
                </button>

                <div className="hidden md:block">
    <CurrencySwitcher />
  </div>

                {/* Dil Seçici */}
                <div className="relative">
                    <button
                        onClick={() => setShowLangMenu(!showLangMenu)}
                        className="flex items-center space-x-2 bg-white/50 hover:bg-white px-3 py-1.5 rounded-lg transition border border-gray-200 rtl:space-x-reverse"
                    >
                        <span className="text-xl">{languages[language].flag}</span>
                        <span className="font-bold text-sm text-gray-700">{languages[language].code}</span>
                    </button>

                    {showLangMenu && (
                        <div className={`absolute top-full mt-2 ${isRtl ? 'right-0' : 'left-0'} bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-40 z-50`}>
                            {Object.entries(languages).map(([code, lang]) => (
                                <button
                                    key={code}
                                    onClick={() => changeLanguage(code as any)}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3 rtl:space-x-reverse"
                                >
                                    <span className="text-xl">{lang.flag}</span>
                                    <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
              

              <div className="md:hidden">
    <CurrencySwitcher />
  </div>
  </div>            

              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <img 
                  src="/icon.png" 
                  alt="İstanbul Transfer Logo" 
                  className="w-6 h-6"
                />
                <h1 className="text-xl font-bold text-gray-800">Impala Transfer</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center space-x-2 bg-crimson-500 text-white px-4 py-2 rounded-full mb-4 shadow-lg rtl:space-x-reverse"
                >
                  <Car className="w-5 h-5" />
                  <span className="font-bold text-sm tracking-wider">{t('select_vehicle')}</span>
                </motion.div>
              </div>
              
             {filteredVehicles.map((vehicle, idx) => {
  const pricing = getPricing(vehicle.id);
  const passengerCount = parseInt(passengers);
  
  // Sprinter (7+ kişi), Midibus ve Bus için fiyat gösterme
const showPrice = !(
  (vehicle.id === 3 && passengerCount >= 7) || // Sprinter 7+ kişi
  vehicle.id === 4 || // Midibus
  vehicle.id === 5    // Bus
);
  
  return (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-br from-cream-50 via-white to-cream-100 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-cream-300 hover:border-crimson-400 group relative"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-crimson-400 via-crimson-500 to-crimson-400"></div>
                    {/* @ts-ignore - isPopular check */}
                    {vehicle.isPopular && (
                      <div className="bg-gradient-to-r from-crimson-500 via-crimson-600 to-crimson-500 text-white text-center py-2 text-sm font-black uppercase tracking-wide relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                        <span className="relative z-10 flex items-center justify-center space-x-2 rtl:space-x-reverse">
                          <Star className="w-4 h-4 fill-white" />
                          <span>{t('popular')} - %{vehicle.discount} {t('discount')}</span>
                          <Star className="w-4 h-4 fill-white" />
                        </span>
                      </div>
                    )}
                    
                    <div className="p-5 md:p-7">
                      <div className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-6">
                        <div className="relative md:block">
                          <div className="relative h-36 md:h-52 bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl overflow-hidden border-2 border-cream-300 group-hover:border-crimson-300 transition shadow-inner">
                            <div className="absolute inset-0 opacity-[0.03]">
                              <div className="absolute inset-0" style={{
                                backgroundImage: `repeating-linear-gradient(45deg, #14b8a6 0px, #14b8a6 2px, transparent 2px, transparent 20px)`
                              }}></div>
                            </div>
                            <img 
                              src={vehicle.image}
                              alt={vehicle.name}
                              className="w-full h-full object-contain p-4 group-hover:opacity-0 transition duration-500"
                            />
                            <img 
                              src={vehicle.interiorImage}
                              alt={`${vehicle.name} İç`}
                              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <div className="flex items-start justify-between mb-2 md:mb-3">
  <div>
    <h3 className="text-lg md:text-xl font-bold text-gray-800">{vehicle.name}</h3>
    <p className="text-xs md:text-sm text-gray-500 flex items-center space-x-1 rtl:space-x-reverse">
      <Car className="w-3 h-3" />
      <span>{vehicle.type}</span>
    </p>
  </div>
  
  {showPrice && (
    <div className="text-right bg-gradient-to-br from-crimson-50 to-crimson-100 px-4 py-3 rounded-2xl border-2 border-crimson-200 shadow-sm">
      <div className="text-xs text-gray-500 line-through font-medium mb-1">
        {convertPrice(pricing.originalPrice)}{getCurrencySymbol()}
      </div>
      <div className="text-2xl md:text-3xl font-black text-crimson-600 font-mono">
        {convertPrice(pricing.discountedPrice)}{getCurrencySymbol()}
      </div>
      <div className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full inline-block mt-1">
        %{Math.round(pricing.discountPercent)} {t('discount')}
      </div>
    </div>
  )}
</div>

                          <div className="grid grid-cols-2 gap-3 mb-4 bg-gradient-to-br from-sage-50 to-cream-50 p-3 md:p-4 rounded-xl border-2 border-sage-200">
                            <div className="flex items-center space-x-2 text-sm text-gray-600 rtl:space-x-reverse">
                              <Users className="w-4 h-4 text-primary-500" />
                              <span className="font-semibold">{vehicle.personCapacity} {t('person')}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600 rtl:space-x-reverse">
                              <Briefcase className="w-4 h-4 text-primary-500" />
                              <span className="font-semibold">{vehicle.luggageCapacity} {t('luggage')}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                            {vehicle.features.map((featureKey, i) => (
                              <span key={i} className="text-[10px] md:text-xs bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-2 md:px-2.5 py-1 rounded-full font-bold flex items-center space-x-1 border border-green-200 shadow-sm rtl:space-x-reverse">
                                <CheckCircle className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                {/* @ts-ignore */}
                                <span>{t(featureKey)}</span>
                              </span>
                            ))}
                          </div>
                          
                          <motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => handleReservation(vehicle, pricing.discountedPrice, showPrice)}
  className={`w-full ${
    showPrice
      ? 'bg-gradient-to-r from-crimson-600 via-crimson-500 to-crimson-600 border-crimson-400' 
      : 'bg-gradient-to-r from-sage-600 via-sage-500 to-sage-600 border-sage-400'
  } text-white py-3 md:py-3.5 rounded-xl font-black transition-all shadow-xl hover:shadow-2xl border-2 text-sm md:text-base relative overflow-hidden group`}
>
  <span className="relative z-10 flex items-center justify-center space-x-2 rtl:space-x-reverse">
    {showPrice ? (
      <>
        <CheckCircle className="w-5 h-5" />
        <span>{t('book_now')}</span>
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
          {convertPrice(pricing.discountedPrice)}{getCurrencySymbol()}
        </span>
      </>
    ) : (
      <>
        <MessageCircle className="w-5 h-5" />
        <span>{t('get_info')}</span>
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{t('whatsapp')}</span>
      </>
    )}
  </span>
  
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    initial={{ x: '-100%' }}
    whileHover={{ x: '100%' }}
    transition={{ duration: 0.5 }}
  />
</motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Karşılama Videosu */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-4"
                >
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-48 object-cover"
                  >
                    <source 
                      src={
                        pickupLocation.toLowerCase().includes('sabiha') || dropoffLocation.toLowerCase().includes('sabiha')
                          ? 'https://res.cloudinary.com/dzb0zzsl4/video/upload/v1762449245/WhatsApp_Video_2025-11-05_saat_21.43.34_0ab84b45_ym61ju.mp4'
                          : 'https://res.cloudinary.com/dzb0zzsl4/video/upload/v1762449268/WhatsApp_Video_2025-11-05_saat_21.42.56_d4242025_mmqods.mp4'
                      } 
                      type="video/mp4" 
                    />
                  </video>
                  <div className="p-4 text-center">
                    <h4 className="text-sm font-bold text-gray-800 flex items-center justify-center rtl:space-x-reverse space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('greet_airport')}</span>
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {pickupLocation.toLowerCase().includes('sabiha') || dropoffLocation.toLowerCase().includes('sabiha')
                        ? `✈️ ${t('greet_desc_saw')}`
                        : `✈️ ${t('greet_desc_ist')}`}
                    </p>
                  </div>
                </motion.div>

                {/* Rezervasyon Detayları */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center rtl:space-x-reverse space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    <span>{t('res_details')}</span>
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500 font-semibold">{t('lbl_from')}</label>
                      <div className="flex items-start space-x-2 mt-1 rtl:space-x-reverse">
                        <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-800 font-semibold">{pickupLocation}</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500 font-semibold">{t('lbl_to')}</label>
                      <div className="flex items-start space-x-2 mt-1 rtl:space-x-reverse">
                        <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-gray-800 font-semibold">{dropoffLocation}</p>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <label className="text-sm text-gray-500 font-semibold">{t('lbl_date')}</label>
                      <div className="flex items-center space-x-2 mt-1 rtl:space-x-reverse">
                        <Clock className="w-4 h-4 text-primary-500" />
                        <p className="text-gray-800 font-semibold">{date} - {time}</p>
                      </div>
                    </div>

                    {isRoundTrip && (
                      <div>
                        <label className="text-sm text-gray-500 font-semibold">{t('lbl_return')}</label>
                        <div className="flex items-center space-x-2 mt-1 rtl:space-x-reverse">
                          <Clock className="w-4 h-4 text-accent" />
                          <p className="text-gray-800 font-semibold">{returnDate} - {returnTime}</p>
                        </div>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500 font-semibold">{t('lbl_dist')}</span>
                        <span className="text-gray-800 font-bold">{distance} KM</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500 font-semibold">{t('lbl_dur')}</span>
                        <span className="text-gray-800 font-bold">{duration} {t('lbl_min')}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 font-semibold">{t('lbl_pass')}</span>
                        <span className="text-gray-800 font-bold">{passengers} {t('person')}</span>
                      </div>
                    </div>

                    <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                      <div className="flex items-center space-x-2 mb-2 rtl:space-x-reverse">
                        <CheckCircle className="w-5 h-5 text-primary-500" />
                        <span className="font-semibold text-xl text-primary-800">
                          {isRoundTrip ? t('type_round') : t('type_one')}
                        </span>
                      </div>
                      <p className="text-sm text-primary-700">
                        {t('sidebar_note')}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 bg-green-50 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-green-200"
                >
                  <h4 className="font-bold text-gray-800 mb-3">📞 {t('contact_title')}</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {t('contact_desc')}
                  </p>

                  <a
                    href="https://wa.me/905016206952"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition text-center"
                  >
                    {t('contact_btn')}
                  </a>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} />
    </div>
  );
}

export default function RezervasyonPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Yükleniyor...</p>
        </div>
      </div>
    }>
      <RezervasyonContent />
    </Suspense>
  );
}