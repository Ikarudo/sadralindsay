'use client';

import { useEffect } from 'react';
import * as emailjs from '@emailjs/browser';
import { getEmailJsConfig } from '@/lib/env';

export default function EmailJSInitializer() {
  useEffect(() => {
    try {
      if (!emailjs.init) return;
      const { publicKey } = getEmailJsConfig();
      emailjs.init(publicKey);
    } catch {
      // Missing env (e.g. misconfigured deploy) — checkout email send still attempts with key in send()
    }
  }, []);

  return null;
}
