'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SSSPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
      nav_home: 'Ana Sayfa',
      hero_badge: 'SSS',
      hero_title: 'Sıkça Sorulan Sorular',
      hero_desc: 'Transfer hizmetimiz hakkında merak ettiğiniz her şey',
      contact_title: 'Sorunuz mu var?',
      contact_desc: 'Cevabını bulamadığınız bir soru mu var? Bize ulaşın, size yardımcı olmaktan mutluluk duyarız.',
      btn_call: 'Hemen Ara',
      btn_whatsapp: 'WhatsApp',
      
      // Sorular Dizisi
      faqs: [
        { question: "Rezervasyon nasıl yapabilirim?", answer: "Rezervasyon yapmak için ana sayfadaki formu doldurabilir, WhatsApp üzerinden bizimle iletişime geçebilir veya telefon ile arayabilirsiniz. Size en uygun aracı seçip rezervasyonunuzu onaylıyoruz." },
        { question: "Havalimanında nasıl karşılanacağım?", answer: "Şoförümüz uçuş saatinize göre varış terminalinde isminizin yazılı olduğu tabela ile sizi bekleyecektir. Uçuşunuzda gecikme olursa şoförümüz bekleyecektir, ekstra ücret alınmaz." },
        { question: "İptal ve değişiklik politikanız nedir?", answer: "Rezervasyonunuzu 24 saat öncesine kadar ücretsiz iptal edebilir veya değiştirebilirsiniz. 24 saatten az kalan iptallerde %50 kesinti uygulanır." },
        { question: "Ödeme yöntemleriniz nelerdir?", answer: "Nakit, kredi kartı ve havale ile ödeme kabul ediyoruz. Araç içinde şoföre nakit ödeme yapabilirsiniz. Kurumsal müşterilerimiz için fatura düzenleyebiliyoruz." },
        { question: "Bagaj kapasitesi ne kadardır?", answer: "Standart Vito'da 4 büyük valiz, VIP Vito'da 4 valiz, Sprinter'da 8-20 valiz kapasitemiz vardır. Ekstra bagajınız varsa belirtmeniz yeterlidir." },
        { question: "Araçlarınız sigortalı mı?", answer: "Tüm araçlarımız kasko ve zorunlu trafik sigortası ile sigortalıdır. Yolcu için ayrıca ferdi kaza sigortası mevcuttur. Güvenliğiniz önceliğimizdir." },
        { question: "Bebek koltuğu sağlıyor musunuz?", answer: "Evet, ücretsiz olarak bebek koltuğu sağlıyoruz. Rezervasyon sırasında çocuğunuzun yaşını belirtmeniz yeterlidir." },
        { question: "Gece yarısı transfer yapıyor musunuz?", answer: "Evet, 7/24 hizmet veriyoruz. Gece saatlerinde de aynı kalitede hizmet sunuyoruz. Gece transferleri için ekstra ücret uygulanmaz." },
        { question: "Şehirler arası transfer yapıyor musunuz?", answer: "Evet, İstanbul çevresindeki tüm şehirlere (Bursa, Sapanca, vb.) güvenli ve konforlu transfer sağlıyoruz." },
        { question: "Fiyatlarınıza KDV dahil mi?", answer: "Evet, web sitemizdeki tüm fiyatlar KDV dahildir. Ek ücret veya gizli masraf yoktur." },
        { question: "Araçlarınızda WiFi var mı?", answer: "Evet, tüm araçlarımızda ücretsiz WiFi hizmeti bulunmaktadır." },
        { question: "Grup transferi yapıyor musunuz?", answer: "Evet, 45 kişiye kadar grup transferi yapabiliyoruz. Özel organizasyonlar için fiyat teklifi alabilirsiniz." },
      ]
    },
    en: {
      nav_home: 'Home',
      hero_badge: 'FAQ',
      hero_title: 'Frequently Asked Questions',
      hero_desc: 'Everything you wonder about our transfer service',
      contact_title: 'Have a question?',
      contact_desc: 'Can\'t find the answer you\'re looking for? Contact us, we\'ll be happy to help.',
      btn_call: 'Call Now',
      btn_whatsapp: 'WhatsApp',
      
      faqs: [
        { question: "How can I make a reservation?", answer: "You can fill out the form on the homepage, contact us via WhatsApp, or call us. We confirm your reservation by selecting the most suitable vehicle for you." },
        { question: "How will I be met at the airport?", answer: "Our driver will wait for you at the arrival terminal with a sign with your name on it according to your flight time. If your flight is delayed, our driver will wait, no extra charge." },
        { question: "What is your cancellation policy?", answer: "You can cancel or change your reservation free of charge up to 24 hours in advance. A 50% deduction applies to cancellations less than 24 hours." },
        { question: "What are your payment methods?", answer: "We accept cash, credit card, and bank transfer. You can pay cash to the driver inside the vehicle. We can issue invoices for corporate clients." },
        { question: "What is the luggage capacity?", answer: "Standard Vito holds 4 large suitcases, VIP Vito 4 suitcases, Sprinter 8-20 suitcases. Just specify if you have extra luggage." },
        { question: "Are your vehicles insured?", answer: "All our vehicles are insured with casualty and compulsory traffic insurance. Personal accident insurance is also available for passengers." },
        { question: "Do you provide baby seats?", answer: "Yes, we provide baby seats free of charge. Just specify your child's age during reservation." },
        { question: "Do you offer midnight transfers?", answer: "Yes, we provide 24/7 service. We offer the same quality service at night hours. No extra charge for night transfers." },
        { question: "Do you do intercity transfers?", answer: "Yes, we provide safe transfer services to all cities around Istanbul (Bursa, Sapanca, etc.)." },
        { question: "Is VAT included in your prices?", answer: "Yes, all prices on our website include VAT. There are no extra charges or hidden costs." },
        { question: "Do you have WiFi in your vehicles?", answer: "Yes, free WiFi service is available in all our vehicles." },
        { question: "Do you do group transfers?", answer: "Yes, we can do group transfers for up to 45 people. You can get a price quote for special organizations." },
      ]
    },
    de: {
      nav_home: 'Startseite',
      hero_badge: 'FAQ',
      hero_title: 'Häufig gestellte Fragen',
      hero_desc: 'Alles, was Sie über unseren Transferservice wissen möchten',
      contact_title: 'Haben Sie eine Frage?',
      contact_desc: 'Finden Sie die Antwort nicht? Kontaktieren Sie uns, wir helfen Ihnen gerne weiter.',
      btn_call: 'Jetzt anrufen',
      btn_whatsapp: 'WhatsApp',
      
      faqs: [
        { question: "Wie kann ich reservieren?", answer: "Sie können das Formular auf der Startseite ausfüllen, uns per WhatsApp kontaktieren oder anrufen. Wir bestätigen Ihre Reservierung mit dem passenden Fahrzeug." },
        { question: "Wie werde ich am Flughafen empfangen?", answer: "Unser Fahrer erwartet Sie am Ankunftsterminal mit einem Namensschild. Bei Flugverspätungen wartet der Fahrer ohne Aufpreis." },
        { question: "Wie sind die Stornierungsbedingungen?", answer: "Sie können bis zu 24 Stunden vorher kostenlos stornieren oder ändern. Bei weniger als 24 Stunden fallen 50% Stornogebühren an." },
        { question: "Welche Zahlungsmethoden gibt es?", answer: "Wir akzeptieren Barzahlung, Kreditkarte und Überweisung. Sie können im Fahrzeug bar bezahlen. Für Firmenkunden stellen wir Rechnungen aus." },
        { question: "Wie viel Gepäckkapazität?", answer: "Standard Vito fasst 4 große Koffer, VIP Vito 4 Koffer, Sprinter 8-20 Koffer. Bitte geben Sie Übergepäck bei der Buchung an." },
        { question: "Sind die Fahrzeuge versichert?", answer: "Alle Fahrzeuge sind voll versichert (Kasko & Haftpflicht). Zusätzlich besteht eine Insassenunfallversicherung." },
        { question: "Stellen Sie Kindersitze bereit?", answer: "Ja, wir stellen kostenlos Kindersitze zur Verfügung. Bitte geben Sie bei der Buchung das Alter des Kindes an." },
        { question: "Bieten Sie Mitternachtstransfers an?", answer: "Ja, wir sind 24/7 für Sie da. Für Nachttransfers fallen keine zusätzlichen Gebühren an." },
        { question: "Machen Sie Intercity-Transfers?", answer: "Ja, wir bieten Transfers in alle Städte rund um Istanbul (Bursa, Sapanca usw.) an." },
        { question: "Ist die MwSt. enthalten?", answer: "Ja, alle Preise auf unserer Website verstehen sich inklusive MwSt. Keine versteckten Kosten." },
        { question: "Gibt es WLAN in den Fahrzeugen?", answer: "Ja, in allen unseren Fahrzeugen steht kostenloses WLAN zur Verfügung." },
        { question: "Bieten Sie Gruppentransfers an?", answer: "Ja, wir können Gruppentransfers bis zu 45 Personen durchführen. Kontaktieren Sie uns für ein Angebot." },
      ]
    },
    ru: {
      nav_home: 'Главная',
      hero_badge: 'FAQ',
      hero_title: 'Часто задаваемые вопросы',
      hero_desc: 'Все, что вас интересует о нашем трансфере',
      contact_title: 'Есть вопрос?',
      contact_desc: 'Не нашли ответ? Свяжитесь с нами, мы будем рады помочь.',
      btn_call: 'Позвонить',
      btn_whatsapp: 'WhatsApp',
      
      faqs: [
        { question: "Как я могу забронировать?", answer: "Вы можете заполнить форму на главной, написать в WhatsApp или позвонить. Мы подберем авто и подтвердим бронь." },
        { question: "Как меня встретят в аэропорту?", answer: "Водитель будет ждать вас в терминале прибытия с табличкой с вашим именем. При задержке рейса ожидание бесплатно." },
        { question: "Какова политика отмены?", answer: "Бесплатная отмена или изменение за 24 часа. При отмене менее чем за 24 часа взимается 50%." },
        { question: "Каковы способы оплаты?", answer: "Наличные, карты, перевод. Можно оплатить наличными водителю. Выставляем счета корпоративным клиентам." },
        { question: "Какова вместимость багажа?", answer: "Стандарт Vito: 4 больших чемодана, VIP Vito: 4, Sprinter: 8-20. Укажите дополнительный багаж при бронировании." },
        { question: "Застрахованы ли автомобили?", answer: "Все авто имеют полное страхование и ОСАГО. Также имеется страхование пассажиров от несчастных случаев." },
        { question: "Предоставляете ли детские кресла?", answer: "Да, детские кресла предоставляются бесплатно. Укажите возраст ребенка при бронировании." },
        { question: "Работаете ли вы ночью?", answer: "Да, мы работаем 24/7. За ночные трансферы дополнительная плата не взимается." },
        { question: "Делаете ли междугородние трансферы?", answer: "Да, мы осуществляем трансферы во все города вокруг Стамбула (Бурса, Сапанджа и др.)." },
        { question: "Включен ли НДС в цену?", answer: "Да, все цены на сайте включают НДС. Никаких скрытых комиссий." },
        { question: "Есть ли WiFi в машинах?", answer: "Да, во всех наших автомобилях есть бесплатный WiFi." },
        { question: "Делаете ли групповые трансферы?", answer: "Да, до 45 человек. Вы можете получить спецпредложение для мероприятий." },
      ]
    },
    ar: {
      nav_home: 'الرئيسية',
      hero_badge: 'الأسئلة الشائعة',
      hero_title: 'الأسئلة الأكثر تكراراً',
      hero_desc: 'كل ما تريد معرفته عن خدمة النقل لدينا',
      contact_title: 'لديك سؤال؟',
      contact_desc: 'لم تجد الإجابة؟ اتصل بنا، سنكون سعداء بمساعدتك.',
      btn_call: 'اتصل الآن',
      btn_whatsapp: 'واتساب',
      
      faqs: [
        { question: "كيف يمكنني الحجز؟", answer: "يمكنك ملء النموذج في الصفحة الرئيسية، أو التواصل عبر واتساب، أو الاتصال بنا. نؤكد حجزك باختيار أنسب مركبة." },
        { question: "كيف سيتم استقبالي في المطار؟", answer: "سينتظرك سائقنا في صالة الوصول حاملاً لافتة باسمك. إذا تأخرت رحلتك، سينتظر السائق دون رسوم إضافية." },
        { question: "ما هي سياسة الإلغاء؟", answer: "يمكنك الإلغاء أو التغيير مجاناً قبل 24 ساعة. يتم خصم 50% للإلغاء قبل أقل من 24 ساعة." },
        { question: "ما هي طرق الدفع؟", answer: "نقبل الدفع نقداً، وبطاقات الائتمان، والتحويل البنكي. يمكنك الدفع نقداً للسائق. نصدر فواتير للشركات." },
        { question: "كم سعة الأمتعة؟", answer: "فيتو عادي: 4 حقائب كبيرة، فيتو VIP: 4 حقائب، سبرينتر: 8-20 حقيبة. يرجى ذكر الأمتعة الإضافية." },
        { question: "هل السيارات مؤمنة؟", answer: "جميع سياراتنا مؤمنة تأميناً شاملاً وإلزامياً. يوجد أيضاً تأمين حوادث شخصي للركاب." },
        { question: "هل توفرون مقاعد للأطفال؟", answer: "نعم، نوفر مقاعد أطفال مجاناً. يرجى ذكر عمر طفلك عند الحجز." },
        { question: "هل تعملون في منتصف الليل؟", answer: "نعم، نعمل على مدار 24 ساعة. لا توجد رسوم إضافية للنقل الليلي." },
        { question: "هل تقومون بنقل بين المدن؟", answer: "نعم، نوفر خدمة النقل لجميع المدن حول إسطنبول (بورصة، صبنحة، إلخ) بأمان وراحة." },
        { question: "هل الأسعار شاملة الضريبة؟", answer: "نعم، جميع الأسعار على موقعنا تشمل ضريبة القيمة المضافة. لا توجد رسوم خفية." },
        { question: "هل يوجد واي فاي في السيارات؟", answer: "نعم، تتوفر خدمة الواي فاي المجانية في جميع سياراتنا." },
        { question: "هل تقومون بنقل المجموعات؟", answer: "نعم، يمكننا نقل مجموعات تصل إلى 45 شخصاً. يمكنك الحصول على عرض سعر للمناسبات الخاصة." },
      ]
    }
  };

  // 4. Çeviri Yardımcısı (Type hatası önleyici 'any')
  const t = (key: keyof typeof translations.tr): any => {
    return translations[language][key] || translations['tr'][key];
  };

  const isRtl = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Navbar - Entegre Edildi */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/icon.png" 
                alt="İstanbul Transfer Logo" 
                className="w-6 h-6"
              />
              <h1 className="text-2xl font-bold text-gray-800">Impala Transfer</h1>
            </Link>
            
            <div className="flex items-center space-x-4">
               {/* Dil Seçici Dropdown */}
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

            <Link
              href="/"
              className="text-gray-700 hover:text-blue-500 font-medium transition flex items-center space-x-1"
            >
              <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              <span>{t('nav_home')}</span>
            </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
          >
            <span className="text-white font-semibold text-sm tracking-wider uppercase">{t('hero_badge')}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {t('hero_title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t('hero_desc')}
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {/* Dinamik Dizi Map İşlemi */}
            {t('faqs').map((faq: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition group"
                >
                  <span className="font-bold text-gray-800 pr-4 text-lg group-hover:text-red-500 transition">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-red-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('contact_title')}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            {t('contact_desc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+905016206952"
              className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition"
            >
              <Phone className="w-5 h-5" />
              <span>{t('btn_call')}</span>
            </a>

            <a
              href="https://wa.me/905016206952"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('btn_whatsapp')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}