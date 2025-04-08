"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Phone, Menu, X, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleContactScroll = (e: React.MouseEvent) => {
    // Prevent default link behavior
    e.preventDefault();

    // Scroll to the bottom of the page with smooth behavior
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });

    // Optional: If you have a specific contact section, you can add a fallback
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scrolling Notice */}
      <div className="w-full bg-gray-700 text-white py-1 overflow-hidden">
        <div className="scrolling-text-container">
          <p className="scrolling-text font-medium">
          **The car should be rented for a minimum of two days or more.**    **The car should be rented for a minimum of two days or more.**    
          </p>
        </div>
      </div>
      
      <header className="w-full bg-white shadow-sm border-b-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/ALMAS.png"
                alt="Company Logo"
                width={150}
                height={40}
                priority
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex space-x-8 items-center">
              <NavItem 
                href="/" 
                icon={Home} 
                text="Home" 
                isActive={pathname === "/"}
              />
              <NavItem 
                href="#contact" 
                icon={Phone} 
                text="Contact Us" 
                onClick={handleContactScroll}
                isActive={false}
              />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute z-40 w-full bg-white shadow-lg">
            <nav className="flex flex-col items-center space-y-4 py-6 border-t border-gray-200">
              <NavItem 
                href="/" 
                icon={Home} 
                text="Home" 
                onClick={() => setIsOpen(false)} 
                className="w-full text-center px-6 py-2 hover:bg-gray-100"
                isActive={pathname === "/"}
              />
              <NavItem 
                href="#contact" 
                icon={Phone} 
                text="Contact Us" 
                onClick={(e) => {
                  setIsOpen(false);
                  handleContactScroll(e);
                }} 
                className="w-full text-center px-6 py-2 hover:bg-gray-100"
                isActive={false}
              />
            </nav>
          </div>
        )}
      </header>

      <style jsx>{`
        .scrolling-text-container {
          width: 100%;
          overflow: hidden;
        }
        
        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          animation: scrollText 20s linear infinite;
          padding-left: 100%;
        }
        
        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
}

function NavItem({ 
  href, 
  icon: Icon, 
  text, 
  onClick, 
  className,
  isActive
}: { 
  href: string; 
  icon: LucideIcon; 
  text: string; 
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 font-semibold text-lg transition-colors ${className || ''} ${
        isActive ? 'hover:text-orange-500' : 'text-black hover:text-orange-500'
      }`}
      onClick={onClick}
    >
      <Icon className="w-5 h-5 text-orange-500" />
      <span>{text}</span>
    </Link>
  );
}