"use client";
import React from "react";
import Image from "next/image";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";

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

const contacts = [
  {
    id: 1,
    number: "7978692145",
    isWhatsAppBusiness: true,
    label: "Customer Support",
  },
];

const Navbar = () => (
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
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ₹{product.price}/kg
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
