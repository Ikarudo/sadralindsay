import { getBusinessPublicEmail } from '@/lib/env';

export const BUSINESS_CONFIG = {
  email: getBusinessPublicEmail(),
  phone: '(555) 123-4567', // Update with actual phone number
  paypal: 'your-paypal@email.com', // Update with actual PayPal email
  venmo: '@YourVenmoHandle', // Update with actual Venmo handle
  zelle: 'your-zelle@email.com', // Update with actual Zelle email
  businessName: 'Sadra M. Lindsay',
  website: 'https://sadralindsay.com'
};
