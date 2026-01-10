export interface Location {
  name: string;
  address: string;
  category: 'airport' | 'hotel_area' | 'tourist' | 'district';
  coords: [number, number];
}

export const istanbulLocations: Location[] = [
  // ========== HAVAALANLARI ==========
  {
    name: 'İstanbul Havalimanı (IST)',
    address: 'İstanbul Havalimanı, Arnavutköy',
    category: 'airport',
    coords: [28.7519, 41.2753]
  },
  {
    name: 'Sabiha Gökçen Havalimanı (SAW)',
    address: 'Sabiha Gökçen Havalimanı, Pendik',
    category: 'airport',
    coords: [29.3092, 40.8986]
  },

  // ========== FATİH (Sultanahmet - Otel Yoğun) ==========
  {
    name: 'Sultanahmet Meydanı',
    address: 'Sultanahmet, Fatih',
    category: 'hotel_area',
    coords: [28.9784, 41.0058]
  },
  {
    name: 'Sultanahmet Camii',
    address: 'Sultanahmet, Fatih',
    category: 'tourist',
    coords: [28.9769, 41.0054]
  },
  {
    name: 'Ayasofya',
    address: 'Sultanahmet, Fatih',
    category: 'tourist',
    coords: [28.9802, 41.0086]
  },
  {
    name: 'Topkapı Sarayı',
    address: 'Cankurtaran, Fatih',
    category: 'tourist',
    coords: [28.9833, 41.0115]
  },
  {
    name: 'Kapalı Çarşı',
    address: 'Beyazıt, Fatih',
    category: 'tourist',
    coords: [28.9680, 41.0108]
  },
  {
    name: 'Eminönü',
    address: 'Eminönü, Fatih',
    category: 'hotel_area',
    coords: [28.9706, 41.0174]
  },
  {
    name: 'Sirkeci',
    address: 'Sirkeci, Fatih',
    category: 'hotel_area',
    coords: [28.9760, 41.0142]
  },
  {
    name: 'Laleli',
    address: 'Laleli, Fatih',
    category: 'hotel_area',
    coords: [28.9553, 41.0105]
  },
  {
    name: 'Aksaray',
    address: 'Aksaray, Fatih',
    category: 'hotel_area',
    coords: [28.9497, 41.0166]
  },

  // ========== BEYOĞLU (Taksim - Otel Yoğun) ==========
  {
    name: 'Taksim Meydanı',
    address: 'Taksim, Beyoğlu',
    category: 'hotel_area',
    coords: [28.9869, 41.0370]
  },
  {
    name: 'İstiklal Caddesi',
    address: 'Beyoğlu',
    category: 'tourist',
    coords: [28.9784, 41.0341]
  },
  {
    name: 'Galata Kulesi',
    address: 'Galata, Beyoğlu',
    category: 'tourist',
    coords: [28.9744, 41.0256]
  },
  {
    name: 'Karaköy',
    address: 'Karaköy, Beyoğlu',
    category: 'hotel_area',
    coords: [28.9761, 41.0242]
  },
  {
    name: 'Cihangir',
    address: 'Cihangir, Beyoğlu',
    category: 'hotel_area',
    coords: [28.9823, 41.0324]
  },
  {
    name: 'Asmalı Mescit',
    address: 'Asmalı Mescit, Beyoğlu',
    category: 'hotel_area',
    coords: [28.9789, 41.0309]
  },

  // ========== BEŞİKTAŞ (Lüks Otel Bölgesi) ==========
  {
    name: 'Beşiktaş Meydanı',
    address: 'Beşiktaş',
    category: 'hotel_area',
    coords: [29.0028, 41.0421]
  },
  {
    name: 'Ortaköy',
    address: 'Ortaköy, Beşiktaş',
    category: 'hotel_area',
    coords: [29.0267, 41.0486]
  },
  {
    name: 'Bebek',
    address: 'Bebek, Beşiktaş',
    category: 'hotel_area',
    coords: [29.0433, 41.0803]
  },
  {
    name: 'Etiler',
    address: 'Etiler, Beşiktaş',
    category: 'hotel_area',
    coords: [29.0222, 41.0783]
  },
  {
    name: 'Levent',
    address: 'Levent, Beşiktaş',
    category: 'district',
    coords: [29.0111, 41.0806]
  },

  // ========== ŞİŞLİ (İş Merkezi + Otel) ==========
  {
    name: 'Mecidiyeköy',
    address: 'Mecidiyeköy, Şişli',
    category: 'hotel_area',
    coords: [28.9972, 41.0639]
  },
  {
    name: 'Osmanbey',
    address: 'Osmanbey, Şişli',
    category: 'hotel_area',
    coords: [28.9900, 41.0506]
  },
  {
    name: 'Nişantaşı',
    address: 'Nişantaşı, Şişli',
    category: 'hotel_area',
    coords: [28.9939, 41.0508]
  },
  {
    name: 'Harbiye',
    address: 'Harbiye, Şişli',
    category: 'hotel_area',
    coords: [28.9928, 41.0464]
  },

  // ========== SARIYER (Boğaz Otelleri) ==========
  {
    name: 'Emirgan',
    address: 'Emirgan, Sarıyer',
    category: 'hotel_area',
    coords: [29.0528, 41.1089]
  },
  {
    name: 'İstinye',
    address: 'İstinye, Sarıyer',
    category: 'hotel_area',
    coords: [29.0556, 41.1161]
  },
  {
    name: 'Tarabya',
    address: 'Tarabya, Sarıyer',
    category: 'hotel_area',
    coords: [29.0658, 41.1389]
  },

  // ========== KADIKÖY (Anadolu Yakası - Otel Bölgesi) ==========
  {
    name: 'Kadıköy İskelesi',
    address: 'Kadıköy',
    category: 'hotel_area',
    coords: [29.0244, 40.9904]
  },
  {
    name: 'Moda',
    address: 'Moda, Kadıköy',
    category: 'hotel_area',
    coords: [29.0269, 40.9836]
  },
  {
    name: 'Acıbadem',
    address: 'Acıbadem, Kadıköy',
    category: 'district',
    coords: [29.0458, 40.9794]
  },

  // ========== ÜSKÜDAR (Anadolu Yakası) ==========
  {
    name: 'Üsküdar Meydanı',
    address: 'Üsküdar',
    category: 'hotel_area',
    coords: [29.0208, 41.0223]
  },
  {
    name: 'Kız Kulesi',
    address: 'Salacak, Üsküdar',
    category: 'tourist',
    coords: [29.0042, 41.0213]
  },
  {
    name: 'Çengelköy',
    address: 'Çengelköy, Üsküdar',
    category: 'hotel_area',
    coords: [29.0697, 41.0461]
  },

  // ========== ŞİLE (Sahil Otelleri) ==========
  {
    name: 'Şile',
    address: 'Şile',
    category: 'district',
    coords: [29.6092, 41.1747]
  },

  // ========== BÜYÜKÇEKMECE (Batı Otelleri) ==========
  {
    name: 'Büyükçekmece',
    address: 'Büyükçekmece',
    category: 'district',
    coords: [28.5836, 41.0247]
  },

  // ========== SİLİVRİ (Sahil Otelleri) ==========
  {
    name: 'Silivri',
    address: 'Silivri',
    category: 'district',
    coords: [28.2461, 41.0747]
  },

  // ========== PENDİK ==========
  {
    name: 'Pendik Marina',
    address: 'Pendik',
    category: 'district',
    coords: [29.2333, 40.8744]
  },

  // ========== KARTAL ==========
  {
    name: 'Kartal',
    address: 'Kartal',
    category: 'district',
    coords: [29.1867, 40.9028]
  },

  // ========== BAKIRKÖY ==========
  {
    name: 'Bakırköy',
    address: 'Bakırköy',
    category: 'district',
    coords: [28.8761, 40.9789]
  },
  {
    name: 'Ataköy',
    address: 'Ataköy, Bakırköy',
    category: 'hotel_area',
    coords: [28.8589, 40.9744]
  },

  // ========== YEŞILKÖY (Havalimanı Yakını) ==========
  {
    name: 'Yeşilköy',
    address: 'Yeşilköy, Bakırköy',
    category: 'hotel_area',
    coords: [28.8208, 40.9647]
  },

  // ========== FLORYA ==========
  {
    name: 'Florya',
    address: 'Florya, Bakırköy',
    category: 'hotel_area',
    coords: [28.7878, 40.9761]
  },
];

// Arama fonksiyonu
export function searchLocations(query: string): Location[] {
  const searchTerm = query.toLowerCase().trim();
  
  if (searchTerm.length < 2) return [];

  return istanbulLocations.filter(location => {
    const nameMatch = location.name.toLowerCase().includes(searchTerm);
    const addressMatch = location.address.toLowerCase().includes(searchTerm);
    return nameMatch || addressMatch;
  });
}

// Kategoriye göre getir
export function getLocationsByCategory(category: Location['category']): Location[] {
  return istanbulLocations.filter(loc => loc.category === category);
}