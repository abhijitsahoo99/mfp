import React from "react";
import { ChevronRight, Phone, Mail } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Moong Dal",
    price: "120",
    imagePath: "/assets/dal.jpeg",
  },
  {
    id: 2,
    name: "Toor Dal",
    price: "110",
    imagePath: "/assets/dal.jpeg",
  },
  {
    id: 3,
    name: "Masoor Dal",
    price: "95",
    imagePath: "/assets/dal.jpeg",
  },
  {
    id: 4,
    name: "Biri Dal",
    price: "85",
    imagePath: "/assets/dal.jpeg",
  },
  {
    id: 5,
    name: "Gram Dal",
    price: "90",
    imagePath: "/assets/dal.jpeg",
  },
];

const Navbar = () => (
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
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
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

const Products = () => (
  <section id="products" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-12">
        Our Premium Products
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
              {/* Add position-relative to container */}
              <div className="relative w-full h-[300px]">
                {" "}
                {/* Set explicit height */}
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
              <p className="text-lg font-medium text-gray-900">
                ₹{product.price}/kg
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          For orders and inquiries, please contact us at the numbers below.
        </p>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center">
          <Phone className="h-6 w-6 text-red-700 mr-2" />
          <span className="text-gray-500">+91 9876543210</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-6 w-6 text-red-700 mr-2" />
          <span className="text-gray-500">+91 9876543211</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-red-700">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-white">
        © {new Date().getFullYear()} Madhav Food Products. All rights reserved.
      </p>
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
