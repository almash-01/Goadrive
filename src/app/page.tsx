import { Phone, MessageCircle } from "lucide-react";
import Banner from "@/components/banner";
import FeaturedCars from "@/components/collection";
import RentalSteps from "@/components/steps";
import Footer from "@/components/footer";
import CarRentalTerms from "@/components/rentalterms";

export const metadata = {
  title: "GOA DRIVE | Drive Your Dreams - Rent. Ride. Explore.",
  description:
    "Book affordable and hassle-free car rentals. Drive your dreams with our reliable service and wide car selection in India.",
  keywords: [
    "car rental",
    "rent a car",
    "car hire",
    "cheap car rentals",
    "car booking",
    "car rental India",
    "car rental goa",
    "goa car rental",
  ],
  openGraph: {
    title: "Car Rental Service | Drive Your Dreams - Rent. Ride. Explore.",
    description:
      "Book affordable and hassle-free car rentals. Drive your dreams with our reliable service and wide car selection in India.",
    url: "https://your-domain.com", // replace with your domain
    siteName: "Rent A Car",
    images: [
      {
        url: "/Rent-A-Car-Web-Banner-14.png",
        width: 1200,
        height: 630,
        alt: "Rent a car and drive your dreams",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive Your Dreams | Affordable Car Rental Service",
    description:
      "Explore reliable and cheap car rentals. Rent a car and start your journey today!",
    images: ["/Rent-A-Car-Web-Banner-14.png"],
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedCars />
      <RentalSteps />

      {/* Call & WhatsApp Buttons */}
      <div className="fixed bottom-6 left-6 flex space-x-4 z-20">
        <a
          href="tel:+918975966188"
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700"
        >
          <Phone className="mr-2" size={20} />
          Call Now
        </a>
        <a
          href="https://wa.me/918975966188"
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600"
        >
          <MessageCircle className="mr-2" size={20} />
          WhatsApp
        </a>
      </div>

      <CarRentalTerms />
      <Footer />
    </>
  );
}
