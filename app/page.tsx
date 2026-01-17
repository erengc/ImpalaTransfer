'use client';

import { useState, useEffect } from 'react';
import { Car, Plane, MapPin, Phone, Mail, Clock, Shield, Star, Users, CheckCircle, ArrowRight, Heart, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';
import AnimatedDivider from './components/AnimatedDivider';
import LocationAutocomplete from './components/LocationAutocomplete';
import DateTimePicker from './components/DateTimePicker';
import { useCurrency } from './contexts/CurrencyContext';
import CurrencySwitcher from './components/CurrencySwitcher';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [isPickupValid, setIsPickupValid] = useState(false);
  const [isDropoffValid, setIsDropoffValid] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [language, setLanguage] = useState<'tr' | 'en' | 'de' | 'ru' | 'ar'>('tr');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const { convertPrice, getCurrencySymbol } = useCurrency();
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

const translations = {
  tr: {
    // Navbar
    nav_home: 'Ana Sayfa',
    nav_tours: 'Turlar',
    nav_vehicles: 'Araçlar',
    nav_service_areas: 'Hizmet Bölgeleri',
    nav_testimonials: 'Yorumlar',
    nav_faq: 'SSS',
    nav_contact: 'İletişim',
    
    // Loading
    loading: 'Yükleniyor...',
    
    // Hero Slider
    hero_slide1_location: 'İstanbul Havalimanı',
    hero_slide1_title: 'Konforlu Yolculuk!',
    hero_slide1_desc: 'Her türlü transfer ve tur istekleriniz için yanınızdayız.',
    
    hero_slide2_location: 'Lüks Transfer Deneyimi',
    hero_slide2_title: 'VIP Seyahat!',
    hero_slide2_desc: 'Son model araçlarımız ile premium transfer hizmeti.',
    
    hero_slide3_location: '15 Yıllık Tecrübe',
    hero_slide3_title: 'Profesyonel Ekip!',
    hero_slide3_desc: 'Prestij ve VIP servislerini iliklerinize kadar hissedin!',
    
    hero_slide4_location: 'Uygun Fiyat Garantisi',
    hero_slide4_title: 'Hızlı Hizmet!',
    hero_slide4_desc: 'Rezervasyon taleplerinize alacağınız hızlı geri dönüşler ile VIP yolculuğunuzun tadını çıkarın.',
    
    // Rezervasyon Formu
    form_title: 'HIZLI REZERVASYON',
    form_subtitle: 'Yolculuğunuzu Planlayın',
    form_description: 'Birkaç tıkla konforlu transferinizi ayarlayın',
    form_oneway: 'Tek Yön',
    form_roundtrip: 'Gidiş-Dönüş',
    form_from: 'NEREDEN',
    form_to: 'NEREYE',
    form_date: 'SAAT & TARİH',
    form_return_date: 'DÖNÜŞ TARİHİ',
    form_departure_date: 'GİDİŞ TARİHİ',
    form_passengers: 'YOLCU',
    form_pickup_placeholder: 'Alış noktanız',
    form_dropoff_placeholder: 'Varış noktanız',
    form_passengers_placeholder: 'Yolcu sayısı',
    form_passengers_count: 'Kişi',
    form_submit: 'ARAÇ & FİYAT GÖR',
    form_free_cancel: 'Ücretsiz İptal',
    form_secure_payment: 'Güvenli Ödeme',
    form_support: '7/24 Destek',
    
    // Araçlar
    vehicles_title: 'Araç Filomuz',
    vehicles_subtitle: 'Konforlu, temiz ve son model araçlarımızla güvenli yolculuğun tadına varın!',
    vehicles_most_popular: '⭐ EN POPÜLER',
    vehicles_capacity: 'Kişi',
    vehicles_luggage: 'Valiz',
    vehicles_reserve: 'Rezervasyon Yap',
    
    vehicle_standard_vito: 'Standart Vito',
    vehicle_standard_vito_desc: 'Konforlu ve ekonomik transfer',
    vehicle_vip_vito: 'VIP Vito',
    vehicle_vip_vito_desc: 'Lüks ve özel transfer deneyimi',
    vehicle_sprinter: 'Mercedes Sprinter',
    vehicle_sprinter_desc: 'Grup transferleri için ideal',
    vehicle_midibus: 'Midibus Private',
    vehicle_midibus_desc: 'Orta büyüklükte grup transferi',
    vehicle_bus: 'Bus Private',
    vehicle_bus_desc: 'Büyük grup transferleri için',
    
    vehicle_feature_wifi: 'WiFi',
    vehicle_feature_water: 'Su İkramı',
    vehicle_feature_ac: 'Klimalı',
    vehicle_feature_lighting: 'Işıklandırma',
    
    // Turlar
    tours_badge: 'Popüler Turlar',
    tours_title: 'Keyifli Bir Tur Gezisine',
    tours_title2: 'Ne Dersiniz?',
    tours_subtitle: 'Özgün rotalar ve size özel maceralarla dolu turlarımızla unutulmaz anılar yaratmaya hazır olun!',
    tours_view_details: 'Detayları Gör',
    tours_view_all: 'Tüm Turları Keşfet',
    tours_destinations: '✨ 7+ Farklı destinasyon sizi bekliyor',
    
    tour_istanbul_8h: '8 Saatlik İstanbul Turu',
    tour_istanbul_12h: '12 Saatlik İstanbul Turu',
    tour_cappadocia: 'Kapadokya Turu',
    tour_cruise: 'Cruise Dinner + Boğaz Turu',
    tour_anatolia: 'Anadolu Tur & Transfer',
    tour_blacksea: 'Karadeniz Tur & Transfer',
    tour_aegean: 'Ege Tur & Transfer',
    
    tour_category_city: '🏙️ Şehir Turu',
    tour_category_premium: '🌃 Premium',
    tour_category_nature: '🎈 Doğa',
    tour_category_cruise: '🚢 Cruise',
    tour_category_culture: '🏔️ Kültür',
    tour_category_plateau: '⛰️ Yayla',
    tour_category_coast: '🏖️ Sahil',
    
    // Hizmet Bölgeleri
    service_areas_badge: 'Hizmet Bölgelerimiz',
    service_areas_title: 'İstanbul\'un Her Yerine',
    service_areas_title2: 'Ulaşıyoruz',
    service_areas_subtitle: 'Havalimanlarından turistik bölgelere, İstanbul\'un tüm önemli noktalarına güvenli transfer hizmeti',
    service_areas_airports: 'Havalimanı Transferleri',
    service_areas_tourist: 'Turistik Bölgeler',
    service_areas_avg_time: 'Ortalama süre:',
    service_areas_active: 'Aktif Hizmet',
    service_areas_info: '7/24 güvenli ve konforlu transfer hizmeti',
    
    airport_ist: 'İstanbul Havalimanı',
    airport_saw: 'Sabiha Gökçen Havalimanı',
    location_sultanahmet: 'Sultanahmet',
    location_taksim: 'Taksim',
    location_galata: 'Galata',
    location_besiktas: 'Beşiktaş',
    location_ortakoy: 'Ortaköy',
    location_kadikoy: 'Kadıköy',
    
    // Yorumlar
    testimonials_badge: '4.8 Genel Puan',
    testimonials_reviews: '(100+ Değerlendirme)',
    testimonials_title: 'Müşteri Yorumları',
    testimonials_subtitle: 'Mutlu müşterilerimizin deneyimlerini okuyun',
    testimonials_helpful: 'Yararlı',
    testimonials_weeks_ago: '2 hafta önce',

    testimonial_1_name: 'Ahmet Yılmaz',
    testimonial_1_comment: 'Havalimanından otele transferimiz çok konforluydu. Şoför çok kibar ve profesyoneldi. Kesinlikle tavsiye ederim!',
    testimonial_1_location: 'İstanbul Havalimanı → Sultanahmet',
    
    testimonial_2_name: 'Ayşe Demir',
    testimonial_2_comment: 'VIP araç hizmeti gerçekten mükemmeldi. Temiz, konforlu ve zamanında geldiler. Teşekkürler!',
    testimonial_2_location: 'Sabiha Gökçen → Kadıköy',
    
    testimonial_3_name: 'Mehmet Kaya',
    testimonial_3_comment: 'Şehirler arası transferimiz için kullandık. Çok memnun kaldık, fiyatlar da uygundu.',
    testimonial_3_location: 'İstanbul → Bursa',
    
    testimonial_4_name: 'Zeynep Aydın',
    testimonial_4_comment: 'Ailecek kullandık, 7 kişilik minivan çok rahat ve ferahtı. Çocuklar için özel koltuklarını da getirmişlerdi.',
    testimonial_4_location: 'Taksim → İstanbul Havalimanı',
    
    testimonial_5_name: 'Ali Öztürk',
    testimonial_5_comment: 'Gece geç saatte havalimanına gitmem gerekiyordu. Çok güvenli ve hızlı bir transfer oldu.',
    testimonial_5_location: 'Beşiktaş → İstanbul Havalimanı',
    
    testimonial_6_name: 'Fatma Çelik',
    testimonial_6_comment: 'İşletme turumuz için toplu transfer hizmeti aldık. Herkes çok memnun kaldi, profesyonel bir ekip.',
    testimonial_6_location: 'Şirket Turu - Boğaz',
    
    testimonial_7_name: 'Mustafa Şahin',
    testimonial_7_comment: 'Online rezervasyon çok kolaydı. WhatsApp\'tan anında dönüş aldım, her şey dakikası dakikasına oldu.',
    testimonial_7_location: 'Kadıköy → Sabiha Gökçen',
    
    testimonial_8_name: 'Elif Yalçın',
    testimonial_8_comment: 'Lüks bir araç ve çok nazik bir şoför. İstanbul turunu da önerdiler, harika bir deneyimdi!',
    testimonial_8_location: 'Yenikapı Otel → Boğaz Turu',
    
    testimonial_9_name: 'Hakan Polat',
    testimonial_9_comment: 'Fiyat-performans olarak mükemmel! Diğer firmalara göre hem ucuz hem kaliteli.',
    testimonial_9_location: 'Taksim → Sabiha Gökçen',
    
    testimonial_10_name: 'Selin Arslan',
    testimonial_10_comment: 'Düğünümüz için konvoy hizmeti aldık. Tüm davetlileri zamanında yerlerine ulaştırdılar. Çok teşekkürler!',
    testimonial_10_location: 'Düğün Transfer Hizmeti',

     // Animated Divider
    divider_fast_transfer: 'Hızlı Transfer',
    divider_vip_service: 'VIP Hızmet',
    divider_comfortable: 'Rahat Yolculuk',
    divider_affordable: 'Uygun Fıyat',
    divider_reliable: 'Güvenilir Personel',

    // Footer
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
    footer_contact: 'İletişim',
    footer_address: 'Atatürk Mahallesi',
    footer_city: 'İstanbul, Türkiye',
    footer_open: '7/24 Açık',
    footer_open_desc: 'Her gün hizmetinizdeyiz',
    footer_rights: 'Tüm hakları saklıdır.',
    footer_privacy: 'Gizlilik Politikası',
    footer_terms: 'Kullanım Koşulları',
    footer_kvkk: 'KVKK',

    cookie_title: '🍪 Çerez Kullanımı',
    cookie_description: 'Web sitemizde size en iyi deneyimi sunabilmek için çerezler kullanıyoruz. Zorunlu çerezler sitenin çalışması için gereklidir. Analiz ve pazarlama çerezleri için izninize ihtiyacımız var. Detaylı bilgi için',
    cookie_privacy_link: 'Gizlilik Politikamızı',
    cookie_privacy_text: 'inceleyebilirsiniz.',
    cookie_accept_all: '✓ Tümünü Kabul Et',
    cookie_reject: '✗ Reddet',
    cookie_customize: '⚙️ Özelleştir',
    cookie_preferences: 'Çerez Tercihleri',
    cookie_necessary: 'Zorunlu Çerezler',
    cookie_necessary_desc: 'Web sitesinin temel işlevleri için gereklidir. Rezervasyon formu, güvenlik özellikleri vb.',
    cookie_always_active: 'Her Zaman Aktif',
    cookie_analytics: '📊 Analiz Çerezleri',
    cookie_analytics_desc: 'Ziyaretçi istatistikleri, sayfa görüntüleme sayıları gibi verileri toplamamıza yardımcı olur.',
    cookie_marketing: '🎯 Pazarlama Çerezleri',
    cookie_marketing_desc: 'Size özel teklifler ve kampanyalar sunmak için kullanılır.',
    cookie_optional: 'İsteğe Bağlı',
    cookie_save_preferences: '✓ Tercihleri Kaydet',
    cookie_cancel: 'İptal',
  },
  
  en: {
    // Navbar
    nav_home: 'Home',
    nav_tours: 'Tours',
    nav_vehicles: 'Vehicles',
    nav_service_areas: 'Service Areas',
    nav_testimonials: 'Reviews',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    
    // Loading
    loading: 'Loading...',
    
    // Hero Slider
    hero_slide1_location: 'Istanbul Airport',
    hero_slide1_title: 'Comfortable Journey!',
    hero_slide1_desc: 'We are here for all your transfer and tour requests.',
    
    hero_slide2_location: 'Luxury Transfer Experience',
    hero_slide2_title: 'VIP Travel!',
    hero_slide2_desc: 'Premium transfer service with our latest model vehicles.',
    
    hero_slide3_location: '15 Years of Experience',
    hero_slide3_title: 'Professional Team!',
    hero_slide3_desc: 'Feel prestige and VIP services to your bones!',
    
    hero_slide4_location: 'Affordable Price Guarantee',
    hero_slide4_title: 'Fast Service!',
    hero_slide4_desc: 'Enjoy your VIP journey with quick responses to your reservation requests.',
    
    // Rezervasyon Formu
    form_title: 'QUICK RESERVATION',
    form_subtitle: 'Plan Your Journey',
    form_description: 'Book your comfortable transfer with a few clicks',
    form_oneway: 'One Way',
    form_roundtrip: 'Round Trip',
    form_from: 'FROM',
    form_to: 'TO',
    form_date: 'TIME & DATE',
    form_return_date: 'RETURN DATE',
    form_departure_date: 'DEPARTURE DATE',
    form_passengers: 'PASSENGERS',
    form_pickup_placeholder: 'Pickup location',
    form_dropoff_placeholder: 'Drop-off location',
    form_passengers_placeholder: 'Number of passengers',
    form_passengers_count: 'Person',
    form_submit: 'VIEW PRICES',
    form_free_cancel: 'Free Cancellation',
    form_secure_payment: 'Secure Payment',
    form_support: '24/7 Support',
    
    // Araçlar
    vehicles_title: 'Our Fleet',
    vehicles_subtitle: 'Experience safe journey with our comfortable, clean and latest model vehicles!',
    vehicles_most_popular: '⭐ MOST POPULAR',
    vehicles_capacity: 'Person',
    vehicles_luggage: 'Luggage',
    vehicles_reserve: 'Make Reservation',
    
    vehicle_standard_vito: 'Standard Vito',
    vehicle_standard_vito_desc: 'Comfortable and economical transfer',
    vehicle_vip_vito: 'VIP Vito',
    vehicle_vip_vito_desc: 'Luxury and exclusive transfer experience',
    vehicle_sprinter: 'Mercedes Sprinter',
    vehicle_sprinter_desc: 'Ideal for group transfers',
    vehicle_midibus: 'Midibus Private',
    vehicle_midibus_desc: 'Medium-sized group transfer',
    vehicle_bus: 'Bus Private',
    vehicle_bus_desc: 'For large group transfers',
    
    vehicle_feature_wifi: 'WiFi',
    vehicle_feature_water: 'Water Service',
    vehicle_feature_ac: 'Air Conditioned',
    vehicle_feature_lighting: 'Ambient Lighting',
    
    // Turlar
    tours_badge: 'Popular Tours',
    tours_title: 'How About a',
    tours_title2: 'Pleasant Tour?',
    tours_subtitle: 'Get ready to create unforgettable memories with our tours full of unique routes and adventures tailored for you!',
    tours_view_details: 'View Details',
    tours_view_all: 'Explore All Tours',
    tours_destinations: '✨ 7+ Different destinations await you',
    
    tour_istanbul_8h: '8 Hour Istanbul Tour',
    tour_istanbul_12h: '12 Hour Istanbul Tour',
    tour_cappadocia: 'Cappadocia Tour',
    tour_cruise: 'Cruise Dinner + Bosphorus Tour',
    tour_anatolia: 'Anatolia Tour & Transfer',
    tour_blacksea: 'Black Sea Tour & Transfer',
    tour_aegean: 'Aegean Tour & Transfer',
    
    tour_category_city: '🏙️ City Tour',
    tour_category_premium: '🌃 Premium',
    tour_category_nature: '🎈 Nature',
    tour_category_cruise: '🚢 Cruise',
    tour_category_culture: '🏔️ Culture',
    tour_category_plateau: '⛰️ Plateau',
    tour_category_coast: '🏖️ Coast',
    
    // Hizmet Bölgeleri
    service_areas_badge: 'Our Service Areas',
    service_areas_title: 'We Reach Every Part',
    service_areas_title2: 'of Istanbul',
    service_areas_subtitle: 'Safe transfer service from airports to touristic areas, to all important points of Istanbul',
    service_areas_airports: 'Airport Transfers',
    service_areas_tourist: 'Tourist Areas',
    service_areas_avg_time: 'Average time:',
    service_areas_active: 'Active Service',
    service_areas_info: '24/7 safe and comfortable transfer service',
    
    airport_ist: 'Istanbul Airport',
    airport_saw: 'Sabiha Gokcen Airport',
    location_sultanahmet: 'Sultanahmet',
    location_taksim: 'Taksim',
    location_galata: 'Galata',
    location_besiktas: 'Besiktas',
    location_ortakoy: 'Ortakoy',
    location_kadikoy: 'Kadikoy',
    
    // Yorumlar
    testimonials_badge: '4.8 Overall Rating',
    testimonials_reviews: '(100+ Reviews)',
    testimonials_title: 'Customer Reviews',
    testimonials_subtitle: 'Read the experiences of our happy customers',
    testimonials_helpful: 'Helpful',
    testimonials_weeks_ago: '2 weeks ago',

     testimonial_1_name: 'John Smith',
    testimonial_1_comment: 'Our transfer from the airport to the hotel was very comfortable. The driver was very polite and professional. I definitely recommend it!',
    testimonial_1_location: 'Istanbul Airport → Sultanahmet',
    
    testimonial_2_name: 'Emma Johnson',
    testimonial_2_comment: 'VIP vehicle service was really excellent. Clean, comfortable and they arrived on time. Thank you!',
    testimonial_2_location: 'Sabiha Gokcen → Kadikoy',
    
    testimonial_3_name: 'Michael Brown',
    testimonial_3_comment: 'We used it for our intercity transfer. We were very satisfied, the prices were also reasonable.',
    testimonial_3_location: 'Istanbul → Bursa',
    
    testimonial_4_name: 'Sarah Wilson',
    testimonial_4_comment: 'We used it as a family, the 7-seater minivan was very comfortable and spacious. They also brought special seats for children.',
    testimonial_4_location: 'Taksim → Istanbul Airport',
    
    testimonial_5_name: 'David Miller',
    testimonial_5_comment: 'I needed to go to the airport late at night. It was a very safe and fast transfer.',
    testimonial_5_location: 'Besiktas → Istanbul Airport',
    
    testimonial_6_name: 'Jennifer Davis',
    testimonial_6_comment: 'We got group transfer service for our company tour. Everyone was very satisfied, a professional team.',
    testimonial_6_location: 'Company Tour - Bosphorus',
    
    testimonial_7_name: 'Robert Anderson',
    testimonial_7_comment: 'Online reservation was very easy. I got instant response from WhatsApp, everything was right on time.',
    testimonial_7_location: 'Kadikoy → Sabiha Gokcen',
    
    testimonial_8_name: 'Lisa Taylor',
    testimonial_8_comment: 'A luxury vehicle and a very kind driver. They also recommended the Istanbul tour, it was a great experience!',
    testimonial_8_location: 'Yenikapi Hotel → Bosphorus Tour',
    
    testimonial_9_name: 'James Thomas',
    testimonial_9_comment: 'Perfect in terms of price-performance! Both cheap and quality compared to other companies.',
    testimonial_9_location: 'Taksim → Sabiha Gokcen',
    
    testimonial_10_name: 'Amanda Martinez',
    testimonial_10_comment: 'We got convoy service for our wedding. They delivered all guests to their places on time. Thank you very much!',
    testimonial_10_location: 'Wedding Transfer Service',

    divider_fast_transfer: 'Fast Transfer',
    divider_vip_service: 'VIP Service',
    divider_comfortable: 'Comfortable Journey',
    divider_affordable: 'Affordable Price',
    divider_reliable: 'Reliable Staff',

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
    footer_contact: 'Contact',
    footer_address: 'Ataturk District',
    footer_city: 'Istanbul, Turkey',
    footer_open: '24/7 Open',
    footer_open_desc: 'At your service every day',
    footer_rights: 'All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Use',
    footer_kvkk: 'GDPR',

    cookie_title: '🍪 Cookie Usage',
    cookie_description: 'We use cookies to provide you with the best experience on our website. Necessary cookies are required for the site to function. We need your permission for analytics and marketing cookies. For detailed information',
    cookie_privacy_link: 'Privacy Policy',
    cookie_privacy_text: 'you can review our',
    cookie_accept_all: '✓ Accept All',
    cookie_reject: '✗ Reject',
    cookie_customize: '⚙️ Customize',
    cookie_preferences: 'Cookie Preferences',
    cookie_necessary: 'Necessary Cookies',
    cookie_necessary_desc: 'Required for basic website functions. Reservation form, security features, etc.',
    cookie_always_active: 'Always Active',
    cookie_analytics: '📊 Analytics Cookies',
    cookie_analytics_desc: 'Helps us collect data such as visitor statistics, page view counts.',
    cookie_marketing: '🎯 Marketing Cookies',
    cookie_marketing_desc: 'Used to offer you personalized offers and campaigns.',
    cookie_optional: 'Optional',
    cookie_save_preferences: '✓ Save Preferences',
    cookie_cancel: 'Cancel',
  },
  
  de: {
    // Navbar
    nav_home: 'Startseite',
    nav_tours: 'Touren',
    nav_vehicles: 'Fahrzeuge',
    nav_service_areas: 'Servicebereiche',
    nav_testimonials: 'Bewertungen',
    nav_faq: 'FAQ',
    nav_contact: 'Kontakt',
    
    // Loading
    loading: 'Laden...',
    
    // Hero Slider
    hero_slide1_location: 'Istanbul Flughafen',
    hero_slide1_title: 'Komfortable Reise!',
    hero_slide1_desc: 'Wir sind für alle Ihre Transfer- und Touranfragen da.',
    
    hero_slide2_location: 'Luxus Transfer Erlebnis',
    hero_slide2_title: 'VIP Reise!',
    hero_slide2_desc: 'Premium-Transferservice mit unseren neuesten Fahrzeugen.',
    
    hero_slide3_location: '15 Jahre Erfahrung',
    hero_slide3_title: 'Professionelles Team!',
    hero_slide3_desc: 'Spüren Sie Prestige und VIP-Service bis ins Mark!',
    
    hero_slide4_location: 'Günstige Preisgarantie',
    hero_slide4_title: 'Schneller Service!',
    hero_slide4_desc: 'Genießen Sie Ihre VIP-Reise mit schnellen Antworten auf Ihre Reservierungsanfragen.',
    
    // Rezervasyon Formu
    form_title: 'SCHNELLE RESERVIERUNG',
    form_subtitle: 'Planen Sie Ihre Reise',
    form_description: 'Buchen Sie Ihren komfortablen Transfer mit wenigen Klicks',
    form_oneway: 'Einfache Fahrt',
    form_roundtrip: 'Hin- und Rückfahrt',
    form_from: 'VON',
    form_to: 'NACH',
    form_date: 'UHRZEİT & DATUM',
    form_return_date: 'RÜCKFAHRT DATUM',
    form_departure_date: 'HINFAHRT DATUM',
    form_passengers: 'PASSAGIERE',
    form_pickup_placeholder: 'Abholort',
    form_dropoff_placeholder: 'Zielort',
    form_passengers_placeholder: 'Anzahl der Passagiere',
    form_passengers_count: 'Person',
    form_submit: 'FAHRZEUGE & PREISE ANSEHEN',
    form_free_cancel: 'Kostenlose Stornierung',
    form_secure_payment: 'Sichere Zahlung',
    form_support: '24/7 Support',
    
    // Araçlar
    vehicles_title: 'Unsere Flotte',
    vehicles_subtitle: 'Erleben Sie eine sichere Reise mit unseren komfortablen, sauberen und neuesten Fahrzeugen!',
    vehicles_most_popular: '⭐ AM BELIEBTESTEN',
    vehicles_capacity: 'Person',
    vehicles_luggage: 'Gepäck',
    vehicles_reserve: 'Reservierung Vornehmen',
    
    vehicle_standard_vito: 'Standard Vito',
    vehicle_standard_vito_desc: 'Komfortabler und wirtschaftlicher Transfer',
    vehicle_vip_vito: 'VIP Vito',
    vehicle_vip_vito_desc: 'Luxuriöses und exklusives Transfererlebnis',
    vehicle_sprinter: 'Mercedes Sprinter',
    vehicle_sprinter_desc: 'Ideal für Gruppentransfers',
    vehicle_midibus: 'Midibus Private',
    vehicle_midibus_desc: 'Mittelgroßer Gruppentransfer',
    vehicle_bus: 'Bus Private',
    vehicle_bus_desc: 'Für große Gruppentransfers',
    
    vehicle_feature_wifi: 'WiFi',
    vehicle_feature_water: 'Wasserservice',
    vehicle_feature_ac: 'Klimatisiert',
    vehicle_feature_lighting: 'Ambientebeleuchtung',
    
    // Turlar
    tours_badge: 'Beliebte Touren',
    tours_title: 'Wie Wäre Es Mit Einer',
    tours_title2: 'Angenehmen Tour?',
    tours_subtitle: 'Bereiten Sie sich darauf vor, unvergessliche Erinnerungen mit unseren Touren voller einzigartiger Routen zu schaffen!',
    tours_view_details: 'Details Ansehen',
    tours_view_all: 'Alle Touren Erkunden',
    tours_destinations: '✨ 7+ Verschiedene Ziele warten auf Sie',
    
    tour_istanbul_8h: '8-Stunden Istanbul Tour',
    tour_istanbul_12h: '12-Stunden Istanbul Tour',
    tour_cappadocia: 'Kappadokien Tour',
    tour_cruise: 'Kreuzfahrt Dinner + Bosporus Tour',
    tour_anatolia: 'Anatolien Tour & Transfer',
    tour_blacksea: 'Schwarzes Meer Tour & Transfer',
    tour_aegean: 'Ägäis Tour & Transfer',
    
    tour_category_city: '🏙️ Stadtrundfahrt',
    tour_category_premium: '🌃 Premium',
    tour_category_nature: '🎈 Natur',
    tour_category_cruise: '🚢 Kreuzfahrt',
    tour_category_culture: '🏔️ Kultur',
    tour_category_plateau: '⛰️ Hochebene',
    tour_category_coast: '🏖️ Küste',
    
    // Hizmet Bölgeleri
    service_areas_badge: 'Unsere Servicebereiche',
    service_areas_title: 'Wir Erreichen Jeden Teil',
    service_areas_title2: 'von Istanbul',
    service_areas_subtitle: 'Sicherer Transferservice von Flughäfen zu touristischen Gebieten, zu allen wichtigen Punkten Istanbuls',
    service_areas_airports: 'Flughafentransfers',
    service_areas_tourist: 'Touristische Gebiete',
    service_areas_avg_time: 'Durchschnittliche Zeit:',
    service_areas_active: 'Aktiver Service',
    service_areas_info: '24/7 sicherer und komfortabler Transferservice',
    
    airport_ist: 'Istanbul Flughafen',
    airport_saw: 'Sabiha Gökçen Flughafen',
    location_sultanahmet: 'Sultanahmet',
    location_taksim: 'Taksim',
    location_galata: 'Galata',
    location_besiktas: 'Beşiktaş',
    location_ortakoy: 'Ortaköy',
    location_kadikoy: 'Kadıköy',
    
    // Yorumlar
    testimonials_badge: '4.8 Gesamtbewertung',
    testimonials_reviews: '(100+ Bewertungen)',
    testimonials_title: 'Kundenbewertungen',
    testimonials_subtitle: 'Lesen Sie die Erfahrungen unserer zufriedenen Kunden',
    testimonials_helpful: 'Hilfreich',
    testimonials_weeks_ago: 'Vor 2 Wochen',

    testimonial_1_name: 'Hans Müller',
    testimonial_1_comment: 'Unser Transfer vom Flughafen zum Hotel war sehr komfortabel. Der Fahrer war sehr höflich und professionell. Ich empfehle es definitiv!',
    testimonial_1_location: 'Istanbul Flughafen → Sultanahmet',
    
    testimonial_2_name: 'Anna Schmidt',
    testimonial_2_comment: 'VIP-Fahrzeugservice war wirklich ausgezeichnet. Sauber, komfortabel und sie kamen pünktlich an. Danke!',
    testimonial_2_location: 'Sabiha Gökçen → Kadıköy',
    
    testimonial_3_name: 'Peter Wagner',
    testimonial_3_comment: 'Wir haben es für unseren Intercity-Transfer genutzt. Wir waren sehr zufrieden, die Preise waren auch angemessen.',
    testimonial_3_location: 'Istanbul → Bursa',
    
    testimonial_4_name: 'Maria Fischer',
    testimonial_4_comment: 'Wir nutzten es als Familie, der 7-Sitzer-Kleinbus war sehr komfortabel und geräumig. Sie brachten auch spezielle Sitze für Kinder mit.',
    testimonial_4_location: 'Taksim → Istanbul Flughafen',
    
    testimonial_5_name: 'Thomas Weber',
    testimonial_5_comment: 'Ich musste spät in der Nacht zum Flughafen. Es war ein sehr sicherer und schneller Transfer.',
    testimonial_5_location: 'Beşiktaş → Istanbul Flughafen',
    
    testimonial_6_name: 'Julia Schneider',
    testimonial_6_comment: 'Wir haben einen Gruppentransferservice für unsere Firmentour erhalten. Alle waren sehr zufrieden, ein professionelles Team.',
    testimonial_6_location: 'Firmentour - Bosporus',
    
    testimonial_7_name: 'Michael Becker',
    testimonial_7_comment: 'Online-Reservierung war sehr einfach. Ich bekam sofortige Antwort von WhatsApp, alles war pünktlich.',
    testimonial_7_location: 'Kadıköy → Sabiha Gökçen',
    
    testimonial_8_name: 'Sophie Hoffmann',
    testimonial_8_comment: 'Ein Luxusfahrzeug und ein sehr freundlicher Fahrer. Sie empfahlen auch die Istanbul-Tour, es war eine großartige Erfahrung!',
    testimonial_8_location: 'Yenikapı Hotel → Bosporus Tour',
    
    testimonial_9_name: 'Daniel Koch',
    testimonial_9_comment: 'Perfekt in Bezug auf Preis-Leistung! Sowohl günstig als auch qualitativ im Vergleich zu anderen Unternehmen.',
    testimonial_9_location: 'Taksim → Sabiha Gökçen',
    
    testimonial_10_name: 'Laura Richter',
    testimonial_10_comment: 'Wir bekamen Konvoi-Service für unsere Hochzeit. Sie lieferten alle Gäste pünktlich an ihre Plätze. Vielen Dank!',
    testimonial_10_location: 'Hochzeitstransfer-Service',

     divider_fast_transfer: 'Schneller Transfer',
    divider_vip_service: 'VIP-Service',
    divider_comfortable: 'Komfortable Reise',
    divider_affordable: 'Günstiger Preis',
    divider_reliable: 'Zuverlässiges Personal',

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
    footer_contact: 'Kontakt',
    footer_address: 'Atatürk Bezirk',
    footer_city: 'Istanbul, Türkei',
    footer_open: '24/7 Geöffnet',
    footer_open_desc: 'Jeden Tag für Sie da',
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_privacy: 'Datenschutzrichtlinie',
    footer_terms: 'Nutzungsbedingungen',
    footer_kvkk: 'DSGVO',

    cookie_title: '🍪 Cookie-Verwendung',
    cookie_description: 'Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten. Notwendige Cookies sind für die Funktion der Website erforderlich. Für Analyse- und Marketing-Cookies benötigen wir Ihre Erlaubnis. Für detaillierte Informationen',
    cookie_privacy_link: 'Datenschutzrichtlinie',
    cookie_privacy_text: 'können Sie unsere',
    cookie_accept_all: '✓ Alle Akzeptieren',
    cookie_reject: '✗ Ablehnen',
    cookie_customize: '⚙️ Anpassen',
    cookie_preferences: 'Cookie-Einstellungen',
    cookie_necessary: 'Notwendige Cookies',
    cookie_necessary_desc: 'Erforderlich für grundlegende Website-Funktionen. Reservierungsformular, Sicherheitsfunktionen usw.',
    cookie_always_active: 'Immer Aktiv',
    cookie_analytics: '📊 Analyse-Cookies',
    cookie_analytics_desc: 'Hilft uns, Daten wie Besucherstatistiken, Seitenaufrufe zu sammeln.',
    cookie_marketing: '🎯 Marketing-Cookies',
    cookie_marketing_desc: 'Wird verwendet, um Ihnen personalisierte Angebote und Kampagnen anzubieten.',
    cookie_optional: 'Optional',
    cookie_save_preferences: '✓ Einstellungen Speichern',
    cookie_cancel: 'Abbrechen',
  },
  
  ru: {
    // Navbar
    nav_home: 'Главная',
    nav_tours: 'Туры',
    nav_vehicles: 'Транспорт',
    nav_service_areas: 'Зоны обслуживания',
    nav_testimonials: 'Отзывы',
    nav_faq: 'Вопросы',
    nav_contact: 'Контакты',
    
    // Loading
    loading: 'Загрузка...',
    
    // Hero Slider
    hero_slide1_location: 'Аэропорт Стамбула',
    hero_slide1_title: 'Комфортное путешествие!',
    hero_slide1_desc: 'Мы здесь для всех ваших трансферов и экскурсий.',
    
    hero_slide2_location: 'Роскошный трансфер',
    hero_slide2_title: 'VIP поездка!',
    hero_slide2_desc: 'Премиум трансфер на наших новейших автомобилях.',
    
    hero_slide3_location: '15 лет опыта',
    hero_slide3_title: 'Профессиональная команда!',
    hero_slide3_desc: 'Почувствуйте престиж и VIP-сервис до мозга костей!',
    
    hero_slide4_location: 'Гарантия доступных цен',
    hero_slide4_title: 'Быстрый сервис!',
    hero_slide4_desc: 'Наслаждайтесь VIP-поездкой с быстрыми ответами на ваши запросы.',
    
    // Rezervasyon Formu
    form_title: 'БЫСТРОЕ БРОНИРОВАНИЕ',
    form_subtitle: 'Спланируйте поездку',
    form_description: 'Забронируйте комфортный трансфер в несколько кликов',
    form_oneway: 'В одну сторону',
    form_roundtrip: 'Туда и обратно',
    form_from: 'ОТКУДА',
    form_to: 'КУДА',
    form_date: 'Время и Дата',
    form_return_date: 'ДАТА ВОЗВРАТА',
    form_departure_date: 'ДАТА ОТПРАВЛЕНИЯ',
    form_passengers: 'ПАССАЖИРЫ',
    form_pickup_placeholder: 'Место посадки',
    form_dropoff_placeholder: 'Место высадки',
    form_passengers_placeholder: 'Количество пассажиров',
    form_passengers_count: 'Человек',
    form_submit: 'ПОСМОТРЕТЬ АВТОМОБИЛИ И ЦЕНЫ',
    form_free_cancel: 'Бесплатная отмена',
    form_secure_payment: 'Безопасный платеж',
    form_support: 'Поддержка 24/7',
    
    // Araçlar
    vehicles_title: 'Наш автопарк',
    vehicles_subtitle: 'Безопасное путешествие на наших комфортных, чистых и новых автомобилях!',
    vehicles_most_popular: '⭐ САМЫЙ ПОПУЛЯРНЫЙ',
    vehicles_capacity: 'Человек',
    vehicles_luggage: 'Багаж',
    vehicles_reserve: 'Забронировать',
    
    vehicle_standard_vito: 'Стандарт Vito',
    vehicle_standard_vito_desc: 'Комфортный и экономичный трансфер',
    vehicle_vip_vito: 'VIP Vito',
    vehicle_vip_vito_desc: 'Роскошный и эксклюзивный трансфер',
    vehicle_sprinter: 'Mercedes Sprinter',
    vehicle_sprinter_desc: 'Идеально для групповых трансферов',
    vehicle_midibus: 'Midibus Private',
    vehicle_midibus_desc: 'Средний групповой трансфер',
    vehicle_bus: 'Bus Private',
    vehicle_bus_desc: 'Для больших групповых трансферов',
    
    vehicle_feature_wifi: 'WiFi',
    vehicle_feature_water: 'Вода',
    vehicle_feature_ac: 'Кондиционер',
    vehicle_feature_lighting: 'Освещение',
    
    // Turlar
    tours_badge: 'Популярные туры',
    tours_title: 'Как насчет',
    tours_title2: 'приятной экскурсии?',
    tours_subtitle: 'Приготовьтесь создать незабываемые воспоминания с нашими турами!',
    tours_view_details: 'Подробнее',
    tours_view_all: 'Все туры',
    tours_destinations: '✨ 7+ различных направлений ждут вас',
    
    tour_istanbul_8h: '8-часовой тур по Стамбулу',
    tour_istanbul_12h: '12-часовой тур по Стамбулу',
    tour_cappadocia: 'Тур в Каппадокию',
    tour_cruise: 'Круиз ужин + тур по Босфору',
    tour_anatolia: 'Анатолия тур и трансфер',
    tour_blacksea: 'Черное море тур и трансфер',
    tour_aegean: 'Эгейское море тур и трансфер',
    
    tour_category_city: '🏙️ Городской тур',
    tour_category_premium: '🌃 Премиум',
    tour_category_nature: '🎈 Природа',
    tour_category_cruise: '🚢 Круиз',
    tour_category_culture: '🏔️ Культура',
    tour_category_plateau: '⛰️ Плато',
    tour_category_coast: '🏖️ Побережье',
    
    // Hizmet Bölgeleri
    service_areas_badge: 'Зоны обслуживания',
    service_areas_title: 'Мы достигаем каждого уголка',
    service_areas_title2: 'Стамбула',
    service_areas_subtitle: 'Безопасный трансфер от аэропортов до туристических районов',
    service_areas_airports: 'Трансферы из аэропорта',
    service_areas_tourist: 'Туристические районы',
    service_areas_avg_time: 'Среднее время:',
    service_areas_active: 'Активный сервис',
    service_areas_info: 'Безопасный и комфортный трансфер 24/7',
    
    airport_ist: 'Аэропорт Стамбула',
    airport_saw: 'Аэропорт Сабиха Гёкчен',
    location_sultanahmet: 'Султанахмет',
    location_taksim: 'Таксим',
    location_galata: 'Галата',
    location_besiktas: 'Бешикташ',
    location_ortakoy: 'Ортакёй',
    location_kadikoy: 'Кадыкёй',
    
    // Yorumlar
    testimonials_badge: '4.8 Общий рейтинг',
    testimonials_reviews: '(100+ отзывов)',
    testimonials_title: 'Отзывы клиентов',
    testimonials_subtitle: 'Читайте опыт наших довольных клиентов',
    testimonials_helpful: 'Полезно',
    testimonials_weeks_ago: '2 недели назад',

    testimonial_1_name: 'Алексей Иванов',
    testimonial_1_comment: 'Наш трансфер из аэропорта в отель был очень комфортным. Водитель был очень вежливым и профессиональным. Определенно рекомендую!',
    testimonial_1_location: 'Аэропорт Стамбула → Султанахмет',
    
    testimonial_2_name: 'Елена Петрова',
    testimonial_2_comment: 'VIP-сервис был действительно превосходным. Чисто, комфортно и приехали вовремя. Спасибо!',
    testimonial_2_location: 'Сабиха Гёкчен → Кадыкёй',
    
    testimonial_3_name: 'Дмитрий Смирнов',
    testimonial_3_comment: 'Мы использовали для межгороднего трансфера. Мы были очень довольны, цены также были разумными.',
    testimonial_3_location: 'Стамбул → Бурса',
    
    testimonial_4_name: 'Ольга Соколова',
    testimonial_4_comment: 'Мы использовали всей семьей, 7-местный минивэн был очень удобным и просторным. Они также привезли специальные кресла для детей.',
    testimonial_4_location: 'Таксим → Аэропорт Стамбула',
    
    testimonial_5_name: 'Сергей Волков',
    testimonial_5_comment: 'Мне нужно было ехать в аэропорт поздно ночью. Это был очень безопасный и быстрый трансфер.',
    testimonial_5_location: 'Бешикташ → Аэропорт Стамбула',
    
    testimonial_6_name: 'Наталья Морозова',
    testimonial_6_comment: 'Мы получили групповой трансфер для нашего корпоративного тура. Все были очень довольны, профессиональная команда.',
    testimonial_6_location: 'Корпоративный тур - Босфор',
    
    testimonial_7_name: 'Андрей Козлов',
    testimonial_7_comment: 'Онлайн бронирование было очень простым. Я получил мгновенный ответ из WhatsApp, все было точно вовремя.',
    testimonial_7_location: 'Кадыкёй → Сабиха Гёкчен',
    
    testimonial_8_name: 'Мария Новикова',
    testimonial_8_comment: 'Роскошный автомобиль и очень добрый водитель. Они также рекомендовали тур по Стамбулу, это был отличный опыт!',
    testimonial_8_location: 'Отель Еникапы → Тур по Босфору',
    
    testimonial_9_name: 'Игорь Лебедев',
    testimonial_9_comment: 'Идеально с точки зрения цены и качества! И дешево, и качественно по сравнению с другими компаниями.',
    testimonial_9_location: 'Таксим → Сабиха Гёкчен',
    
    testimonial_10_name: 'Анна Павлова',
    testimonial_10_comment: 'Мы получили конвойную службу для нашей свадьбы. Они доставили всех гостей на их места вовремя. Большое спасибо!',
    testimonial_10_location: 'Свадебный трансфер',

    divider_fast_transfer: 'Быстрый трансфер',
    divider_vip_service: 'VIP сервис',
    divider_comfortable: 'Комфортная поездка',
    divider_affordable: 'Доступная цена',
    divider_reliable: 'Надежный персонал',

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
    footer_contact: 'Контакты',
    footer_address: 'Район Ататюрк',
    footer_city: 'Стамбул, Турция',
    footer_open: 'Круглосуточно',
    footer_open_desc: 'К вашим услугам каждый день',
    footer_rights: 'Все права защищены.',
    footer_privacy: 'Политика конфиденциальности',
    footer_terms: 'Условия использования',
    footer_kvkk: 'GDPR',

    cookie_title: '🍪 Использование файлов cookie',
    cookie_description: 'Мы используем файлы cookie, чтобы предоставить вам лучший опыт на нашем сайте. Необходимые файлы cookie требуются для работы сайта. Нам нужно ваше разрешение на аналитические и маркетинговые файлы cookie. Для подробной информации',
    cookie_privacy_link: 'Политику конфиденциальности',
    cookie_privacy_text: 'вы можете ознакомиться с нашей',
    cookie_accept_all: '✓ Принять все',
    cookie_reject: '✗ Отклонить',
    cookie_customize: '⚙️ Настроить',
    cookie_preferences: 'Настройки файлов cookie',
    cookie_necessary: 'Необходимые файлы cookie',
    cookie_necessary_desc: 'Требуются для основных функций сайта. Форма бронирования, функции безопасности и т.д.',
    cookie_always_active: 'Всегда активно',
    cookie_analytics: '📊 Аналитические файлы cookie',
    cookie_analytics_desc: 'Помогает нам собирать данные, такие как статистика посетителей, количество просмотров страниц.',
    cookie_marketing: '🎯 Маркетинговые файлы cookie',
    cookie_marketing_desc: 'Используется для предложения вам персонализированных предложений и кампаний.',
    cookie_optional: 'Необязательно',
    cookie_save_preferences: '✓ Сохранить настройки',
    cookie_cancel: 'Отмена',
  },
  
  ar: {
    // Navbar
    nav_home: 'الرئيسية',
    nav_tours: 'الجولات',
    nav_vehicles: 'المركبات',
    nav_service_areas: 'مناطق الخدمة',
    nav_testimonials: 'التقييمات',
    nav_faq: 'الأسئلة الشائعة',
    nav_contact: 'اتصل بنا',
    
    // Loading
    loading: 'جاري التحميل...',
    
    // Hero Slider
    hero_slide1_location: 'مطار إسطنبول',
    hero_slide1_title: 'رحلة مريحة!',
    hero_slide1_desc: 'نحن هنا لجميع طلبات النقل والجولات الخاصة بك.',
    
    hero_slide2_location: 'تجربة نقل فاخرة',
    hero_slide2_title: 'سفر VIP!',
    hero_slide2_desc: 'خدمة نقل متميزة بأحدث سياراتنا.',
    
    hero_slide3_location: '15 عامًا من الخبرة',
    hero_slide3_title: 'فريق محترف!',
    hero_slide3_desc: 'اشعر بالهيبة وخدمات VIP حتى النخاع!',
    
    hero_slide4_location: 'ضمان السعر المناسب',
    hero_slide4_title: 'خدمة سريعة!',
    hero_slide4_desc: 'استمتع برحلة VIP الخاصة بك مع ردود سريعة على طلبات الحجز.',
    
    // Rezervasyon Formu
    form_title: 'حجز سريع',
    form_subtitle: 'خطط لرحلتك',
    form_description: 'احجز نقلك المريح ببضع نقرات',
    form_oneway: 'اتجاه واحد',
    form_roundtrip: 'ذهاب وعودة',
    form_from: 'من',
    form_to: 'إلى',
    form_date: 'الوقت والتاريخ',
    form_return_date: 'تاريخ العودة',
    form_departure_date: 'تاريخ المغادرة',
    form_passengers: 'الركاب',
    form_pickup_placeholder: 'موقع الالتقاط',
    form_dropoff_placeholder: 'موقع الإنزال',
    form_passengers_placeholder: 'عدد الركاب',
    form_passengers_count: 'شخص',
    form_submit: 'عرض المركبات والأسعار',
    form_free_cancel: 'إلغاء مجاني',
    form_secure_payment: 'دفع آمن',
    form_support: 'دعم 24/7',
    
    // Araçlar
    vehicles_title: 'أسطولنا',
    vehicles_subtitle: 'استمتع برحلة آمنة مع سياراتنا المريحة والنظيفة والحديثة!',
    vehicles_most_popular: '⭐ الأكثر شعبية',
    vehicles_capacity: 'شخص',
    vehicles_luggage: 'حقيبة',
    vehicles_reserve: 'احجز الآن',
    
    vehicle_standard_vito: 'فيتو قياسي',
    vehicle_standard_vito_desc: 'نقل مريح واقتصادي',
    vehicle_vip_vito: 'VIP فيتو',
    vehicle_vip_vito_desc: 'تجربة نقل فاخرة وحصرية',
    vehicle_sprinter: 'مرسيدس سبرينتر',
    vehicle_sprinter_desc: 'مثالي للنقل الجماعي',
    vehicle_midibus: 'حافلة صغيرة خاصة',
    vehicle_midibus_desc: 'نقل جماعي متوسط الحجم',
    vehicle_bus: 'حافلة خاصة',
    vehicle_bus_desc: 'للنقل الجماعي الكبير',
    
    vehicle_feature_wifi: 'واي فاي',
    vehicle_feature_water: 'خدمة المياه',
    vehicle_feature_ac: 'مكيف',
    vehicle_feature_lighting: 'إضاءة محيطة',
    
    // Turlar
    tours_badge: 'الجولات الشعبية',
    tours_title: 'ما رأيك في',
    tours_title2: 'جولة ممتعة؟',
    tours_subtitle: 'استعد لخلق ذكريات لا تُنسى مع جولاتنا المليئة بالمسارات الفريدة!',
    tours_view_details: 'عرض التفاصيل',
    tours_view_all: 'استكشف جميع الجولات',
    tours_destinations: '✨ 7+ وجهات مختلفة في انتظارك',
    
    tour_istanbul_8h: 'جولة إسطنبول 8 ساعات',
    tour_istanbul_12h: 'جولة إسطنبول 12 ساعة',
    tour_cappadocia: 'جولة كابادوكيا',
    tour_cruise: 'عشاء بحري + جولة البوسفور',
    tour_anatolia: 'جولة الأناضول ونقل',
    tour_blacksea: 'جولة البحر الأسود ونقل',
    tour_aegean: 'جولة بحر إيجه ونقل',
    
    tour_category_city: '🏙️ جولة المدينة',
    tour_category_premium: '🌃 متميز',
    tour_category_nature: '🎈 الطبيعة',
    tour_category_cruise: '🚢 رحلة بحرية',
    tour_category_culture: '🏔️ الثقافة',
    tour_category_plateau: '⛰️ الهضبة',
    tour_category_coast: '🏖️ الساحل',
    
    // Hizmet Bölgeleri
    service_areas_badge: 'مناطق خدمتنا',
    service_areas_title: 'نصل إلى كل جزء',
    service_areas_title2: 'من إسطنبول',
    service_areas_subtitle: 'خدمة نقل آمنة من المطارات إلى المناطق السياحية',
    service_areas_airports: 'نقل المطار',
    service_areas_tourist: 'المناطق السياحية',
    service_areas_avg_time: 'الوقت المتوسط:',
    service_areas_active: 'خدمة نشطة',
    service_areas_info: 'خدمة نقل آمنة ومريحة 24/7',
    
    airport_ist: 'مطار إسطنبول',
    airport_saw: 'مطار صبيحة كوكجن',
    location_sultanahmet: 'السلطان أحمد',
    location_taksim: 'تقسيم',
    location_galata: 'غلطة',
    location_besiktas: 'بشكتاش',
    location_ortakoy: 'أورتاكوي',
    location_kadikoy: 'قاضي كوي',
    
    // Yorumlar
    testimonials_badge: '4.8 التقييم العام',
    testimonials_reviews: '(100+ تقييم)',
    testimonials_title: 'آراء العملاء',
    testimonials_subtitle: 'اقرأ تجارب عملائنا السعداء',
    testimonials_helpful: 'مفيد',
    testimonials_weeks_ago: 'قبل أسبوعين',

    testimonial_1_name: 'أحمد محمد',
    testimonial_1_comment: 'كان نقلنا من المطار إلى الفندق مريحًا جدًا. كان السائق مهذبًا ومحترفًا للغاية. أوصي به بالتأكيد!',
    testimonial_1_location: 'مطار إسطنبول → السلطان أحمد',
    
    testimonial_2_name: 'فاطمة علي',
    testimonial_2_comment: 'كانت خدمة السيارة VIP ممتازة حقًا. نظيفة ومريحة ووصلوا في الوقت المحدد. شكرا لكم!',
    testimonial_2_location: 'صبيحة كوكجن → قاضي كوي',
    
    testimonial_3_name: 'محمد حسن',
    testimonial_3_comment: 'استخدمناه لنقلنا بين المدن. كنا راضين جدًا، وكانت الأسعار معقولة أيضًا.',
    testimonial_3_location: 'إسطنبول → بورصة',
    
    testimonial_4_name: 'سارة أحمد',
    testimonial_4_comment: 'استخدمناه كعائلة، كانت الميني فان ذات 7 مقاعد مريحة وواسعة جدًا. كما أحضروا مقاعد خاصة للأطفال.',
    testimonial_4_location: 'تقسيم → مطار إسطنبول',
    
    testimonial_5_name: 'خالد عبدالله',
    testimonial_5_comment: 'كنت بحاجة للذهاب إلى المطار في وقت متأخر من الليل. كان نقلًا آمنًا وسريعًا جدًا.',
    testimonial_5_location: 'بشكتاش → مطار إسطنبول',
    
    testimonial_6_name: 'ليلى يوسف',
    testimonial_6_comment: 'حصلنا على خدمة النقل الجماعي لجولة شركتنا. كان الجميع راضين جدًا، فريق محترف.',
    testimonial_6_location: 'جولة الشركة - البوسفور',
    
    testimonial_7_name: 'عمر كريم',
    testimonial_7_comment: 'كان الحجز عبر الإنترنت سهلاً جدًا. حصلت على رد فوري من WhatsApp، كل شيء كان في الوقت المحدد.',
    testimonial_7_location: 'قاضي كوي → صبيحة كوكجن',
    
    testimonial_8_name: 'نور الدين',
    testimonial_8_comment: 'سيارة فاخرة وسائق لطيف جدًا. أوصوا أيضًا بجولة إسطنبول، كانت تجربة رائعة!',
    testimonial_8_location: 'فندق يني كابي → جولة البوسفور',
    
    testimonial_9_name: 'طارق سليم',
    testimonial_9_comment: 'مثالي من حيث السعر والأداء! رخيص وعالي الجودة مقارنة بالشركات الأخرى.',
    testimonial_9_location: 'تقسيم → صبيحة كوكجن',
    
    testimonial_10_name: 'ريم فهد',
    testimonial_10_comment: 'حصلنا على خدمة القافلة لحفل زفافنا. أوصلوا جميع الضيوف إلى أماكنهم في الوقت المحدد. شكرا جزيلا!',
    testimonial_10_location: 'خدمة نقل الزفاف',

     divider_fast_transfer: 'نقل سريع',
    divider_vip_service: 'خدمة VIP',
    divider_comfortable: 'رحلة مريحة',
    divider_affordable: 'سعر معقول',
    divider_reliable: 'طاقم موثوق',

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
    footer_contact: 'اتصل بنا',
    footer_address: 'حي أتاتورك',
    footer_city: 'إسطنبول، تركيا',
    footer_open: 'مفتوح 24/7',
    footer_open_desc: 'في خدمتك كل يوم',
    footer_rights: 'جميع الحقوق محفوظة.',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'شروط الاستخدام',
    footer_kvkk: 'GDPR',

    cookie_title: '🍪 استخدام ملفات تعريف الارتباط',
    cookie_description: 'نستخدم ملفات تعريف الارتباط لنوفر لك أفضل تجربة على موقعنا. ملفات تعريف الارتباط الضرورية مطلوبة لعمل الموقع. نحتاج إلى إذنك لملفات تعريف الارتباط التحليلية والتسويقية. للحصول على معلومات مفصلة',
    cookie_privacy_link: 'سياسة الخصوصية',
    cookie_privacy_text: 'يمكنك مراجعة',
    cookie_accept_all: '✓ قبول الكل',
    cookie_reject: '✗ رفض',
    cookie_customize: '⚙️ تخصيص',
    cookie_preferences: 'تفضيلات ملفات تعريف الارتباط',
    cookie_necessary: 'ملفات تعريف الارتباط الضرورية',
    cookie_necessary_desc: 'مطلوبة للوظائف الأساسية للموقع. نموذج الحجز، ميزات الأمان، إلخ.',
    cookie_always_active: 'نشط دائمًا',
    cookie_analytics: '📊 ملفات تعريف الارتباط التحليلية',
    cookie_analytics_desc: 'يساعدنا في جمع البيانات مثل إحصاءات الزوار، عدد مشاهدات الصفحة.',
    cookie_marketing: '🎯 ملفات تعريف الارتباط التسويقية',
    cookie_marketing_desc: 'تستخدم لتقديم عروض وحملات مخصصة لك.',
    cookie_optional: 'اختياري',
    cookie_save_preferences: '✓ حفظ التفضيلات',
    cookie_cancel: 'إلغاء',
  }
};

  // Helper fonksiyon - çeviri almak için
const t = (key: keyof typeof translations.tr) => {
  return translations[language][key] || translations.tr[key];
};

const languages = {
  tr: { name: 'Türkçe', flag: '🇹🇷', code: 'TR' },
  en: { name: 'English', flag: '🇬🇧', code: 'EN' },
  de: { name: 'Deutsch', flag: '🇩🇪', code: 'DE' },
  ru: { name: 'Русский', flag: '🇷🇺', code: 'RU' },
  ar: { name: 'العربية', flag: '🇸🇦', code: 'AR' }
};

useEffect(() => {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) {
    setLanguage(savedLanguage as 'tr' | 'en' | 'de' | 'ru' | 'ar');
  }
}, []);

