'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GizlilikPolitikasi() {
  const [language, setLanguage] = useState<'tr' | 'en' | 'de' | 'ru' | 'ar'>('tr');
  const [showLangMenu, setShowLangMenu] = useState(false);

  // 1. LocalStorage'dan dil çekme
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage as 'tr' | 'en' | 'de' | 'ru' | 'ar');
    }
  }, []);

  // 2. Dil değiştirme fonksiyonu
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

  // 3. Çeviri Verileri
  const translations = {
    tr: {
      nav_back: 'Ana Sayfa',
      page_title: 'Gizlilik Politikası',
      page_subtitle: 'Kişisel verilerinizin güvenliği bizim için önceliklidir',
      last_updated: 'Son Güncelleme: 18 Kasım 2024',

      // Bölüm 1
      sec_1_title: '1. Giriş',
      sec_1_text1: 'Impala Transfer olarak, kişisel verilerinizin gizliliğine ve güvenliğine büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda topladığımız kişisel verilerin nasıl işlendiğini, kullanıldığını ve korunduğunu açıklamaktadır.',
      sec_1_text2: '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, kişisel verileriniz veri sorumlusu sıfatıyla Impala Transfer tarafından aşağıda açıklanan kapsamda işlenecektir.',

      // Bölüm 2
      sec_2_title: '2. Toplanan Kişisel Veriler',
      sec_2_intro: 'Hizmetlerimizi sunabilmek için aşağıdaki kişisel verileri toplayabiliriz:',
      sec_2_items: [
        { title: 'Kimlik Bilgileri', desc: 'Ad, soyad, T.C. kimlik numarası (gerekli durumlarda)' },
        { title: 'İletişim Bilgileri', desc: 'Telefon numarası, e-posta adresi, adres bilgileri' },
        { title: 'Rezervasyon Bilgileri', desc: 'Alış-varış noktaları, tarih, saat, yolcu sayısı, uçuş bilgileri' },
        { title: 'Ödeme Bilgileri', desc: 'Fatura bilgileri (ödeme kartı bilgileri güvenli ödeme sağlayıcıları tarafından işlenir)' },
        { title: 'Çerez ve Teknik Veriler', desc: 'IP adresi, tarayıcı bilgileri, site kullanım verileri' }
      ],

      // Bölüm 3
      sec_3_title: '3. Verilerin İşlenme Amaçları',
      sec_3_intro: 'Topladığımız kişisel veriler aşağıdaki amaçlarla işlenmektedir:',
      sec_3_items: [
        'Transfer hizmetlerinin sağlanması ve rezervasyon işlemlerinin gerçekleştirilmesi',
        'Müşteri memnuniyetinin artırılması ve hizmet kalitesinin geliştirilmesi',
        'Yasal yükümlülüklerin yerine getirilmesi (fatura kesme, vergi mevzuatı vb.)',
        'Müşteri ile iletişim kurulması ve bilgilendirme yapılması',
        'Pazarlama ve promosyon faaliyetlerinin yürütülmesi (izniniz dahilinde)',
        'Web sitesi güvenliğinin sağlanması ve teknik sorunların giderilmesi'
      ],

      // Bölüm 4
      sec_4_title: '4. Veri Güvenliği',
      sec_4_text: 'Kişisel verilerinizin güvenliğini sağlamak için gerekli tüm teknik ve idari tedbirleri almaktayız. Verileriniz, yetkisiz erişim, kaybolma, kötüye kullanım ve değiştirilmeye karşı korunmaktadır. Güvenli SSL sertifikası ile şifrelenmiş bağlantı kullanılmaktadır.',
      sec_4_alert: '🔒 Tüm ödeme işlemleri güvenli ödeme sağlayıcıları üzerinden gerçekleştirilir. Kredi kartı bilgilerinizi sistemimizde saklamıyoruz.',

      // Bölüm 5
      sec_5_title: '5. Çerez Kullanımı',
      sec_5_intro: 'Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. Çerezler, tarayıcınız tarafından cihazınızda saklanan küçük metin dosyalarıdır. Kullandığımız çerez türleri:',
      sec_5_items: [
        { title: 'Zorunlu Çerezler:', desc: 'Web sitesinin temel işlevleri için gereklidir' },
        { title: 'Analiz Çerezleri:', desc: 'Site kullanımını analiz eder (Google Analytics vb.)' },
        { title: 'Pazarlama Çerezleri:', desc: 'Size özel içerik ve reklamlar gösterir' }
      ],
      sec_5_footer: 'Çerez tercihlerinizi sitemizdeki çerez banner\'ından yönetebilirsiniz.',

      // Bölüm 6
      sec_6_title: '6. KVKK Kapsamındaki Haklarınız',
      sec_6_intro: 'KVKK\'nın 11. maddesi uyarınca, kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:',
      sec_6_items: [
        'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
        'İşlenmişse buna ilişkin bilgi talep etme',
        'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
        'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
        'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
        'KVKK şartları çerçevesinde silinmesini veya yok edilmesini isteme',
        'Aleyhinize bir sonuç doğmasına itiraz etme',
        'Kanuna aykırı işlenmesi sebebiyle zararın giderilmesini talep etme'
      ],

      // Bölüm 7
      sec_7_title: '7. İletişim',
      sec_7_intro: 'Kişisel verilerinizle ilgili sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:',
      sec_7_note: '* Başvurularınız, talebin niteliğine göre en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak işlemin ayrıca bir maliyet gerektirmesi halinde ücret alınabilir.',

      // Bölüm 8
      sec_8_title: '8. Politika Değişiklikleri',
      sec_8_text: 'Bu Gizlilik Politikası\'nda değişiklik yapma hakkımız saklıdır. Yapılacak değişiklikler bu sayfada yayınlanacaktır. Önemli değişikliklerde e-posta ile bilgilendirileceksiniz.'
    },
    en: {
      nav_back: 'Home',
      page_title: 'Privacy Policy',
      page_subtitle: 'The security of your personal data is our priority',
      last_updated: 'Last Updated: November 18, 2024',

      sec_1_title: '1. Introduction',
      sec_1_text1: 'As Impala Transfer, we attach great importance to the privacy and security of your personal data. This Privacy Policy explains how the personal data we collect when you visit our website or use our services is processed, used, and protected.',
      sec_1_text2: 'Within the scope of the Personal Data Protection Law No. 6698 ("KVKK"), your personal data will be processed by Impala Transfer as the data controller within the scope explained below.',

      sec_2_title: '2. Collected Personal Data',
      sec_2_intro: 'We may collect the following personal data to provide our services:',
      sec_2_items: [
        { title: 'Identity Information', desc: 'Name, surname, ID number (if necessary)' },
        { title: 'Contact Information', desc: 'Phone number, e-mail address, address details' },
        { title: 'Reservation Information', desc: 'Pick-up/drop-off points, date, time, passenger count, flight info' },
        { title: 'Payment Information', desc: 'Billing info (payment card info is processed by secure providers)' },
        { title: 'Cookies & Technical Data', desc: 'IP address, browser info, site usage data' }
      ],

      sec_3_title: '3. Purposes of Processing Data',
      sec_3_intro: 'The personal data we collect is processed for the following purposes:',
      sec_3_items: [
        'Providing transfer services and performing reservation transactions',
        'Increasing customer satisfaction and improving service quality',
        'Fulfilling legal obligations (invoicing, tax legislation, etc.)',
        'Communicating with the customer and providing information',
        'Conducting marketing and promotional activities (with your consent)',
        'Ensuring website security and resolving technical problems'
      ],

      sec_4_title: '4. Data Security',
      sec_4_text: 'We take all necessary technical and administrative measures to ensure the security of your personal data. Your data is protected against unauthorized access, loss, misuse, and alteration. Encrypted connection with Secure SSL certificate is used.',
      sec_4_alert: '🔒 All payment transactions are carried out through secure payment providers. We do not store your credit card information in our system.',

      sec_5_title: '5. Use of Cookies',
      sec_5_intro: 'We use cookies to improve your experience on our website. Cookies are small text files stored on your device by your browser. Cookie types we use:',
      sec_5_items: [
        { title: 'Mandatory Cookies:', desc: 'Required for basic functions of the website' },
        { title: 'Analysis Cookies:', desc: 'Analyzes site usage (Google Analytics, etc.)' },
        { title: 'Marketing Cookies:', desc: 'Shows personalized content and ads' }
      ],
      sec_5_footer: 'You can manage your cookie preferences from the cookie banner on our site.',

      sec_6_title: '6. Your Rights Under GDPR/KVKK',
      sec_6_intro: 'Pursuant to Article 11 of KVKK, you have the following rights regarding your personal data:',
      sec_6_items: [
        'Learning whether your personal data is processed',
        'Requesting information if processed',
        'Learning the purpose of processing and if used appropriately',
        'Knowing third parties to whom it is transferred at home or abroad',
        'Requesting correction if incomplete or incorrectly processed',
        'Requesting deletion or destruction under KVKK conditions',
        'Objecting to a result against you due to exclusive automated analysis',
        'Requesting compensation for damages due to unlawful processing'
      ],

      sec_7_title: '7. Contact',
      sec_7_intro: 'You can contact us for your questions or requests regarding your personal data:',
      sec_7_note: '* Your applications will be concluded free of charge within 30 days at the latest. However, if the transaction requires an additional cost, a fee may be charged.',

      sec_8_title: '8. Policy Changes',
      sec_8_text: 'We reserve the right to make changes to this Privacy Policy. Changes made will be published on this page. You will be notified by email of significant changes.'
    },
    de: {
      nav_back: 'Startseite',
      page_title: 'Datenschutzerklärung',
      page_subtitle: 'Die Sicherheit Ihrer persönlichen Daten ist unsere Priorität',
      last_updated: 'Letzte Aktualisierung: 18. November 2024',

      sec_1_title: '1. Einführung',
      sec_1_text1: 'Als Impala Transfer legen wir großen Wert auf die Privatsphäre und Sicherheit Ihrer persönlichen Daten. Diese Datenschutzerklärung erläutert, wie die persönlichen Daten, die wir beim Besuch unserer Website oder bei der Nutzung unserer Dienste sammeln, verarbeitet, genutzt und geschützt werden.',
      sec_1_text2: 'Im Rahmen des Datenschutzgesetzes Nr. 6698 ("KVKK") werden Ihre persönlichen Daten von Impala Transfer als Datenverantwortlicher im unten beschriebenen Umfang verarbeitet.',

      sec_2_title: '2. Erhobene personenbezogene Daten',
      sec_2_intro: 'Um unsere Dienste anbieten zu können, erheben wir folgende Daten:',
      sec_2_items: [
        { title: 'Identitätsdaten', desc: 'Name, Nachname, Ausweisnummer (falls erforderlich)' },
        { title: 'Kontaktdaten', desc: 'Telefonnummer, E-Mail-Adresse, Adressdaten' },
        { title: 'Reservierungsdaten', desc: 'Abhol-/Zielorte, Datum, Zeit, Passagieranzahl, Fluginfos' },
        { title: 'Zahlungsdaten', desc: 'Rechnungsdaten (Zahlungskartendaten werden von sicheren Anbietern verarbeitet)' },
        { title: 'Cookies & Technische Daten', desc: 'IP-Adresse, Browser-Info, Sitenutzungsdaten' }
      ],

      sec_3_title: '3. Zwecke der Datenverarbeitung',
      sec_3_intro: 'Die von uns erhobenen personenbezogenen Daten werden zu folgenden Zwecken verarbeitet:',
      sec_3_items: [
        'Bereitstellung von Transferdiensten und Durchführung von Reservierungsvorgängen',
        'Steigerung der Kundenzufriedenheit und Verbesserung der Servicequalität',
        'Erfüllung gesetzlicher Verpflichtungen (Rechnungsstellung, Steuergesetze usw.)',
        'Kommunikation mit dem Kunden und Bereitstellung von Informationen',
        'Durchführung von Marketing- und Werbeaktivitäten (mit Ihrer Zustimmung)',
        'Gewährleistung der Website-Sicherheit und Behebung technischer Probleme'
      ],

      sec_4_title: '4. Datensicherheit',
      sec_4_text: 'Wir treffen alle notwendigen technischen und administrativen Maßnahmen, um die Sicherheit Ihrer persönlichen Daten zu gewährleisten. Ihre Daten sind gegen unbefugten Zugriff, Verlust, Missbrauch und Änderung geschützt. Es wird eine verschlüsselte Verbindung mit sicherem SSL-Zertifikat verwendet.',
      sec_4_alert: '🔒 Alle Zahlungsvorgänge werden über sichere Zahlungsanbieter abgewickelt. Wir speichern Ihre Kreditkarteninformationen nicht in unserem System.',

      sec_5_title: '5. Verwendung von Cookies',
      sec_5_intro: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Cookies sind kleine Textdateien, die von Ihrem Browser auf Ihrem Gerät gespeichert werden.',
      sec_5_items: [
        { title: 'Erforderliche Cookies:', desc: 'Erforderlich für grundlegende Funktionen der Website' },
        { title: 'Analyse-Cookies:', desc: 'Analysiert die Sitenutzung (Google Analytics usw.)' },
        { title: 'Marketing-Cookies:', desc: 'Zeigt personalisierte Inhalte und Werbung an' }
      ],
      sec_5_footer: 'Sie können Ihre Cookie-Einstellungen über das Cookie-Banner auf unserer Website verwalten.',

      sec_6_title: '6. Ihre Rechte gemäß KVKK',
      sec_6_intro: 'Gemäß Artikel 11 des KVKK haben Sie folgende Rechte bezüglich Ihrer persönlichen Daten:',
      sec_6_items: [
        'Zu erfahren, ob Ihre persönlichen Daten verarbeitet werden',
        'Informationen anzufordern, wenn sie verarbeitet wurden',
        'Den Zweck der Verarbeitung zu erfahren und ob sie zweckgemäß verwendet werden',
        'Die Dritten im In- oder Ausland zu kennen, an die sie übermittelt werden',
        'Berichtigung zu verlangen, wenn sie unvollständig oder falsch verarbeitet sind',
        'Löschung oder Vernichtung unter KVKK-Bedingungen zu verlangen',
        'Einspruch gegen ein Ergebnis zu erheben, das ausschließlich durch automatisierte Analyse zu Ihren Ungunsten entstanden ist',
        'Schadenersatz zu verlangen, wenn Ihnen durch rechtswidrige Verarbeitung Schaden entstanden ist'
      ],

      sec_7_title: '7. Kontakt',
      sec_7_intro: 'Sie können uns für Ihre Fragen oder Anfragen bezüglich Ihrer persönlichen Daten kontaktieren:',
      sec_7_note: '* Ihre Anträge werden spätestens innerhalb von 30 Tagen kostenlos abgeschlossen. Wenn die Transaktion jedoch zusätzliche Kosten verursacht, kann eine Gebühr erhoben werden.',

      sec_8_title: '8. Richtlinienänderungen',
      sec_8_text: 'Wir behalten uns das Recht vor, Änderungen an dieser Datenschutzerklärung vorzunehmen. Änderungen werden auf dieser Seite veröffentlicht.'
    },
    ru: {
      nav_back: 'На главную',
      page_title: 'Политика конфиденциальности',
      page_subtitle: 'Безопасность ваших персональных данных - наш приоритет',
      last_updated: 'Последнее обновление: 18 ноября 2024 г.',

      sec_1_title: '1. Введение',
      sec_1_text1: 'Как Impala Transfer, мы придаем большое значение конфиденциальности и безопасности ваших персональных данных. Эта Политика конфиденциальности объясняет, как обрабатываются, используются и защищаются персональные данные, которые мы собираем при посещении вами нашего сайта или использовании наших услуг.',
      sec_1_text2: 'В рамках Закона о защите персональных данных № 6698 ("KVKK"), ваши персональные данные будут обрабатываться Impala Transfer в качестве контроллера данных в объеме, описанном ниже.',

      sec_2_title: '2. Сбор персональных данных',
      sec_2_intro: 'Мы можем собирать следующие данные для предоставления наших услуг:',
      sec_2_items: [
        { title: 'Идентификационные данные', desc: 'Имя, фамилия, номер ID (при необходимости)' },
        { title: 'Контактная информация', desc: 'Номер телефона, e-mail, адрес' },
        { title: 'Информация о бронировании', desc: 'Точки посадки/высадки, дата, время, кол-во пассажиров, рейс' },
        { title: 'Платежная информация', desc: 'Данные для счета (данные карт обрабатываются безопасными провайдерами)' },
        { title: 'Cookies и тех. данные', desc: 'IP-адрес, браузер, данные об использовании сайта' }
      ],

      sec_3_title: '3. Цели обработки данных',
      sec_3_intro: 'Собранные нами персональные данные обрабатываются для следующих целей:',
      sec_3_items: [
        'Предоставление услуг трансфера и выполнение операций бронирования',
        'Повышение удовлетворенности клиентов и улучшение качества обслуживания',
        'Выполнение юридических обязательств (выставление счетов, налоговое законодательство и т.д.)',
        'Связь с клиентом и предоставление информации',
        'Проведение маркетинговых и рекламных мероприятий (с вашего согласия)',
        'Обеспечение безопасности веб-сайта и устранение технических проблем'
      ],

      sec_4_title: '4. Безопасность данных',
      sec_4_text: 'Мы принимаем все необходимые технические и административные меры для обеспечения безопасности ваших персональных данных. Ваши данные защищены от несанкционированного доступа, потери, неправильного использования и изменения. Используется зашифрованное соединение с безопасным SSL-сертификатом.',
      sec_4_alert: '🔒 Все платежные операции осуществляются через безопасных платежных провайдеров. Мы не храним информацию о вашей кредитной карте в нашей системе.',

      sec_5_title: '5. Использование файлов Cookie',
      sec_5_intro: 'Мы используем файлы cookie для улучшения работы нашего сайта. Файлы cookie — это небольшие текстовые файлы, сохраняемые браузером на вашем устройстве. Типы файлов cookie:',
      sec_5_items: [
        { title: 'Обязательные Cookies:', desc: 'Необходимы для основных функций сайта' },
        { title: 'Аналитические Cookies:', desc: 'Анализируют использование сайта (Google Analytics и др.)' },
        { title: 'Маркетинговые Cookies:', desc: 'Показывают персонализированный контент и рекламу' }
      ],
      sec_5_footer: 'Вы можете управлять настройками файлов cookie через баннер cookie на нашем сайте.',

      sec_6_title: '6. Ваши права согласно KVKK',
      sec_6_intro: 'Согласно статье 11 KVKK, вы имеете следующие права в отношении ваших персональных данных:',
      sec_6_items: [
        'Узнавать, обрабатываются ли ваши персональные данные',
        'Запрашивать информацию, если они были обработаны',
        'Узнавать цель обработки и используются ли они по назначению',
        'Знать третьих лиц, которым они передаются внутри страны или за рубежом',
        'Запрашивать исправление, если они неполные или неправильно обработаны',
        'Запрашивать удаление или уничтожение в рамках условий KVKK',
        'Возражать против результата против вас из-за исключительно автоматизированного анализа',
        'Требовать возмещения ущерба из-за незаконной обработки'
      ],

      sec_7_title: '7. Контакт',
      sec_7_intro: 'Вы можете связаться с нами по вопросам или запросам, касающимся ваших персональных данных:',
      sec_7_note: '* Ваши заявки будут рассмотрены бесплатно не позднее чем через 30 дней. Однако, если операция требует дополнительных затрат, может взиматься плата.',

      sec_8_title: '8. Изменения в политике',
      sec_8_text: 'Мы оставляем за собой право вносить изменения в эту Политику конфиденциальности. Изменения будут опубликованы на этой странице.'
    },
    ar: {
      nav_back: 'الرئيسية',
      page_title: 'سياسة الخصوصية',
      page_subtitle: 'أمن بياناتك الشخصية هو أولويتنا',
      last_updated: 'آخر تحديث: 18 نوفمبر 2024',

      sec_1_title: '1. مقدمة',
      sec_1_text1: 'بصفتنا Impala Transfer، نولي أهمية كبيرة لخصوصية وأمن بياناتك الشخصية. تشرح سياسة الخصوصية هذه كيفية معالجة واستخدام وحماية البيانات الشخصية التي نجمعها عند زيارتك لموقعنا الإلكتروني أو استخدام خدماتنا.',
      sec_1_text2: 'في إطار قانون حماية البيانات الشخصية رقم 6698 ("KVKK")، ستتم معالجة بياناتك الشخصية بواسطة Impala Transfer بصفتها مسؤول البيانات في النطاق الموضح أدناه.',

      sec_2_title: '2. البيانات الشخصية التي نجمعها',
      sec_2_intro: 'قد نقوم بجمع البيانات الشخصية التالية لتقديم خدماتنا:',
      sec_2_items: [
        { title: 'معلومات الهوية', desc: 'الاسم، اللقب، رقم الهوية (عند الضرورة)' },
        { title: 'معلومات الاتصال', desc: 'رقم الهاتف، البريد الإلكتروني، تفاصيل العنوان' },
        { title: 'معلومات الحجز', desc: 'نقاط الانطلاق/الوصول، التاريخ، الوقت، عدد الركاب، معلومات الرحلة' },
        { title: 'معلومات الدفع', desc: 'معلومات الفاتورة (تتم معالجة معلومات بطاقة الدفع بواسطة مزودين آمنين)' },
        { title: 'ملفات تعريف الارتباط والبيانات الفنية', desc: 'عنوان IP، معلومات المتصفح، بيانات استخدام الموقع' }
      ],

      sec_3_title: '3. أغراض معالجة البيانات',
      sec_3_intro: 'تتم معالجة البيانات الشخصية التي نجمعها للأغراض التالية:',
      sec_3_items: [
        'تقديم خدمات النقل وتنفيذ معاملات الحجز',
        'زيادة رضا العملاء وتحسين جودة الخدمة',
        'الوفاء بالالتزامات القانونية (إصدار الفواتير، التشريعات الضريبية، إلخ)',
        'التواصل مع العميل وتقديم المعلومات',
        'القيام بأنشطة التسويق والترويج (بموافقتك)',
        'ضمان أمان الموقع الإلكتروني وحل المشاكل التقنية'
      ],

      sec_4_title: '4. أمن البيانات',
      sec_4_text: 'نتخذ جميع التدابير الفنية والإدارية اللازمة لضمان أمن بياناتك الشخصية. بياناتك محمية ضد الوصول غير المصرح به، والفقدان، وسوء الاستخدام، والتغيير. يتم استخدام اتصال مشفر مع شهادة SSL آمنة.',
      sec_4_alert: '🔒 تتم جميع معاملات الدفع عبر مزودي دفع آمنين. لا نقوم بتخزين معلومات بطاقة الائتمان الخاصة بك في نظامنا.',

      sec_5_title: '5. استخدام ملفات تعريف الارتباط',
      sec_5_intro: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. ملفات تعريف الارتباط هي ملفات نصية صغيرة يخزنها متصفحك على جهازك. أنواع ملفات تعريف الارتباط التي نستخدمها:',
      sec_5_items: [
        { title: 'ملفات تعريف الارتباط الإلزامية:', desc: 'ضرورية للوظائف الأساسية للموقع' },
        { title: 'ملفات تعريف الارتباط التحليلية:', desc: 'تحلل استخدام الموقع (Google Analytics، إلخ)' },
        { title: 'ملفات تعريف الارتباط التسويقية:', desc: 'تعرض محتوى وإعلانات مخصصة' }
      ],
      sec_5_footer: 'يمكنك إدارة تفضيلات ملفات تعريف الارتباط من لافتة ملفات تعريف الارتباط على موقعنا.',

      sec_6_title: '6. حقوقك بموجب القانون',
      sec_6_intro: 'بموجب المادة 11 من القانون، لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:',
      sec_6_items: [
        'معرفة ما إذا كانت بياناتك الشخصية قيد المعالجة',
        'طلب المعلومات إذا تمت معالجتها',
        'معرفة غرض المعالجة وما إذا كانت تستخدم بشكل مناسب',
        'معرفة الأطراف الثالثة التي يتم نقل البيانات إليها محليًا أو دوليًا',
        'طلب التصحيح إذا كانت ناقصة أو تمت معالجتها بشكل غير صحيح',
        'طلب الحذف أو الإتلاف بموجب شروط القانون',
        'الاعتراض على نتيجة ضدك بسبب التحليل الآلي الحصري',
        'طلب التعويض عن الأضرار الناجمة عن المعالجة غير القانونية'
      ],

      sec_7_title: '7. الاتصال',
      sec_7_intro: 'يمكنك الاتصال بنا لأسئلتك أو طلباتك المتعلقة ببياناتك الشخصية:',
      sec_7_note: '* سيتم الانتهاء من طلباتك مجانًا في موعد لا يتجاوز 30 يومًا. ومع ذلك، إذا كانت المعاملة تتطلب تكلفة إضافية، فقد يتم فرض رسوم.',

      sec_8_title: '8. تغييرات السياسة',
      sec_8_text: 'نحتفظ بالحق في إجراء تغييرات على سياسة الخصوصية هذه. سيتم نشر التغييرات على هذه الصفحة.'
    }
  };

  const t = (key: keyof typeof translations.tr): any => {
    // @ts-ignore
    return translations[language]?.[key] || translations['en']?.[key] || translations['tr'][key];
  };

  const isRtl = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Navbar - Blue Gradient Theme to match Header */}
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-md sticky top-0 z-50 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-cyan-300" />
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
              className="text-white hover:text-cyan-300 font-medium transition flex items-center space-x-1"
            >
              <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              <span>{t('nav_back')}</span>
            </Link>
            </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Animated Circles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-black mb-4">
              {t('page_title')}
            </h1>
            <p className="text-blue-100 text-base md:text-lg">
              {t('page_subtitle')}
            </p>
            <p className="text-blue-200 text-sm mt-2">
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
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Eye className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_1_title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('sec_1_text1')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {t('sec_1_text2')}
              </p>
            </section>

            {/* Toplanan Veriler */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <FileText className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_2_title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('sec_2_intro')}
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                {t('sec_2_items').map((item: any, idx: number) => (
                  <div key={idx} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Verilerin Kullanım Amaçları */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Lock className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_3_title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('sec_3_intro')}
              </p>
              <ul className="space-y-2 text-gray-700">
                {t('sec_3_items').map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                    <span className="text-primary-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Veri Güvenliği */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Shield className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_4_title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('sec_4_text')}
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4 rounded">
                <p className="text-green-800 font-semibold">
                  {t('sec_4_alert')}
                </p>
              </div>
            </section>

            {/* Çerez Politikası */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <FileText className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_5_title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('sec_5_intro')}
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                {t('sec_5_items').map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                    <span className="font-bold text-gray-900">• {item.title}</span>
                    <span>{item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                {t('sec_5_footer')}
              </p>
            </section>

            {/* KVKK Hakları */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Shield className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_6_title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('sec_6_intro')}
              </p>
              <div className="bg-blue-50 rounded-xl p-6 space-y-2 text-gray-700">
                {t('sec_6_items').map((item: string, idx: number) => (
                  <p key={idx}>✓ {item}</p>
                ))}
              </div>
            </section>

            {/* İletişim */}
            <section>
              <div className="flex items-center space-x-3 mb-4 rtl:space-x-reverse">
                <Mail className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('sec_7_title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('sec_7_intro')}
              </p>
              <div className="bg-gray-900 text-white rounded-xl p-6 space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="text-gray-400 text-sm">E-posta</p>
                    <a href="mailto:info@istanbultransfer.com" className="font-semibold hover:text-primary-400">info@istanbultransfer.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="text-gray-400 text-sm">Telefon</p>
                    <a href="tel:+905016206952" className="font-semibold hover:text-primary-400">0501 620 69 52</a>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 italic">
                {t('sec_7_note')}
              </p>
            </section>

            {/* Değişiklikler */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('sec_8_title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('sec_8_text')}
              </p>
            </section>

            {/* Ana Sayfaya Dön */}
            <div className="pt-8 border-t border-gray-200">
              <Link href="/">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
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