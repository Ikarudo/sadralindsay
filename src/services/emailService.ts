import * as emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'BdKKyqFilu_6-e0Qt';
const EMAILJS_SERVICE_ID = 'Invoices';
const EMAILJS_TEMPLATE_ID = 'InvoiceTemplate';
const BUSINESS_EMAIL = 'sandlbusinesswise@gmail.com';

export interface OrderItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

export interface OrderData {
  customer_name: string;
  customer_email: string;
  order_id: string;
  order_date: string;
  orders: Array<{
    name: string;
    units: number;
    unit_price: string;
    total_price: string;
  }>;
  cost: {
    subtotal: string;
    shipping: string;
    tax: string;
    total: string;
  };
  [key: string]: unknown; // Add index signature for EmailJS compatibility
}

export const sendOrderConfirmationEmails = async (
  customerEmail: string,
  customerName: string,
  items: OrderItem[],
  subtotal: number,
  shipping: number,
  total: number,
  orderId: string,
  orderDate?: string
): Promise<boolean> => {
  try {
    // Basic validation
    if (!customerEmail || !customerName || !items || items.length === 0) return false;

    // Check if EmailJS is available
    if (typeof window === 'undefined') return false;

    // Check if EmailJS is properly initialized
    if (!emailjs.send) return false;

    // Validate EmailJS configuration
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) return false;
    
    // Use provided order ID and date so email matches Firestore
    const orderIdFinal = orderId;
    const orderDateFinal = orderDate || new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Calculate tax (assuming 0% for now, can be modified later)
    const tax = 0;

    // Format order items for template
    const formattedOrders = items.map(item => ({
      name: item.title,
      units: item.quantity,
      unit_price: item.price.toFixed(2),
      total_price: (item.price * item.quantity).toFixed(2)
    }));

    // Prepare template parameters
    const templateParams: OrderData = {
      customer_name: customerName,
      customer_email: customerEmail,
      order_id: orderIdFinal,
      order_date: orderDateFinal,
      orders: formattedOrders,
      cost: {
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
      }
    };

    // Also try with alternative variable names that might be expected
    const alternativeTemplateParams = {
      ...templateParams,
      // Some templates expect different variable names
      customerName: customerName,
      customerEmail: customerEmail,
      orderId: orderIdFinal,
      orderDate: orderDateFinal,
      orderItems: formattedOrders,
      orderSummary: {
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
      },
      // Common template variable names
      name: customerName,
      email: customerEmail,
      // Item-related variables (common in invoice templates)
      items: formattedOrders,
      item_list: formattedOrders,
      products: formattedOrders,
      // Cost-related variables
      amount: total.toFixed(2),
      price: total.toFixed(2),
      // Individual item fields (for loops in templates)
      item_names: formattedOrders.map(item => item.name).join(', '),
      item_quantities: formattedOrders.map(item => item.units).join(', '),
      item_prices: formattedOrders.map(item => item.total_price).join(', ')
    };

    // Send email to customer
    // Send to customer (ignore response object)
    try {
      // First try with alternative parameter names
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        alternativeTemplateParams,
        EMAILJS_PUBLIC_KEY
      );
    } catch {
      // try fallback with original params
      try {
        // Fallback to original template parameters
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      } catch (fallbackError) {
        // propagate error
        throw fallbackError;
      }
    }

    // Send email to business
    // try {
    //   const businessTemplateParams = {
    //     ...alternativeTemplateParams, // Use alternative parameters
    //     customer_email: BUSINESS_EMAIL, // Override for business email
    //     is_business_copy: true
    //   };

    //   try {
    //     // First try with alternative parameter names
    //     await emailjs.send(
    //       EMAILJS_SERVICE_ID,
    //       EMAILJS_TEMPLATE_ID,
    //       businessTemplateParams,
    //       EMAILJS_PUBLIC_KEY
    //     );
    //   } catch {
    //     // try fallback with original params
    //     try {
    //       // Fallback to original template parameters
    //       const fallbackBusinessParams = {
    //         ...templateParams,
    //         customer_email: BUSINESS_EMAIL,
    //         is_business_copy: true
    //       };
    //       await emailjs.send(
    //         EMAILJS_SERVICE_ID,
    //         EMAILJS_TEMPLATE_ID,
    //         fallbackBusinessParams,
    //         EMAILJS_PUBLIC_KEY
    //       );
    //     } catch (fallbackError) {
    //       // propagate error
    //       throw fallbackError;
    //     }
    //   }
    // } catch (businessError) {
    //   throw businessError;
    // }

    return true;
  } catch {
    return false;
  }
};