// Dil değiştirme fonksiyonu ekle
const changeLanguage = (newLang: 'tr' | 'en' | 'de' | 'ru' | 'ar') => {
  setLanguage(newLang);
  localStorage.setItem('preferredLanguage', newLang);
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const heroContent = [
  {
    location: t('hero_slide1_location'),
    title: t('hero_slide1_title'),
    description: t('hero_slide1_desc'),
    image: 'https://images.unsplash.com/photo-1623439844752-524658b16ce6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332'
  },
  {
    location: t('hero_slide2_location'),
    title: t('hero_slide2_title'),
    description: t('hero_slide2_desc'),
    image: 'https://images.unsplash.com/photo-1587893905153-ccc27de8f734?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932'
  },
  {
    location: t('hero_slide3_location'),
    title: t('hero_slide3_title'),
    description: t('hero_slide3_desc'),
    image: 'https://images.unsplash.com/photo-1558553866-6dbcb1d9233b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071'
  },
  {
    location: t('hero_slide4_location'),
    title: t('hero_slide4_title'),
    description: t('hero_slide4_desc'),
    image: 'https://images.unsplash.com/photo-1585325390143-e6b2433f442c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
  }
];

  const testimonials = [
  {
    name: t('testimonial_1_name'),
    comment: t('testimonial_1_comment'),
    rating: 5,
    location: t('testimonial_1_location')
  },
  {
    name: t('testimonial_2_name'),
    comment: t('testimonial_2_comment'),
    rating: 5,
    location: t('testimonial_2_location')
  },
  {
    name: t('testimonial_3_name'),
    comment: t('testimonial_3_comment'),
    rating: 5,
    location: t('testimonial_3_location')
  },
  {
    name: t('testimonial_4_name'),
    comment: t('testimonial_4_comment'),
    rating: 5,
    location: t('testimonial_4_location')
  },
  {
    name: t('testimonial_5_name'),
    comment: t('testimonial_5_comment'),
    rating: 5,
    location: t('testimonial_5_location')
  },
  {
    name: t('testimonial_6_name'),
    comment: t('testimonial_6_comment'),
    rating: 5,
    location: t('testimonial_6_location')
  },
  {
    name: t('testimonial_7_name'),
    comment: t('testimonial_7_comment'),
    rating: 5,
    location: t('testimonial_7_location')
  },
  {
    name: t('testimonial_8_name'),
    comment: t('testimonial_8_comment'),
    rating: 5,
    location: t('testimonial_8_location')
  },
  {
    name: t('testimonial_9_name'),
    comment: t('testimonial_9_comment'),
    rating: 5,
    location: t('testimonial_9_location')
  },
  {
    name: t('testimonial_10_name'),
    comment: t('testimonial_10_comment'),
    rating: 5,
    location: t('testimonial_10_location')
  }
];


  const calculatePrice = () => {
  if (!pickupLocation || !dropoffLocation) {
    setCalculatedPrice(0);
    return;
  }
  
  let basePrice = 55; // EUR bazlı fiyat
  const pickup = pickupLocation.toLowerCase();
  const dropoff = dropoffLocation.toLowerCase();
  
  // Gidiş-dönüş kontrolü (önce kontrol et)
  if (isRoundTrip) {
    setCalculatedPrice(110); // 110 EUR sabit
    return;
  }
  
  // Havalimanı ekstra ücretleri
  if (pickup.includes('havalimanı') || pickup.includes('havalimani') || pickup.includes('airport')) {
    basePrice += 5;
  }
  if (dropoff.includes('havalimanı') || dropoff.includes('havalimani') || dropoff.includes('airport')) {
    basePrice += 5;
  }
  
  // Sabiha Gökçen ekstra
  if (pickup.includes('sabiha') || dropoff.includes('sabiha')) {
    basePrice += 15;
  }
  
  // Yolcu sayısına göre
  const passengerCount = parseInt(passengers);
  if (passengerCount > 6) {
    basePrice += 25;
  }
  
  setCalculatedPrice(basePrice);
};

  useEffect(() => {
    calculatePrice();
  }, [pickupLocation, dropoffLocation, passengers, isRoundTrip]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      if (!isPickupValid || !isDropoffValid) {
    alert('Lütfen listeden lokasyon seçin. Manuel yazılan adresler kabul edilmez.');
    return;
  }
    const params = new URLSearchParams({
      pickup: pickupLocation,
      dropoff: dropoffLocation,
      date: departureDate,
      time: departureTime,
      passengers: passengers,
      roundTrip: isRoundTrip.toString(),
      ...(isRoundTrip && { returnDate, returnTime })
    });
    window.location.href = `/rezervasyon?${params.toString()}`;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-secondary-500 to-primary-500 flex items-center justify-center"
          onAnimationComplete={() => setLoading(false)}
        >
          <div className="text-center px-4">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
              className="inline-block"
            >
              <img 
  src="/icon.png" 
  alt="İstanbul Transfer Logo" 
  className="w-8 h-8 md:w-10 md:h-10"
/>
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mt-6"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Impala Transfer
            </motion.h2>
            <p className="text-white text-base md:text-lg mt-2">{t('loading')}</p>
          </div>
        </motion.div>
      )}

      <div className="min-h-screen bg-gray-50">
       <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:absolute fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
        >
          <div className="container mx-auto px-3 md:px-4 py-3 md:py-6">
            <div className="flex items-center justify-between">
              <motion.div 
                className="flex items-center space-x-1.5 md:space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <img 
  src="/icon.png" 
  alt="İstanbul Transfer Logo" 
  className="w-8 h-8 md:w-10 md:h-10"
