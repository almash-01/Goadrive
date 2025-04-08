"use client"; // Ensure client-side execution

import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export default function Banner() {
  return (
    <div className="flex flex-col">
      {/* Header with Logo and Navbar */}
      <Navbar />

      {/* Background Image with Gradient Overlay */}
      <div className="relative w-full h-64 md:h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Rent-A-Car-Web-Banner-14.png"
            alt="Car Rental"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover object-center w-full h-full"
            style={{
              objectPosition: "center center",
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>

        {/* Tagline & Button */}
        <div className="relative z-20 flex items-center h-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Drive Your Dreams
              <br />
              Rent. Ride. Explore!
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mt-2">
              Affordable, reliable, and hassle-free car rentals at your fingertips.
            </p>

            <Link href="/pages/allcars">
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                Rent a Car Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
