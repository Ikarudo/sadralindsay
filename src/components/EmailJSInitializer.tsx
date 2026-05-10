'use client';

import { useEffect } from 'react';
import * as emailjs from '@emailjs/browser';
import { getEmailJsConfig, getEmailJsFallbackConfig } from '@/lib/env';

export default function EmailJSInitializer() {
  useEffect(() => {
    try {
      if (!emailjs.init) return;
      const primary = getEmailJsConfig();
      const fallback = getEmailJsFallbackConfig();
      const publicKey = primary.publicKey || fallback?.publicKey;
      if (!publicKey) return;
      emailjs.init(publicKey);
    } catch (error) {
      console.error('[EmailJS] Initialization failed:', error);
    }
  }, []);

  return null;
}
