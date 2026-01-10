'use client';

import { motion } from 'framer-motion';

interface AnimatedDividerProps {
  language: 'tr' | 'en' | 'de' | 'ru' | 'ar';
}

const translations = {
  tr: {
    divider_fast_transfer: 'Hızlı Transfer',
    divider_vip_service: 'VIP Hızmet',
    divider_comfortable: 'Rahat Yolculuk',
    divider_affordable: 'Uygun Fıyat',
    divider_reliable: 'Güvenilir Personel',
  },
  en: {
    divider_fast_transfer: 'Fast Transfer',
    divider_vip_service: 'VIP Servıce',
    divider_comfortable: 'Comfortable Journey',
    divider_affordable: 'Affordable Prıce',
    divider_reliable: 'Relıable Staff',
  },
  de: {
    divider_fast_transfer: 'Schneller Transfer',
    divider_vip_service: 'VIP-Servıce',
    divider_comfortable: 'Komfortable Reıse',
    divider_affordable: 'Günstıger Preıs',
    divider_reliable: 'Zuverlässıges Personal',
  },
  ru: {
    divider_fast_transfer: 'Быстрый трансфер',
    divider_vip_service: 'VIP сервис',
    divider_comfortable: 'Комфортная поездка',
    divider_affordable: 'Доступная цена',
    divider_reliable: 'Надежный персонал',
  },
  ar: {
    divider_fast_transfer: 'نقل سريع',
    divider_vip_service: 'خدمة VIP',
    divider_comfortable: 'رحلة مريحة',
    divider_affordable: 'سعر معقول',
    divider_reliable: 'طاقم موثوق',
  }
};

export default function AnimatedDivider({ language }: AnimatedDividerProps) {
  const t = (key: keyof typeof translations.tr) => translations[language][key];
  
  const features = [
    t('divider_fast_transfer'),
    t('divider_vip_service'),
    t('divider_comfortable'),
    t('divider_affordable'),
    t('divider_reliable')
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-cream-300 via-crimson-500 to-sage-400 py-4 md:py-5">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      <div className="relative flex gap-8 md:gap-12">
        <motion.div
          className="flex gap-8 md:gap-12 whitespace-nowrap"
          animate={{
            x: [0, -1200]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {[...Array(3)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8 md:gap-12">
              {features.map((feature, idx) => (
                <div key={`${setIdx}-${idx}`} className="flex items-center gap-3 md:gap-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg 
                      className="w-3 h-3 md:w-4 md:h-4 text-black" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                  
                  <span className="text-white font-bold text-base md:text-lg uppercase tracking-wide drop-shadow-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}