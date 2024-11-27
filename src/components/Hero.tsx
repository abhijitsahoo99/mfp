import { ChevronRight } from "lucide-react";

export const Hero = () => (
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
