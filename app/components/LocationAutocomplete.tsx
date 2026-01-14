'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchLocations, type Location } from '../data/locations';

interface LocationAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  label?: string;
  required?: boolean;
  onValidChange?: (isValid: boolean) => void;
}

export default function LocationAutocomplete({
  value,
  onChange,
  placeholder = 'Adres seçin...',
  icon,
  label,
  required = false,
  onValidChange,
}: LocationAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isValidLocation, setIsValidLocation] = useState(false);
  const [showError, setShowError] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Dışarı tıklanınca kapat
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Input değişiminde debounce
  const handleInputChange = (newValue: string) => {
    onChange(newValue);
    setIsValidLocation(false);
    setShowError(false);
    onValidChange?.(false);

    // Önceki timeout'u iptal et
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // 300ms bekle, sonra ara
    debounceRef.current = setTimeout(() => {
      const results = searchLocations(newValue);
      setSuggestions(results);
      setIsOpen(results.length > 0);
    }, 300);
  };

  // Öneri seçildiğinde
  const handleSelectSuggestion = (location: Location) => {
    onChange(location.name);
    setIsValidLocation(true);
    setShowError(false);
    onValidChange?.(true);
    setSuggestions([]);
    setIsOpen(false);
  };

  // Kategori ikonu
  const getCategoryIcon = (category: Location['category']) => {
    switch (category) {
      case 'airport':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        );
      case 'hotel_area':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'tourist':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
    }
  };

  // Kategori rengi
  const getCategoryColor = (category: Location['category']) => {
    switch (category) {
      case 'airport': return 'text-blue-600 bg-blue-50';
      case 'hotel_area': return 'text-crimson-600 bg-crimson-50';
      case 'tourist': return 'text-purple-600 bg-purple-50';
      default: return 'text-sage-600 bg-sage-50';
    }
  };

  return (
    <div className="relative group" ref={wrapperRef}>
      {/* Label */}
      {label && (
        <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-bold text-crimson-600 z-10">
          {label}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none transition group-focus-within:text-crimson-500">
            {icon}
          </div>
        )}

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={() => {
            if (value && !isValidLocation) {
              setShowError(true);
            }
          }}
          placeholder={placeholder}
          required={required}
          className={`w-full pl-12 pr-4 py-4 bg-white border-2 rounded-2xl text-gray-900 font-semibold placeholder-gray-400 focus:ring-4 transition text-sm md:text-base outline-none ${
            showError && !isValidLocation
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-cream-300 focus:border-crimson-500 focus:ring-crimson-100'
          }`}
        />

        {/* Hata Mesajı */}
        {showError && !isValidLocation && value && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-4 -bottom-6 text-xs text-red-600 font-semibold flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            Lütfen listeden bir lokasyon seçin
          </motion.p>
        )}
      </div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl 
                     border-2 border-cream-300 overflow-hidden z-50 max-h-80 overflow-y-auto"
          >
            {suggestions.map((location, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelectSuggestion(location)}
                className="w-full px-4 py-3 text-left hover:bg-crimson-50 
                         transition-colors duration-200 border-b border-cream-200
                         last:border-b-0 group/item"
              >
                <div className="flex items-start gap-3">
                  {/* Category Icon with Badge */}
                  <div className={`p-2 rounded-lg ${getCategoryColor(location.category)} flex-shrink-0`}>
                    {getCategoryIcon(location.category)}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="font-outfit font-bold text-gray-900 group-hover/item:text-crimson-600 
                                 transition-colors text-sm">
                      {location.name}
                    </p>
                    <p className="font-outfit text-xs text-gray-500 mt-0.5">
                      {location.address}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover/item:text-crimson-500 
                             transition-all group-hover/item:translate-x-1 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}