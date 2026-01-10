'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Car, MapPin, Clock, Users, Calendar, ArrowRight, Shield, CheckCircle, Phone, Mail, User, MessageSquare, Plane, ArrowLeft, CreditCard, Briefcase, Star, Award, Zap, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../../components/Footer';
import { useCurrency } from '../../contexts/CurrencyContext';


export default function ReservationDetail() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // URL Parametreleri
const pickup = searchParams.get('pickup') || '';
  const dropoff = searchParams.get('dropoff') || '';
  const date = searchParams.get('date') || '';
  const time = searchParams.get('time') || '';
  const passengers = searchParams.get('passengers') || '1';
  const vehicle = searchParams.get('vehicle') || 'Standart Vito';
const price = searchParams.get('price') || '0'; // Fiyat zaten currency ile birlikte geliyor (örn: "60.00€")
  const isRoundTrip = searchParams.get('roundTrip') === 'true';
  const returnDate = searchParams.get('returnDate') || '';
  const returnTime = searchParams.get('returnTime') || '';

  // State'ler
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [passengerInfo, setPassengerInfo] = useState<Array<{name: string, passport: string}>>(
    Array(Math.max(0, Number(passengers) - 1)).fill({ name: '', passport: '' })
  );
  const [flightNumber, setFlightNumber] = useState('');
  const [driverTip, setDriverTip] = useState(0);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Dil Sistemi
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
      premium_res: 'Premium Rezervasyon',
      steps: ['Araç & Hizmetler', 'Yolcu & Ödeme', 'Rezervasyon'],
      steps_status: ['Tamamlandı', 'Şu an buradasınız', 'Bekliyor'],
      
      // Form
      owner_title: 'Rezervasyon Sahibi Yolcu Bilgileri',
      owner_desc: 'Lütfen bilgilerinizi eksiksiz doldurun',
      lbl_name: 'ADINIZ *',
      lbl_surname: 'SOYADINIZ *',
      lbl_phone: 'TELEFON NUMARASI *',
      lbl_email: 'E-POSTA ADRESİNİZ *',
      lbl_notes: 'ÖZEL NOTLARINIZ (Opsiyonel)',
      note_hint: 'Özel taleplerinizi buraya yazabilirsiniz, ekibimiz en kısa sürede size dönüş yapacaktır.',
      ph_name: 'Adınızı giriniz',
      ph_surname: 'Soyadınızı giriniz',
      ph_notes: 'Bebek koltuğu, ekstra bagaj, özel istekleriniz...',

      // Diğer Yolcular
      other_passengers: 'Diğer Yolcu Bilgileri',
      other_warning: 'Toplam {0} yolcu için diğer {1} yolcunun bilgilerini girmeniz gerekmektedir.',
      lbl_passenger_name: 'AD SOYAD *',
      lbl_passport: 'PASAPORT NUMARASI *',
      ph_passenger_name: '{0}. Yolcu Ad Soyad',

      // Uçuş
      flight_title: 'Uçuş Detayları',
      flight_subtitle: 'Uçuş bilgilerinizi girin',
      flight_info: 'Sürücünün varış saatinize göre alım saatini ayarlayabilmesi için uçuş bilginizi girmeniz gerekmektedir.',
      lbl_flight_no: 'UÇUŞ NUMARASI',
      ph_flight_no: 'Örneğin: TK 1923',
      flight_hint: 'Uçuş numaranızı havayolu kodu ile birlikte giriniz (Örn: TK 1923, PC 2854)',

      // Bahşiş
      tip_title: 'Sürücü Bahşiş',
      tip_remove: 'Kaldır',
      tip_desc: 'Size hizmet edecek profesyonel şoförümüz için bahşiş miktarını şimdi seçmek ister misiniz?',
      popular: 'POPÜLER',

      // Terms
      terms_text: 'Kullanım Koşullarını ve Gizlilik Politikasını okudum, kabul ediyorum. Rezervasyonumda yer alan yolcuların isim ve soyisim bilgilerinin eksiksiz ve doğru olduğunu onaylıyorum.',
      
      // Button
      btn_submit: 'REZERVASYONU TAMAMLA',
      
      // Warning
      warn_title: 'Önemli Uyarı:',
      warn_text: 'Türkiye\'deki yasal düzenlemeler doğrultusunda, rezervasyonda yer alan yolcuların isim ve soyisim bilgilerinin eksiksiz ve doğru bir şekilde paylaşılması gerekmektedir.',

      // Sidebar
      res_active: 'AKTİF',
      res_summary: 'Özet bilgileriniz',
      lbl_from: 'NEREDEN',
      lbl_to: 'NEREYE',
      lbl_dept: 'Gidiş Tarihi',
      lbl_ret: 'Dönüş Tarihi',
      lbl_dist: 'Mesafe',
      lbl_dur: 'Süre',
      lbl_pass: 'Yolcu',
      lbl_lug: 'Valiz',
      lbl_vehicle: 'Araç',
      lbl_type: 'Gidiş-Dönüş',
      yes: 'EVET',
      no: 'HAYIR',
      pay_details: 'Ödeme Detayları',
      early_disc: 'Erken Rezervasyon',
      bridge_fee: 'Köprü Geçiş Ücreti',
      driver_tip: 'Şoför Bahşiş',
      total: 'GENEL TOPLAM',
      secure_pay: '%100 Güvenli Ödeme',
      secure_desc: 'Tüm ödemeleriniz SSL ile şifrelenir. Bilgileriniz güvende!',
      
      alert_terms: 'Lütfen kullanım koşullarını kabul edin.',
      alert_passenger: 'Lütfen tüm yolcu bilgilerini doldurun!',
      
      whatsapp_template: `🌟 *YENİ REZERVASYON TALEBİ* 🌟\n\n━━━━━━━━━━━━━━━━━━━━\n📍 *GÜZERGAH BİLGİLERİ*\n━━━━━━━━━━━━━━━━━━━━\n🟢 Nereden: {pickup}\n🔴 Nereye: {dropoff}\n{flight}\n📏 Mesafe: {distance} KM\n⏱️ Süre: ~{duration} Dakika\n\n━━━━━━━━━━━━━━━━━━━━\n📅 *TARİH & SAAT*\n━━━━━━━━━━━━━━━━━━━━\n➡️ Gidiş: {date} - {time}\n{returnInfo}\n\n━━━━━━━━━━━━━━━━━━━━\n🚙 *ARAÇ & YOLCU BİLGİSİ*\n━━━━━━━━━━━━━━━━━━━━\n🚗 Araç: {vehicle}\n👥 Yolcu Sayısı: {passengers} Kişi\n🔄 Gidiş-Dönüş: {roundTrip}\n\n━━━━━━━━━━━━━━━━━━━━\n👤 *YOLCU BİLGİLERİ*\n━━━━━━━━━━━━━━━━━━━━\n👤 1. Yolcu: {name} {surname}\n{otherPassengers}\n📞 Telefon: {phone}\n📧 E-posta: {email}\n{notes}\n\n━━━━━━━━━━━━━━━━━━━━\n💰 *ÖDEME DETAYLARI*\n━━━━━━━━━━━━━━━━━━━━\n🚗 Transfer Ücreti: {price}₺\n🎁 Erken Rezervasyon: -{discount}₺\n{bridge}\n{tip}━━━━━━━━━━━━━━━━━━━━\n💵 *GENEL TOPLAM: {total}₺*\n━━━━━━━━━━━━━━━━━━━━\n\n✨ Rezervasyonunuz için teşekkür ederiz!`
    },
    en: {
      back: 'Go Back',
      premium_res: 'Premium Reservation',
      steps: ['Vehicle & Services', 'Passenger & Payment', 'Reservation'],
      steps_status: ['Completed', 'You are here', 'Pending'],
      
      owner_title: 'Reservation Owner Passenger Info',
      owner_desc: 'Please fill in your information completely',
      lbl_name: 'YOUR NAME *',
      lbl_surname: 'YOUR SURNAME *',
      lbl_phone: 'PHONE NUMBER *',
      lbl_email: 'E-MAIL ADDRESS *',
      lbl_notes: 'SPECIAL NOTES (Optional)',
      note_hint: 'You can write your special requests here, our team will get back to you as soon as possible.',
      ph_name: 'Enter your name',
      ph_surname: 'Enter your surname',
      ph_notes: 'Baby seat, extra luggage, special requests...',

      other_passengers: 'Other Passenger Info',
      other_warning: 'You need to enter information for other {1} passengers for a total of {0} passengers.',
      lbl_passenger_name: 'NAME SURNAME *',
      lbl_passport: 'PASSPORT NUMBER *',
      ph_passenger_name: '{0}. Passenger Name Surname',

      flight_title: 'Flight Details',
      flight_subtitle: 'Enter your flight information',
      flight_info: 'You need to enter your flight information so that the driver can adjust the pick-up time according to your arrival time.',
      lbl_flight_no: 'FLIGHT NUMBER',
      ph_flight_no: 'Example: TK 1923',
      flight_hint: 'Enter your flight number with airline code (Ex: TK 1923)',

      tip_title: 'Driver Tip',
      tip_remove: 'Remove',
      tip_desc: 'Would you like to select a tip amount for our professional driver now?',
      popular: 'POPULAR',

      terms_text: 'I have read and accept the Terms of Use and Privacy Policy. I confirm that the names and surnames of the passengers in my reservation are complete and correct.',
      
      btn_submit: 'COMPLETE RESERVATION',
      
      warn_title: 'Important Notice:',
      warn_text: 'In accordance with legal regulations in Turkey, the name and surname information of the passengers in the reservation must be shared completely and correctly.',

      res_active: 'ACTIVE',
      res_summary: 'Your summary',
      lbl_from: 'FROM',
      lbl_to: 'TO',
      lbl_dept: 'Departure Date',
      lbl_ret: 'Return Date',
      lbl_dist: 'Distance',
      lbl_dur: 'Duration',
      lbl_pass: 'Passenger',
      lbl_lug: 'Luggage',
      lbl_vehicle: 'Vehicle',
      lbl_type: 'Round Trip',
      yes: 'YES',
      no: 'NO',
      pay_details: 'Payment Details',
      early_disc: 'Early Booking',
      bridge_fee: 'Bridge Toll Fee',
      driver_tip: 'Driver Tip',
      total: 'GRAND TOTAL',
      secure_pay: '%100 Secure Payment',
      secure_desc: 'All your payments are encrypted with SSL. Your information is safe!',

      alert_terms: 'Please accept the terms of use.',
      alert_passenger: 'Please fill in all passenger information!',

      whatsapp_template: `🌟 *NEW RESERVATION REQUEST* 🌟\n\n━━━━━━━━━━━━━━━━━━━━\n📍 *ROUTE INFO*\n━━━━━━━━━━━━━━━━━━━━\n🟢 From: {pickup}\n🔴 To: {dropoff}\n{flight}\n📏 Distance: {distance} KM\n⏱️ Duration: ~{duration} Min\n\n━━━━━━━━━━━━━━━━━━━━\n📅 *DATE & TIME*\n━━━━━━━━━━━━━━━━━━━━\n➡️ Dep: {date} - {time}\n{returnInfo}\n\n━━━━━━━━━━━━━━━━━━━━\n🚙 *VEHICLE & PASSENGER*\n━━━━━━━━━━━━━━━━━━━━\n🚗 Vehicle: {vehicle}\n👥 Passengers: {passengers}\n🔄 Round Trip: {roundTrip}\n\n━━━━━━━━━━━━━━━━━━━━\n👤 *PASSENGER INFO*\n━━━━━━━━━━━━━━━━━━━━\n👤 1. Passenger: {name} {surname}\n{otherPassengers}\n📞 Phone: {phone}\n📧 Email: {email}\n{notes}\n\n━━━━━━━━━━━━━━━━━━━━\n💰 *PAYMENT DETAILS*\n━━━━━━━━━━━━━━━━━━━━\n🚗 Transfer Fee: {price}₺\n🎁 Early Booking: -{discount}₺\n{bridge}\n{tip}━━━━━━━━━━━━━━━━━━━━\n💵 *TOTAL: {total}₺*\n━━━━━━━━━━━━━━━━━━━━\n\n✨ Thank you for your reservation!`
    },
    de: {
        back: 'Zurück',
        premium_res: 'Premium-Reservierung',
        steps: ['Fahrzeug & Services', 'Passagier & Zahlung', 'Reservierung'],
        steps_status: ['Abgeschlossen', 'Sie sind hier', 'Ausstehend'],
        owner_title: 'Passagierdaten des Reservierungsinhabers',
        owner_desc: 'Bitte füllen Sie Ihre Informationen vollständig aus',
        lbl_name: 'IHR NAME *',
        lbl_surname: 'IHR NACHNAME *',
        lbl_phone: 'TELEFONNUMMER *',
        lbl_email: 'E-MAIL-ADRESSE *',
        lbl_notes: 'SPEZIELLE NOTIZEN (Optional)',
        note_hint: 'Sie können hier Ihre speziellen Wünsche eintragen.',
        ph_name: 'Geben Sie Ihren Namen ein',
        ph_surname: 'Geben Sie Ihren Nachnamen ein',
        ph_notes: 'Kindersitz, extra Gepäck...',
        other_passengers: 'Andere Passagierdaten',
        other_warning: 'Bitte geben Sie die Daten für die anderen {1} Passagiere ein.',
        lbl_passenger_name: 'VORNAME NACHNAME *',
        lbl_passport: 'REISEPASSNUMMER *',
        ph_passenger_name: '{0}. Passagier Vorname Nachname',
        flight_title: 'Flugdetails',
        flight_subtitle: 'Geben Sie Ihre Fluginformationen ein',
        flight_info: 'Bitte geben Sie Ihre Flugdaten ein, damit der Fahrer die Abholzeit anpassen kann.',
        lbl_flight_no: 'FLUGNUMMER',
        ph_flight_no: 'Beispiel: TK 1923',
        flight_hint: 'Geben Sie Ihre Flugnummer mit Airline-Code ein',
        tip_title: 'Fahrertrinkgeld',
        tip_remove: 'Entfernen',
        tip_desc: 'Möchten Sie jetzt ein Trinkgeld für unseren Fahrer auswählen?',
        popular: 'BELIEBT',
        terms_text: 'Ich habe die Nutzungsbedingungen und Datenschutzrichtlinien gelesen und akzeptiere sie.',
        btn_submit: 'RESERVIERUNG ABSCHLIESSEN',
        warn_title: 'Wichtiger Hinweis:',
        warn_text: 'Gemäß den gesetzlichen Bestimmungen in der Türkei müssen die Namen der Passagiere vollständig angegeben werden.',
        res_active: 'AKTIV',
        res_summary: 'Ihre Zusammenfassung',
        lbl_from: 'VON',
        lbl_to: 'NACH',
        lbl_dept: 'Abfahrtsdatum',
        lbl_ret: 'Rückkehrdatum',
        lbl_dist: 'Entfernung',
        lbl_dur: 'Dauer',
        lbl_pass: 'Passagier',
        lbl_lug: 'Gepäck',
        lbl_vehicle: 'Fahrzeug',
        lbl_type: 'Hin- und Rückfahrt',
        yes: 'JA',
        no: 'NEIN',
        pay_details: 'Zahlungsdetails',
        early_disc: 'Frühbucher',
        bridge_fee: 'Brückengebühr',
        driver_tip: 'Fahrertrinkgeld',
        total: 'GESAMTSUMME',
        secure_pay: '%100 Sichere Zahlung',
        secure_desc: 'Alle Zahlungen sind SSL-verschlüsselt.',
        alert_terms: 'Bitte akzeptieren Sie die Nutzungsbedingungen.',
        alert_passenger: 'Bitte füllen Sie alle Passagierdaten aus!',
        whatsapp_template: `🌟 *NEUE RESERVIERUNGSANFRAGE* 🌟\n\n━━━━━━━━━━━━━━━━━━━━\n📍 *ROUTENINFO*\n━━━━━━━━━━━━━━━━━━━━\n🟢 Von: {pickup}\n🔴 Nach: {dropoff}\n{flight}\n📏 Entfernung: {distance} KM\n⏱️ Dauer: ~{duration} Min\n\n━━━━━━━━━━━━━━━━━━━━\n📅 *DATUM & ZEIT*\n━━━━━━━━━━━━━━━━━━━━\n➡️ Abfahrt: {date} - {time}\n{returnInfo}\n\n━━━━━━━━━━━━━━━━━━━━\n🚙 *FAHRZEUG & PASSAGIER*\n━━━━━━━━━━━━━━━━━━━━\n🚗 Fahrzeug: {vehicle}\n👥 Passagiere: {passengers}\n🔄 Hin-Zurück: {roundTrip}\n\n━━━━━━━━━━━━━━━━━━━━\n👤 *PASSAGIERINFO*\n━━━━━━━━━━━━━━━━━━━━\n👤 1. Passagier: {name} {surname}\n{otherPassengers}\n📞 Telefon: {phone}\n📧 E-Mail: {email}\n{notes}\n\n━━━━━━━━━━━━━━━━━━━━\n💰 *ZAHLUNGSDETAILS*\n━━━━━━━━━━━━━━━━━━━━\n🚗 Transfergebühr: {price}₺\n🎁 Frühbucher: -{discount}₺\n{bridge}\n{tip}━━━━━━━━━━━━━━━━━━━━\n💵 *GESAMT: {total}₺*\n━━━━━━━━━━━━━━━━━━━━\n\n✨ Vielen Dank für Ihre Reservierung!`
    },
    ru: {
        back: 'Назад',
        premium_res: 'Премиум Бронирование',
        steps: ['Авто и Услуги', 'Пассажир и Оплата', 'Бронирование'],
        steps_status: ['Завершено', 'Вы здесь', 'Ожидание'],
        owner_title: 'Данные основного пассажира',
        owner_desc: 'Пожалуйста, заполните информацию полностью',
        lbl_name: 'ВАШЕ ИМЯ *',
        lbl_surname: 'ВАША ФАМИЛИЯ *',
        lbl_phone: 'НОМЕР ТЕЛЕФОНА *',
        lbl_email: 'E-MAIL *',
        lbl_notes: 'ОСОБЫЕ ПРИМЕЧАНИЯ (Необязательно)',
        note_hint: 'Здесь можно указать особые пожелания.',
        ph_name: 'Введите имя',
        ph_surname: 'Введите фамилию',
        ph_notes: 'Детское кресло, доп. багаж...',
        other_passengers: 'Данные других пассажиров',
        other_warning: 'Необходимо ввести данные для других {1} пассажиров.',
        lbl_passenger_name: 'ИМЯ ФАМИЛИЯ *',
        lbl_passport: 'НОМЕР ПАСПОРТА *',
        ph_passenger_name: '{0}. Пассажир Имя Фамилия',
        flight_title: 'Детали рейса',
        flight_subtitle: 'Введите информацию о рейсе',
        flight_info: 'Укажите данные рейса для корректировки времени встречи.',
        lbl_flight_no: 'НОМЕР РЕЙСА',
        ph_flight_no: 'Пример: TK 1923',
        flight_hint: 'Введите номер рейса с кодом авиакомпании',
        tip_title: 'Чаевые водителю',
        tip_remove: 'Удалить',
        tip_desc: 'Хотите выбрать сумму чаевых для водителя?',
        popular: 'ПОПУЛЯРНОЕ',
        terms_text: 'Я прочитал и принимаю Условия использования и Политику конфиденциальности.',
        btn_submit: 'ЗАВЕРШИТЬ БРОНИРОВАНИЕ',
        warn_title: 'Важное уведомление:',
        warn_text: 'В соответствии с законодательством Турции необходимо предоставить полные имена пассажиров.',
        res_active: 'АКТИВНО',
        res_summary: 'Ваша сводка',
        lbl_from: 'ОТКУДА',
        lbl_to: 'КУДА',
        lbl_dept: 'Дата отправления',
        lbl_ret: 'Дата возврата',
        lbl_dist: 'Расстояние',
        lbl_dur: 'Время',
        lbl_pass: 'Пассажир',
        lbl_lug: 'Багаж',
        lbl_vehicle: 'Авто',
        lbl_type: 'Туда-Обратно',
        yes: 'ДА',
        no: 'НЕТ',
        pay_details: 'Детали оплаты',
        early_disc: 'Раннее бронирование',
        bridge_fee: 'Плата за мост',
        driver_tip: 'Чаевые',
        total: 'ИТОГО',
        secure_pay: '%100 Безопасная оплата',
        secure_desc: 'Все платежи зашифрованы SSL.',
        alert_terms: 'Пожалуйста, примите условия использования.',
        alert_passenger: 'Пожалуйста, заполните данные всех пассажиров!',
        whatsapp_template: `🌟 *НОВЫЙ ЗАПРОС НА БРОНИРОВАНИЕ* 🌟\n\n━━━━━━━━━━━━━━━━━━━━\n📍 *МАРШРУТ*\n━━━━━━━━━━━━━━━━━━━━\n🟢 Откуда: {pickup}\n🔴 Куда: {dropoff}\n{flight}\n📏 Расстояние: {distance} КМ\n⏱️ Время: ~{duration} Мин\n\n━━━━━━━━━━━━━━━━━━━━\n📅 *ДАТА И ВРЕМЯ*\n━━━━━━━━━━━━━━━━━━━━\n➡️ Отправление: {date} - {time}\n{returnInfo}\n\n━━━━━━━━━━━━━━━━━━━━\n🚙 *АВТО И ПАССАЖИРЫ*\n━━━━━━━━━━━━━━━━━━━━\n🚗 Авто: {vehicle}\n👥 Пассажиры: {passengers}\n🔄 Туда-Обратно: {roundTrip}\n\n━━━━━━━━━━━━━━━━━━━━\n👤 *ПАССАЖИРЫ*\n━━━━━━━━━━━━━━━━━━━━\n👤 1. Пассажир: {name} {surname}\n{otherPassengers}\n📞 Телефон: {phone}\n📧 Email: {email}\n{notes}\n\n━━━━━━━━━━━━━━━━━━━━\n💰 *ОПЛАТА*\n━━━━━━━━━━━━━━━━━━━━\n🚗 Трансфер: {price}₺\n🎁 Скидка: -{discount}₺\n{bridge}\n{tip}━━━━━━━━━━━━━━━━━━━━\n💵 *ИТОГО: {total}₺*\n━━━━━━━━━━━━━━━━━━━━\n\n✨ Спасибо за бронирование!`
    },
    ar: {
        back: 'رجوع',
        premium_res: 'حجز مميز',
        steps: ['المركبة والخدمات', 'الركاب والدفع', 'الحجز'],
        steps_status: ['مكتمل', 'أنت هنا', 'قيد الانتظار'],
        owner_title: 'معلومات الراكب صاحب الحجز',
        owner_desc: 'يرجى ملء المعلومات بالكامل',
        lbl_name: 'الاسم *',
        lbl_surname: 'اللقب *',
        lbl_phone: 'رقم الهاتف *',
        lbl_email: 'البريد الإلكتروني *',
        lbl_notes: 'ملاحظات خاصة (اختياري)',
        note_hint: 'يمكنك كتابة طلباتك الخاصة هنا.',
        ph_name: 'أدخل اسمك',
        ph_surname: 'أدخل لقبك',
        ph_notes: 'مقعد طفل، أمتعة إضافية...',
        other_passengers: 'معلومات الركاب الآخرين',
        other_warning: 'يجب إدخال معلومات لـ {1} ركاب آخرين.',
        lbl_passenger_name: 'الاسم واللقب *',
        lbl_passport: 'رقم جواز السفر *',
        ph_passenger_name: 'الراكب {0} الاسم واللقب',
        flight_title: 'تفاصيل الرحلة',
        flight_subtitle: 'أدخل معلومات رحلتك',
        flight_info: 'يرجى إدخال معلومات الرحلة لضبط وقت الاستقبال.',
        lbl_flight_no: 'رقم الرحلة',
        ph_flight_no: 'مثال: TK 1923',
        flight_hint: 'أدخل رقم الرحلة مع رمز الطيران',
        tip_title: 'إكرامية السائق',
        tip_remove: 'إزالة',
        tip_desc: 'هل ترغب في اختيار مبلغ إكرامية للسائق الآن؟',
        popular: 'شائع',
        terms_text: 'لقد قرأت وأوافق على شروط الاستخدام وسياسة الخصوصية.',
        btn_submit: 'إتمام الحجز',
        warn_title: 'تنبيه هام:',
        warn_text: 'وفقًا للوائح القانونية في تركيا، يجب تقديم أسماء الركاب بالكامل.',
        res_active: 'نشط',
        res_summary: 'ملخص الحجز',
        lbl_from: 'من',
        lbl_to: 'إلى',
        lbl_dept: 'تاريخ المغادرة',
        lbl_ret: 'تاريخ العودة',
        lbl_dist: 'المسافة',
        lbl_dur: 'المدة',
        lbl_pass: 'الركاب',
        lbl_lug: 'الأمتعة',
        lbl_vehicle: 'المركبة',
        lbl_type: 'ذهاب وعودة',
        yes: 'نعم',
        no: 'لا',
        pay_details: 'تفاصيل الدفع',
        early_disc: 'حجز مبكر',
        bridge_fee: 'رسوم الجسر',
        driver_tip: 'إكرامية السائق',
        total: 'المجموع الكلي',
        secure_pay: '%100 دفع آمن',
        secure_desc: 'جميع المدفوعات مشفرة بـ SSL.',
        alert_terms: 'يرجى الموافقة على شروط الاستخدام.',
        alert_passenger: 'يرجى ملء جميع معلومات الركاب!',
        whatsapp_template: `🌟 *طلب حجز جديد* 🌟\n\n━━━━━━━━━━━━━━━━━━━━\n📍 *معلومات المسار*\n━━━━━━━━━━━━━━━━━━━━\n🟢 من: {pickup}\n🔴 إلى: {dropoff}\n{flight}\n📏 المسافة: {distance} كم\n⏱️ المدة: ~{duration} دقيقة\n\n━━━━━━━━━━━━━━━━━━━━\n📅 *التاريخ والوقت*\n━━━━━━━━━━━━━━━━━━━━\n➡️ المغادرة: {date} - {time}\n{returnInfo}\n\n━━━━━━━━━━━━━━━━━━━━\n🚙 *المركبة والركاب*\n━━━━━━━━━━━━━━━━━━━━\n🚗 المركبة: {vehicle}\n👥 الركاب: {passengers}\n🔄 ذهاب وعودة: {roundTrip}\n\n━━━━━━━━━━━━━━━━━━━━\n👤 *معلومات الركاب*\n━━━━━━━━━━━━━━━━━━━━\n👤 الراكب 1: {name} {surname}\n{otherPassengers}\n📞 الهاتف: {phone}\n📧 البريد: {email}\n{notes}\n\n━━━━━━━━━━━━━━━━━━━━\n💰 *تفاصيل الدفع*\n━━━━━━━━━━━━━━━━━━━━\n🚗 رسوم النقل: {price}₺\n🎁 خصم: -{discount}₺\n{bridge}\n{tip}━━━━━━━━━━━━━━━━━━━━\n💵 *المجموع: {total}₺*\n━━━━━━━━━━━━━━━━━━━━\n\n✨ شكراً لحجزك!`
    }
  };

  // Type-safe çeviri fonksiyonu
  const t = (key: keyof typeof translations.tr): any => {
    // @ts-ignore
    return translations[language]?.[key] || translations['tr'][key];
  };

  const isRtl = language === 'ar';

  // Hesaplamalar
  const [distance] = useState(() => Math.floor(Math.random() * (80 - 30) + 30));
  const duration = Math.floor(distance * 1.2);
