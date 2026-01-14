'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone, Database, Users, AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function KVKK() {
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
      nav_back: 'Ana Sayfaya Dön',
      header_title: 'KVKK Aydınlatma Metni',
      header_subtitle: 'Kişisel Verilerin Korunması Kanunu Kapsamında Bilgilendirme',
      header_law: '6698 Sayılı Kanun Uyarınca Hazırlanmıştır',
      last_updated: 'Son Güncelleme: 18 Kasım 2024',
      
      intro_text: '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla İstanbul Transfer tarafından, kişisel verilerinizin işlenme amaçları, kimlere ve hangi amaçlarla aktarılabileceği, veri toplama yöntemi, hukuki sebebi ve haklarınız konularında sizi bilgilendirmek isteriz.',
      
      sec_1_title: '1. Veri Sorumlusu',
      sec_1_note: '("Şirket", "Veri Sorumlusu", "Biz", "Bizim" olarak anılacaktır)',
      
      sec_2_title: '2. İşlenen Kişisel Veriler',
      sec_2_desc: 'Transfer hizmetlerimizi sunabilmek amacıyla aşağıdaki kategorilerde kişisel verileriniz işlenmektedir:',
      
      cat_1_title: 'Kimlik Bilgileri',
      cat_1_items: ['• Ad, Soyad', '• T.C. Kimlik Numarası (fatura için)', '• Doğum Tarihi', '• Cinsiyet', '• Pasaport/Kimlik fotokopisi'],
      
      cat_2_title: 'İletişim Bilgileri',
      cat_2_items: ['• Telefon Numarası', '• E-posta Adresi', '• Adres Bilgileri', '• Otel/Konaklama Bilgileri'],
      
      cat_3_title: 'Rezervasyon Bilgileri',
      cat_3_items: ['• Transfer Detayları (nereden-nereye)', '• Tarih ve Saat Bilgileri', '• Yolcu Sayısı', '• Uçuş Numarası/Bilgileri', '• Özel Talepler'],
      
      cat_4_title: 'Finansal Bilgiler',
      cat_4_items: ['• Banka Hesap Bilgileri', '• Fatura Bilgileri', '• Ödeme Geçmişi', '• Vergi Numarası'],
      cat_4_note: '* Kredi kartı bilgileri güvenli ödeme sağlayıcıları tarafından işlenir',

      cat_5_title: 'İşlem Güvenliği',
      cat_5_items: ['• IP Adresi', '• Tarayıcı Bilgileri', '• Çerez (Cookie) Verileri', '• Konum Bilgileri', '• Cihaz Bilgileri'],

      cat_6_title: 'Görsel/İşitsel Veriler',
      cat_6_items: ['• Profil Fotoğrafı', '• Kimlik Fotokopileri', '• Güvenlik Kamerası Kayıtları', '• Araç İçi Kamera Kayıtları'],

      sec_3_title: '3. Kişisel Verilerin İşlenme Amaçları',
      sec_3_intro: 'Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:',
      purposes: [
        { title: 'Transfer Hizmetleri', desc: 'Rezervasyon alımı, araç ve şoför tahsisi, karşılama hizmeti' },
        { title: 'İletişim Faaliyetleri', desc: 'Rezervasyon onayı, hatırlatma mesajları, müşteri desteği' },
        { title: 'Finansal İşlemler', desc: 'Ödeme alımı, fatura kesimi, muhasebe kayıtları' },
        { title: 'Yasal Yükümlülükler', desc: 'Vergi mevzuatı, resmi makam talepleri, denetim süreçleri' },
        { title: 'Güvenlik', desc: 'Araç içi güvenlik kamera kayıtları, acil durum müdahalesi' },
        { title: 'Hizmet Kalitesi', desc: 'Müşteri memnuniyeti anketleri, şikayet yönetimi' },
        { title: 'Pazarlama (Rıza ile)', desc: 'Kampanya, indirim, kişiselleştirilmiş teklifler' }
      ],
      marketing_note: '✓ Not: Pazarlama iletişimi için ayrıca açık rızanız alınır.',

      sec_4_title: '4. Kişisel Verilerin Aktarılması',
      sec_4_intro: 'Kişisel verileriniz, KVKK\'da belirtilen şartlara uygun olarak aşağıdaki taraflara aktarılabilir:',
      transfer_domestic_title: '🏢 Yurt İçi Aktarımlar',
      transfer_domestic_items: ['• Bağlı Şirketler', '• Hizmet Sağlayıcılar', '• Ödeme Kuruluşları', '• Sigorta Şirketleri', '• Resmi Kurumlar'],
      transfer_abroad_title: '🌍 Yurt Dışı Aktarımlar',
      transfer_abroad_items: ['• Bulut Sunucu Sağlayıcıları', '• E-posta Servisleri', '• Analiz Araçları', '• Ödeme Sağlayıcıları'],
      transfer_abroad_note: '* Yurt dışına aktarımlar açık rıza veya yeterli koruma şartıyla yapılır.',
      security_warning: 'Güvenlik Uyarısı: Verileriniz satılmaz veya kiralanmaz.',

      sec_5_title: '5. Veri Toplama Yöntemleri',
      methods: [
        { icon: '🌐', title: 'Web Sitesi', desc: 'Rezervasyon formu, çerezler' },
        { icon: '📱', title: 'Mobil', desc: 'Konum izni, bildirim izni' },
        { icon: '📞', title: 'Telefon/WhatsApp', desc: 'Sesli görüşme, mesajlaşma' },
        { icon: '📧', title: 'E-posta', desc: 'Talep maili, onaylar' },
        { icon: '🏢', title: 'Fiziksel', desc: 'Ofis ziyareti, sözleşme' },
        { icon: '🎥', title: 'Güvenlik', desc: 'Kamera kayıtları' }
      ],

      sec_6_title: '6. Hukuki Sebepler',
      sec_6_intro: 'Verileriniz KVKK 5. ve 6. maddelerindeki sebeplere dayalı işlenir:',
      legal_bases: [
        'Açık Rıza (Pazarlama)',
        'Kanunlarda Açıkça Öngörülmesi',
        'Sözleşmenin İfası',
        'Hukuki Yükümlülük',
        'Meşru Menfaat'
      ],

      sec_7_title: '7. Saklama Süreleri',
      retention_intro: 'Mevzuatta öngörülen süreler boyunca saklanır:',
      retention_items: [
        { key: 'Rezervasyon Kayıtları', val: '10 yıl' },
        { key: 'Fatura/Mali Belgeler', val: '10 yıl' },
        { key: 'İletişim Kayıtları', val: '2 yıl' },
        { key: 'Kamera Kayıtları', val: '6 ay' },
        { key: 'Pazarlama İzni', val: 'Rıza bitene kadar' },
        { key: 'Web Logları', val: '1 yıl' }
      ],
      retention_note: '⏱️ Süre sonunda veriler silinir, yok edilir veya anonimleştirilir.',

      sec_8_title: '8. KVKK Kapsamındaki Haklarınız',
      sec_8_intro: 'KVKK 11. maddesi uyarınca haklarınız:',
      rights: [
        'Bilgi Talep Etme', 'Bilgi İsteme', 'Amaç Öğrenme', 
        'Aktarım Bilgisi', 'Düzeltme Talebi', 'Silme Talebi', 
        'Bildirim Talebi', 'İtiraz Etme', 'Tazminat Talebi'
      ],

      sec_9_title: '9. Başvuru Yöntemleri',
      apply_email: 'E-posta ile',
      apply_written: 'Yazılı Başvuru',
      apply_kep: 'KEP / E-imza',
      apply_reqs_title: '📋 Başvuruda Bulunması Gerekenler:',
      apply_reqs_items: ['• Ad, soyad, imza', '• T.C. Kimlik / Pasaport No', '• Adres', '• İletişim bilgileri', '• Talep konusu'],
      apply_process_title: 'Başvuru Süreci:',
      apply_process_items: ['1️⃣ 30 gün içinde yanıt', '2️⃣ Yazılı/Elektronik yanıt', '3️⃣ Ücretsiz (maliyet yoksa)', '4️⃣ Gerekçeli karar'],

      sec_10_title: '10. Güncellemeler',
      sec_10_text: 'Bu metin yasal değişiklikler veya şirket politikalarına göre güncellenebilir.',
      
      btn_privacy: 'Gizlilik Politikası'
    },

    en: {
      nav_back: 'Back to Home',
      header_title: 'GDPR / KVKK Clarification Text',
      header_subtitle: 'Information on Protection of Personal Data',
      header_law: 'Prepared in accordance with Law No. 6698',
      last_updated: 'Last Updated: November 18, 2024',
      
      intro_text: 'In accordance with the Law on Protection of Personal Data No. 6698 ("KVKK"), as Istanbul Transfer (Data Controller), we would like to inform you about the purposes of processing your personal data, to whom and for what purposes it may be transferred, data collection methods, legal reasons, and your rights.',
      
      sec_1_title: '1. Data Controller',
      sec_1_note: '(Referred to as "Company", "Data Controller", "We", "Our")',
      
      sec_2_title: '2. Processed Personal Data',
      sec_2_desc: 'Your personal data is processed in the following categories to provide our transfer services:',
      
      cat_1_title: 'Identity Information',
      cat_1_items: ['• Name, Surname', '• ID Number (for invoice)', '• Date of Birth', '• Gender', '• Passport Copy'],
      
      cat_2_title: 'Contact Information',
      cat_2_items: ['• Phone Number', '• E-mail Address', '• Address Details', '• Hotel/Accommodation Info'],
      
      cat_3_title: 'Reservation Information',
      cat_3_items: ['• Transfer Details (From-To)', '• Date and Time', '• Passenger Count', '• Flight Number', '• Special Requests'],
      
      cat_4_title: 'Financial Information',
      cat_4_items: ['• Bank Account Info', '• Invoice Details', '• Payment History', '• Tax Number'],
      cat_4_note: '* Credit card details are processed by secure payment providers.',

      cat_5_title: 'Transaction Security',
      cat_5_items: ['• IP Address', '• Browser Info', '• Cookie Data', '• Location Info', '• Device Info'],

      cat_6_title: 'Visual/Audio Data',
      cat_6_items: ['• Profile Photo', '• ID Copies', '• Security Camera Recordings', '• In-Vehicle Camera Recordings'],

      sec_3_title: '3. Purposes of Processing Data',
      sec_3_intro: 'Your personal data is processed for the following purposes:',
      purposes: [
        { title: 'Transfer Services', desc: 'Reservation, vehicle allocation, greeting service' },
        { title: 'Communication Activities', desc: 'Confirmation, reminders, customer support' },
        { title: 'Financial Transactions', desc: 'Payments, invoicing, accounting' },
        { title: 'Legal Obligations', desc: 'Tax laws, official requests, audits' },
        { title: 'Security', desc: 'In-vehicle camera, emergency response' },
        { title: 'Service Quality', desc: 'Satisfaction surveys, complaint management' },
        { title: 'Marketing (With Consent)', desc: 'Campaigns, discounts, personalized offers' }
      ],
      marketing_note: '✓ Note: Explicit consent is obtained separately for marketing communication.',

      sec_4_title: '4. Transfer of Personal Data',
      sec_4_intro: 'Your data may be transferred to the following parties in accordance with KVKK/GDPR:',
      transfer_domestic_title: '🏢 Domestic Transfers',
      transfer_domestic_items: ['• Affiliated Companies', '• Service Providers', '• Payment Institutions', '• Insurance Companies', '• Official Institutions'],
      transfer_abroad_title: '🌍 International Transfers',
      transfer_abroad_items: ['• Cloud Providers', '• E-mail Services', '• Analytics Tools', '• Payment Providers'],
      transfer_abroad_note: '* International transfers are made with explicit consent or adequate protection.',
      security_warning: 'Security Warning: Your data is never sold or rented.',

      sec_5_title: '5. Data Collection Methods',
      methods: [
        { icon: '🌐', title: 'Website', desc: 'Reservation form, cookies' },
        { icon: '📱', title: 'Mobile', desc: 'Location, notifications' },
        { icon: '📞', title: 'Phone/WhatsApp', desc: 'Voice call, messaging' },
        { icon: '📧', title: 'E-mail', desc: 'Request mail, confirmations' },
        { icon: '🏢', title: 'Physical', desc: 'Office visit, contracts' },
        { icon: '🎥', title: 'Security', desc: 'Camera recordings' }
      ],

      sec_6_title: '6. Legal Bases',
      sec_6_intro: 'Your data is processed based on the following legal grounds:',
      legal_bases: [
        'Explicit Consent (Marketing)',
        'Explicitly Stipulated by Laws',
        'Performance of Contract',
        'Legal Obligation',
        'Legitimate Interest'
      ],

      sec_7_title: '7. Retention Periods',
      retention_intro: 'Data is stored for the periods stipulated by legislation:',
      retention_items: [
        { key: 'Reservation Records', val: '10 years' },
        { key: 'Invoice/Financial Docs', val: '10 years' },
        { key: 'Communication Logs', val: '2 years' },
        { key: 'Camera Recordings', val: '6 months' },
        { key: 'Marketing Consent', val: 'Until withdrawal' },
        { key: 'Web Logs', val: '1 year' }
      ],
      retention_note: '⏱️ At the end of the period, data is deleted, destroyed or anonymized.',

      sec_8_title: '8. Your Rights',
      sec_8_intro: 'Your rights under KVKK Article 11 / GDPR:',
      rights: [
        'Request Information', 'Request Data', 'Learn Purpose', 
        'Transfer Details', 'Request Correction', 'Request Deletion', 
        'Request Notification', 'Object to Results', 'Request Compensation'
      ],

      sec_9_title: '9. Application Methods',
      apply_email: 'Via E-mail',
      apply_written: 'Written Application',
      apply_kep: 'KEP / E-signature',
      apply_reqs_title: '📋 Required Info for Application:',
      apply_reqs_items: ['• Name, surname, signature', '• ID / Passport No', '• Address', '• Contact info', '• Subject of request'],
      apply_process_title: 'Application Process:',
      apply_process_items: ['1️⃣ Response within 30 days', '2️⃣ Written/Electronic response', '3️⃣ Free (unless cost incurred)', '4️⃣ Reasoned decision'],

      sec_10_title: '10. Updates',
      sec_10_text: 'This text may be updated according to legal changes or company policies.',
      
      btn_privacy: 'Privacy Policy'
    },
    de: {
      nav_back: 'Zurück zur Startseite',
      header_title: 'Datenschutzaufklärung (KVKK/DSGVO)',
      header_subtitle: 'Informationen zum Schutz personenbezogener Daten',
      header_law: 'Erstellt gemäß Gesetz Nr. 6698',
      last_updated: 'Letzte Aktualisierung: 18. November 2024',
      
      intro_text: 'Gemäß dem Gesetz zum Schutz personenbezogener Daten Nr. 6698 ("KVKK") möchten wir Sie als Istanbul Transfer (Datenverantwortlicher) über die Zwecke der Verarbeitung Ihrer personenbezogenen Daten, an wen und zu welchen Zwecken diese übertragen werden können, Datenerhebungsmethoden, Rechtsgründe und Ihre Rechte informieren.',
      
      sec_1_title: '1. Datenverantwortlicher',
      sec_1_note: '(Bezeichnet als "Unternehmen", "Wir", "Unser")',
      
      sec_2_title: '2. Verarbeitete personenbezogene Daten',
      sec_2_desc: 'Ihre personenbezogenen Daten werden in folgenden Kategorien verarbeitet, um unsere Transferdienste bereitzustellen:',
      
      cat_1_title: 'Identitätsinformationen',
      cat_1_items: ['• Vorname, Nachname', '• Ausweisnummer (für Rechnung)', '• Geburtsdatum', '• Geschlecht', '• Reisepasskopie'],
      
      cat_2_title: 'Kontaktinformationen',
      cat_2_items: ['• Telefonnummer', '• E-Mail-Adresse', '• Adressdaten', '• Hotel-/Unterkunftsinfos'],
      
      cat_3_title: 'Reservierungsinformationen',
      cat_3_items: ['• Transferdetails (Von-Nach)', '• Datum und Uhrzeit', '• Passagieranzahl', '• Flugnummer', '• Sonderwünsche'],
      
      cat_4_title: 'Finanzinformationen',
      cat_4_items: ['• Bankkontoinformationen', '• Rechnungsdetails', '• Zahlungshistorie', '• Steuernummer'],
      cat_4_note: '* Kreditkartendaten werden von sicheren Zahlungsanbietern verarbeitet.',

      cat_5_title: 'Transaktionssicherheit',
      cat_5_items: ['• IP-Adresse', '• Browser-Info', '• Cookie-Daten', '• Standort-Info', '• Geräte-Info'],

      cat_6_title: 'Visuelle/Audio Daten',
      cat_6_items: ['• Profilfoto', '• Ausweiskopien', '• Sicherheitskameraaufnahmen', '• Fahrzeugkameraaufnahmen'],

      sec_3_title: '3. Zwecke der Datenverarbeitung',
      sec_3_intro: 'Ihre Daten werden für folgende Zwecke verarbeitet:',
      purposes: [
        { title: 'Transferdienste', desc: 'Reservierung, Fahrzeugzuweisung, Empfangsservice' },
        { title: 'Kommunikation', desc: 'Bestätigung, Erinnerungen, Kundensupport' },
        { title: 'Finanztransaktionen', desc: 'Zahlungen, Rechnungsstellung, Buchhaltung' },
        { title: 'Gesetzliche Pflichten', desc: 'Steuergesetze, Behördenanfragen, Audits' },
        { title: 'Sicherheit', desc: 'Fahrzeugkamera, Notfallmaßnahmen' },
        { title: 'Servicequalität', desc: 'Zufriedenheitsumfragen, Beschwerdemanagement' },
        { title: 'Marketing (Mit Zustimmung)', desc: 'Kampagnen, Rabatte, personalisierte Angebote' }
      ],
      marketing_note: '✓ Hinweis: Für Marketingkommunikation wird eine gesonderte Zustimmung eingeholt.',

      sec_4_title: '4. Datenübermittlung',
      sec_4_intro: 'Ihre Daten können gemäß KVKK/DSGVO an folgende Parteien übermittelt werden:',
      transfer_domestic_title: '🏢 Inlandstransfers',
      transfer_domestic_items: ['• Verbundene Unternehmen', '• Dienstleister', '• Zahlungsinstitute', '• Versicherungen', '• Behörden'],
      transfer_abroad_title: '🌍 Auslandstransfers',
      transfer_abroad_items: ['• Cloud-Anbieter', '• E-Mail-Dienste', '• Analysetools', '• Zahlungsanbieter'],
      transfer_abroad_note: '* Auslandstransfers erfolgen mit Zustimmung oder angemessenem Schutz.',
      security_warning: 'Sicherheitswarnung: Ihre Daten werden niemals verkauft oder vermietet.',

      sec_5_title: '5. Datenerhebungsmethoden',
      methods: [
        { icon: '🌐', title: 'Webseite', desc: 'Reservierungsformular, Cookies' },
        { icon: '📱', title: 'Mobil', desc: 'Standort, Benachrichtigungen' },
        { icon: '📞', title: 'Telefon/WhatsApp', desc: 'Anruf, Nachrichten' },
        { icon: '📧', title: 'E-Mail', desc: 'Anfrage, Bestätigungen' },
        { icon: '🏢', title: 'Physisch', desc: 'Büro, Verträge' },
        { icon: '🎥', title: 'Sicherheit', desc: 'Kameraaufnahmen' }
      ],

      sec_6_title: '6. Rechtsgrundlagen',
      sec_6_intro: 'Ihre Daten werden auf folgenden Rechtsgrundlagen verarbeitet:',
      legal_bases: [
        'Ausdrückliche Zustimmung (Marketing)',
        'Gesetzlich vorgeschrieben',
        'Vertragserfüllung',
        'Rechtliche Verpflichtung',
        'Berechtigtes Interesse'
      ],

      sec_7_title: '7. Aufbewahrungsfristen',
      retention_intro: 'Daten werden gemäß den gesetzlichen Fristen gespeichert:',
      retention_items: [
        { key: 'Reservierungsdaten', val: '10 Jahre' },
        { key: 'Rechnungen/Finanzen', val: '10 Jahre' },
        { key: 'Kommunikationslogs', val: '2 Jahre' },
        { key: 'Kameraaufnahmen', val: '6 Monate' },
        { key: 'Marketing-Zustimmung', val: 'Bis Widerruf' },
        { key: 'Web-Logs', val: '1 Jahr' }
      ],
      retention_note: '⏱️ Nach Ablauf der Frist werden Daten gelöscht oder anonymisiert.',

      sec_8_title: '8. Ihre Rechte',
      sec_8_intro: 'Ihre Rechte gemäß KVKK Art. 11 / DSGVO:',
      rights: [
        'Information anfordern', 'Daten anfordern', 'Zweck erfahren', 
        'Übertragung erfahren', 'Korrektur anfordern', 'Löschung anfordern', 
        'Benachrichtigung', 'Widerspruch', 'Schadenersatz'
      ],

      sec_9_title: '9. Antragsverfahren',
      apply_email: 'Per E-Mail',
      apply_written: 'Schriftlich',
      apply_kep: 'KEP / E-Signatur',
      apply_reqs_title: '📋 Erforderliche Infos:',
      apply_reqs_items: ['• Name, Unterschrift', '• Ausweis-Nr.', '• Adresse', '• Kontaktinfo', '• Betreff'],
      apply_process_title: 'Prozess:',
      apply_process_items: ['1️⃣ Antwort in 30 Tagen', '2️⃣ Schriftlich/Elektronisch', '3️⃣ Kostenlos (meistens)', '4️⃣ Begründete Entscheidung'],

      sec_10_title: '10. Aktualisierungen',
      sec_10_text: 'Dieser Text kann gemäß gesetzlichen Änderungen aktualisiert werden.',
      
      btn_privacy: 'Datenschutzerklärung'
    },
    ru: {
      nav_back: 'На главную',
      header_title: 'Текст разъяснения KVKK',
      header_subtitle: 'Информация о защите персональных данных',
      header_law: 'Подготовлено в соответствии с Законом № 6698',
      last_updated: 'Последнее обновление: 18 ноября 2024 г.',
      
      intro_text: 'В соответствии с Законом о защите персональных данных № 6698 ("KVKK"), компания Istanbul Transfer (Контроллер данных) информирует вас о целях обработки ваших персональных данных, кому и для каких целей они могут быть переданы, методах сбора данных, юридических основаниях и ваших правах.',
      
      sec_1_title: '1. Контроллер данных',
      sec_1_note: '(Далее именуется "Компания", "Мы", "Наш")',
      
      sec_2_title: '2. Обрабатываемые данные',
      sec_2_desc: 'Ваши персональные данные обрабатываются в следующих категориях для предоставления наших услуг:',
      
      cat_1_title: 'Идентификационные данные',
      cat_1_items: ['• Имя, Фамилия', '• Номер удостоверения (для счета)', '• Дата рождения', '• Пол', '• Копия паспорта'],
      
      cat_2_title: 'Контактная информация',
      cat_2_items: ['• Номер телефона', '• E-mail', '• Адрес', '• Отель/Проживание'],
      
      cat_3_title: 'Информация о бронировании',
      cat_3_items: ['• Детали трансфера (Откуда-Куда)', '• Дата и время', '• Кол-во пассажиров', '• Номер рейса', '• Особые запросы'],
      
      cat_4_title: 'Финансовая информация',
      cat_4_items: ['• Банковский счет', '• Детали счета', '• История платежей', '• Налоговый номер'],
      cat_4_note: '* Данные карт обрабатываются безопасными платежными провайдерами.',

      cat_5_title: 'Безопасность транзакций',
      cat_5_items: ['• IP-адрес', '• Браузер', '• Cookie', '• Геолокация', '• Устройство'],

      cat_6_title: 'Визуальные/Аудио данные',
      cat_6_items: ['• Фото профиля', '• Копии ID', '• Записи камер безопасности', '• Записи камер в авто'],

      sec_3_title: '3. Цели обработки данных',
      sec_3_intro: 'Ваши данные обрабатываются для следующих целей:',
      purposes: [
        { title: 'Услуги трансфера', desc: 'Бронирование, авто, встреча' },
        { title: 'Коммуникация', desc: 'Подтверждение, напоминания, поддержка' },
        { title: 'Финансы', desc: 'Платежи, счета, бухгалтерия' },
        { title: 'Юридические обязательства', desc: 'Налоги, запросы властей, аудит' },
        { title: 'Безопасность', desc: 'Камеры в авто, ЧС' },
        { title: 'Качество услуг', desc: 'Опросы, жалобы' },
        { title: 'Маркетинг (с согласия)', desc: 'Акции, скидки, предложения' }
      ],
      marketing_note: '✓ Прим.: Для маркетинга берется отдельное согласие.',

      sec_4_title: '4. Передача данных',
      sec_4_intro: 'Ваши данные могут быть переданы следующим сторонам:',
      transfer_domestic_title: '🏢 Внутренние передачи',
      transfer_domestic_items: ['• Филиалы', '• Провайдеры услуг', '• Платежные системы', '• Страховые', '• Госучреждения'],
      transfer_abroad_title: '🌍 Зарубежные передачи',
      transfer_abroad_items: ['• Облачные сервисы', '• E-mail сервисы', '• Аналитика', '• Платежные провайдеры'],
      transfer_abroad_note: '* Передача за границу с согласия или при наличии защиты.',
      security_warning: 'Предупреждение: Ваши данные не продаются и не сдаются в аренду.',

      sec_5_title: '5. Методы сбора данных',
      methods: [
        { icon: '🌐', title: 'Веб-сайт', desc: 'Форма, cookies' },
        { icon: '📱', title: 'Мобильный', desc: 'Локация, уведомления' },
        { icon: '📞', title: 'Телефон/WhatsApp', desc: 'Звонки, сообщения' },
        { icon: '📧', title: 'E-mail', desc: 'Запросы, подтверждения' },
        { icon: '🏢', title: 'Физически', desc: 'Офис, договор' },
        { icon: '🎥', title: 'Безопасность', desc: 'Камеры' }
      ],

      sec_6_title: '6. Юридические основания',
      sec_6_intro: 'Данные обрабатываются на следующих основаниях:',
      legal_bases: [
        'Явное согласие (Маркетинг)',
        'Предусмотрено законом',
        'Исполнение договора',
        'Юридическое обязательство',
        'Законный интерес'
      ],

      sec_7_title: '7. Сроки хранения',
      retention_intro: 'Данные хранятся в соответствии с законодательством:',
      retention_items: [
        { key: 'Записи бронирования', val: '10 лет' },
        { key: 'Счета/Финансы', val: '10 лет' },
        { key: 'Логи общения', val: '2 года' },
        { key: 'Записи камер', val: '6 месяцев' },
        { key: 'Маркетинг', val: 'До отзыва' },
        { key: 'Веб-логи', val: '1 год' }
      ],
      retention_note: '⏱️ По истечении срока данные удаляются или анонимизируются.',

      sec_8_title: '8. Ваши права',
      sec_8_intro: 'Ваши права согласно ст. 11 KVKK:',
      rights: [
        'Запросить информацию', 'Запросить данные', 'Узнать цель', 
        'Узнать о передаче', 'Исправить', 'Удалить', 
        'Уведомление', 'Возражение', 'Компенсация'
      ],

      sec_9_title: '9. Способы подачи заявки',
      apply_email: 'По E-mail',
      apply_written: 'Письменно',
      apply_kep: 'Эл. подпись',
      apply_reqs_title: '📋 Требуемая инфо:',
      apply_reqs_items: ['• Имя, подпись', '• Паспорт', '• Адрес', '• Контакты', '• Тема'],
      apply_process_title: 'Процесс:',
      apply_process_items: ['1️⃣ Ответ за 30 дней', '2️⃣ Письменно/Электронно', '3️⃣ Бесплатно', '4️⃣ Обоснованное решение'],

      sec_10_title: '10. Обновления',
      sec_10_text: 'Этот текст может обновляться при изменении законов.',
      
      btn_privacy: 'Политика конфиденциальности'
    },
    ar: {
      nav_back: 'العودة للصفحة الرئيسية',
      header_title: 'نص توضيحي لقانون حماية البيانات',
      header_subtitle: 'معلومات حول حماية البيانات الشخصية',
      header_law: 'تم إعداده وفقًا للقانون رقم 6698',
      last_updated: 'آخر تحديث: 18 نوفمبر 2024',
      
      intro_text: 'وفقًا لقانون حماية البيانات الشخصية رقم 6698 ("KVKK")، نود بصفتنا Istanbul Transfer (مسؤول البيانات) إبلاغكم بأغراض معالجة بياناتكم الشخصية، ولمن ولأي أغراض يمكن نقلها، وطرق جمع البيانات، والأسباب القانونية، وحقوقكم.',
      
      sec_1_title: '1. مسؤول البيانات',
      sec_1_note: '(يشار إليها بـ "الشركة"، "نحن"، "لنا")',
      
      sec_2_title: '2. البيانات الشخصية المعالجة',
      sec_2_desc: 'تتم معالجة بياناتك الشخصية في الفئات التالية لتقديم خدمات النقل لدينا:',
      
      cat_1_title: 'معلومات الهوية',
      cat_1_items: ['• الاسم واللقب', '• رقم الهوية (للفاتورة)', '• تاريخ الميلاد', '• الجنس', '• نسخة جواز السفر'],
      
      cat_2_title: 'معلومات الاتصال',
      cat_2_items: ['• رقم الهاتف', '• البريد الإلكتروني', '• العنوان', '• معلومات الفندق/الإقامة'],
      
      cat_3_title: 'معلومات الحجز',
      cat_3_items: ['• تفاصيل النقل (من-إلى)', '• التاريخ والوقت', '• عدد الركاب', '• رقم الرحلة', '• طلبات خاصة'],
      
      cat_4_title: 'المعلومات المالية',
      cat_4_items: ['• معلومات الحساب البنكي', '• تفاصيل الفاتورة', '• سجل المدفوعات', '• الرقم الضريبي'],
      cat_4_note: '* تتم معالجة تفاصيل البطاقة بواسطة مزودي دفع آمنين.',

      cat_5_title: 'أمن المعاملات',
      cat_5_items: ['• عنوان IP', '• المتصفح', '• ملفات تعريف الارتباط', '• الموقع', '• الجهاز'],

      cat_6_title: 'البيانات المرئية/الصوتية',
      cat_6_items: ['• صورة الملف الشخصي', '• نسخ الهوية', '• تسجيلات الكاميرا الأمنية', '• تسجيلات كاميرا المركبة'],

      sec_3_title: '3. أغراض معالجة البيانات',
      sec_3_intro: 'تتم معالجة بياناتك للأغراض التالية:',
      purposes: [
        { title: 'خدمات النقل', desc: 'الحجز، تخصيص المركبة، الاستقبال' },
        { title: 'أنشطة الاتصال', desc: 'التأكيد، التذكير، دعم العملاء' },
        { title: 'المعاملات المالية', desc: 'الدفع، الفواتير، المحاسبة' },
        { title: 'الالتزامات القانونية', desc: 'الضرائب، الطلبات الرسمية، التدقيق' },
        { title: 'الأمان', desc: 'كاميرا المركبة، الطوارئ' },
        { title: 'جودة الخدمة', desc: 'استطلاعات الرضا، إدارة الشكاوى' },
        { title: 'التسويق (بموافقة)', desc: 'الحملات، الخصومات، العروض المخصصة' }
      ],
      marketing_note: '✓ ملاحظة: يتم الحصول على موافقة صريحة منفصلة للاتصالات التسويقية.',

      sec_4_title: '4. نقل البيانات الشخصية',
      sec_4_intro: 'قد يتم نقل بياناتك للأطراف التالية وفقًا للقانون:',
      transfer_domestic_title: '🏢 النقل المحلي',
      transfer_domestic_items: ['• الشركات التابعة', '• مقدمي الخدمات', '• مؤسسات الدفع', '• شركات التأمين', '• المؤسسات الرسمية'],
      transfer_abroad_title: '🌍 النقل الدولي',
      transfer_abroad_items: ['• مزودي السحابة', '• خدمات البريد', '• أدوات التحليل', '• مزودي الدفع'],
      transfer_abroad_note: '* يتم النقل للخارج بموافقة صريحة أو حماية كافية.',
      security_warning: 'تحذير أمني: لا يتم بيع بياناتك أو تأجيرها أبدًا.',

      sec_5_title: '5. طرق جمع البيانات',
      methods: [
        { icon: '🌐', title: 'الموقع', desc: 'نموذج الحجز، الكوكيز' },
        { icon: '📱', title: 'الجوال', desc: 'الموقع، الإشعارات' },
        { icon: '📞', title: 'الهاتف/واتساب', desc: 'مكالمة، رسائل' },
        { icon: '📧', title: 'البريد', desc: 'طلب، تأكيدات' },
        { icon: '🏢', title: 'الفعلي', desc: 'زيارة المكتب، العقود' },
        { icon: '🎥', title: 'الأمان', desc: 'تسجيلات الكاميرا' }
      ],

      sec_6_title: '6. الأسباب القانونية',
      sec_6_intro: 'تتم المعالجة بناءً على الأسس التالية:',
      legal_bases: [
        'الموافقة الصريحة (تسويق)',
        'منصوص عليه في القانون',
        'تنفيد العقد',
        'التزام قانوني',
        'المصلحة المشروعة'
      ],

      sec_7_title: '7. فترات الاحتفاظ',
      retention_intro: 'يتم تخزين البيانات وفقًا للمدد القانونية:',
      retention_items: [
        { key: 'سجلات الحجز', val: '10 سنوات' },
        { key: 'الفواتير/المالية', val: '10 سنوات' },
        { key: 'سجلات الاتصال', val: 'سنتان' },
        { key: 'تسجيلات الكاميرا', val: '6 أشهر' },
        { key: 'موافقة التسويق', val: 'حتى السحب' },
        { key: 'سجلات الويب', val: 'سنة واحدة' }
      ],
      retention_note: '⏱️ في نهاية الفترة، يتم حذف البيانات أو إتلافها أو إخفاء هويتها.',

      sec_8_title: '8. حقوقك',
      sec_8_intro: 'حقوقك بموجب المادة 11 من القانون:',
      rights: [
        'طلب المعلومات', 'طلب البيانات', 'معرفة الغرض', 
        'معرفة النقل', 'طلب التصحيح', 'طلب الحذف', 
        'طلب الإخطار', 'الاعتراض', 'طلب التعويض'
      ],

      sec_9_title: '9. طرق التقديم',
      apply_email: 'عبر البريد',
      apply_written: 'طلب كتابي',
      apply_kep: 'توقيع إلكتروني',
      apply_reqs_title: '📋 المعلومات المطلوبة:',
      apply_reqs_items: ['• الاسم، التوقيع', '• رقم الهوية', '• العنوان', '• الاتصال', '• الموضوع'],
      apply_process_title: 'العملية:',
      apply_process_items: ['1️⃣ الرد خلال 30 يومًا', '2️⃣ كتابي/إلكتروني', '3️⃣ مجاني (غالبًا)', '4️⃣ قرار مسبب'],

      sec_10_title: '10. التحديثات',
      sec_10_text: 'قد يتم تحديث هذا النص وفقًا للتغييرات القانونية.',
      
      btn_privacy: 'سياسة الخصوصية'
    }
  };

  // BU FONKSİYONUN DÖNÜŞ TİPİNİ 'any' YAPTIM. HATA ÇÖZÜLDÜ.
  const t = (key: keyof typeof translations.tr): any => {
    return translations[language][key] || translations['tr'][key];
  };

  const isRtl = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Navbar Entegrasyonu */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary-500" />
                <span className="font-bold text-gray-800 text-lg">Impala Transfer</span>
            </Link>

            <div className="relative">
                <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
                >
                    <span className="text-xl">{languages[language].flag}</span>
                    <span className="font-bold text-sm text-gray-700">{languages[language].code}</span>
                </button>

                {showLangMenu && (
                    <div className={`absolute top-full mt-2 ${isRtl ? 'left-0' : 'right-0'} bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-40 z-50`}>
                        {Object.entries(languages).map(([code, lang]) => (
                            <button
                                key={code}
                                onClick={() => changeLanguage(code as any)}
                                className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3"
                            >
                                <span className="text-xl">{lang.flag}</span>
                                <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-violet-700 to-fuchsia-800 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(167, 139, 250, 0.3) 0%, transparent 50%)
            `
          }}></div>
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 border-4 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 border-4 border-pink-300/20 rounded-full"
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary-500 rounded-full mb-6">
              <Lock className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-black mb-4">
              {t('header_title')}
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              {t('header_subtitle')}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {t('header_law')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('last_updated')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-8">
            
            {/* Giriş */}
            <section>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
                <p className="text-blue-900 font-semibold leading-relaxed">
                  {t('intro_text')}
                </p>
              </div>
            </section>

            {/* Veri Sorumlusu */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Database className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_1_title')}</h2>
              </div>
              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="font-bold text-primary-400 mb-4">İstanbul Transfer Impala</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Adres:</strong> Atatürk Mahallesi, İstanbul, Türkiye</p>
                  <p><strong>E-posta:</strong> <a href="mailto:impalatransferist@gmail.com" className="text-primary-400 hover:text-primary-300">info@istanbultransfer.com</a></p>
                  <p><strong>Telefon:</strong> <a href="tel:+905016206952" className="text-primary-400 hover:text-primary-300">0501 620 69 52</a></p>
                  <p><strong>Web:</strong> <a href="https://www.impalatransfer.com" className="text-primary-400 hover:text-primary-300">www.istanbultransfer.com</a></p>
                </div>
                <p className="text-gray-400 text-xs mt-4 italic">
                  {t('sec_1_note')}
                </p>
              </div>
            </section>

            {/* İşlenen Kişisel Veriler */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <FileText className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_2_title')}</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {t('sec_2_desc')}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Kimlik Bilgileri */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5">
                    <div className="flex items-center space-x-2 mb-3 rtl:space-x-reverse">
                      <Users className="w-5 h-5 text-blue-600" />
                      <h3 className="font-bold text-blue-900">{t('cat_1_title')}</h3>
                    </div>
                    <ul className="text-sm text-blue-800 space-y-1">
                      {t('cat_1_items').map((item: any, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  {/* İletişim Bilgileri */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-5">
                    <div className="flex items-center space-x-2 mb-3 rtl:space-x-reverse">
                      <Mail className="w-5 h-5 text-green-600" />
                      <h3 className="font-bold text-green-900">{t('cat_2_title')}</h3>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1">
                      {t('cat_2_items').map((item: any, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  {/* Rezervasyon Bilgileri */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-5">
                    <div className="flex items-center space-x-2 mb-3 rtl:space-x-reverse">
                      <FileText className="w-5 h-5 text-purple-600" />
                      <h3 className="font-bold text-purple-900">{t('cat_3_title')}</h3>
                    </div>
                    <ul className="text-sm text-purple-800 space-y-1">
                      {t('cat_3_items').map((item: any, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  {/* Finansal Bilgiler */}
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-5">
                    <div className="flex items-center space-x-2 mb-3 rtl:space-x-reverse">
                      <Lock className="w-5 h-5 text-yellow-600" />
                      <h3 className="font-bold text-yellow-900">{t('cat_4_title')}</h3>
                    </div>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      {t('cat_4_items').map((item: any, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                    <p className="text-xs text-yellow-700 mt-2 italic">
                      {t('cat_4_note')}
                    </p>
                  </div>

                  {/* Teknik Veriler */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-5">
                    <div className="flex items-center space-x-2 mb-3 rtl:space-x-reverse">
                      <Database className="w-5 h-5 text-red-600" />
                      <h3 className="font-bold text-red-900">{t('cat_5_title')}</h3>
                    </div>
                    <ul className="text-sm text-red-800 space-y-1">
                      {t('cat_5_items').map((item: any, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  {/* Görsel/İşitsel Veriler */}
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-xl p-5">
                    <div className="flex items-center space-x-2 mb-3 rtl:space-x-reverse">
                      <Eye className="w-5 h-5 text-pink-600" />
                      <h3 className="font-bold text-pink-900">{t('cat_6_title')}</h3>
                    </div>
                    <ul className="text-sm text-pink-800 space-y-1">
                      {t('cat_6_items').map((item: any, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Kişisel Verilerin İşlenme Amaçları */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Shield className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_3_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('sec_3_intro')}</p>
                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  {t('purposes').map((purpose: any, i: number) => (
                    <div key={i} className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">{i + 1}</div>
                      <div>
                        <h3 className="font-bold text-gray-900">{purpose.title}</h3>
                        <p className="text-sm">{purpose.desc}</p>
                      </div>
                    </div>
                  ))}
                  
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-green-800 font-semibold text-sm">
                    {t('marketing_note')}
                  </p>
                </div>
              </div>
            </section>

            {/* Kişisel Verilerin Aktarılması */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Users className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_4_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t('sec_4_intro')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <h3 className="font-bold text-blue-900 mb-3">{t('transfer_domestic_title')}</h3>
                    <ul className="text-sm text-blue-800 space-y-2">
                        {t('transfer_domestic_items').map((item: any, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                    <h3 className="font-bold text-yellow-900 mb-3">{t('transfer_abroad_title')}</h3>
                    <ul className="text-sm text-yellow-800 space-y-2">
                        {t('transfer_abroad_items').map((item: any, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                    <p className="text-xs text-yellow-700 mt-3 italic">
                      {t('transfer_abroad_note')}
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-4">
                  <p className="text-red-800 font-semibold flex items-start space-x-2 rtl:space-x-reverse">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>{t('security_warning')}</strong>
                    </span>
                  </p>
                </div>
              </div>
            </section>

            {/* Veri Toplama Yöntemleri */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Database className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_5_title')}</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                {t('methods').map((method: any, i: number) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-5 flex items-start space-x-3 rtl:space-x-reverse">
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                            <h3 className="font-bold text-gray-900">{method.title}</h3>
                            <p className="text-sm">{method.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
            </section>

            {/* Hukuki Sebepler */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Shield className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_6_title')}</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  {t('sec_6_intro')}
                </p>
                {t('legal_bases').map((base: any, i: number) => (
                    <div key={i} className={`rounded-xl p-5 ${i === 0 ? 'bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400' : 'bg-blue-50 border border-blue-300'}`}>
                        <h3 className={`font-bold mb-1 ${i === 0 ? 'text-green-900' : 'text-blue-900'}`}>
                            {i === 0 && '✓ '} {base}
                        </h3>
                    </div>
                ))}
              </div>
            </section>

            {/* Veri Saklama Süreleri */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Lock className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_7_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t('retention_intro')}
                </p>
                <div className="bg-gray-50 rounded-xl p-6 space-y-3 text-sm">
                  {t('retention_items').map((item: any, i: number) => (
                      <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                        <span>{item.key}</span>
                        <span className="text-primary-500 font-bold">{item.val}</span>
                      </div>
                  ))}
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-yellow-800 font-semibold text-sm">
                    {t('retention_note')}
                  </p>
                </div>
              </div>
            </section>

            {/* KVKK Hakları */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Eye className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_8_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t('sec_8_intro')}
                </p>
                <div className="bg-gradient-to-br from-primary-50 to-accent/10 rounded-2xl p-6 md:p-8 border-2 border-primary-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    {t('rights').map((right: any, i: number) => (
                        <div key={i} className="flex items-start space-x-3 rtl:space-x-reverse">
                            <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{i + 1}</div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">{right}</h3>
                            </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Başvuru Yöntemleri */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Mail className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_9_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
                    <Mail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{t('apply_email')}</h3>
                    <a href="mailto:info@istanbultransfer.com" className="text-sm underline">
                      info@istanbultransfer.com
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
                    <FileText className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{t('apply_written')}</h3>
                    <p className="text-xs">
                      Atatürk Mahallesi<br />
                      İstanbul, Türkiye
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{t('apply_kep')}</h3>
                    <p className="text-xs opacity-75">
                      (Varsa belirtilecek)
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900 text-white rounded-xl p-6 mt-6">
                  <h3 className="font-bold text-primary-400 mb-3">{t('apply_reqs_title')}</h3>
                  <ul className="space-y-2 text-sm">
                    {t('apply_reqs_items').map((req: any, i: number) => <li key={i}>{req}</li>)}
                  </ul>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 mt-4">
                  <h3 className="font-bold text-yellow-900 mb-2 flex items-center space-x-2 rtl:space-x-reverse">
                    <AlertTriangle className="w-5 h-5" />
                    <span>{t('apply_process_title')}</span>
                  </h3>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    {t('apply_process_items').map((proc: any, i: number) => <li key={i}>{proc}</li>)}
                  </ul>
                </div>
              </div>
            </section>

            {/* Güncellemeler */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('sec_10_title')}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t('sec_10_text')}
                </p>
              </div>
            </section>

            {/* Footer Action */}
            <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-accent text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>{t('nav_back')}</span>
                </motion.div>
              </Link>
              
              <Link href="/gizlilik-politikasi" className="flex-1">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
                >
                    <Shield className="w-5 h-5" />
                    <span>{t('btn_privacy')}</span>
                </motion.div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}