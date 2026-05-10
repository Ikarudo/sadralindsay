import * as emailjs from '@emailjs/browser';
import { getEmailJsConfig, getEmailJsFallbackConfig, type EmailJsConfig } from '@/lib/env';

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

    const primaryConfig = getEmailJsConfig();
    const fallbackConfig = getEmailJsFallbackConfig();
    const configs: EmailJsConfig[] = [primaryConfig];
    if (
      fallbackConfig &&
      (fallbackConfig.publicKey !== primaryConfig.publicKey ||
        fallbackConfig.serviceId !== primaryConfig.serviceId ||
        fallbackConfig.templateId !== primaryConfig.templateId)
    ) {
      configs.push(fallbackConfig);
    }
    
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

    for (const cfg of configs) {
      try {
        await emailjs.send(
          cfg.serviceId,
          cfg.templateId,
          alternativeTemplateParams,
          cfg.publicKey
        );
        return true;
      } catch (firstError) {
        try {
          await emailjs.send(
            cfg.serviceId,
            cfg.templateId,
            templateParams,
            cfg.publicKey
          );
          return true;
        } catch (fallbackError) {
          const firstErrorData = (firstError as { status?: number; text?: string }) || {};
          const fallbackErrorData = (fallbackError as { status?: number; text?: string }) || {};
          console.error('[EmailJS] Send failed for config', {
            serviceId: cfg.serviceId,
            templateId: cfg.templateId,
            publicKeySuffix: cfg.publicKey.slice(-6),
            firstAttempt: {
              status: firstErrorData.status,
              text: firstErrorData.text,
            },
            fallbackAttempt: {
              status: fallbackErrorData.status,
              text: fallbackErrorData.text,
            },
          });
        }
      }
    }
    return false;
  } catch {
    return false;
  }
};
