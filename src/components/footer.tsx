"use client";

import { useState, useEffect } from "react";

export const Footer = () => {
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