/>
                <h1 className="text-base md:text-2xl font-bold text-white drop-shadow-lg">Impala Transfer</h1>
              </motion.div>
              
<div className="hidden md:flex space-x-6 lg:space-x-8">
  <a href="/" className="text-white hover:text-primary-400 font-semibold transition drop-shadow-md">{t('nav_home')}</a>
  <a href="/turlar" className="text-white hover:text-primary-400 font-semibold transition drop-shadow-md">{t('nav_tours')}</a>
  <a href="#vehicles" className="text-white hover:text-primary-400 font-semibold transition drop-shadow-md">{t('nav_vehicles')}</a>
  <a href="#service-areas" className="text-white hover:text-primary-400 font-semibold transition drop-shadow-md">{t('nav_service_areas')}</a>
  <a href="#testimonials" className="text-white hover:text-primary-400 font-semibold transition drop-shadow-md">{t('nav_testimonials')}</a>
  <a href="/sss" className="text-white hover:text-primary-400 font-semibold transition drop-shadow-md">{t('nav_faq')}</a>
  <a href="#contact" className="text-white hover:text-primary-400 font-semibold transition drop-shadow-md">{t('nav_contact')}</a>
</div>

              <div className="flex items-center space-x-2 md:space-x-4">

  {/* Dil Seçici Dropdown - Desktop */}
  <div className="hidden md:block relative">
    <motion.button
      onClick={() => setShowLangMenu(!showLangMenu)}
      className="flex items-center space-x-2 text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-white/30 transition border-2 border-white/30"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-2xl">{languages[language].flag}</span>
      <span className="text-base">{languages[language].code}</span>
      <svg className={`w-4 h-4 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </motion.button>

    {/* Dropdown Menu */}
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
              changeLanguage(code as 'tr' | 'en' | 'de' | 'ru' | 'ar');
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

  {/* Telefon - Desktop */}
  <motion.a 
    href="tel:+905016206952" 
    className="hidden md:flex items-center space-x-2 text-white bg-primary-500 px-3 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-primary-600 transition"
    whileHover={{ scale: 1.05 }}
  >
    <Phone className="w-5 h-5" />
    <span>0501 620 69 52</span>
  </motion.a>

  {/* Telefon - Mobil (sadece ikon) */}
  <motion.a 
    href="tel:+905016206952" 
    className="md:hidden text-white bg-primary-500 p-2 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
  >
    <Phone className="w-5 h-5" />
  </motion.a>

  {/* Dil Seçici - Mobil */}
  <div className="md:hidden relative">
    <motion.button
      onClick={() => setShowLangMenu(!showLangMenu)}
      className="flex items-center space-x-1 text-white bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg border-2 border-white/30"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-xl">{languages[language].flag}</span>
      <span className="text-sm font-bold">{languages[language].code}</span>
    </motion.button>

    {/* Mobil Dropdown */}
    {showLangMenu && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200 min-w-[160px] z-50"
      >
        {Object.entries(languages).map(([code, lang]) => (
          <button
            key={code}
            onClick={() => {
              setLanguage(code as any);
              setShowLangMenu(false);
            }}
            className={`w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 transition text-sm ${
              language === code ? 'bg-primary-50 border-l-4 border-primary-500' : ''
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="font-bold text-gray-900">{lang.code}</span>
          </button>
        ))}
      </motion.div>
    )}
  </div>

  {/* Hamburger Butonu */}
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="md:hidden text-white hover:text-primary-400 p-1"
  >
    {mobileMenuOpen ? (
      <svg className="w-6 h-6 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg className="w-6 h-6 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
</div>
            </div>
            

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: mobileMenuOpen ? 'auto' : 0,
                opacity: mobileMenuOpen ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
<div className="pt-4 pb-2 space-y-1 bg-black/60 backdrop-blur-md rounded-lg mt-4 px-3">
  
  <a href="/" onClick={(e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }} className="block py-2 text-sm text-white hover:text-primary-400 hover:bg-white/10 px-3 rounded font-semibold transition">
    🏠 {t('nav_home')}
  </a>
  
  <a 
    href="/turlar" 
    className="block py-2 text-sm text-white hover:text-primary-400 hover:bg-white/10 px-3 rounded font-semibold transition" 
    onClick={() => setMobileMenuOpen(false)}
  >
    🎯 {t('nav_tours')}
  </a>
  
  <a 
    href="#service-areas" 
    className="block py-2 text-sm text-white hover:text-primary-400 hover:bg-white/10 px-3 rounded font-semibold transition" 
    onClick={(e) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      setTimeout(() => {
        document.querySelector('#service-areas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }}
  >
    ⚡ {t('nav_service_areas')}
  </a>
  
  <a 
    href="#vehicles" 
    className="block py-2 text-sm text-white hover:text-primary-400 hover:bg-white/10 px-3 rounded font-semibold transition" 
    onClick={(e) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      setTimeout(() => {
        document.querySelector('#vehicles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }}
  >
    🚗 {t('nav_vehicles')}
  </a>
  
  <a 
    href="#testimonials" 
    className="block py-2 text-sm text-white hover:text-primary-400 hover:bg-white/10 px-3 rounded font-semibold transition" 
    onClick={(e) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      setTimeout(() => {
        document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }}
  >
    ⭐ {t('nav_testimonials')}
  </a>
  
  <a 
    href="/sss" 
    className="block py-2 text-sm text-white hover:text-primary-400 hover:bg-white/10 px-3 rounded font-semibold transition" 
    onClick={() => setMobileMenuOpen(false)}
  >
    ❓ {t('nav_faq')}
  </a>
  
  <a 
    href="https://wa.me/905016206952" 
    target="_blank"
    rel="noopener noreferrer"
    className="block py-2 text-sm text-white hover:text-primary-400 hover:bg-white/10 px-3 rounded font-semibold transition" 
    onClick={() => setMobileMenuOpen(false)}
  >
    📞 {t('nav_contact')} (WhatsApp)
  </a>
</div>
            </motion.div>
          </div>
        </motion.nav>

        <section className="relative min-h-screen h-auto md:h-screen overflow-hidden pt-0 pb-0">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/80 z-50"></div>

          {/* Background Slider with Zoom */}
          <motion.div 
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                setCurrentSlide((prev) => (prev + 1) % 4);
              } else if (swipe > swipeConfidenceThreshold) {
                setCurrentSlide((prev) => (prev - 1 + 4) % 4);
              }
            }}
          >
            {heroContent.map((content, idx) => (
              <motion.div
                key={idx}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${content.image}')` }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: currentSlide === idx ? 1 : 0,
                  scale: currentSlide === idx ? [1, 1.1] : 1
                }}
                transition={{ 
                  opacity: { duration: 1 },
                  scale: { duration: 5, ease: "easeInOut" }
                }}
              />
            ))}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </motion.div>

          <div className="relative z-10 h-full flex flex-col justify-between py-6 md:py-8">
            <div className="container mx-auto px-3 md:px-4 flex-1 flex items-end pb-32 md:items-center md:pb-0">
              <div className="max-w-3xl text-white w-full translate-y-20 md:translate-y-0">
                {/* Title with different animations per slide */}
                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={
                    currentSlide === 0 ? { opacity: 0, y: 50, rotateX: -15 } :
                    currentSlide === 1 ? { opacity: 0, x: -100 } :
                    currentSlide === 2 ? { opacity: 0, y: -50, scale: 0.9 } :
                    { opacity: 0, x: 100 }
                  }
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black mb-4 md:mb-6 leading-tight tracking-tight">
  <span className="bg-gradient-to-r from-white via-crimson-300 to-white bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
    {heroContent[currentSlide].title}
                  </span>
                </motion.h1>
                
                {/* Description with different animations per slide */}
              </div>
            </div>

            {/* YENİ REZERVASYON FORMU - DAHA ÇEKİCİ */}
<div className="w-full px-0 pb-2 md:pb-6 relative z-20">
<motion.div 
  className="container mx-auto max-w-8xl px-4"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
    {/* Kart Container - Daha Modern */}
    <div className="bg-gradient-to-br from-cream-100 via-white to-cream-50 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-cream-300/50 p-4 md:p-6 relative overflow-visible">
      
      {/* Dekoratif Elementler */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-crimson-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage-200/30 rounded-full blur-3xl"></div>
      
{/* Form Header - Yeni Tipografi */}
<div className="relative z-10 mb-3 md:mb-5">
  {/* Badge ve Currency Switcher - Yan yana */}
  <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
    {/* Sol - Quick Reservation Badge */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="inline-flex items-center space-x-2 bg-crimson-500 text-white px-4 py-2 rounded-full shadow-lg"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <span className="font-bold text-sm tracking-wider">{t('form_title')}</span>
    </motion.div>
    
    {/* Sağ - Currency Switcher */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.1 }}
    >
      <CurrencySwitcher />
    </motion.div>
  </div>
  
  {/* Başlık ve Açıklama */}
  <h2 className="font-display text-2xl md:text-3xl font-black text-gray-900 mb-2">
    {t('form_subtitle')}
  </h2>
  <p className="text-gray-600 font-medium text-xs md:text-sm">
    {t('form_description')}
  </p>
</div>

      <form onSubmit={handleSubmit} className="relative z-10">
        {/* Tek/Gidiş-Dönüş Toggle - Yeni Tasarım */}
        <div className="flex items-center justify-center mb-6 bg-cream-200/50 p-2 rounded-2xl">
          <button
            type="button"
            onClick={() => setIsRoundTrip(false)}
            className={`flex-1 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              !isRoundTrip 
                ? 'bg-gradient-to-r from-crimson-500 to-crimson-600 text-white shadow-lg scale-105' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span>{t('form_oneway')}</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => setIsRoundTrip(true)}
            className={`flex-1 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              isRoundTrip 
                ? 'bg-gradient-to-r from-crimson-500 to-crimson-600 text-white shadow-lg scale-105' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span>{t('form_roundtrip')}</span>
            </span>
          </button>
        </div>

{/* Form Fields - Dinamik Grid */}
<div className={`grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 ${
  isRoundTrip ? 'lg:grid-cols-5' : 'lg:grid-cols-4'
}`}>
  
  {/* Nereden */}
  {/* Nereden */}
<LocationAutocomplete
  value={pickupLocation}
  onChange={setPickupLocation}
  onValidChange={setIsPickupValid} // YENİ
  placeholder={t('form_pickup_placeholder')}
  label={t('form_from')}
  icon={<MapPin className="w-5 h-5 text-sage-500" />}
  required
/>

{/* Nereye */}
<LocationAutocomplete
  value={dropoffLocation}
  onChange={setDropoffLocation}
  onValidChange={setIsDropoffValid} // YENİ
  placeholder={t('form_dropoff_placeholder')}
  label={t('form_to')}
  icon={<MapPin className="w-5 h-5 text-crimson-500" />}
  required
/>

  {/* Gidiş Tarihi */}
  <DateTimePicker
    value={{ date: departureDate, time: departureTime }}
    onChange={(date, time) => {
      setDepartureDate(date);
      setDepartureTime(time);
    }}
    label={isRoundTrip ? t('form_departure_date') : t('form_date')}
    required
  />

  {/* Dönüş Tarihi (Sadece Gidiş-Dönüş ise) */}
  {isRoundTrip && (
    <DateTimePicker
      value={{ date: returnDate, time: returnTime }}
      onChange={(date, time) => {
        setReturnDate(date);
        setReturnTime(time);
      }}
      label={t('form_return_date')}
      minDate={departureDate || undefined}
      required
    />
  )}

  {/* Yolcu Sayısı */}
  <div className="relative group">
    <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-bold text-crimson-600 z-10">
      {t('form_passengers')}
    </label>
    <div className="relative">
      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sage-500 group-focus-within:text-crimson-500 transition" />
      <select
        value={passengers}
        onChange={(e) => setPassengers(e.target.value)}
        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-cream-300 rounded-2xl text-gray-900 font-semibold focus:border-crimson-500 focus:ring-4 focus:ring-crimson-100 transition text-sm md:text-base outline-none appearance-none cursor-pointer"
        required
      >
        <option value="">{t('form_passengers_placeholder')}</option>
        {[1,2,3,4,5,6,7,8,9,10].map(num => (
          <option key={num} value={num}>{num} {t('form_passengers_count')}</option>
        ))}
      </select>
      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>

        {/* Submit Button - Currency Entegreli */}
<motion.button
  type="submit"
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="w-full bg-gradient-to-r from-crimson-600 via-crimson-500 to-crimson-600 text-white font-black py-3.5 md:py-4 rounded-xl transition shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 text-base md:text-lg border-2 border-crimson-400 relative overflow-hidden group"
>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    animate={{ x: ['-200%', '200%'] }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  ></motion.div>
  
  <span className="relative z-10 flex items-center space-x-3">
    <span>{t('form_submit')}</span>
    {calculatedPrice > 0 && (
      <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-mono border border-white/30">
        ~{convertPrice(calculatedPrice)}{getCurrencySymbol()}
      </span>
    )}
    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
  </span>
</motion.button>

        {/* Alt Bilgi */}
        <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
          <div className="flex items-center space-x-2 text-sage-600">
            <CheckCircle className="w-4 h-4" />
            <span className="font-semibold">{t('form_free_cancel')}</span>
          </div>
          <div className="flex items-center space-x-2 text-sage-600">
            <Shield className="w-4 h-4" />
            <span className="font-semibold">{t('form_secure_payment')}</span>
          </div>
          <div className="flex items-center space-x-2 text-sage-600">
            <Star className="w-4 h-4" />
            <span className="font-semibold">{t('form_support')}</span>
          </div>
        </div>
      </form>
    </div>
  </motion.div>
  </div>
</div>
</section>

        <section id="vehicles" className="py-12 md:py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.13]">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #000000ff 0px,
                #d09e21ff 4px,
                transparent 10px,
                transparent 70px
              )`
            }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>

          <div className="container mx-auto px-3 md:px-4 relative z-10">
            <motion.h3 
  className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center text-gray-900 mb-3 md:mb-4 drop-shadow-sm px-2"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  {t('vehicles_title')}
</motion.h3>
            <motion.p
  className="text-center text-gray-800 font-montserrat font-semibold mb-8 md:mb-12 max-w-2xl mx-auto drop-shadow-sm text-sm md:text-base px-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  {t('vehicles_subtitle')}
</motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 max-w-[1600px] mx-auto px-2">
{[
  {
    name: t('vehicle_standard_vito'),
    desc: t('vehicle_standard_vito_desc'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762107314/2020-Mercedes-Vito-8591981-removebg-preview_wbdmiq.png',
    imageInside: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762109949/IMG-20250320-WA0012_qtwowm.jpg',
    capacity: `1-6 ${t('vehicles_capacity')}`,
    luggage: `4 ${t('vehicles_luggage')}`,
    features: [t('vehicle_feature_wifi'), t('vehicle_feature_water'), t('vehicle_feature_ac')]
  },
  {
    name: t('vehicle_vip_vito'),
    desc: t('vehicle_vip_vito_desc'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762104475/a_4_qfbgz7.png',
    imageInside: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1761926794/WhatsApp_G%C3%B6rsel_2025-10-25_saat_00.10.11_d08204a9_klagiy.jpg',
    capacity: `1-4 ${t('vehicles_capacity')}`,
    luggage: `4 ${t('vehicles_luggage')}`,
    features: [t('vehicle_feature_wifi'), t('vehicle_feature_water'), t('vehicle_feature_ac'), t('vehicle_feature_lighting')],
    popular: true
  },
  {
    name: t('vehicle_sprinter'),
    desc: t('vehicle_sprinter_desc'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762104480/a_1_fpfeoh.png',
    imageInside: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762107866/primo-vip-sprinter-12-passenger-inside-side-view-updated-1858712634_i6ygpo.jpg',
    capacity: `1-19 ${t('vehicles_capacity')}`,
    luggage: `8-20 ${t('vehicles_luggage')}`,
    features: [t('vehicle_feature_wifi'), t('vehicle_feature_water'), t('vehicle_feature_ac')]
  },
  {
    name: t('vehicle_midibus'),
    desc: t('vehicle_midibus_desc'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762108018/Temsa-MD9-2008954479-removebg-preview_hjukzo.png',
    imageInside: '',
    capacity: `1-26 ${t('vehicles_capacity')}`,
    luggage: '',
    features: [t('vehicle_feature_wifi'), t('vehicle_feature_water'), t('vehicle_feature_ac')]
  },
  {
    name: t('vehicle_bus'),
    desc: t('vehicle_bus_desc'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762108017/55-passenger-charter-bus-columbia-4189493930-removebg-preview_zatlaj.png',
    imageInside: '',
    capacity: `1-45 ${t('vehicles_capacity')}`,
    luggage: '',
    features: [t('vehicle_feature_wifi'), t('vehicle_feature_water'), t('vehicle_feature_ac')]
  }
              ].map((vehicle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group"
                >
                  <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden ${vehicle.popular ? 'border-2 border-primary-200' : 'border border-gray-200'}`}>
                    {vehicle.popular && (
                      <div className="bg-gradient-to-r from-primary-500 to-accent text-black text-center py-1.5 md:py-2 text-xs md:text-sm font-bold">
                        {t('vehicles_most_popular')}
                      </div>
                    )}
                    <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <img 
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-contain p-3 md:p-4 group-hover:opacity-0 transition duration-500"
                      />
                      {vehicle.imageInside && (
                        <img 
                          src={vehicle.imageInside}
                          alt={`${vehicle.name} İç`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                        />
                      )}
                    </div>

                    <div className="p-4 md:p-6">
                      <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2 font-montserrat">{vehicle.name}</h4>
                      <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 font-inter">{vehicle.desc}</p>

                      <div className="flex items-center justify-between mb-3 md:mb-4 pb-3 md:pb-4 border-b">
                        <div className="flex items-center space-x-1.5 md:space-x-2">
                          <Users className="w-4 h-4 md:w-5 md:h-5 text-primary-500" />
                          <span className="font-semibold text-gray-700 text-xs md:text-sm">{vehicle.capacity}</span>
                        </div>
                        {vehicle.luggage && (
                          <div className="flex items-center space-x-1.5 md:space-x-2">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <span className="font-semibold text-gray-700 text-xs md:text-sm">{vehicle.luggage}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                        {vehicle.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-1.5 md:space-x-2 text-xs md:text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-black hover:bg-gray-800 text-white py-2.5 md:py-3 rounded-lg font-bold transition shadow-lg text-sm md:text-base"
                      >
                        {t('vehicles_reserve')}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <AnimatedDivider language={language} />

        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-3 md:px-4 mb-12 md:mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
  className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 shadow-xl bg-crimson-500 border-2 border-crimson-400"
>
  <motion.svg 
    className="w-4 h-4 md:w-5 md:h-5 text-white"
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </motion.svg>
  
  <span className="font-bold uppercase tracking-wider text-xs md:text-sm text-white">
  {t('tours_badge')}
</span>
</motion.div>

             <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black bg-gradient-to-r from-gray-900 via-crimson-700 to-gray-900 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight px-2">
  {t('tours_title')}<br />{t('tours_title2')}
</h2>
              
              <p className="text-gray-700 font-sans font-medium text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
  {t('tours_subtitle')}
</p>

              <div className="flex items-center justify-center space-x-3 md:space-x-4 mt-6 md:mt-8">
  <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-transparent to-crimson-500 rounded-full"></div>
  <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-crimson-500 rounded-full animate-pulse"></div>
  <div className="w-16 md:w-20 h-1 bg-gradient-to-l from-transparent to-sage-500 rounded-full"></div>
</div>
            </motion.div>
          </div>

          <div className="relative max-w-full mx-auto overflow-hidden px-0">
            <motion.div 
              className="flex gap-0"
              animate={{
                x: ['0%', '-230%']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-0">
                 // YENİ:
{[
  {
    name: t('tour_istanbul_8h'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532713/train-7824162_1920_pwl8qb.jpg',
    category: t('tour_category_city')
  },
  {
    name: t('tour_istanbul_12h'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/night-4914430_1920_zzh7pj.jpg',
    category: t('tour_category_premium')
  },
  {
    name: t('tour_cappadocia'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/hot-air-balloon-7217173_1920_vwfat9.jpg',
    category: t('tour_category_nature')
  },
  {
    name: t('tour_cruise'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/cruise-ship-778533_1280_yjgmso.jpg',
    category: t('tour_category_cruise')
  },
  {
    name: t('tour_anatolia'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532709/ihlara-vadisi-nasil-gidilir-800x500_ebkwmg.jpg',
    category: t('tour_category_culture')
  },
  {
    name: t('tour_blacksea'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532711/sumela-5035247_1280_n2qju5.jpg',
    category: t('tour_category_plateau')
  },
  {
    name: t('tour_aegean'),
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1762532971/7797e86ed5112d0b409213a2b7f304d9_bo3wth.jpg',
    category: t('tour_category_coast')
  }
                  ].map((tour, idx) => (
<motion.div
  key={`tour${setIdx}-${idx}`}
  className="min-w-[85vw] sm:min-w-[70vw] md:min-w-[45vw] lg:min-w-[33.33vw] h-[420px] md:h-[520px] relative cursor-pointer group overflow-hidden rounded-3xl border-4 border-cream-200 hover:border-crimson-400 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(20,184,166,0.3)]"
  onClick={() => window.location.href = '/turlar'}
  whileHover={{ y: -8, scale: 1.02 }}
>
  <div className="relative h-full overflow-hidden">
    {/* Gradient Overlay - Yeni Renkler */}
    <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/90 via-crimson-600/40 to-transparent"></div>
    
    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-crimson-500/20 to-sage-500/20"></div>
                        
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>

                        <motion.div 
  whileHover={{ scale: 1.2, rotate: 360 }}
  transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
  className="absolute top-6 md:top-8 left-6 md:left-8 z-20 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-crimson-500 to-crimson-600 backdrop-blur-md rounded-full flex items-center justify-center border-3 border-white shadow-2xl group-hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
>
  <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
</motion.div>

<img 
  src={tour.image} 
  alt={tour.name}
  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 transform-gpu"
/>
                        
                        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 z-20">
                          <motion.span
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  className="inline-block bg-gradient-to-r from-crimson-500 to-crimson-600 text-white text-xs md:text-sm font-black px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-2 md:mb-3 shadow-xl border-2 border-white/50 backdrop-blur-sm"
>
  {tour.category}
</motion.span>
                          
                          <h3 className="text-white font-display font-black text-2xl md:text-3xl lg:text-4xl drop-shadow-2xl group-hover:text-crimson-200 transition-colors duration-300 leading-tight">
  {tour.name}
</h3>
                          
                          <motion.div
  initial={{ opacity: 0, y: 10 }}
  className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-3"
>
  <div className="flex items-center space-x-2 text-white/90 text-xs md:text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/30">
    <span>{t('tours_view_details')}</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
</motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-12 md:mt-16 relative z-10 px-4">
            <motion.a
  href="/turlar"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05, y: -4 }}
  whileTap={{ scale: 0.98 }}
  className="group inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-crimson-600 via-crimson-500 to-crimson-600 text-white px-10 md:px-16 py-4 md:py-6 rounded-full font-black text-base md:text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)] border-3 border-white relative overflow-hidden"
>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-crimson-400 to-crimson-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  ></motion.div>
  
  <span className="relative z-10 flex items-center space-x-3">
    <span>{t('tours_view_all')}</span>
    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
  </span>
</motion.a>

<p className="text-gray-600 text-xs md:text-sm mt-3 md:mt-4 font-sans font-semibold">
  {t('tours_destinations')}
</p>
          </div>
        </section>

        {/* Animated Divider - Turlar ve Hizmet Bölgeleri arası */}


<section id="service-areas" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          {/* Diagonal Stripe Pattern - Araç Filomuz ile aynı stil */}
          <div className="absolute inset-0 opacity-[0.23]">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                135deg,
                #000000ff 0px,
                #efefefb9 4px,
                transparent 10px,
                transparent 70px
              )`
            }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>

          <div className="container mx-auto px-3 md:px-4 relative z-10">
            {/* Başlık */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6"
              >
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary-500" />
                <span className="text-primary-500 font-bold text-xs md:text-sm uppercase tracking-wider">
  {t('service_areas_badge')}
</span>

              </motion.div>

             <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-black text-white mb-3 md:mb-4">
  {t('service_areas_title')}<br />
  <span className="bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">
    {t('service_areas_title2')}
  </span>
</h2>
              
             <p className="text-gray-300 font-montserrat text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
  {t('service_areas_subtitle')}
</p>
            </motion.div>

            {/* Ana İçerik Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
              
              {/* Sol Taraf - Lokasyon Butonları */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4 md:space-y-6"
              >
                {/* Havalimanları */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center space-x-2">
  <span>✈️</span>
  <span>{t('service_areas_airports')}</span>
</h3>
                  
                  <div className="space-y-3">
                    {[
  { 
    name: t('airport_ist'), 
    time: '45-60 dk', 
    icon: '✈️',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763486159/istanbul-4724521_1920_labqmv.jpg',
    index: 0
  },
  { 
    name: t('airport_saw'), 
    time: '50-70 dk', 
    icon: '✈️',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487049/457657-1442395698_bbagzk.jpg',
    index: 1
  }
].map((airport, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setSelectedLocation(airport.index)}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${
                          selectedLocation === airport.index
                            ? 'bg-primary-500/20 border-primary-500'
                            : 'bg-white/5 border-white/10 hover:border-primary-500/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3 text-left">
                          <span className="text-2xl">{airport.icon}</span>
                          <div>
                            <p className="text-white font-semibold text-sm md:text-base">{airport.name}</p>
                            <p className="text-gray-400 text-xs md:text-sm">{t('service_areas_avg_time')} {airport.time}</p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ 
                            x: selectedLocation === airport.index ? [0, 5, 0] : 0 
                          }}
                          transition={{ 
                            duration: 0.5,
                            repeat: selectedLocation === airport.index ? Infinity : 0
                          }}
                        >
                          <ArrowRight className={`w-5 h-5 transition-colors ${
                            selectedLocation === airport.index ? 'text-primary-500' : 'text-gray-400'
                          }`} />
                        </motion.div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Turistik Bölgeler */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center space-x-2">
  <span>🏛️</span>
  <span>{t('service_areas_tourist')}</span>
</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
  { 
    name: t('location_sultanahmet'), 
    icon: '🕌',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487085/topkapi-palace-museum-7353338_1920_eizyuc.jpg',
    index: 2
  },
  { 
    name: t('location_taksim'), 
    icon: '🎭',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487121/tram-3420867_1920_mqqyos.jpg',
    index: 3
  },
  { 
    name: t('location_galata'), 
    icon: '🗼',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487158/view-1782891_1920_d3h5qm.jpg',
    index: 4
  },
  { 
    name: t('location_besiktas'), 
    icon: '🏰',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487285/pexels-yetkin-agac-664866326-34670791_urkipn.jpg',
    index: 5
  },
  { 
    name: t('location_ortakoy'), 
    icon: '🌉',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487214/istanbul-2367193_1920_lpebkd.jpg',
    index: 6
  },
  { 
    name: t('location_kadikoy'), 
    icon: '🌊',
    image: 'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487251/kadikoy-353989_1920_wsj42g.jpg',
    index: 7
  }
].map((location, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setSelectedLocation(location.index)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`backdrop-blur-sm border rounded-xl p-4 text-center transition-all duration-300 cursor-pointer group ${
                          selectedLocation === location.index
                            ? 'bg-primary-500/20 border-primary-500'
                            : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-primary-500/50'
                        }`}
                      >
                        <motion.span 
                          animate={{ 
                            scale: selectedLocation === location.index ? [1, 1.2, 1] : 1 
                          }}
                          transition={{ 
                            duration: 0.5,
                            repeat: selectedLocation === location.index ? Infinity : 0
                          }}
                          className="text-3xl mb-2 block"
                        >
                          {location.icon}
                        </motion.span>
                        <p className={`font-semibold text-xs md:text-sm ${
                          selectedLocation === location.index ? 'text-primary-400' : 'text-white'
                        }`}>
                          {location.name}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sağ Taraf - Dinamik Fotoğraf Gösterimi */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 h-full sticky top-24">
                  <div className="relative h-full min-h-[400px] md:min-h-[600px] rounded-xl overflow-hidden">
                    {/* Fotoğraf Container */}
                    <motion.div
                      key={selectedLocation}
                      initial={{ opacity: 0, scale: 1.1, rotateY: 10 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={[
                          'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763486159/istanbul-4724521_1920_labqmv.jpg',
                          'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487049/457657-1442395698_bbagzk.jpg',
                          'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487085/topkapi-palace-museum-7353338_1920_eizyuc.jpg',
                          'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487121/tram-3420867_1920_mqqyos.jpg',
                          'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487158/view-1782891_1920_d3h5qm.jpg',
                          'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487285/pexels-yetkin-agac-664866326-34670791_urkipn.jpg',
                          'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487214/istanbul-2367193_1920_lpebkd.jpg',
                          'https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763487251/kadikoy-353989_1920_wsj42g.jpg'
                        ][selectedLocation]}
                        alt="Seçili Lokasyon"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
                      
                      {/* Lokasyon Bilgisi */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-6 left-6 right-6"
                      >
                        <div className="bg-black/60 backdrop-blur-md border border-primary-500/30 rounded-xl p-4 md:p-6">
                          <h4 className="text-white font-bold text-xl md:text-2xl mb-2 flex items-center space-x-2">
                            <span>
                              {['✈️', '✈️', '🕌', '🎭', '🗼', '🏰', '🌉', '🌊'][selectedLocation]}
                            </span>
                            <span>
                              {[
                                'İstanbul Havalimanı',
                                'Sabiha Gökçen',
                                'Sultanahmet',
                                'Taksim',
                                'Galata',
                                'Beşiktaş',
                                'Ortaköy',
                                'Kadıköy'
                              ][selectedLocation]}
                            </span>
                          </h4>
                          <p className="text-gray-300 text-sm">
  {t('service_areas_info')}
</p>
                          
                          {/* Pulsing Indicator */}
                          <div className="flex items-center space-x-2 mt-3">
                            <div className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </div>
                            <span className="text-green-400 text-xs font-semibold">{t('service_areas_active')}</span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Dekoratif Köşe Çizgileri */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary-500"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-500"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary-500"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-500"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

                <AnimatedDivider language={language} />
<section id="testimonials" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden relative">
  <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
  
  <div className="container mx-auto px-3 md:px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16"
    >
      <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-4">
  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
  <span className="text-sm font-bold text-gray-700">{t('testimonials_badge')}</span>
  <span className="text-xs text-gray-500">{t('testimonials_reviews')}</span>
</div>
      
     <h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-black text-gray-900 mb-3">
  {t('testimonials_title')}
</h3>
      <p className="text-gray-600 font-montserrat text-base md:text-lg max-w-2xl mx-auto">
  {t('testimonials_subtitle')}
</p>
    </motion.div>
    
    <div className="relative max-w-full mx-auto overflow-hidden">
      <motion.div 
        className="flex gap-4"
        animate={{
          x: [0, `-${testimonials.length * 420}px`]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* İlk set */}
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={`first-${idx}`}
            className="min-w-[350px] md:min-w-[400px] flex-shrink-0"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="bg-white p-5 md:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 h-full border border-gray-200 relative overflow-hidden">
              {/* Üst Dekoratif Çizgi */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent to-primary-500"></div>
              
              {/* Platform Badge */}
              <div className="absolute top-4 right-4 bg-blue-100 px-2 py-1 rounded-full flex items-center space-x-1">
                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
                </svg>
                <span className="text-[10px] font-bold text-blue-600">Google</span>
              </div>

              <div className="flex items-start mb-4 mt-3">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-black text-xl md:text-2xl mr-3 md:mr-4 shadow-lg flex-shrink-0 border-2 border-white ${
                  idx % 5 === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                  idx % 5 === 1 ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                  idx % 5 === 2 ? 'bg-gradient-to-br from-purple-500 to-violet-600' :
                  idx % 5 === 3 ? 'bg-gradient-to-br from-pink-500 to-rose-600' :
                  'bg-gradient-to-br from-orange-500 to-red-600'
                }`}>
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-montserrat font-bold text-gray-900 text-base md:text-lg">{testimonial.name}</h4>
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">• {t('testimonials_weeks_ago')}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 font-inter leading-relaxed text-sm md:text-base">
                {testimonial.comment}
              </p>

              {/* Yararlı Butonları */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-primary-500 transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                    </svg>
                    <span>{t('testimonials_helpful')}</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* İkinci set - Seamless loop için */}
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={`second-${idx}`}
            className="min-w-[350px] md:min-w-[400px] flex-shrink-0"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="bg-white p-5 md:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 h-full border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent to-primary-500"></div>
              
              <div className="absolute top-4 right-4 bg-blue-100 px-2 py-1 rounded-full flex items-center space-x-1">
                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
                </svg>
                <span className="text-[10px] font-bold text-blue-600">Google</span>
              </div>

              <div className="flex items-start mb-4 mt-3">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-black text-xl md:text-2xl mr-3 md:mr-4 shadow-lg flex-shrink-0 border-2 border-white ${
                  idx % 5 === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                  idx % 5 === 1 ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                  idx % 5 === 2 ? 'bg-gradient-to-br from-purple-500 to-violet-600' :
                  idx % 5 === 3 ? 'bg-gradient-to-br from-pink-500 to-rose-600' :
                  'bg-gradient-to-br from-orange-500 to-red-600'
                }`}>
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-montserrat font-bold text-gray-900 text-base md:text-lg">{testimonial.name}</h4>
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">• 2 hafta önce</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 font-inter leading-relaxed text-sm md:text-base">
                {testimonial.comment}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-primary-500 transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                    </svg>
                    <span>Yararlı</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    
    <div className="text-center mt-6 md:mt-8">
      <motion.p 
        className="text-gray-600 text-xs md:text-sm flex items-center justify-center space-x-2 font-montserrat font-semibold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >                                                                                                                                                                                                                                                                                                                                                                                                                                            
      </motion.p>
    </div>
  </div>
</section>

<Footer language={language} />

        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 px-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full mb-4 md:mb-6"
                >
                  <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                  Rezervasyon Talebiniz Alındı! ✨
                </h3>

                <div className="bg-gray-50 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-left space-y-1.5 md:space-y-2 text-sm md:text-base">
                  <p className="text-gray-600"><span className="font-semibold">Nereden:</span> {pickupLocation}</p>
                  <p className="text-gray-600"><span className="font-semibold">Nereye:</span> {dropoffLocation}</p>
                  <p className="text-gray-600"><span className="font-semibold">Tarih:</span> {departureDate}</p>
                  <p className="text-gray-600"><span className="font-semibold">Saat:</span> {departureTime}</p>
                  <p className="text-gray-600"><span className="font-semibold">Yolcu:</span> {passengers} Kişi</p>
                  <div className="border-t pt-2 mt-2">
                    <p className="text-base md:text-lg font-bold text-primary-500">Tahmini Fiyat: {calculatedPrice}₺</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  En kısa sürede sizinle iletişime geçeceğiz. Hızlı onay için WhatsApp'tan bize ulaşabilirsiniz!
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={`https://wa.me/905016206952?text=Merhaba, rezervasyon yapmak istiyorum.%0ANereden: ${encodeURIComponent(pickupLocation)}%0ANereye: ${encodeURIComponent(dropoffLocation)}%0ATarih: ${departureDate}%0ASaat: ${departureTime}%0AYolcu: ${passengers}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-green-500 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-bold hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
                  >
                    <span>WhatsApp</span>
                  </motion.a>
                  
                  <motion.button
                    onClick={() => setShowModal(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-200 text-gray-700 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-bold hover:bg-gray-300 transition duration-300 text-sm md:text-base"
                  >
                    Kapat
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 bg-primary-500 text-white p-2.5 md:p-3 rounded-full shadow-2xl hover:bg-primary-600 transition duration-300"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}

        <motion.a
          href="https://wa.me/905016206952?text=Merhaba,%20transfer%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-green-600 transition duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg 
            className="w-6 h-6 md:w-8 md:h-8" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.8250 00-2.503 6.987c-.002 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>
      </div>
      <CookieBanner language={language} />
    </div>
  );
}