# EmailJS Integration Setup

This document explains how the EmailJS integration is set up for order confirmation emails in the Sadra M. Lindsay website.

## Configuration

The EmailJS integration is configured with the following details:

- **Public Key**: `UU2gE0P6xkNGYxBEw`
- **Service ID**: `SML_Invoices`
- **Template ID**: `template_ste2vdm`
- **Business Email**: `sandlbusinesswise@gmail.com`

## How It Works

### 1. Order Placement
When a user places an order on the checkout page:
1. The order is saved to Firebase Firestore
2. EmailJS sends a confirmation email to the customer
3. EmailJS sends a copy of the confirmation email to the business email

### 2. Email Template Variables
The email template uses the following variables:
- `{{customer_name}}` - Customer's name
- `{{customer_email}}` - Customer's email address
- `{{order_id}}` - Unique order ID (format: SML-timestamp-randomstring)
- `{{order_date}}` - Date the order was placed
- `{{orders}}` - Array of order items with name, units, unit_price, total_price
- `{{cost.subtotal}}` - Order subtotal
- `{{cost.shipping}}` - Shipping cost
- `{{cost.tax}}` - Tax amount
- `{{cost.total}}` - Total order amount

### 3. Files Involved

- `src/services/emailService.ts` - Main email service logic
- `src/components/EmailJSInitializer.tsx` - EmailJS initialization
- `src/app/checkout/page.tsx` - Checkout page with email integration
- `src/config/business.ts` - Business contact information

## Customization

### Update Business Information
Edit `src/config/business.ts` to update:
- Phone number
- PayPal email
- Venmo handle
- Zelle email
- Business name
- Website URL

### Update EmailJS Configuration
To change EmailJS settings, update the constants in `src/services/emailService.ts`:
- `EMAILJS_PUBLIC_KEY`
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `BUSINESS_EMAIL`

### Modify Email Template
The email template is managed through EmailJS dashboard. The current template includes:
- Order confirmation header
- Customer information
- Order details with items and pricing
- Payment instructions
- Contact information
- Next steps

## Testing

To test the email functionality:
1. Add items to cart
2. Proceed to checkout
3. Place an order (while signed in)
4. Check both customer and business emails
5. Verify order is saved in Firebase

## Troubleshooting

### Common Issues

1. **Emails not sending**: Check browser console for EmailJS errors
2. **Template variables not working**: Verify template ID and variable names in EmailJS dashboard
3. **Authentication errors**: Ensure EmailJS public key is correct
4. **Service not found**: Verify service ID exists in EmailJS dashboard

### Debug Mode
The email service includes console logging for debugging:
- Customer email sending status
- Business email sending status
- Success/failure results

## Security Notes

- EmailJS public key is safe to expose in client-side code
- No sensitive information is stored in the frontend
- All order data is securely stored in Firebase
- Customer emails are only sent to authenticated users

## Future Enhancements

Potential improvements:
- Email templates for different order statuses
- Automated follow-up emails
- Email delivery tracking
- Custom email branding
- Multi-language support
