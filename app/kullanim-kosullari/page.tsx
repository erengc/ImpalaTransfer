'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, XCircle, AlertTriangle, Clock, CreditCard, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function KullanimKosullari() {
  // --- DİL VE STATE YÖNETİMİ ---
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

  // --- ÇEVİRİLER ---
  const translations = {
    tr: {
      nav_back: 'Ana Sayfa',
      page_title: 'Kullanım Koşulları',
      page_subtitle: 'Hizmetlerimizi kullanmadan önce lütfen dikkatlice okuyunuz',
      last_updated: 'Son Güncelleme: 18 Kasım 2024',
      
      // Bölüm 1
      sec_1_title: '1. Genel Hükümler',
      sec_1_p1: 'İşbu Kullanım Koşulları, Impala Transfer ("Şirket", "Biz", "Bizim") tarafından sunulan transfer ve ulaşım hizmetlerinin kullanım şartlarını belirler.',
      sec_1_p2: 'Web sitemizi ziyaret ederek veya hizmetlerimizi kullanarak, bu koşulları kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız, lütfen hizmetlerimizi kullanmayınız.',
      sec_1_warning: '18 yaşından küçükseniz veya yasal bir temsilci olmadan hareket ediyorsanız, hizmetlerimizi kullanmadan önce ebeveyn veya vasinizin iznini almalısınız.',

      // Bölüm 2
      sec_2_title: '2. Hizmet Kapsamı',
      sec_2_intro: 'Sunduğumuz hizmetler:',
      sec_2_items: [
        { title: 'Havalimanı Transferi', desc: 'İstanbul Havalimanı ve Sabiha Gökçen Havalimanı karşılama ve uğurlama hizmetleri' },
        { title: 'Şehir İçi Transfer', desc: 'İstanbul içindeki tüm semtler arası güvenli ulaşım' },
        { title: 'Şehirler Arası Transfer', desc: 'İstanbul çıkışlı Türkiye geneli transfer hizmetleri' },
        { title: 'Turistik Turlar', desc: 'İstanbul ve çevresi günübirlik tur programları' },
        { title: 'VIP Transfer', desc: 'Lüks araçlarla özel transfer hizmeti' },
        { title: 'Grup Transferi', desc: 'Minibüs ve otobüslerle toplu ulaşım' }
      ],

      // Bölüm 3
      sec_3_title: '3. Rezervasyon Koşulları',
      sec_3_items: [
        { title: 'Rezervasyon Süresi', desc: 'Rezervasyonlar en az 4 saat öncesinden yapılmalıdır. Acil rezervasyonlar için telefon ile iletişime geçiniz.' },
        { title: 'Onay Süreci', desc: 'Rezervasyonunuz tarafımızca onaylandıktan sonra geçerlilik kazanır. Onay SMS veya e-posta ile bildirilir.' },
        { title: 'Bilgi Doğruluğu', desc: 'Rezervasyon sırasında verdiğiniz tüm bilgilerin doğru ve eksiksiz olduğundan emin olmalısınız.' },
        { title: 'Karşılama Hizmetleri', desc: 'Havalimanı karşılama hizmetlerinde, uçuş numarası ve geliş saati mutlaka belirtilmelidir.' }
      ],

      // Bölüm 4
      sec_4_title: '4. Ödeme Koşulları',
      sec_4_intro: 'Ödeme Yöntemleri:',
      sec_4_methods: [
        { title: '💵 Nakit Ödeme', desc: 'Hizmet sonrası şoföre nakit ödeme yapabilirsiniz (TL, USD, EUR kabul edilir)' },
        { title: '💳 Kredi Kartı', desc: 'Online ödeme veya araçta POS cihazı ile ödeme yapabilirsiniz' },
        { title: '🏦 Banka Havalesi', desc: 'Kurumsal rezervasyonlar için havale/EFT imkanı mevcuttur' },
        { title: '📱 Online Ödeme', desc: 'Güvenli ödeme sistemleri ile online ödeme yapabilirsiniz' }
      ],
      sec_4_note: '💡 Not: Fiyatlarımıza KDV dahildir. Köprü, otoyol geçiş ücretleri ve otopark ücretleri (varsa) müşteriye aittir.',

      // Bölüm 5
      sec_5_title: '5. İptal ve İade Politikası',
      sec_5_items: [
        { icon: '✓', color: 'green', title: '24 Saat Öncesi İptal', desc: 'Transfer saatinden 24 saat önce iptal edilen rezervasyonlarda %100 iade yapılır.' },
        { icon: '⚠', color: 'yellow', title: '12-24 Saat Arası İptal', desc: 'Transfer saatinden 12-24 saat arası iptal edilen rezervasyonlarda %50 iade yapılır.' },
        { icon: '✗', color: 'red', title: '12 Saatten Sonra İptal', desc: 'Transfer saatinden 12 saat içinde iptal edilen veya no-show rezervasyonlarda iade yapılmaz.' }
      ],
      sec_5_contact: 'İptal işlemleri için:',

      // Bölüm 6
      sec_6_title: '6. Sorumluluklar ve Yükümlülükler',
      sec_6_company_title: 'Şirket Sorumlulukları:',
      sec_6_company_items: [
        'Belirtilen tarih ve saatte hizmet sunmak',
        'Temiz, bakımlı ve güvenli araçlar sağlamak',
        'Profesyonel, deneyimli ve ehliyet sahibi şoförler görevlendirmek',
        'Müşteri verilerinin gizliliğini korumak'
      ],
      sec_6_customer_title: 'Müşteri Sorumlulukları:',
      sec_6_customer_items: [
        'Rezervasyon bilgilerini doğru ve eksiksiz vermek',
        'Belirlenen tarih ve saatte hazır olmak',
        'Araç içinde sigara içmemek, alkol tüketmemek',
        'Eşyaların güvenliğinden sorumlu olmak'
      ],
      sec_6_warning: '⚠️ Önemli: Araç içinde kasıtlı zarar verilmesi, kural ihlali veya uygunsuz davranışlarda bulunulması durumunda transfer hizmeti sonlandırılabilir.',

      // Bölüm 7
      sec_7_title: '7. Mücbir Sebepler',
      sec_7_text: 'Doğal afetler, savaş, terör eylemleri, grev, lokavt, hükümet kararları, trafik kazaları, yol kapanması gibi sebeplerden dolayı Şirket sorumlu tutulamaz.',

      // Bölüm 8
      sec_8_title: '8. Fiyatlandırma ve Ek Ücretler',
      sec_8_included_title: 'Fiyatlara Dahil Olan Hizmetler:',
      sec_8_included_items: [
        'Araç kirası ve yakıt ücreti',
        'Profesyonel şoför hizmeti',
        'Su ikramı ve WiFi',
        'KDV (%10)',
        'Havalimanı karşılama tabelası',
        'Makul bekleme süresi'
      ],
      sec_8_excluded_title: 'Fiyata Dahil OLMAYAN Ek Ücretler:',
      sec_8_excluded_items: [
        'Köprü ve Tünel Geçiş Ücretleri',
        'Otoyol ve HGS Ücretleri',
        'Otopark Ücretleri',
        'Şoför Bahşişi',
        'Fazla Bekleme Ücreti',
        'Ekstra Mesafe Ücreti'
      ],
      sec_8_note: '💡 Bilgilendirme: Tüm ek ücretler transfer başlamadan önce müşteriye bildirilir ve onay alınır.',

      // Bölüm 9
      sec_9_title: '9. Bagaj ve Eşya Politikası',
      sec_9_std_title: 'Standart Bagaj Limitleri:',
      sec_9_std_items: [
        { title: '🚗 Standart Vito', desc: '4 büyük valiz + 2 el bagajı' },
        { title: '🚙 VIP Vito', desc: '4 büyük valiz + 2 el bagajı' },
        { title: '🚐 Sprinter', desc: 'Kişi başına 1 büyük valiz + 1 el bagajı' }
      ],
      sec_9_warning: 'Önemli: Büyük boy eşyalar rezervasyon sırasında mutlaka bildirilmelidir.',
      sec_9_list: [
        'Eşyaların güvenliğinden müşteri sorumludur',
        'Araç içinde unutulan eşyalar için Şirket sorumlu tutulamaz',
        'Yasaklı maddeler kesinlikle taşınmaz'
      ],

      // Bölüm 10
      sec_10_title: '10. Yolcu Hakları ve Kurallar',
      sec_10_rights_title: 'Yolcu Hakları:',
      sec_10_rights_items: ['Güvenli araç', 'Nazik şoför', 'Bilgi alma', 'Fatura talep etme'],
      sec_10_forbidden_title: 'Yasaklı Davranışlar:',
      sec_10_forbidden_items: ['Sigara içmek', 'Alkol tüketmek', 'Şoföre müdahale', 'Araca zarar vermek'],
      sec_10_warning: '⚠️ Yasaklı davranışlarda hizmet sonlandırılır.',

      // Bölüm 11-15
      sec_11_title: '11. Çocuk ve Bebek Taşıma',
      sec_11_text: 'Yasal zorunluluk gereği çocuk koltuğu kullanımı zorunludur. Talep üzerine temin edilir.',
      
      sec_12_title: '12. Gecikme ve No-Show',
      sec_12_delay_title: 'Gecikme:',
      sec_12_delay_desc: 'Havalimanında 45 dk, diğer yerlerde 15 dk ücretsiz bekleme.',
      sec_12_noshow_title: 'No-Show:',
      sec_12_noshow_desc: 'Belirtilen saatte gelinmezse ücret iadesi yapılmaz.',
      
      sec_13_title: '13. Sorumluluk Sınırlamaları',
      sec_13_text: 'Müşteri kaynaklı hatalardan veya üçüncü taraflardan doğan zararlardan şirket sorumlu değildir.',
      
      sec_14_title: '14. Uyuşmazlıkların Çözümü',
      sec_14_text: 'İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.',
      
      sec_15_title: '15. Değişiklikler',
      sec_15_text: 'Şirket bu koşulları değiştirme hakkını saklı tutar.'
    },

    en: {
      nav_back: 'Home',
      page_title: 'Terms of Use',
      page_subtitle: 'Please read carefully before using our services',
      last_updated: 'Last Updated: November 18, 2024',
      
      sec_1_title: '1. General Provisions',
      sec_1_p1: 'These Terms of Use determine the terms of use of transfer and transportation services provided by Impala Transfer ("Company", "We", "Our").',
      sec_1_p2: 'By visiting our website or using our services, you are deemed to have accepted these terms. If you do not agree, please do not use our services.',
      sec_1_warning: 'If you are under 18 or acting without a legal representative, you must obtain permission from your parent or guardian before using our services.',

      sec_2_title: '2. Scope of Service',
      sec_2_intro: 'Services we offer:',
      sec_2_items: [
        { title: 'Airport Transfer', desc: 'Meet and greet services at Istanbul Airport and Sabiha Gokcen Airport' },
        { title: 'City Transfer', desc: 'Safe transportation between all districts in Istanbul' },
        { title: 'Intercity Transfer', desc: 'Transfer services throughout Turkey departing from Istanbul' },
        { title: 'Tourist Tours', desc: 'Daily tour programs in Istanbul and its surroundings' },
        { title: 'VIP Transfer', desc: 'Private transfer service with luxury vehicles' },
        { title: 'Group Transfer', desc: 'Public transportation with minibuses and buses' }
      ],

      sec_3_title: '3. Reservation Conditions',
      sec_3_items: [
        { title: 'Reservation Time', desc: 'Reservations must be made at least 4 hours in advance. Please contact by phone for urgent reservations.' },
        { title: 'Approval Process', desc: 'Your reservation becomes valid after approval by us. Confirmation is notified via SMS or e-mail.' },
        { title: 'Accuracy of Information', desc: 'You must ensure that all information you provide during reservation is correct and complete.' },
        { title: 'Greeting Services', desc: 'For airport greeting services, flight number and arrival time must be specified.' }
      ],

      sec_4_title: '4. Payment Conditions',
      sec_4_intro: 'Payment Methods:',
      sec_4_methods: [
        { title: '💵 Cash Payment', desc: 'You can pay cash to the driver after service (TL, USD, EUR accepted)' },
        { title: '💳 Credit Card', desc: 'You can pay online or with a POS device in the vehicle' },
        { title: '🏦 Bank Transfer', desc: 'Wire transfer/EFT is available for corporate reservations' },
        { title: '📱 Online Payment', desc: 'You can pay online with secure payment systems' }
      ],
      sec_4_note: '💡 Note: VAT is included in our prices. Bridge, highway tolls and parking fees (if any) belong to the customer.',

      sec_5_title: '5. Cancellation and Refund Policy',
      sec_5_items: [
        { icon: '✓', color: 'green', title: 'Cancellation 24 Hours Prior', desc: '100% refund is made for reservations cancelled 24 hours before transfer time.' },
        { icon: '⚠', color: 'yellow', title: 'Cancellation 12-24 Hours Prior', desc: '50% refund is made for reservations cancelled between 12-24 hours before transfer time.' },
        { icon: '✗', color: 'red', title: 'Cancellation After 12 Hours', desc: 'No refund is made for reservations cancelled within 12 hours of transfer time or no-shows.' }
      ],
      sec_5_contact: 'For cancellation transactions:',

      sec_6_title: '6. Responsibilities and Obligations',
      sec_6_company_title: 'Company Responsibilities:',
      sec_6_company_items: [
        'Providing service at the specified date and time',
        'Providing clean, well-maintained and safe vehicles',
        'Employing professional, experienced drivers with licenses',
        'Protecting the privacy of customer data'
      ],
      sec_6_customer_title: 'Customer Responsibilities:',
      sec_6_customer_items: [
        'Providing accurate and complete reservation information',
        'Being ready at the designated date and time',
        'Not smoking or consuming alcohol in the vehicle',
        'Being responsible for the safety of belongings'
      ],
      sec_6_warning: '⚠️ Important: In case of intentional damage to the vehicle, violation of rules or inappropriate behavior, the transfer service may be terminated.',

      sec_7_title: '7. Force Majeure',
      sec_7_text: 'The Company cannot be held responsible for delays caused by force majeure such as natural disasters, war, terrorist acts, strikes, government decisions, traffic accidents, road closures.',

      sec_8_title: '8. Pricing and Extra Fees',
      sec_8_included_title: 'Services Included in Price:',
      sec_8_included_items: [
        'Vehicle rental and fuel',
        'Professional driver service',
        'Water treat and WiFi',
        'VAT (10%)',
        'Airport greeting sign',
        'Reasonable waiting time'
      ],
      sec_8_excluded_title: 'Extra Fees NOT Included:',
      sec_8_excluded_items: [
        'Bridge and Tunnel Tolls',
        'Highway Tolls',
        'Parking Fees',
        'Driver Tip',
        'Extra Waiting Fee',
        'Extra Distance Fee'
      ],
      sec_8_note: '💡 Information: All extra fees are notified to the customer before the transfer starts and approval is obtained.',

      sec_9_title: '9. Luggage and Belongings Policy',
      sec_9_std_title: 'Standard Luggage Limits:',
      sec_9_std_items: [
        { title: '🚗 Standard Vito', desc: '4 large suitcases + 2 handbags' },
        { title: '🚙 VIP Vito', desc: '4 large suitcases + 2 handbags' },
        { title: '🚐 Sprinter', desc: '1 large suitcase + 1 handbag per person' }
      ],
      sec_9_warning: 'Important: Large items must be notified during reservation.',
      sec_9_list: [
        'Customer is responsible for safety of belongings',
        'Company is not responsible for items forgotten in vehicle',
        'Prohibited substances are strictly not transported'
      ],

      sec_10_title: '10. Passenger Rights and Rules',
      sec_10_rights_title: 'Passenger Rights:',
      sec_10_rights_items: ['Safe vehicle', 'Polite driver', 'Information', 'Invoice request'],
      sec_10_forbidden_title: 'Prohibited Behaviors:',
      sec_10_forbidden_items: ['Smoking', 'Alcohol consumption', 'Interfering with driver', 'Damaging vehicle'],
      sec_10_warning: '⚠️ Service is terminated for prohibited behaviors.',

      sec_11_title: '11. Child and Infant Transport',
      sec_11_text: 'Use of child seats is mandatory by law. Provided upon request.',
      
      sec_12_title: '12. Delay and No-Show',
      sec_12_delay_title: 'Delay:',
      sec_12_delay_desc: '45 min free waiting at airport, 15 min elsewhere.',
      sec_12_noshow_title: 'No-Show:',
      sec_12_noshow_desc: 'No refund if not arrived at specified time.',
      
      sec_13_title: '13. Limitation of Liability',
      sec_13_text: 'Company is not responsible for damages arising from customer errors or third parties.',
      
      sec_14_title: '14. Dispute Resolution',
      sec_14_text: 'Istanbul Courts and Enforcement Offices are authorized.',
      
      sec_15_title: '15. Amendments',
      sec_15_text: 'Company reserves the right to change these terms.'
    },
    de: {
      nav_back: 'Startseite',
      page_title: 'Nutzungsbedingungen',
      page_subtitle: 'Bitte lesen Sie diese sorgfältig durch, bevor Sie unsere Dienste nutzen',
      last_updated: 'Letzte Aktualisierung: 18. November 2024',
      
      sec_1_title: '1. Allgemeine Bestimmungen',
      sec_1_p1: 'Diese Nutzungsbedingungen legen die Bedingungen für die von Impala Transfer ("Unternehmen", "Wir", "Unser") angebotenen Transfer- und Transportdienste fest.',
      sec_1_p2: 'Durch den Besuch unserer Website oder die Nutzung unserer Dienste gelten diese Bedingungen als akzeptiert. Wenn Sie nicht einverstanden sind, nutzen Sie unsere Dienste bitte nicht.',
      sec_1_warning: 'Wenn Sie unter 18 Jahre alt sind oder ohne gesetzlichen Vertreter handeln, müssen Sie vor der Nutzung unserer Dienste die Erlaubnis Ihrer Eltern oder Erziehungsberechtigten einholen.',

      sec_2_title: '2. Dienstleistungsumfang',
      sec_2_intro: 'Unsere Dienstleistungen:',
      sec_2_items: [
        { title: 'Flughafentransfer', desc: 'Abhol- und Bringservice am Flughafen Istanbul und Sabiha Gökcen' },
        { title: 'Stadttransfer', desc: 'Sicherer Transport zwischen allen Bezirken Istanbuls' },
        { title: 'Intercity-Transfer', desc: 'Transferdienste in der ganzen Türkei ab Istanbul' },
        { title: 'Touristische Touren', desc: 'Tägliche Tourprogramme in Istanbul und Umgebung' },
        { title: 'VIP-Transfer', desc: 'Privater Transferservice mit Luxusfahrzeugen' },
        { title: 'Gruppentransfer', desc: 'Öffentlicher Verkehr mit Minibussen und Bussen' }
      ],

      sec_3_title: '3. Reservierungsbedingungen',
      sec_3_items: [
        { title: 'Reservierungszeit', desc: 'Reservierungen müssen mindestens 4 Stunden im Voraus erfolgen. Für dringende Reservierungen kontaktieren Sie uns bitte telefonisch.' },
        { title: 'Genehmigungsprozess', desc: 'Ihre Reservierung wird nach unserer Bestätigung gültig. Die Bestätigung erfolgt per SMS oder E-Mail.' },
        { title: 'Richtigkeit der Informationen', desc: 'Sie müssen sicherstellen, dass alle bei der Reservierung angegebenen Informationen korrekt und vollständig sind.' },
        { title: 'Empfangsdienste', desc: 'Bei Abholungen am Flughafen müssen Flugnummer und Ankunftszeit angegeben werden.' }
      ],

      sec_4_title: '4. Zahlungsbedingungen',
      sec_4_intro: 'Zahlungsmethoden:',
      sec_4_methods: [
        { title: '💵 Barzahlung', desc: 'Sie können nach dem Service bar beim Fahrer bezahlen (TL, USD, EUR akzeptiert)' },
        { title: '💳 Kreditkarte', desc: 'Sie können online oder mit einem POS-Gerät im Fahrzeug bezahlen' },
        { title: '🏦 Banküberweisung', desc: 'Überweisung/EFT ist für Firmenreservierungen verfügbar' },
        { title: '📱 Online-Zahlung', desc: 'Sie können sicher online bezahlen' }
      ],
      sec_4_note: '💡 Hinweis: Unsere Preise verstehen sich inklusive MwSt. Brücken-, Autobahngebühren und Parkgebühren (falls vorhanden) gehen zu Lasten des Kunden.',

      sec_5_title: '5. Stornierungs- und Rückerstattungsrichtlinien',
      sec_5_items: [
        { icon: '✓', color: 'green', title: 'Stornierung 24 Stunden vorher', desc: 'Bei Stornierung 24 Stunden vor der Transferzeit werden 100% erstattet.' },
        { icon: '⚠', color: 'yellow', title: 'Stornierung 12-24 Stunden vorher', desc: 'Bei Stornierung zwischen 12-24 Stunden vor der Transferzeit werden 50% erstattet.' },
        { icon: '✗', color: 'red', title: 'Stornierung nach 12 Stunden', desc: 'Bei Stornierung innerhalb von 12 Stunden vor der Transferzeit oder bei Nichterscheinen erfolgt keine Rückerstattung.' }
      ],
      sec_5_contact: 'Für Stornierungsvorgänge:',

      sec_6_title: '6. Verantwortlichkeiten und Pflichten',
      sec_6_company_title: 'Verantwortlichkeiten des Unternehmens:',
      sec_6_company_items: [
        'Dienstleistung zum angegebenen Datum und zur angegebenen Zeit',
        'Bereitstellung sauberer, gepflegter und sicherer Fahrzeuge',
        'Einsatz von professionellen, erfahrenen Fahrern mit Lizenz',
        'Schutz der Kundendaten'
      ],
      sec_6_customer_title: 'Verantwortlichkeiten des Kunden:',
      sec_6_customer_items: [
        'Angabe korrekter und vollständiger Reservierungsinformationen',
        'Bereitschaft zum angegebenen Zeitpunkt',
        'Kein Rauchen oder Alkoholkonsum im Fahrzeug',
        'Verantwortung für die Sicherheit des Gepäcks'
      ],
      sec_6_warning: '⚠️ Wichtig: Bei vorsätzlicher Beschädigung des Fahrzeugs, Regelverstößen oder unangemessenem Verhalten kann der Transferservice beendet werden.',

      sec_7_title: '7. Höhere Gewalt',
      sec_7_text: 'Das Unternehmen haftet nicht für Verzögerungen aufgrund höherer Gewalt wie Naturkatastrophen, Krieg, Terroranschläge, Streiks, Regierungsbeschlüsse, Verkehrsunfälle oder Straßensperrungen.',

      sec_8_title: '8. Preise und Zusatzgebühren',
      sec_8_included_title: 'Im Preis inbegriffene Leistungen:',
      sec_8_included_items: [
        'Fahrzeugmiete und Kraftstoff',
        'Professioneller Fahrerservice',
        'Wasser und WLAN',
        'MwSt (10%)',
        'Flughafen-Empfangsschild',
        'Angemessene Wartezeit'
      ],
      sec_8_excluded_title: 'NICHT inbegriffene Zusatzgebühren:',
      sec_8_excluded_items: [
        'Brücken- und Tunnelgebühren',
        'Autobahn- und Mautgebühren',
        'Parkgebühren',
        'Fahrertrinkgeld',
        'Zusätzliche Wartegebühr',
        'Zusätzliche Entfernungsgebühr'
      ],
      sec_8_note: '💡 Information: Alle Zusatzgebühren werden dem Kunden vor Beginn des Transfers mitgeteilt und genehmigt.',

      sec_9_title: '9. Gepäck- und Sachrichtlinien',
      sec_9_std_title: 'Standard-Gepäcklimits:',
      sec_9_std_items: [
        { title: '🚗 Standard Vito', desc: '4 große Koffer + 2 Handgepäck' },
        { title: '🚙 VIP Vito', desc: '4 große Koffer + 2 Handgepäck' },
        { title: '🚐 Sprinter', desc: '1 großer Koffer + 1 Handgepäck pro Person' }
      ],
      sec_9_warning: 'Wichtig: Großes Gepäck muss bei der Reservierung angegeben werden.',
      sec_9_list: [
        'Der Kunde ist für die Sicherheit der Gegenstände verantwortlich',
        'Das Unternehmen haftet nicht für im Fahrzeug vergessene Gegenstände',
        'Verbotene Substanzen werden keinesfalls transportiert'
      ],

      sec_10_title: '10. Fahrgastrechte und Regeln',
      sec_10_rights_title: 'Fahrgastrechte:',
      sec_10_rights_items: ['Sicheres Fahrzeug', 'Höflicher Fahrer', 'Information', 'Rechnungsanforderung'],
      sec_10_forbidden_title: 'Verbotenes Verhalten:',
      sec_10_forbidden_items: ['Rauchen', 'Alkoholkonsum', 'Eingriff in das Fahren', 'Beschädigung des Fahrzeugs'],
      sec_10_warning: '⚠️ Bei verbotenem Verhalten wird der Service beendet.',

      sec_11_title: '11. Kinder- und Babytransport',
      sec_11_text: 'Die Verwendung von Kindersitzen ist gesetzlich vorgeschrieben. Wird auf Anfrage bereitgestellt.',
      
      sec_12_title: '12. Verspätung und Nichterscheinen',
      sec_12_delay_title: 'Verspätung:',
      sec_12_delay_desc: '45 Min. kostenlose Wartezeit am Flughafen, sonst 15 Min.',
      sec_12_noshow_title: 'Nichterscheinen:',
      sec_12_noshow_desc: 'Keine Rückerstattung bei Nichterscheinen zur angegebenen Zeit.',
      
      sec_13_title: '13. Haftungsbeschränkung',
      sec_13_text: 'Das Unternehmen haftet nicht für Schäden, die durch Fehler des Kunden oder Dritter entstehen.',
      
      sec_14_title: '14. Streitbeilegung',
      sec_14_text: 'Zuständig sind die Gerichte und Vollstreckungsämter in Istanbul.',
      
      sec_15_title: '15. Änderungen',
      sec_15_text: 'Das Unternehmen behält sich das Recht vor, diese Bedingungen zu ändern.'
    },

    ru: {
      nav_back: 'На главную',
      page_title: 'Условия использования',
      page_subtitle: 'Пожалуйста, внимательно прочитайте перед использованием наших услуг',
      last_updated: 'Последнее обновление: 18 ноября 2024 г.',
      
      sec_1_title: '1. Общие положения',
      sec_1_p1: 'Настоящие Условия использования определяют условия предоставления услуг трансфера и перевозок компанией Impala Transfer ("Компания", "Мы", "Наш").',
      sec_1_p2: 'Посещая наш сайт или используя наши услуги, вы соглашаетесь с этими условиями. Если вы не согласны, пожалуйста, не используйте наши услуги.',
      sec_1_warning: 'Если вам меньше 18 лет или вы действуете без законного представителя, вы должны получить разрешение родителей или опекуна перед использованием услуг.',

      sec_2_title: '2. Объем услуг',
      sec_2_intro: 'Предоставляемые услуги:',
      sec_2_items: [
        { title: 'Трансфер из аэропорта', desc: 'Встреча и проводы в аэропортах Стамбула и Сабиха Гёкчен' },
        { title: 'Городской трансфер', desc: 'Безопасные перевозки между всеми районами Стамбула' },
        { title: 'Междугородний трансфер', desc: 'Трансферы по всей Турции с выездом из Стамбула' },
        { title: 'Туристические туры', desc: 'Ежедневные экскурсионные программы по Стамбулу и окрестностям' },
        { title: 'VIP Трансфер', desc: 'Индивидуальный трансфер на автомобилях класса люкс' },
        { title: 'Групповой трансфер', desc: 'Групповые перевозки на микроавтобусах и автобусах' }
      ],

      sec_3_title: '3. Условия бронирования',
      sec_3_items: [
        { title: 'Время бронирования', desc: 'Бронирование должно быть сделано минимум за 4 часа. Для срочных заказов свяжитесь по телефону.' },
        { title: 'Процесс подтверждения', desc: 'Ваше бронирование становится действительным после нашего подтверждения. Уведомление приходит по SMS или E-mail.' },
        { title: 'Точность информации', desc: 'Вы должны убедиться, что вся информация, предоставленная при бронировании, верна и полна.' },
        { title: 'Услуги встречи', desc: 'Для встречи в аэропорту обязательно укажите номер рейса и время прибытия.' }
      ],

      sec_4_title: '4. Условия оплаты',
      sec_4_intro: 'Способы оплаты:',
      sec_4_methods: [
        { title: '💵 Наличные', desc: 'Оплата водителю после поездки (принимаются TL, USD, EUR)' },
        { title: '💳 Кредитная карта', desc: 'Оплата онлайн или через POS-терминал в автомобиле' },
        { title: '🏦 Банковский перевод', desc: 'Доступен для корпоративных бронирований' },
        { title: '📱 Онлайн оплата', desc: 'Безопасная оплата через онлайн-системы' }
      ],
      sec_4_note: '💡 Примечание: Цены включают НДС. Плата за мосты, платные дороги и парковку (если есть) оплачивается клиентом.',

      sec_5_title: '5. Политика отмены и возврата',
      sec_5_items: [
        { icon: '✓', color: 'green', title: 'Отмена за 24 часа', desc: '100% возврат средств при отмене за 24 часа до времени трансфера.' },
        { icon: '⚠', color: 'yellow', title: 'Отмена за 12-24 часа', desc: '50% возврат средств при отмене в период от 12 до 24 часов до трансфера.' },
        { icon: '✗', color: 'red', title: 'Отмена менее чем за 12 часов', desc: 'Возврат не производится при отмене менее чем за 12 часов или неявке.' }
      ],
      sec_5_contact: 'Для операций отмены:',

      sec_6_title: '6. Ответственность и обязательства',
      sec_6_company_title: 'Обязанности Компании:',
      sec_6_company_items: [
        'Предоставление услуги в указанную дату и время',
        'Предоставление чистых и безопасных автомобилей',
        'Найм профессиональных водителей с лицензией',
        'Защита конфиденциальности данных клиентов'
      ],
      sec_6_customer_title: 'Обязанности Клиента:',
      sec_6_customer_items: [
        'Предоставление точной информации о бронировании',
        'Готовность в назначенное время',
        'Запрет на курение и алкоголь в автомобиле',
        'Ответственность за сохранность вещей'
      ],
      sec_6_warning: '⚠️ Важно: При умышленном повреждении авто, нарушении правил или неадекватном поведении услуга может быть прекращена.',

      sec_7_title: '7. Форс-мажор',
      sec_7_text: 'Компания не несет ответственности за задержки, вызванные стихийными бедствиями, войной, забастовками, решениями властей, ДТП или перекрытием дорог.',

      sec_8_title: '8. Ценообразование и доплаты',
      sec_8_included_title: 'Включено в цену:',
      sec_8_included_items: [
        'Аренда авто и топливо',
        'Услуги водителя',
        'Вода и WiFi',
        'НДС (10%)',
        'Табличка в аэропорту',
        'Разумное время ожидания'
      ],
      sec_8_excluded_title: 'НЕ включено в цену:',
      sec_8_excluded_items: [
        'Плата за мосты и туннели',
        'Платные дороги',
        'Парковка',
        'Чаевые водителю',
        'Дополнительное ожидание',
        'Дополнительное расстояние'
      ],
      sec_8_note: '💡 Инфо: Обо всех доплатах сообщается клиенту до начала трансфера для подтверждения.',

      sec_9_title: '9. Политика багажа',
      sec_9_std_title: 'Стандартные лимиты багажа:',
      sec_9_std_items: [
        { title: '🚗 Стандарт Vito', desc: '4 больших чемодана + 2 ручные клади' },
        { title: '🚙 VIP Vito', desc: '4 больших чемодана + 2 ручные клади' },
        { title: '🚐 Sprinter', desc: '1 большой чемодан + 1 ручная кладь на чел.' }
      ],
      sec_9_warning: 'Важно: О крупногабаритном багаже необходимо сообщить при бронировании.',
      sec_9_list: [
        'Клиент отвечает за безопасность вещей',
        'Компания не отвечает за забытые вещи',
        'Запрещенные вещества не перевозятся'
      ],

      sec_10_title: '10. Права пассажиров и правила',
      sec_10_rights_title: 'Права пассажира:',
      sec_10_rights_items: ['Безопасное авто', 'Вежливый водитель', 'Информация', 'Запрос счета'],
      sec_10_forbidden_title: 'Запрещено:',
      sec_10_forbidden_items: ['Курение', 'Алкоголь', 'Помехи водителю', 'Порча авто'],
      sec_10_warning: '⚠️ При нарушении правил услуга прекращается.',

      sec_11_title: '11. Перевозка детей',
      sec_11_text: 'Использование детских кресел обязательно по закону. Предоставляется по запросу.',
      
      sec_12_title: '12. Задержка и неявка',
      sec_12_delay_title: 'Задержка:',
      sec_12_delay_desc: '45 мин бесплатно в аэропорту, 15 мин в других местах.',
      sec_12_noshow_title: 'Неявка (No-Show):',
      sec_12_noshow_desc: 'Возврат не производится при отсутствии в указанное время.',
      
      sec_13_title: '13. Ограничение ответственности',
      sec_13_text: 'Компания не отвечает за ущерб, возникший по вине клиента или третьих лиц.',
      
      sec_14_title: '14. Разрешение споров',
      sec_14_text: 'Компетентными являются суды и исполнительные органы Стамбула.',
      
      sec_15_title: '15. Изменения',
      sec_15_text: 'Компания оставляет за собой право изменять эти условия.'
    },

    ar: {
      nav_back: 'الرئيسية',
      page_title: 'شروط الاستخدام',
      page_subtitle: 'يرجى القراءة بعناية قبل استخدام خدماتنا',
      last_updated: 'آخر تحديث: 18 نوفمبر 2024',
      
      sec_1_title: '1. أحكام عامة',
      sec_1_p1: 'تحدد شروط الاستخدام هذه شروط استخدام خدمات النقل والمواصلات المقدمة من قبل Impala Transfer ("الشركة"، "نحن"، "لنا").',
      sec_1_p2: 'من خلال زيارة موقعنا أو استخدام خدماتنا، تعتبر موافقًا على هذه الشروط. إذا لم تكن موافقًا، يرجى عدم استخدام خدماتنا.',
      sec_1_warning: 'إذا كان عمرك أقل من 18 عامًا أو تتصرف بدون ممثل قانوني، يجب عليك الحصول على إذن من والديك أو الوصي عليك قبل استخدام خدماتنا.',

      sec_2_title: '2. نطاق الخدمة',
      sec_2_intro: 'الخدمات التي نقدمها:',
      sec_2_items: [
        { title: 'نقل المطار', desc: 'خدمات الاستقبال والتوديع في مطار إسطنبول ومطار صبيحة كوكجن' },
        { title: 'نقل داخل المدينة', desc: 'نقل آمن بين جميع مناطق إسطنبول' },
        { title: 'نقل بين المدن', desc: 'خدمات نقل لجميع أنحاء تركيا انطلاقًا من إسطنبول' },
        { title: 'جولات سياحية', desc: 'برامج سياحية يومية في إسطنبول وما حولها' },
        { title: 'نقل VIP', desc: 'خدمة نقل خاصة بسيارات فاخرة' },
        { title: 'نقل المجموعات', desc: 'نقل جماعي بالحافلات الصغيرة والحافلات' }
      ],

      sec_3_title: '3. شروط الحجز',
      sec_3_items: [
        { title: 'وقت الحجز', desc: 'يجب أن يتم الحجز قبل 4 ساعات على الأقل. يرجى الاتصال هاتفيًا للحجوزات العاجلة.' },
        { title: 'عملية الموافقة', desc: 'يصبح حجزك ساري المفعول بعد موافقتنا. يتم الإخطار بالموافقة عبر الرسائل القصيرة أو البريد الإلكتروني.' },
        { title: 'دقة المعلومات', desc: 'يجب التأكد من أن جميع المعلومات المقدمة أثناء الحجز صحيحة وكاملة.' },
        { title: 'خدمات الاستقبال', desc: 'لخدمات استقبال المطار، يجب تحديد رقم الرحلة ووقت الوصول.' }
      ],

      sec_4_title: '4. شروط الدفع',
      sec_4_intro: 'طرق الدفع:',
      sec_4_methods: [
        { title: '💵 الدفع النقدي', desc: 'يمكنك الدفع نقدًا للسائق بعد الخدمة (نقبل الليرة، الدولار، اليورو)' },
        { title: '💳 بطاقة الائتمان', desc: 'يمكنك الدفع عبر الإنترنت أو عبر جهاز POS في السيارة' },
        { title: '🏦 التحويل البنكي', desc: 'متاح للحجوزات المؤسسية' },
        { title: '📱 الدفع عبر الإنترنت', desc: 'يمكنك الدفع بأمان عبر أنظمة الدفع الإلكتروني' }
      ],
      sec_4_note: '💡 ملاحظة: أسعارنا تشمل ضريبة القيمة المضافة. رسوم الجسور والطرق السريعة والمواقف (إن وجدت) يتحملها العميل.',

      sec_5_title: '5. سياسة الإلغاء والاسترداد',
      sec_5_items: [
        { icon: '✓', color: 'green', title: 'إلغاء قبل 24 ساعة', desc: 'يتم استرداد 100% للحجوزات الملغاة قبل 24 ساعة من موعد النقل.' },
        { icon: '⚠', color: 'yellow', title: 'إلغاء بين 12-24 ساعة', desc: 'يتم استرداد 50% للحجوزات الملغاة بين 12-24 ساعة قبل موعد النقل.' },
        { icon: '✗', color: 'red', title: 'إلغاء بعد 12 ساعة', desc: 'لا يتم استرداد أي مبلغ للحجوزات الملغاة خلال 12 ساعة من الموعد أو عدم الحضور.' }
      ],
      sec_5_contact: 'لعمليات الإلغاء:',

      sec_6_title: '6. المسؤوليات والالتزامات',
      sec_6_company_title: 'مسؤوليات الشركة:',
      sec_6_company_items: [
        'تقديم الخدمة في التاريخ والوقت المحددين',
        'توفير سيارات نظيفة ومصانة وآمنة',
        'توظيف سائقين محترفين وذوي خبرة ومرخصين',
        'حماية خصوصية بيانات العملاء'
      ],
      sec_6_customer_title: 'مسؤوليات العميل:',
      sec_6_customer_items: [
        'تقديم معلومات حجز دقيقة وكاملة',
        'الجاهزية في الوقت والمكان المحددين',
        'عدم التدخين أو شرب الكحول في السيارة',
        'المسؤولية عن سلامة الأمتعة'
      ],
      sec_6_warning: '⚠️ هام: في حالة الإضرار المتعمد بالسيارة أو انتهاك القواعد أو السلوك غير اللائق، قد يتم إنهاء خدمة النقل.',

      sec_7_title: '7. القوة القاهرة',
      sec_7_text: 'لا تتحمل الشركة المسؤولية عن التأخيرات الناتجة عن القوة القاهرة مثل الكوارث الطبيعية، الحروب، الإضرابات، القرارات الحكومية، حوادث المرور، أو إغلاق الطرق.',

      sec_8_title: '8. التسعير والرسوم الإضافية',
      sec_8_included_title: 'الخدمات المشمولة في السعر:',
      sec_8_included_items: [
        'إيجار السيارة والوقود',
        'خدمة سائق محترف',
        'المياه والواي فاي',
        'ضريبة القيمة المضافة (10%)',
        'لافتة استقبال المطار',
        'وقت انتظار معقول'
      ],
      sec_8_excluded_title: 'الرسوم غير المشمولة:',
      sec_8_excluded_items: [
        'رسوم الجسور والأنفاق',
        'رسوم الطرق السريعة',
        'رسوم المواقف',
        'إكرامية السائق',
        'رسوم الانتظار الإضافي',
        'رسوم المسافة الإضافية'
      ],
      sec_8_note: '💡 معلومة: يتم إبلاغ العميل بجميع الرسوم الإضافية قبل بدء النقل والحصول على الموافقة.',

      sec_9_title: '9. سياسة الأمتعة والممتلكات',
      sec_9_std_title: 'حدود الأمتعة القياسية:',
      sec_9_std_items: [
        { title: '🚗 فيتو عادي', desc: '4 حقائب كبيرة + 2 حقيبة يد' },
        { title: '🚙 فيتو VIP', desc: '4 حقائب كبيرة + 2 حقيبة يد' },
        { title: '🚐 سبرينتر', desc: 'حقيبة كبيرة + حقيبة يد لكل شخص' }
      ],
      sec_9_warning: 'هام: يجب الإبلاغ عن الأمتعة الكبيرة أثناء الحجز.',
      sec_9_list: [
        'العميل مسؤول عن سلامة الممتلكات',
        'الشركة غير مسؤولة عن الأشياء المنسية في السيارة',
        'يمنع منعًا باتًا نقل المواد المحظورة'
      ],

      sec_10_title: '10. حقوق الركاب والقواعد',
      sec_10_rights_title: 'حقوق الركاب:',
      sec_10_rights_items: ['سيارة آمنة', 'سائق مهذب', 'الحصول على معلومات', 'طلب فاتورة'],
      sec_10_forbidden_title: 'السلوكيات المحظورة:',
      sec_10_forbidden_items: ['التدخين', 'شرب الكحول', 'التدخل في القيادة', 'الإضرار بالسيارة'],
      sec_10_warning: '⚠️ يتم إنهاء الخدمة في حالة السلوكيات المحظورة.',

      sec_11_title: '11. نقل الأطفال والرضع',
      sec_11_text: 'استخدام مقاعد الأطفال إلزامي قانونًا. يتم توفيرها عند الطلب.',
      
      sec_12_title: '12. التأخير وعدم الحضور',
      sec_12_delay_title: 'التأخير:',
      sec_12_delay_desc: 'انتظار مجاني لمدة 45 دقيقة في المطار، و15 دقيقة في الأماكن الأخرى.',
      sec_12_noshow_title: 'عدم الحضور:',
      sec_12_noshow_desc: 'لا يتم استرداد المبلغ إذا لم يتم الحضور في الوقت المحدد.',
      
      sec_13_title: '13. حدود المسؤولية',
      sec_13_text: 'الشركة غير مسؤولة عن الأضرار الناشئة عن أخطاء العميل أو أطراف ثالثة.',
      
      sec_14_title: '14. حل النزاعات',
      sec_14_text: 'محاكم ومكاتب التنفيذ في إسطنبول هي الجهة المختصة.',
      
      sec_15_title: '15. التعديلات',
      sec_15_text: 'تحتفظ الشركة بالحق في تغيير هذه الشروط.'
    }
  };

  // Type-safe translation function
  const t = (key: keyof typeof translations.tr): any => {
    // Diğer diller için varsayılan olarak EN, eğer o da yoksa TR döner
    // Bu sayede DE/RU/AR seçildiğinde sayfa boş kalmaz, İngilizce görünür.
    // @ts-ignore
    return translations[language]?.[key] || translations['en']?.[key] || translations['tr'][key];
  };

  const isRtl = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Navbar Entegrasyonu */}
      <nav className="bg-gradient-to-r from-emerald-800 to-teal-900 shadow-md sticky top-0 z-50 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-emerald-400" />
                <span className="font-bold text-lg">Impala Transfer</span>
            </Link>

            <div className="flex items-center space-x-4">
               {/* Dil Seçici Dropdown */}
               <div className="relative">
                <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition border border-white/20"
                >
                    <span className="text-xl">{languages[language].flag}</span>
                    <span className="font-bold text-sm text-white">{languages[language].code}</span>
                </button>

                {showLangMenu && (
                    <div className={`absolute top-full mt-2 ${isRtl ? 'left-0' : 'right-0'} bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 py-2 w-40 z-50`}>
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

            <Link
              href="/"
              className="text-white hover:text-emerald-300 font-medium transition flex items-center space-x-1"
            >
              <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              <span>{t('nav_back')}</span>
            </Link>
            </div>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Animated Waves */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <svg viewBox="0 0 1200 600" className="w-full h-full">
              <path d="M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z" fill="white" fillOpacity="0.3" />
              <path d="M0,350 Q300,150 600,350 T1200,350 L1200,600 L0,600 Z" fill="white" fillOpacity="0.2" />
              <path d="M0,400 Q300,200 600,400 T1200,400 L1200,600 L0,600 Z" fill="white" fillOpacity="0.1" />
            </svg>
          </motion.div>
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <FileText className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-black mb-4">
              {t('page_title')}
            </h1>
            <p className="text-emerald-100 text-base md:text-lg">
              {t('page_subtitle')}
            </p>
            <p className="text-emerald-200 text-sm mt-2">
              {t('last_updated')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-8">
            
            {/* Genel Hükümler */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <FileText className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_1_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t('sec_1_p1')}
                </p>
                <p>
                  {t('sec_1_p2')}
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-yellow-800 font-semibold flex items-start space-x-2 rtl:space-x-reverse">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>
                      {t('sec_1_warning')}
                    </span>
                  </p>
                </div>
              </div>
            </section>

            {/* Hizmet Kapsamı */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_2_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">{t('sec_2_intro')}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {t('sec_2_items').map((item: any, idx: number) => (
                    <div key={idx} className="bg-emerald-50 p-4 rounded-xl">
                      <h3 className="font-bold text-emerald-900 mb-2 flex items-center space-x-2 rtl:space-x-reverse">
                        <span>✓</span>
                        <span>{item.title}</span>
                      </h3>
                      <p className="text-sm text-emerald-700">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Rezervasyon Koşulları */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Clock className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_3_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  {t('sec_3_items').map((item: any, idx: number) => (
                    <div key={idx} className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Ödeme Koşulları */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <CreditCard className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_4_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">{t('sec_4_intro')}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t('sec_4_methods').map((method: any, idx: number) => (
                    <div key={idx} className="border-2 border-emerald-500 rounded-xl p-4">
                      <h3 className="font-bold text-emerald-600 mb-2">{method.title}</h3>
                      <p className="text-sm">{method.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
                  <p className="text-blue-800 font-semibold">
                    {t('sec_4_note')}
                  </p>
                </div>
              </div>
            </section>

            {/* İptal ve İade Politikası */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <XCircle className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_5_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                  <div className="space-y-4">
                    {t('sec_5_items').map((item: any, idx: number) => (
                      <div key={idx} className="flex items-start space-x-3 rtl:space-x-reverse">
                        <div className={`bg-${item.color}-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{item.title}</h3>
                          <p className="text-sm">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-900 text-white rounded-xl p-4">
                  <p className="font-semibold mb-2">{t('sec_5_contact')}</p>
                  <p className="text-sm">
                    📞 Telefon: <a href="tel:+905016206952" className="text-emerald-400 hover:text-emerald-300">0501 620 69 52</a><br />
                    📧 E-posta: <a href="mailto:impalatransferist@gmail.com" className="text-emerald-400 hover:text-emerald-300">impalatransferist@gmail.com</a>
                  </p>
                </div>
              </div>
            </section>

            {/* Sorumluluklar */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Shield className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_6_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg">{t('sec_6_company_title')}</h3>
                  <ul className="space-y-2">
                    {t('sec_6_company_items').map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 mt-6">
                  <h3 className="font-bold text-gray-900 text-lg">{t('sec_6_customer_title')}</h3>
                  <ul className="space-y-2">
                    {t('sec_6_customer_items').map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                        <span className="text-blue-500 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-4">
                  <p className="text-red-800 font-semibold">
                    {t('sec_6_warning')}
                  </p>
                </div>
              </div>
            </section>

            {/* Mücbir Sebepler */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <AlertTriangle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_7_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('sec_7_text')}</p>
              </div>
            </section>

            {/* Fiyatlandırma ve Ek Ücretler */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <CreditCard className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_8_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{t('sec_8_included_title')}</h3>
                  <ul className="space-y-2">
                    {t('sec_8_included_items').map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6 mt-4">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center space-x-2 rtl:space-x-reverse">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span>{t('sec_8_excluded_title')}</span>
                  </h3>
                  <ul className="space-y-2">
                    {t('sec_8_excluded_items').map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
                  <p className="text-blue-800 font-semibold">
                    {t('sec_8_note')}
                  </p>
                </div>
              </div>
            </section>

            {/* Bagaj ve Eşya Politikası */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <AlertTriangle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_9_title')}</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900">{t('sec_9_std_title')}</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {t('sec_9_std_items').map((item: any, idx: number) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-500 rounded-xl p-4 mt-4">
                  <p className="text-yellow-800 font-semibold flex items-start space-x-2 rtl:space-x-reverse">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>
                      {t('sec_9_warning')}
                    </span>
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-4">
                  <ul className="space-y-2 text-sm text-red-800">
                    {t('sec_9_list').map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Diğer Kısalar (10-15) */}
            <section>
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('sec_10_title')}</h2>
               <div className="grid md:grid-cols-2 gap-4">
                 <div className="bg-green-50 p-4 rounded-xl">
                    <h3 className="font-bold text-green-900 mb-2">{t('sec_10_rights_title')}</h3>
                    <ul className="text-sm space-y-1">
                      {t('sec_10_rights_items').map((i:string, k:number) => <li key={k}>✓ {i}</li>)}
                    </ul>
                 </div>
                 <div className="bg-red-50 p-4 rounded-xl">
                    <h3 className="font-bold text-red-900 mb-2">{t('sec_10_forbidden_title')}</h3>
                    <ul className="text-sm space-y-1">
                      {t('sec_10_forbidden_items').map((i:string, k:number) => <li key={k}>✗ {i}</li>)}
                    </ul>
                 </div>
               </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-6">{t('sec_11_title')}</h2>
              <p className="text-gray-700 mt-2">{t('sec_11_text')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-6">{t('sec_12_title')}</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                 <div className="bg-yellow-50 p-4 rounded">
                   <h3 className="font-bold">{t('sec_12_delay_title')}</h3>
                   <p className="text-sm">{t('sec_12_delay_desc')}</p>
                 </div>
                 <div className="bg-red-50 p-4 rounded">
                   <h3 className="font-bold">{t('sec_12_noshow_title')}</h3>
                   <p className="text-sm">{t('sec_12_noshow_desc')}</p>
                 </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-6">{t('sec_13_title')}</h2>
              <p className="text-gray-700 mt-2">{t('sec_13_text')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-6">{t('sec_14_title')}</h2>
              <p className="text-gray-700 mt-2">{t('sec_14_text')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-6">{t('sec_15_title')}</h2>
              <p className="text-gray-700 mt-2">{t('sec_15_text')}</p>
            </section>

            {/* Ana Sayfaya Dön */}
            <div className="pt-8 border-t border-gray-200">
              <Link href="/">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>{t('nav_back')}</span>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}