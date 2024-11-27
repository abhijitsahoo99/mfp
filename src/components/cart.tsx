"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X, Plus, Minus } from "lucide-react";
import { Contact, CartItem, CartProps, Product } from "@/types/queries";
const formatCartForWhatsApp = (
  items: CartItem[],
  customerName: string,
  address: string
): string => {
  const itemsList = items
    .map(
      (item) =>
        `- ${item.name}: ${item.quantity}kg @ ₹${item.price}/kg = ₹${
          item.price * item.quantity
        }`
    )
    .join("\n");

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // Only include customer details if provided
  const customerDetails = customerName
    ? `*Customer Name: ${customerName}*\n\n`
    : "";
  const addressDetails = address ? `*Delivery Address: ${address}*\n\n` : "";
  return encodeURIComponent(
    `*New Order For Madhav Food Products*\n\n` +
      customerDetails +
      addressDetails +
      `*Order Details:*\n${itemsList}\n\n` +
      `*Total Amount: ₹${total.toFixed(2)}*\n\n` +
      `Please confirm my order.`
  );
};

export const Cart: React.FC<CartProps> = ({
  cartItems,
  updateQuantity,
  removeFromCart,
  onClose,
  totalAmount,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");

  const handleWhatsAppOrder = () => {
    const message = formatCartForWhatsApp(cartItems, customerName, address);
    const whatsappURL = `https://wa.me/917978692145?text=${message}`; // Update with your number
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center text-black">
      <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}/kg</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(0, item.quantity - 1))
                    }
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span>{item.quantity}kg</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-bold mb-4">
                <span>Total:</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
              <div className="space-y-4 mb-4">
                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Delivery Address (Optional)
                  </label>
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your delivery address"
                    rows={3}
                  />
                </div>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Order via WhatsApp</span>
              </button>

              <p className="text-sm text-gray-500 text-center mt-2">
                Click to send your order details on WhatsApp
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
