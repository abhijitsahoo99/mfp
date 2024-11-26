"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronRight,
  Phone,
  MessageCircle,
  ShoppingCart,
  X,
  Plus,
  Minus,
} from "lucide-react";

// Types
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

const products: Product[] = [
  {
    id: 1,
    name: "Biri Dal",
    price: "115",
    imagePath: "/assets/biri-dal.svg",
  },
  {
    id: 2,
    name: "Gram Dal",
    price: "85",
    imagePath: "/assets/gram-dal.svg",
  },
  {
    id: 3,
    name: "Kabuli Chana",
    price: "147",
    imagePath: "/assets/kabuli-chana.svg",
  },
  {
    id: 4,
    name: "Masoor Dal",
    price: "77",
    imagePath: "/assets/masoor-dal.svg",
  },
  {
    id: 5,
    name: "Toor Dal",
    price: "85",
    imagePath: "/assets/toor-dal.svg",
  },
  {
    id: 6,
    name: "Moong Dal",
    price: "110",
    imagePath: "/assets/moong-dal.svg",
  },
  {
    id: 7,
    name: "Matar",
    price: "55",
    imagePath: "/assets/white-peas.svg",
  },
  {
    id: 8,
    name: "Mustard Seed",
    price: "67",
    imagePath: "/assets/mustard-seeds.svg",
  },
];

const contacts: Contact[] = [
  {
    id: 1,
    number: "7978692145",
    isWhatsAppBusiness: true,
    label: "Customer Support",
  },
];

// Add this helper function at the top with other helper functions
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

// Replace the existing Cart component with this simplified version
const Cart: React.FC<CartProps> = ({
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
            {cartItems.map((item) => (
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
const Navbar = ({
  cartItems,
  onCartClick,
}: {
  cartItems: CartItem[];
  onCartClick: () => void;
}) => (
  <nav className="sticky top-0 z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-red-700 text-2xl font-bold">
              Madhav Food Products
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-baseline space-x-4">
            <a
              href="#about"
              className="text-gray-700 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-700 hover:text-red-700"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="bg-gradient-to-r from-red-50 to-red-100 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Pure & Natural</span>
          <span className="block text-red-700">Indian Staples</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Welcome to Madhav Food Products - your trusted source for premium
          quality Indian staples. We take pride in producing authentic, pure,
          and nutritious food products in our state-of-the-art facility in
          Jagatpur, Odisha.
        </p>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Unlike others, we control our entire production process, eliminating
          middlemen to bring you the finest quality at the most competitive
          prices. Our commitment to purity means zero harmful additives - just
          natural goodness in every pack.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#products"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
            >
              Explore Our Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Products = ({
  addToCart,
  cartItems,
  updateQuantity,
}: {
  addToCart: (product: Product) => void;
  cartItems: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
}) => {
  const getItemQuantity = (productId: number): number => {
    const item = cartItems.find((item) => item.id === String(productId));
    return item?.quantity || 0;
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-12">
          Our Premium Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => {
            const quantity = getItemQuantity(product.id);
            return (
              <div key={product.id} className="group relative">
                <div className="relative w-full h-80 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={product.id === 1}
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="text-sm font-medium text-gray-900">
                      ₹{product.price}/kg
                    </p>
                  </div>
                  {quantity === 0 ? (
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-red-700 text-white rounded-md px-2">
                      <button
                        onClick={() =>
                          updateQuantity(String(product.id), quantity - 1)
                        }
                        className="p-2 hover:bg-red-800 rounded-l"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4">{quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(String(product.id), quantity + 1)
                        }
                        className="p-2 hover:bg-red-800 rounded-r"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleWhatsAppClick = (number: string, isBusinessAccount: boolean) => {
    const message = encodeURIComponent(
      "Hi! I'm interested in knowing more about your products."
    );
    const whatsappURL = isBusinessAccount
      ? `https://wa.me/91${number}?text=${message}`
      : `https://api.whatsapp.com/send?phone=91${number}&text=${message}`;
    window.open(whatsappURL, "_blank");
  };
  const handlePhoneClick = (number: string) => {
    window.location.href = `tel:+91${number}`;
  };
  return (
    <section id="contact" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            For any queries feel free to contact/whatsapp us to place orders.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center space-y-6">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {contact.label}
                </h3>
                <p className="text-gray-600">+91 {contact.number}</p>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => handlePhoneClick(contact.number)}
                  className="flex items-center justify-center px-4 py-2 border-2 border-red-700 text-red-700 rounded-md hover:bg-red-50 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Click to Call</span>
                </button>

                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      contact.number,
                      contact.isWhatsAppBusiness
                    )
                  }
                  className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button className="flex items-center justify-center px-4 py-2 border-2 border-red-700 text-black rounded-md bg-red-50 transition-colors duration-200">
                  <span>
                    Address:{" "}
                    <a
                      href="https://www.google.com/maps/dir//20.4620621,85.8781491/@20.4621348,85.8783126,55m/data=!3m1!1e3!4m2!4m1!3e9?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Dall mill lane, Tarachand Patna, Pithapur, Cuttack
                    </a>
                  </span>
                </button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500">
                {/* <p>
                  Address:{" "}
                  <a
                    href="https://www.google.com/maps/dir//20.4621786,85.8781702/@20.4620707,85.8370217,13395m/data=!3m2!1e3!4b1!4m2!4m1!3e9?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                    className="text-blue-500"
                  >
                    Dall mill lane, Tarachand Patna, Pithapur, Cuttack
                  </a>
                </p> */}
                <p>Timing: 10:00 AM - 8:00 PM IST</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  // Move the date calculation into the component body
  const [year, setYear] = useState("2024"); // Default value

  useEffect(() => {
    // Update the year on the client side
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-red-700">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white">
          © {year} Madhav Food Products. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

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
        <Contact />
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
