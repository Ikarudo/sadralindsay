/**
 * Client-side configuration from NEXT_PUBLIC_* variables (inlined at build time by Next.js).
 * Do not commit real values — use .env.local locally and GitHub Actions secrets for CI.
 */

function required(name: string): string {
  const v = process.env[name];
  if (v === undefined || v.trim() === '') {
    throw new Error(
      `Missing required environment variable: ${name}. Copy .env.example to .env.local and add your values.`
    );
  }
  return v;
}

export function getFirebaseConfig() {
  return {
    apiKey: required('NEXT_PUBLIC_FIREBASE_API_KEY'),
    authDomain: required('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
    projectId: required('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
    storageBucket: required('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: required('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
    appId: required('NEXT_PUBLIC_FIREBASE_APP_ID'),
    measurementId: required('NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID'),
  };
}

export function getEmailJsConfig() {
  return {
    publicKey: required('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'),
    serviceId: required('NEXT_PUBLIC_EMAILJS_SERVICE_ID'),
    templateId: required('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID'),
  };
}

/** Public business contact email shown on the site (not a private API secret, but kept in env to avoid committing PII). */
export function getBusinessPublicEmail() {
  return required('NEXT_PUBLIC_BUSINESS_EMAIL');
}
