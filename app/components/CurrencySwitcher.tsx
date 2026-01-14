'use client';

import React from 'react';
import { useCurrency } from '../contexts/CurrencyContext';

const currencies = {
  EUR: { symbol: '€', code: 'EUR', flag: '🇪🇺' },
  USD: { symbol: '$', code: 'USD', flag: '🇺🇸' },
  TRY: { symbol: '₺', code: 'TRY', flag: '🇹🇷' }
};

interface CurrencySwitcherProps {
  variant?: 'navbar' | 'compact';
}

export default function CurrencySwitcher({ variant = 'navbar' }: CurrencySwitcherProps) {
  const { currency, setCurrency } = useCurrency();

  // KOMPAKT VERSİYON (Ana sayfa için)
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 bg-cream-100 p-1.5 rounded-full border-2 border-crimson-200 shadow-md">
        {Object.entries(currencies).map(([code, curr]) => (
          <button
            key={code}
            type="button"
            onClick={() => setCurrency(code as 'EUR' | 'USD' | 'TRY')}
            className={`px-3 py-1.5 rounded-full font-bold text-sm transition-all ${
              currency === code
                ? 'bg-crimson-500 text-white shadow-lg scale-105'
                : 'text-gray-600 hover:bg-cream-200 hover:text-crimson-600'
            }`}
          >
            <span className="flex items-center gap-1">
              <span>{curr.flag}</span>
              <span>{curr.code}</span>
            </span>
          </button>
        ))}
      </div>
    );
  }

  // NAVBAR VERSİYONU (Üst menü için)
  return (
    <div className="flex items-center gap-2 bg-white/50 p-1 rounded-lg border border-gray-200">
      {Object.entries(currencies).map(([code, curr]) => (
        <button
          key={code}
          type="button"
          onClick={() => setCurrency(code as 'EUR' | 'USD' | 'TRY')}
          className={`px-2.5 py-1 rounded-md font-bold text-xs transition-all ${
            currency === code
              ? 'bg-primary-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <span className="flex items-center gap-1">
            <span className="text-base">{curr.symbol}</span>
            <span>{curr.code}</span>
          </span>
        </button>
      ))}
    </div>
  );
}