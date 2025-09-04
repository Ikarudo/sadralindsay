'use client';

import { useEffect } from 'react';
import * as emailjs from '@emailjs/browser';

export default function EmailJSInitializer() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    try {
      // Check if already initialized
      if (!emailjs.init) {
        console.log('EmailJS init function not available');
        return;
      }
      
      emailjs.init('UU2gE0P6xkNGYxBEw');
      console.log('EmailJS initialized successfully');
      
      // Test if initialization worked
      // setTimeout(() => {
      //   if (emailjs.send) {
      //     console.log('EmailJS send function available');
      //   } else {
      //     console.error('EmailJS send function not available after init');
      //   }
      // }, 100);
      
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  return null; // This component doesn't render anything
}
