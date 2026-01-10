'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Currency = 'EUR' | 'USD' | 'TRY';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (eurPrice: number) => string;
  getCurrencySymbol: () => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Sabit kurlar (EUR bazlı) - Manuel güncellenecek
const exchangeRates = {
  EUR: 1,
  USD: 1.18,    // 1 EUR = 1.18 USD
  TRY: 51.1,   // 1 EUR = 51.1 TRY
};

const currencySymbols = {
  EUR: '€',
  USD: '$',
  TRY: '₺',
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>('EUR');

  // LocalStorage'dan currency yükle
  useEffect(() => {
    const savedCurrency = localStorage.getItem('preferredCurrency');
    if (savedCurrency && (savedCurrency === 'EUR' || savedCurrency === 'USD' || savedCurrency === 'TRY')) {
      setCurrencyState(savedCurrency);
    }
  }, []);

  // Currency değiştiğinde localStorage'a kaydet
  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('preferredCurrency', newCurrency);
  };

  // EUR fiyatını seçili para birimine çevir
  const convertPrice = (eurPrice: number): string => {
    const converted = eurPrice * exchangeRates[currency];
    
    // TRY için tam sayı, diğerleri için 2 ondalık
    if (currency === 'TRY') {
      return Math.round(converted).toLocaleString('tr-TR');
    }
    return converted.toFixed(2);
  };

  // Para birimi sembolünü getir
  const getCurrencySymbol = (): string => {
    return currencySymbols[currency];
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, getCurrencySymbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};