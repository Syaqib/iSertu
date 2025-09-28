// Simple validation helpers without external dependencies

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
}

export interface CartItem {
  id: number;
  name: string;
  slug: string;
  price: number;
  qty: number;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (basic international format)
const PHONE_REGEX = /^[\+]?[\d\s\-\(\)]{10,}$/;

export function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export function validatePhone(phone: string): boolean {
  return PHONE_REGEX.test(phone.trim());
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function validateCustomerInfo(customer: CustomerInfo): ValidationResult {
  const errors: string[] = [];

  if (!validateRequired(customer.name)) {
    errors.push("Name is required");
  }

  if (!validateRequired(customer.email)) {
    errors.push("Email is required");
  } else if (!validateEmail(customer.email)) {
    errors.push("Please enter a valid email address");
  }

  if (!validateRequired(customer.phone)) {
    errors.push("Phone number is required");
  } else if (!validatePhone(customer.phone)) {
    errors.push("Please enter a valid phone number");
  }

  if (!validateRequired(customer.address)) {
    errors.push("Address is required");
  }

  if (!validateRequired(customer.city)) {
    errors.push("City is required");
  }

  if (!validateRequired(customer.postcode)) {
    errors.push("Postcode is required");
  }

  if (!validateRequired(customer.country)) {
    errors.push("Country is required");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateCartItems(items: CartItem[]): ValidationResult {
  const errors: string[] = [];

  if (items.length === 0) {
    errors.push("Your cart is empty");
  }

  for (const item of items) {
    if (!item.id || !item.name || !item.slug || !item.price || !item.qty) {
      errors.push("Invalid cart item detected");
      break;
    }

    if (item.qty <= 0 || item.qty > 99) {
      errors.push(`Invalid quantity for ${item.name}`);
    }

    if (item.price <= 0) {
      errors.push(`Invalid price for ${item.name}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateCheckout(customer: CustomerInfo, items: CartItem[]): ValidationResult {
  const customerValidation = validateCustomerInfo(customer);
  const cartValidation = validateCartItems(items);

  return {
    isValid: customerValidation.isValid && cartValidation.isValid,
    errors: [...customerValidation.errors, ...cartValidation.errors]
  };
}
