'use client';

import React, { useState } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const currencies = {
  EUR: { name: 'Euro', symbol: '€', code: 'EUR', flag: '🇪🇺' },
  USD: { name: 'US Dollar', symbol: '$', code: 'USD', flag: '🇺🇸' },
  TRY: { name: 'Türk Lirası', symbol: '₺', code: 'TRY', flag: '🇹🇷' }
};

interface CurrencySwitcherProps {
  variant?: 'navbar' | 'compact';
}

export default function CurrencySwitcher({ variant = 'navbar' }: CurrencySwitcherProps) {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrencyChange = (newCurrency: 'EUR' | 'USD' | 'TRY') => {
    setCurrency(newCurrency);
    setIsOpen(false);
  };

  // KOMPAKT VERSİYON
  if (variant === 'compact') {
    return (
      <div className="relative z-50">
        {/* Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-cream-100 hover:bg-cream-200 text-crimson-600 px-3 py-2 rounded-full transition border-2 border-crimson-200 text-sm font-bold shadow-md hover:shadow-lg"
        >
          <span className="text-lg">{currencies[currency].flag}</span>
          <span>{currencies[currency].symbol} {currencies[currency].code}</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsOpen(false)}
              />
              
              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-200 z-50 w-44 overflow-hidden"
              >
                {Object.entries(currencies).map(([code, curr]) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handleCurrencyChange(code as 'EUR' | 'USD' | 'TRY')}
                    className={`w-full px-4 py-3 text-left transition-colors flex items-center space-x-3 text-sm ${
                      currency === code 
                        ? 'bg-crimson-50 text-crimson-600 font-bold border-l-4 border-crimson-500' 
                        : 'text-gray-700 hover:bg-cream-50'
                    }`}
                  >
                    <span className="text-xl">{curr.flag}</span>
                    <div className="flex-1">
                      <div className="font-bold">{curr.code}</div>
                      <div className="text-xs text-gray-500">{curr.symbol}</div>
                    </div>
                    {currency === code && (
                      <svg className="w-5 h-5 text-crimson-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // NAVBAR VERSİYONU
  return (
    <div className="relative z-50">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/50 hover:bg-white px-3 py-1.5 rounded-lg transition border border-gray-200"
      >
        <span className="text-xl">{currencies[currency].symbol}</span>
        <span className="font-bold text-sm text-gray-700">{currencies[currency].code}</span>
        <ChevronDown className={`w-3 h-3 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
            >
              {Object.entries(currencies).map(([code, curr]) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => handleCurrencyChange(code as 'EUR' | 'USD' | 'TRY')}
                  className={`w-full px-4 py-3 text-left hover:bg-[#14B8A6]/10 transition-colors flex items-center justify-between ${
                    currency === code ? 'bg-[#14B8A6]/20 text-[#14B8A6]' : 'text-gray-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl">{curr.symbol}</span>
                    <span className="font-medium text-sm">{curr.name}</span>
                  </span>
                  <span className="text-xs font-bold">{curr.code}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}