// EUR bazlı hesaplamalar
// Currency Context'ten seçili para birimini al
const { currency } = useCurrency();
const isTurkishLira = currency === 'TRY';

// Fiyat parse
// TL için binlik ayracı noktayı kaldır, virgülü noktaya çevir
const currencySymbol = price.match(/[₺€$]/)?.[0] || '€';

// Parse işlemi - TL için özel
let numericPrice = 0;
if (currencySymbol === '₺') {
  // TL: "4.088₺" veya "4.088,50₺" formatında
  numericPrice = parseFloat(
    price
      .replace(/[₺]/g, '')       // Sembolü kaldır
      .replace(/\./g, '')         // Binlik ayracı noktayı kaldır
      .replace(',', '.')          // Virgülü noktaya çevir
      .trim()
  ) || 0;
} else {
  // EUR/USD: "65.40€" formatında
  numericPrice = parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
}

const bridgeFee = 0;
const earlyDiscount = numericPrice * 0.1;
const discountedPrice = numericPrice - earlyDiscount;

// TL için bahşiş x10
const displayTip = isTurkishLira ? driverTip * 10 : driverTip;

// Toplam
const total = discountedPrice + displayTip;

  useEffect(() => {
    const passengerCount = Number(passengers);
    if (passengerCount > 1) {
      setPassengerInfo(Array(passengerCount - 1).fill({ name: '', passport: '' }));
    } else {
      setPassengerInfo([]);
    }
  }, [passengers]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      alert(t('alert_terms'));
      return;
    }

    if (passengerInfo.length > 0) {
      const emptyFields = passengerInfo.filter(p => !p.name.trim() || !p.passport.trim());
      if (emptyFields.length > 0) {
        alert(t('alert_passenger'));
        return;
      }
    }

    // Dinamik WhatsApp Mesajı Oluşturma
    let template = t('whatsapp_template');
    
    // Değişkenleri yerleştirme
    template = template.replace('{pickup}', pickup)
                   .replace('{dropoff}', dropoff)
                   .replace('{distance}', distance.toString())
                   .replace('{duration}', duration.toString())
                   .replace('{date}', formatDate(date))
                   .replace('{time}', time)
                   .replace('{vehicle}', vehicle)
                   .replace('{passengers}', passengers)
                   .replace('{roundTrip}', isRoundTrip ? t('yes') : t('no'))
                   .replace('{name}', name)
                   .replace('{surname}', surname)
                   .replace('{phone}', phone)
                   .replace('{email}', email)
                   .replace('{price}', price)
                  .replace('{discount}', `${isTurkishLira ? Math.round(earlyDiscount).toLocaleString('tr-TR') : earlyDiscount.toFixed(2)}${currencySymbol}`)
                  .replace('{total}', `${isTurkishLira ? Math.round(total).toLocaleString('tr-TR') : total.toFixed(2)}${currencySymbol}`);


    // Opsiyonel Alanlar
    const flightText = flightNumber ? `✈️ ${t('lbl_flight_no')}: ${flightNumber}` : '';
    template = template.replace('{flight}', flightText);

    const returnInfo = isRoundTrip ? `⬅️ ${t('lbl_ret')}: ${formatDate(returnDate)} - ${returnTime}` : '';
    template = template.replace('{returnInfo}', returnInfo);

    const otherPassText = passengerInfo.length > 0 
      ? passengerInfo.map((p, idx) => `👥 ${idx + 2}. ${t('lbl_pass')}: ${p.name} | Passport: ${p.passport}`).join('\n')
      : '';
    template = template.replace('{otherPassengers}', otherPassText);

    const notesText = notes ? `\n💬 *${t('lbl_notes')}*\n${notes}` : '';
    template = template.replace('{notes}', notesText);

