# EmailJS integration

Order confirmation emails are sent from the checkout flow using [EmailJS](https://www.emailjs.com/). Credentials are **not** stored in source code; set them in `.env.local` (local) or GitHub Actions secrets (CI) using the variable names in `.env.example`.

## Configuration

Set these environment variables (same names as in `.env.example`):

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — public key from EmailJS (use the **same** key for runtime initialization and `send()` calls).
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` — Email service ID from the EmailJS dashboard.
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` — template ID for your invoice/order email.

Business contact details shown on the site (for example in `src/config/business.ts`) are separate from EmailJS; update that file for phone, PayPal, Venmo, etc.

## How it works

### 1. Order placement

When a user places an order on the checkout page:

1. The order is saved to Firebase Firestore.
2. EmailJS sends a confirmation email to the customer (and your template can copy the business inbox).

### 2. Email template variables

The template can use variables such as:

- `{{customer_name}}` — Customer name
- `{{customer_email}}` — Customer email
- `{{order_id}}` — Firestore document ID for the order
- `{{order_date}}` — Date string
- `{{orders}}` — Line items (name, units, prices)
- `{{cost.subtotal}}`, `{{cost.shipping}}`, `{{cost.tax}}`, `{{cost.total}}`

### 3. Files involved

- `src/lib/env.ts` — reads EmailJS env vars
- `src/services/emailService.ts` — builds payload and calls EmailJS
- `src/components/EmailJSInitializer.tsx` — initializes EmailJS with the public key
- `src/app/checkout/page.tsx` — checkout + order save + email trigger
- `src/config/business.ts` — business contact information

## Customization

### Update business information

Edit `src/config/business.ts` (phone, PayPal, Venmo, Zelle, business name, website URL).

### Change EmailJS service or template

Update the environment variables (`NEXT_PUBLIC_EMAILJS_*`) and redeploy.

### Modify the email body

Edit the template in the EmailJS dashboard.

## Testing

1. Configure `.env.local` with valid EmailJS values.
2. Add items to cart, sign in, checkout.
3. Confirm the email arrives and the order exists in Firestore.

## Troubleshooting

1. **Emails not sending**: Check the browser console for EmailJS errors; verify service/template IDs and template variable names.
2. **Build fails with “Missing required environment variable”**: Ensure `.env.local` exists locally and GitHub Actions secrets are set for deploys.

## Security notes

- EmailJS public keys are intended for client-side use; still avoid committing them in the repo—use env files and CI secrets.
- Orders are stored in Firebase; keep Firestore rules strict (`DEPLOY_FIRESTORE_RULES.md`).
