/**
 * Client-side configuration from NEXT_PUBLIC_* variables (inlined at build time by Next.js).
 * Do not commit real values — use .env.local locally and GitHub Actions secrets for CI.
 *
 * Important: each variable must be read as `process.env.NEXT_PUBLIC_*` literally. Dynamic access
 * like `process.env[name]` is not inlined into client bundles, so it is undefined in the browser.
 */

function req(value: string | undefined, name: string): string {
  if (value === undefined || value.trim() === '') {
    throw new Error(
      `Missing required environment variable: ${name}. Copy .env.example to .env.local and add your values.`
    );
  }
  return value.trim();
}

export function getFirebaseConfig() {
  return {
    apiKey: req(process.env.NEXT_PUBLIC_FIREBASE_API_KEY, 'NEXT_PUBLIC_FIREBASE_API_KEY'),
    authDomain: req(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
    projectId: req(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, 'NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
    storageBucket: req(
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'
    ),
    messagingSenderId: req(
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'
    ),
    appId: req(process.env.NEXT_PUBLIC_FIREBASE_APP_ID, 'NEXT_PUBLIC_FIREBASE_APP_ID'),
    measurementId: req(
      process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      'NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID'
    ),
  };
}

export function getEmailJsConfig() {
  return {
    publicKey: req(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'),
    serviceId: req(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 'NEXT_PUBLIC_EMAILJS_SERVICE_ID'),
    templateId: req(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID'),
  };
}

export interface EmailJsConfig {
  publicKey: string;
  serviceId: string;
  templateId: string;
}

function maybe(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

/**
 * Optional fallback config for migrations between EmailJS service/template IDs.
 * If provided, checkout will try primary first, then fallback tuple.
 */
export function getEmailJsFallbackConfig(): EmailJsConfig | null {
  const publicKey = maybe(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_FALLBACK);
  const serviceId = maybe(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_FALLBACK);
  const templateId = maybe(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FALLBACK);

  if (!publicKey || !serviceId || !templateId) return null;
  return { publicKey, serviceId, templateId };
}

/** Public contact email for BUSINESS_CONFIG; optional so CI does not need a separate “secret” for it. */
export function getBusinessPublicEmail(): string {
  return process.env.NEXT_PUBLIC_BUSINESS_EMAIL?.trim() ?? '';
}
