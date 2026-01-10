'use client';

import { motion } from 'framer-motion';
import { Home, Search, MapPin, Phone, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(210, 107, 24, 0.76) 50px,
            rgba(214, 179, 63, 0.63) 51px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 404 Number Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              duration: 0.8 
            }}
            className="mb-8"
          >
            <h1 className="text-[150px] md:text-[250px] font-black leading-none">
              <span className="bg-gradient-to-r from-white via-accent to-primary-500 bg-clip-text text-transparent animate-pulse">
                404
              </span>
            </h1>
          </motion.div>


          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-white mb-4 md:mb-6">
              Yanlış Yola Saptık! 🗺️
            </h2>
            <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-3">
              Aradığınız sayfa bulunamadı. Belki de rotayı değiştirme zamanı geldi?
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              Üzgünüz, bu sayfa mevcut değil veya taşınmış olabilir.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16"
          >
            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-primary-500 to-accent text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5 md:w-6 md:h-6" />
              <span>Ana Sayfaya Dön</span>
            </motion.button>

            <motion.button
              onClick={() => router.back()}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              <span>Geri Dön</span>
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: 'Araç Filomuz',
                description: 'Transfer araçlarımıza göz atın',
                link: '/#vehicles'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Turlarımız',
                description: 'Popüler turları keşfedin',
                link: '/turlar'
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'İletişim',
                description: 'Bize ulaşın',
                link: 'tel:+905016206952'
              }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="text-primary-500 mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 md:mt-16 text-center"
          >
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4">
              <p className="text-gray-400 text-sm md:text-base">
                💡 <strong className="text-primary-400">Bilgi:</strong> İstanbul Transfer ile 
                <span className="text-white font-bold"> 15+ yıldır</span> güvenli yolculuk!
              </p>
            </div>
          </motion.div>

          {/* WhatsApp Float Button */}
          <motion.a
            href="https://wa.me/905016206952?text=Merhaba,%20yardıma%20ihtiyacım%20var"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition duration-300 z-50"
          >
            <svg 
              className="w-8 h-8" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.002 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
}