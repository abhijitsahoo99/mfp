import { Plus, Minus } from "lucide-react";
import Image from "next/image";
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

export const Products = ({
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
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">
          Our Premium Products
        </h2>
        <h2 className="text-2xl font-medium tracking-tight text-gray-900 text-center mb-12">
          Add to cart and WhatsApp us for delivery/takeaway
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
