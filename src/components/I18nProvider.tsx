"use client";

import { useEffect, useState } from 'react';
import '@/lib/i18n';
import i18n from '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Ensure i18n is initialized
    if (i18n.isInitialized) {
      // Load language from localStorage after hydration
      const storedLang = localStorage.getItem('i18nextLng') || 'en';
      if (storedLang !== i18n.language) {
        i18n.changeLanguage(storedLang);
      }
      setIsInitialized(true);
    } else {
      // Wait for initialization
      const initPromise = i18n.init();
      initPromise.then(() => {
        const storedLang = localStorage.getItem('i18nextLng') || 'en';
        if (storedLang !== i18n.language) {
          i18n.changeLanguage(storedLang);
        }
        setIsInitialized(true);
      });
    }
  }, []);

  // Don't render until i18n is initialized
  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