const bridgeText = bridgeFee > 0 ? `🌉 ${t('bridge_fee')}: ${bridgeFee}${currencySymbol}\n` : '';
template = template.replace('{bridge}', bridgeText);

const tipText = driverTip > 0 
  ? `⭐ ${t('driver_tip')}: ${isTurkishLira ? Math.round(displayTip).toLocaleString('tr-TR') : driverTip}${currencySymbol}\n` 
  : '';

    const whatsappUrl = `https://wa.me/905016206952?text=${encodeURIComponent(template)}`;
    window.open(whatsappUrl, '_blank');
  };

const tipOptions = isTurkishLira ? [
  { amount: 0, label: '-' },
  { amount: 20, label: '200', popular: false },
  { amount: 50, label: '500', popular: true },
  { amount: 80, label: '800', popular: false },
  { amount: 100, label: '1000', popular: false }
] : [
  { amount: 0, label: '-' },
  { amount: 2, label: '2', popular: false },
  { amount: 5, label: '5', popular: true },
  { amount: 8, label: '8', popular: false },
  { amount: 10, label: '10', popular: false }
];

  return (
    <div className={`min-h-screen relative overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dzb0zzsl4/image/upload/v1763483072/mosque-6835457_1280_stym2x.jpg"
          alt="İstanbul"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Header */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/98 backdrop-blur-2xl shadow-2xl sticky top-0 z-50 border-b-2 border-primary-300 relative"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => router.back()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition bg-gray-100 px-4 py-2 rounded-lg font-semibold rtl:space-x-reverse"
              >
                <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                <span className="hidden md:inline">{t('back')}</span>
              </motion.button>
              {/* Dil Seçici */}
              <div className="relative">
                <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition rtl:space-x-reverse"
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
            </div>
    
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <img 
                  src="/icon.png" 
                  alt="İstanbul Transfer Logo" 
                  className="w-6 h-6"
                />
              </motion.div>
              <div className="text-right rtl:text-left">
                <h1 className="text-xl md:text-2xl font-black text-gray-900">Impala Transfer</h1>
                <p className="text-xs text-gray-500 font-semibold">{t('premium_res')}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Progress Steps */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200 relative z-10 shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center space-x-4 md:space-x-12 max-w-4xl mx-auto rtl:space-x-reverse">
            {/* Step 1 */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <span className="mt-3 text-sm md:text-base font-bold text-gray-700 hidden sm:block">{t('steps')[0]}</span>
              <span className="mt-1 text-xs text-green-600 font-semibold">{t('steps_status')[0]} ✓</span>
            </motion.div>
            
            <div className="h-1 w-16 md:w-32 bg-gradient-to-r from-green-500 to-primary-500 rounded-full"></div>
            
            {/* Step 2 */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(196, 213, 12, 0.7)", "0 0 0 20px rgba(212, 175, 55, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-600 to-red-100 flex items-center justify-center shadow-2xl"
                >
                  <span className="text-2xl font-black text-white">2</span>
                </motion.div>
              </div>
              <span className="mt-3 text-sm md:text-base font-bold text-black hidden sm:block">{t('steps')[1]}</span>
              <span className="mt-1 text-xs text-black font-semibold">{t('steps_status')[1]}</span>
            </motion.div>
            
            <div className="h-1 w-16 md:w-32 bg-gray-300 rounded-full"></div>
            
            {/* Step 3 */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black text-gray-400">3</span>
              </div>
              <span className="mt-3 text-sm md:text-base font-bold text-gray-400 hidden sm:block">{t('steps')[2]}</span>
              <span className="mt-1 text-xs text-gray-400 font-semibold">{t('steps_status')[2]}</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sol Taraf - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Rezervasyon Sahibi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary-500 via-accent to-primary-600 p-5 flex items-center justify-between">
                <div className="flex items-center rtl:space-x-reverse space-x-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-black/90">{t('owner_title')}</h3>
                    <p className="text-sm text-black/80 font-semibold">{t('owner_desc')}</p>
                  </div>
                </div>
                <Award className="w-8 h-8 text-white/60" />
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-black text-gray-700 mb-2 flex items-center rtl:space-x-reverse space-x-2">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 text-xs">1</span>
                      </div>
                      <span>{t('lbl_name')}</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 transition text-gray-900 font-semibold placeholder-gray-400 shadow-sm"
                      placeholder={t('ph_name')}
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-black text-gray-700 mb-2 flex items-center rtl:space-x-reverse space-x-2">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 text-xs">2</span>
                      </div>
                      <span>{t('lbl_surname')}</span>
                    </label>
                    <input
                      type="text"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 transition text-gray-900 font-semibold placeholder-gray-400 shadow-sm"
                      placeholder={t('ph_surname')}
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-black text-gray-700 mb-2 flex items-center rtl:space-x-reverse space-x-2">
                      <Phone className="w-5 h-5 text-primary-500" />
                      <span>{t('lbl_phone')}</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 transition text-gray-900 font-semibold placeholder-gray-400 shadow-sm"
                      placeholder="0501 620 69 52"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-black text-gray-700 mb-2 flex items-center rtl:space-x-reverse space-x-2">
                      <Mail className="w-5 h-5 text-primary-500" />
                      <span>{t('lbl_email')}</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 transition text-gray-900 font-semibold placeholder-gray-400 shadow-sm"
                      placeholder="example@mail.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="block text-sm font-black text-gray-700 mb-2 flex items-center rtl:space-x-reverse space-x-2">
                    <MessageSquare className="w-5 h-5 text-primary-500" />
                    <span>{t('lbl_notes')}</span>
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 transition resize-none text-gray-900 font-medium placeholder-gray-400 shadow-sm"
                    placeholder={t('ph_notes')}
                  />
                  <p className="text-xs text-gray-500 mt-2 flex items-center rtl:space-x-reverse space-x-1">
                    <Zap className="w-3 h-3 text-yellow-500" />
                    <span>{t('note_hint')}</span>
                  </p>
                </motion.div>

                {/* Diğer Yolcular */}
                {Number(passengers) > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-2xl border-2 border-purple-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-black text-gray-800 flex items-center text-base md:text-lg rtl:space-x-reverse space-x-2">
                        <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                        <span>{t('other_passengers')}</span>
                      </h4>
                      <span className="bg-purple-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full">
                        {Number(passengers) - 1} {t('lbl_pass')}
                      </span>
                    </div>
                    
                    <p className="text-xs md:text-sm text-purple-700 font-semibold bg-white/50 p-3 rounded-lg">
                      ⚠️ {t('other_warning').replace('{0}', passengers).replace('{1}', (Number(passengers)-1).toString())}
                    </p>
                    
                    <div className="space-y-4">
                      {passengerInfo.map((passenger, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white p-4 md:p-5 rounded-xl border-2 border-purple-300 space-y-3"
                        >
                          <div className="flex items-center space-x-2 mb-3 rtl:space-x-reverse">
                            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-black">
                              {idx + 2}
                            </div>
                            <h5 className="font-black text-gray-800 text-sm md:text-base">
                              {idx + 2}. {t('lbl_pass')}
                            </h5>
                          </div>
                          
                          <div>
                            <label className="block text-xs md:text-sm font-black text-purple-700 mb-2">
                              {t('lbl_passenger_name')}
                            </label>
                            <input
                              type="text"
                              value={passenger.name}
                              onChange={(e) => {
                                const newInfo = [...passengerInfo];
                                newInfo[idx] = { ...newInfo[idx], name: e.target.value };
                                setPassengerInfo(newInfo);
                              }}
                              className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-purple-300 rounded-lg md:rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition text-gray-900 font-semibold placeholder-gray-400 shadow-sm text-sm md:text-base"
                              placeholder={t('ph_passenger_name').replace('{0}', (idx + 2).toString())}
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-xs md:text-sm font-black text-purple-700 mb-2">
                              {t('lbl_passport')}
                            </label>
                            <input
                              type="text"
                              value={passenger.passport}
                              onChange={(e) => {
                                const newInfo = [...passengerInfo];
                                newInfo[idx] = { ...newInfo[idx], passport: e.target.value.toUpperCase() };
                                setPassengerInfo(newInfo);
                              }}
                              className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-purple-300 rounded-lg md:rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition text-gray-900 font-bold placeholder-gray-400 shadow-sm uppercase text-sm md:text-base tracking-wider"
                              placeholder="A12345678"
                              required
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Uçuş Detayları */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border-2 border-cyan-200"
                >
                  <div className="flex items-center mb-4 rtl:space-x-reverse space-x-3">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <Plane className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-800 text-lg">{t('flight_title')}</h4>
                      <p className="text-xs text-cyan-700 font-semibold">{t('flight_subtitle')}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-5 font-medium leading-relaxed bg-white/50 p-3 rounded-lg border border-cyan-200">
                    {t('flight_info')}
                  </p>
                  
                  <div className="bg-white rounded-2xl p-5 border-2 border-cyan-300 shadow-lg">
                    <label className="block text-sm font-black text-cyan-900 mb-3 flex items-center rtl:space-x-reverse space-x-2">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                        <span className="text-cyan-600 text-xs">✈️</span>
                      </div>
                      {t('lbl_flight_no')}
                    </label>
                    <input
                      type="text"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                      className="w-full px-5 py-4 border-2 border-cyan-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition text-gray-900 font-bold placeholder-gray-400 shadow-sm text-lg tracking-wider uppercase"
                      placeholder={t('ph_flight_no')}
                    />
                    <p className="text-xs text-cyan-600 mt-3 font-semibold flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {t('flight_hint')}
                    </p>
                  </div>
                </motion.div>

                {/* Şoför Bahşiş */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-black text-gray-800 flex items-center text-lg rtl:space-x-reverse space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-6 h-6 text-white fill-white" />
                      </div>
                      <span>{t('tip_title')}</span>
                    </h4>
                    {driverTip > 0 && (
                      <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        type="button"
                        onClick={() => setDriverTip(0)}
                        className="text-sm text-red-600 hover:text-red-700 transition underline font-bold"
                      >
                        ✕ {t('tip_remove')}
                      </motion.button>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-5 font-medium leading-relaxed">
                    {t('tip_desc')}
                  </p>
                  
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
    {tipOptions.map((tip) => (
    <motion.button
      key={tip.amount}  // Currency değişince yeniden render olsun
      type="button"
      onClick={() => setDriverTip(tip.amount)}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-2 md:px-4 py-3 md:py-4 rounded-xl md:rounded-2xl font-black transition shadow-lg text-sm md:text-base ${
                          driverTip === tip.amount
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white border-2 md:border-4 border-green-400 shadow-2xl'
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {tip.popular && driverTip !== tip.amount && (
                          <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg">
                            {t('popular')}
                          </div>
                        )}
                        <div className="text-lg">{tip.label}</div>
                        {driverTip === tip.amount && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                          >
                            <CheckCircle className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Kullanım Koşulları */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex items-start space-x-3 bg-gray-50 p-5 rounded-2xl border-2 border-gray-200 cursor-pointer rtl:space-x-reverse"
                  onClick={() => setAcceptTerms(!acceptTerms)}
                >
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-6 h-6 text-primary-500 rounded-lg focus:ring-2 focus:ring-primary-500 mt-0.5 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer font-medium">
                    {t('terms_text')}
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-400 via-accent to-orange-600 text-white font-black py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition duration-300 flex items-center justify-center space-x-3 text-xl border-4 border-primary-300 relative overflow-hidden group rtl:space-x-reverse"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <CheckCircle className="w-7 h-7 relative z-10" />
                  <span className="relative z-10">{t('btn_submit')}</span>
                  <ArrowRight className={`w-7 h-7 relative z-10 transition ${isRtl ? 'group-hover:-translate-x-2 rotate-180' : 'group-hover:translate-x-2'}`} />
                </motion.button>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-5 rounded-xl">
                  <div className="flex items-start rtl:space-x-reverse space-x-3">
                    <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-orange-900 font-semibold leading-relaxed">
                      <span className="font-black">{t('warn_title')}</span> {t('warn_text')}
                    </p>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Sağ Taraf - Özet */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-2xl border-2 border-primary-200 sticky top-24 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl"
                ></motion.div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-white flex items-center rtl:space-x-reverse space-x-2">
                      <Briefcase className="w-7 h-7" />
                      <span>{t('steps')[2]}</span>
                    </h3>
                    <div className="bg-green-500 text-white text-xs font-black px-3 py-1 rounded-full">
                      {t('res_active')}
                    </div>
                  </div>
                  <p className="text-white/70 text-sm font-semibold">{t('res_summary')}</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Nereden - Nereye */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse p-4 bg-green-50 rounded-xl border-2 border-green-200">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-green-700 uppercase tracking-wider mb-1">{t('lbl_from')}</p>
                      <p className="text-sm font-bold text-gray-900 leading-tight">{pickup}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="h-12 w-1 bg-gradient-to-b from-green-400 to-red-400 rounded-full"></div>
                  </div>

                  <div className="flex items-start space-x-3 rtl:space-x-reverse p-4 bg-red-50 rounded-xl border-2 border-red-200">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-red-700 uppercase tracking-wider mb-1">{t('lbl_to')}</p>
                      <p className="text-sm font-bold text-gray-900 leading-tight">{dropoff}</p>
                    </div>
                  </div>
                </div>

                {/* Tarih Bilgileri */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-2xl border-2 border-blue-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center rtl:space-x-reverse space-x-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <p className="text-xs font-black text-blue-900 uppercase">{t('lbl_dept')}</p>
                    </div>
                    <p className="text-sm font-black text-gray-900">{formatDate(date)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center rtl:space-x-reverse space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <p className="text-sm font-black text-gray-900">{time}</p>
                    </div>
                  </div>
                  
                  {isRoundTrip && (
                    <>
                      <div className="border-t-2 border-dashed border-blue-300 my-2"></div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center rtl:space-x-reverse space-x-2">
                          <Calendar className="w-5 h-5 text-orange-600" />
                          <p className="text-xs font-black text-orange-900 uppercase">{t('lbl_ret')}</p>
                        </div>
                        <p className="text-sm font-black text-gray-900">{formatDate(returnDate)}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center rtl:space-x-reverse space-x-2">
                          <Clock className="w-5 h-5 text-orange-600" />
                          <p className="text-sm font-black text-gray-900">{returnTime}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Detay Bilgiler */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-4 rounded-xl text-center border-2 border-gray-200">
                    <div className="text-2xl mb-1">📏</div>
                    <p className="text-[10px] font-black text-gray-500 uppercase mb-1">{t('lbl_dist')}</p>
                    <p className="text-lg font-black text-gray-900">{distance} KM</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-4 rounded-xl text-center border-2 border-gray-200">
                    <div className="text-2xl mb-1">⏱️</div>
                    <p className="text-[10px] font-black text-gray-500 uppercase mb-1">{t('lbl_dur')}</p>
                    <p className="text-lg font-black text-gray-900">{duration} Dk</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-4 rounded-xl text-center border-2 border-gray-200">
                    <div className="text-2xl mb-1">👥</div>
                    <p className="text-[10px] font-black text-gray-500 uppercase mb-1">{t('lbl_pass')}</p>
                    <p className="text-lg font-black text-gray-900">{passengers}</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-4 rounded-xl text-center border-2 border-gray-200">
                    <div className="text-2xl mb-1">🧳</div>
                    <p className="text-[10px] font-black text-gray-500 uppercase mb-1">{t('lbl_lug')}</p>
                    <p className="text-lg font-black text-gray-900">6</p>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
                  <div className="flex items-center rtl:space-x-reverse space-x-2">
                    <Car className="w-6 h-6 text-purple-600" />
                    <span className="text-sm font-black text-purple-900">{t('lbl_vehicle')}</span>
                  </div>
                  <span className="text-sm font-black text-gray-900">{vehicle}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                  <div className="flex items-center rtl:space-x-reverse space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-sm font-black text-green-900">{t('lbl_type')}</span>
                  </div>
                  <span className="text-sm font-black text-gray-900">{isRoundTrip ? t('yes') + ' ✅' : t('no') + ' ❌'}</span>
                </div>

                {/* Ödeme Detayları */}
                <div className="border-t-4 border-dashed border-gray-300 pt-5 space-y-3">
                  <h4 className="font-black text-gray-900 mb-4 flex items-center text-lg rtl:space-x-reverse space-x-2">
                    <CreditCard className="w-6 h-6 text-primary-500" />
                    <span>{t('pay_details')}</span>
                  </h4>
                  
                  <div className="space-y-2">
                   <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
  <span className="text-sm text-gray-600 font-semibold">{vehicle}</span>
  <span className="font-bold text-gray-900">
  {isTurkishLira 
    ? Math.round(numericPrice).toLocaleString('tr-TR') + '₺'
    : numericPrice.toFixed(2) + currencySymbol}
</span>
</div>

<div className="flex justify-between p-3 bg-green-50 rounded-lg border border-green-200">
  <span className="text-sm text-green-700 font-semibold">{t('early_disc')}</span>
  <span className="font-bold text-green-600">
    -{isTurkishLira 
      ? Math.round(earlyDiscount).toLocaleString('tr-TR') 
      : earlyDiscount.toFixed(2)}{currencySymbol}
  </span>
</div>

{bridgeFee > 0 && (
  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
    <span className="text-xs text-blue-700 font-semibold">{t('bridge_fee')}</span>
    <span className="font-bold text-blue-900">{bridgeFee}{currencySymbol}</span>
  </div>
)}
                    {driverTip > 0 && (
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex items-center rtl:space-x-reverse space-x-2">
                          <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                          <span className="text-sm text-yellow-700 font-semibold">{t('driver_tip')}</span>
                        </div>
<span className="font-bold text-yellow-900">
  {isTurkishLira 
    ? Math.round(displayTip).toLocaleString('tr-TR') 
    : driverTip}{currencySymbol}
</span>
                      </div>
                    )}
                  </div>

                  {/* Toplam */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-primary-500 via-accent to-orange-600 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    ></motion.div>
                    <div className="relative z-10 flex justify-between items-center">
                      <div>
                        <p className="text-black/90 text-sm font-bold mb-1">{t('total')}</p>
                      <p className="text-black/70 text-4xl font-black">
  {isTurkishLira 
    ? Math.round(total).toLocaleString('tr-TR') 
    : total.toFixed(2)}{currencySymbol}
</p>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle className="w-12 h-12 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Güvenlik */}
                <div className="flex items-start space-x-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-2 border-blue-300 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="font-black text-blue-900 mb-2 text-base">{t('secure_pay')}</p>
                    <p className="text-blue-700 text-xs font-semibold leading-relaxed">
                      {t('secure_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer language={language} />
    </div>
  );
}