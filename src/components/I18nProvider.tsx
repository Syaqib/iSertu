"use client";

import { useEffect } from 'react';
import '@/lib/i18n';
import i18n from '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Load language from localStorage after hydration
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    if (storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
    }
  }, []);

  return <>{children}</>;
}

