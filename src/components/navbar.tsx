import { ShoppingCart } from "lucide-react";
import { CartItem} from "@/types/queries";

export const Navbar = ({
  cartItems,
  onCartClick,
}: {
  cartItems: CartItem[];
  onCartClick: () => void;
}) => (
  <nav className="sticky top-0 z-50 bg-white shadow-md">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
