interface Product {
  id: number;
  name: string;
  price: string;
  imagePath: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  onClose: () => void;
  totalAmount: number;
}

interface Contact {
  id: number;
  number: string;
  isWhatsAppBusiness: boolean;
  label: string;
}

export type { Product, CartItem, CartProps, Contact };
