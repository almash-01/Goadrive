import React from "react";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info & Location */}
          <div>
            <h2 className="text-xl font-bold text-orange-500">GOA DRIVE</h2>
            <p className="mt-2 text-gray-300">
              Discover the best <strong>car rentals in Goa</strong> with <strong>GOA DRIVE</strong>. Choose from a wide range of affordable, reliable cars for every trip. Whether you&apos;re exploring beaches or traveling for work, <strong>rent a car in Goa today</strong> for a smooth and stress-free experience!
            </p>
            <div className="flex items-center mt-4">
              <MapPin className="text-orange-500 w-5 h-5" />
              <a
                href="https://maps.app.goo.gl/jo4nsjUyiJ82QEZ38"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-gray-300 hover:text-orange-500 underline"
              >
                7XVP+4Q5, Amrut Nagar, Gogol, Madgaon, Goa 403601
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h2 className="text-xl font-bold text-orange-500">Our Location</h2>
            <div className="mt-4">
              <iframe
                className="w-full h-40 rounded-lg border-2 border-orange-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1041.6687556926995!2d73.98652455292923!3d15.292580041802031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb10adc8c1935%3A0x2c4fdc51f94177fa!2sROSEWOOD!5e0!3m2!1sen!2sin!4v1742903273424!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-orange-500">Contact Us</h2>
            <address className="not-italic space-y-1 mt-2 text-gray-300">
              <div>
                <a href="tel:+918975966188" className="hover:text-orange-700">
                  +91 89759 66188
                </a>
              </div>
              <div>
                <a href="tel:+919373526985" className="hover:text-orange-700">
                  +91 93735 26985
                </a>
              </div>
              <div>
                <a
                  href="mailto:almashjammihal11@gmail.com"
                  className="hover:text-orange-700"
                >
                  almashjammihal11@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} GOA DRIVE. All rights reserved.
        </div>
      </div>

      {/* SEO: LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CarRental",
            name: "GOA DRIVE",
            image: "https://www.goadrive.com/Rent-A-Car-Web-Banner-14.png", // replace with your actual image path
            "@id": "https://www.goadrive.com/", // replace with your real domain
            url: "https://www.goadrive.com/",
            telephone: "+918975966188",
            address: {
              "@type": "PostalAddress",
              streetAddress: "7XVP+4Q5, Amrut Nagar, Gogol",
              addressLocality: "Madgaon",
              addressRegion: "Goa",
              postalCode: "403601",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 15.292580,
              longitude: 73.986524,
            },
            sameAs: [
              "https://maps.app.goo.gl/jo4nsjUyiJ82QEZ38",
              "https://wa.me/918975966188",
            ],
          }),
        }}
      />
    </footer>
  );
};

export default Footer;