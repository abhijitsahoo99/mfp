"use client";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Products } from "../components/products";
import { CartItem, Product } from "@/types/queries";
import { Cart } from "@/components/cart";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/Hero";
import { ContactTo } from "@/components/contact";

const HomePage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === String(product.id)
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        {
          id: String(product.id),
          name: product.name,
          price: parseFloat(product.price),
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <main>
        <Hero />
        <Products
          addToCart={addToCart}
          cartItems={cartItems}
          updateQuantity={updateQuantity}
        />
        <ContactTo />
      </main>

      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          onClose={() => setIsCartOpen(false)}
          totalAmount={totalAmount}
        />
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
