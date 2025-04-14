'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import FilterComponent from '@/components/filter';
import Navbar from '@/components/navbar';
import CarRentalTerms from '@/components/rentalterms';
import Footer from '@/components/footer';

// Define types
interface Car {
  id: number;
  name: string;
  images: string[]; // Array of images
  price: number;
  transmission: string;
  seats: number;
  fuelType: string;
  tankCapacity: number; // Added tank capacity field
  year: number;
  features: string[]; // Added features array
}

interface OwnerContact {
  phone: string;
  whatsapp: string;
}

// Interface for filter state
interface FilterState {
  transmission: string;
  fuelType: string;
  seats: string;
  features: string[];
}

const CarListingPage = () => {
  // Sample car data - in a real app, this would come from an API or database
  const allCars: Car[] = [
    {
      id: 1,
      name: 'Alcazar',
      images: ['https://i.postimg.cc/W32wx1Lp/alcazar-exterior-right-front-three-quarter-10.webp', 'https://i.postimg.cc/vTTLH2Zp/alcazar-exterior-right-side-view.webp', 'https://i.postimg.cc/KzJDbhxP/alcazar-exterior-left-side-view.webp','https://i.postimg.cc/6qPV7V7T/alcazar-exterior-rear-view.webp'],
      price: 4000,
      transmission: 'Automatic',
      seats: 7,
      fuelType: 'Diesel',
      tankCapacity: 50,
      year: 2024,
      features: ['AC', 'Sunroof', 'Power Steering', 'Music System', 'ABS']
    },
    {
      id: 2,
      name: 'Baleno',
      images: ['https://i.postimg.cc/WpxX1j08/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.webp', 'https://i.postimg.cc/NGKdtL2L/Maruti-Suzuki-Baleno-Left-Front-Three-Quarter-147416.webp', 'https://i.postimg.cc/tCPD1f5j/Maruti-Suzuki-Baleno-Left-Side-View-147411.webp','https://i.postimg.cc/K4XkS0k7/Maruti-Suzuki-Baleno-Rear-view-91883.webp'],
      price: 1700,
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 37,
      year: 2024,
      features: ['AC', 'Music System', 'Power Steering', 'ABS']
    },
    {
      id: 3,
      name: 'New Creta',
      images: ['https://i.postimg.cc/jS1jG8pD/creta-exterior-right-front-three-quarter-2.webp', 'https://i.postimg.cc/ZRt5qWKZ/creta-exterior-front-view.webp', 'https://i.postimg.cc/jjJjKHTZ/creta-exterior-left-side-view.webp','https://i.postimg.cc/fRyLq4r4/creta-exterior-rear-view.webp'],
      price: 3500,
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 50,
      year: 2023,
      features: ['AC','Power Steering', 'Music System', 'ABS']
    },
    {
      id: 4,
      name: 'Creta',
      images: ['https://i.postimg.cc/L5GCdF3y/creta-exterior-right-front-three-quarter-2.webp', 'https://i.postimg.cc/QdG40stC/creta-exterior-right-side-view-2.webp', 'https://i.postimg.cc/1RdYVD1p/creta-exterior-left-side-view.webp','https://i.postimg.cc/tCVv3798/creta-exterior-rear-view.webp'],
      price: 3000,
      transmission: 'Manual',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 50,
      year: 2022,
      features: ['AC', 'Sunroof', 'Power Steering', 'Music System', 'ABS']
    },
    {
      id: 5,
      name: 'New Ertiga',
      images: ['https://i.postimg.cc/j5LmBcrS/ertiga-exterior-right-front-three-quarter-9.webp', 'https://i.postimg.cc/nzggxmHY/ertiga-exterior-right-side-view-2.webp', 'https://i.postimg.cc/0jS3yNjg/ertiga-exterior-left-rear-three-quarter.webp','https://i.postimg.cc/xjNBR6Rs/ertiga-exterior-left-side-view.webp'],
      price: 2200,
      transmission: 'Manual',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 45,
      year: 2023,
      features: ['AC', 'Power Steering', 'Music System']
    },
    {
      id: 6,
      name: 'Innova Crysta',
      images: ['https://i.postimg.cc/HskthVn3/innova-crysta-exterior-right-front-three-quarter-2.webp', 'https://i.postimg.cc/xTpPDnbQ/innova-crysta-exterior-front-view-2.webp', 'https://i.postimg.cc/HW22zQYV/innova-crysta-exterior-left-front-three-quarter.webp','https://i.postimg.cc/dV7jJp8y/innova-crysta-exterior-front-view.webp'],
      price: 3500,
      transmission: 'Automatic',
      seats: 7,
      fuelType: 'Petrol',
      tankCapacity: 65,
      year: 2022,
      features: ['AC','Power Steering', 'Music System', 'ABS']
    },
    {
      id: 7,
      name: 'Thar',
      images: ['https://i.postimg.cc/02KzjsBP/thar-exterior-left-front-three-quarter.webp', 'https://i.postimg.cc/PJ9Ny3Ng/thar-exterior-right-side-view.webp', 'https://i.postimg.cc/HnVVQDW0/thar-exterior-right-front-three-quarter-32.webp','https://i.postimg.cc/G35Bb2zX/thar-exterior-rear-view.webp'],
      price: 3500,
      transmission: 'Manual',
      seats: 4,
      fuelType: 'Petrol',
      tankCapacity: 45,
      year: 2022,
      features: ['AC', 'Power Steering', 'Music System', 'ABS']
    },
    {
      id: 8,
      name: 'New Shape Swift',
      images: ['https://i.postimg.cc/BngP9CzK/swift-exterior-left-front-three-quarter-28.webp', 'https://i.postimg.cc/VNZS5kms/swift-exterior-left-side-view.webp', 'https://i.postimg.cc/x1YN4Z6Q/swift-exterior-right-rear-three-quarter.webp','https://i.postimg.cc/cJLgsnq5/swift-exterior-right-side-view-5.webp'],
      price: 1200,
      transmission: 'Manual',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 47,
      year: 2024,
      features: ['AC','Power Steering', 'Music System', 'ABS']
    },
    {
      id: 9,
      name: 'Maruti Swift Dezire',
      images: ['https://i.postimg.cc/BngP9CzK/swift-exterior-left-front-three-quarter-28.webp', 'https://i.postimg.cc/VNZS5kms/swift-exterior-left-side-view.webp', 'https://i.postimg.cc/x1YN4Z6Q/swift-exterior-right-rear-three-quarter.webp','https://i.postimg.cc/cJLgsnq5/swift-exterior-right-side-view-5.webp'],
      price: 1800,
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 35,
      year: 2024,
      features: ['AC','Power Steering', 'Music System', 'ABS']
    },
    {
      id: 10,
      name: 'New Shape Fortuner',
      images: ['https://i.postimg.cc/B6xGkmYW/fortuner-exterior-right-front-three-quarter-20.webp', 'https://i.postimg.cc/K8HFMkkW/fortuner-exterior-right-rear-three-quarter.webp', 'https://i.postimg.cc/zfHNSzTG/fortuner-exterior-left-front-three-quarter.webp','https://i.postimg.cc/pTNHswBY/toyota-fortuner-left-rear-three-quarter-11.webp'],
      price: 7500,
      transmission: 'Automatic',
      seats: 7,
      fuelType: 'Petrol',
      tankCapacity: 80,
      year: 2024,
      features: ['AC','Power Steering', 'Music System', 'ABS']
    },
    {
      id: 11,
      name: 'Creta Knight',
      images: ['https://i.postimg.cc/2yLCknxm/creta-exterior-front-view.webp', 'https://i.postimg.cc/sXNVCT7w/creta-exterior-right-front-three-quarter-2.webp', 'https://i.postimg.cc/d11qfbkh/creta-exterior-rear-view.webp','https://i.postimg.cc/YjcMhjXF/creta-exterior-left-side-view.webp'],
      price: 3500,
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 50,
      year: 2024,
      features: ['AC', 'Sunroof', 'Power Steering', 'Music System', 'ABS']
    },
    {
      id: 12,
      name: 'Exter',
      images: ['https://i.postimg.cc/mrm9MSNs/1730317400660-Hyundai-Exter.jpg', 'https://i.postimg.cc/RZQKCmWq/1730317400685-Hyundai-Exter-2.jpg'],
      price: 2500,
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 37,
      year: 2024,
      features: ['AC', 'Sunroof', 'Power Steering', 'Music System', 'ABS']
    },
    {
      id: 13,
      name: 'Venue',
      images: ['https://i.postimg.cc/4y9HDRCf/1730318751210-knight-black-12.png', 'https://i.postimg.cc/sfv8NjXY/1730318751199-knight-black-4.png', 'https://i.postimg.cc/C1tfrLQr/1730318751208-knight-black-34.png','https://i.postimg.cc/qgH60D08/1730318751205-knight-black-24.png'],
      price: 2500,
      transmission: 'Manual',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 40,
      year: 2024,
      features: ['AC','Sunroof', 'Power Steering', 'Music System', 'ABS']
    },
    {
      id: 14,
      name: 'Thar Convertable',
      images: ['https://i.postimg.cc/3JbwHJC3/mahindra-thar-3.webp', 'https://i.postimg.cc/kg0XB1pZ/mahindra-thar-1.webp', 'https://i.postimg.cc/L8Y84KNL/mahindra-thar-4.webp'],
      price: 4500,
      transmission: 'Automatic',
      seats: 4,
      fuelType: 'Petrol',
      tankCapacity: 57,
      year: 2024,
      features: ['AC', 'Sunroof', 'Power Steering', 'Music System', 'ABS']
    },
    {
      id: 15,
      name: 'Hyundai i20',
      images: ['https://i.postimg.cc/Vvd391SF/1730407600237-typhoon-silver-7.png', 'https://i.postimg.cc/wxrKqtP4/1730407600260-typhoon-silver-13-2.png', 'https://i.postimg.cc/Kz96g4Yz/1730407600263-typhoon-silver-29.png','https://i.postimg.cc/C5X9mtkp/1730407600267-typhoon-silver-35.png'],
      price: 1800,
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 37,
      year: 2024,
      features: ['AC', 'Sunroof', 'Power Steering', 'Music System', 'ABS']
    },
    {
      id: 16,
      name: 'Hyundai i20',
      images: ['https://i.postimg.cc/jjj0qzs9/1730408604775-fiery-red-13.png', 'https://i.postimg.cc/NMWWxS1q/1730408604779-fiery-red-31.png', 'https://i.postimg.cc/xCkwMnN3/1730408604781-fiery-red-35.png','https://i.postimg.cc/d0SMhL30/1730408913722-fiery-red-6.png'],
      price: 1800,
      transmission: 'Manual',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 65,
      year: 2024,
      features: ['AC', 'Sunroof', 'Power Steering', 'Music System', 'ABS']
    },
    {
      id: 17,
      name: 'Fronx',
      images: ['https://i.postimg.cc/fTHvnXrk/fronx-exterior-right-front-three-quarter-108.webp', 'https://i.postimg.cc/yxjyNS6Q/fronx-exterior-right-rear-three-quarter-2.webp', 'https://i.postimg.cc/v8tzhC7r/fronx-exterior-right-side-view-2.webp','https://i.postimg.cc/tCRzMDDL/fronx-exterior-rear-view-2.webp'],
      price: 2500,
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 37,
      year: 2023,
      features: ['AC','Power Steering', 'Music System', 'ABS']
    },
    {
      id: 18,
      name: 'XL6',
      images: ['https://i.postimg.cc/xTkX8zdX/1703244021150-xl6-front.jpg', 'https://i.postimg.cc/442KX5XC/1703244021174-xl6-side-view.png'],
      price: 2500,
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol',
      tankCapacity: 37,
      year: 2023,
      features: ['AC','Power Steering', 'Music System', 'ABS']
    }
  ];

  // Common owner contact info
  const ownerContact: OwnerContact = {
    phone: '+91 8975966188',
    whatsapp: '+91 8975966188'
  };

  // States
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTransmission, setSelectedTransmission] = useState<string>(''); // Changed from selectedCategory
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // Track current image index
  
  // Initialize filters with proper structure
  const [filters, setFilters] = useState<FilterState>({
    transmission: '',
    fuelType: '',
    seats: '',
    features: []
  });

  // Filter transmissions
  const transmissions: string[] = ['All', 'Automatic', 'Manual']; // Changed from categories

  // Filter cars based on search, transmission, and additional filters
  const filteredCars = allCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTransmission = selectedTransmission === '' || selectedTransmission === 'All' || 
                           car.transmission === selectedTransmission;
                           
    const matchesFuelType = filters.fuelType === '' || 
                           car.fuelType.toLowerCase().includes(filters.fuelType.toLowerCase());
                           
    const matchesSeats = filters.seats === '' || 
                        car.seats.toString() === filters.seats;
                        
    const matchesFeatures = filters.features.length === 0 || 
                           filters.features.every(feature => 
                             car.features.includes(feature));
    
    return matchesSearch && matchesTransmission && matchesFuelType && matchesSeats && matchesFeatures;
  });

  // Handle card click
  const handleCardClick = (car: Car) => {
    setSelectedCar(car);
    setCurrentImageIndex(0); // Reset image index when selecting a new car
    setShowDialog(true);
  };

  // Close dialog
  const closeDialog = () => {
    setShowDialog(false);
    setCurrentImageIndex(0); // Reset image index when closing dialog
  };

  // Navigate to previous image
  const prevImage = () => {
    if (!selectedCar) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedCar.images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const nextImage = () => {
    if (!selectedCar) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedCar.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen mt-5 bg-gray-50">
      {/* Filter Section - Using the separate component */}
      <FilterComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedTransmission={selectedTransmission}
        setSelectedTransmission={setSelectedTransmission}
        transmissions={transmissions}
        filters={filters}
        setFilters={setFilters}
      />
      
      {/* Cars Grid */}
      <div className="max-w-7xl mx-8 px-1 sm:px-14 lg:px-4 pb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Available Cars ({filteredCars.length})</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(car)}
            >
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src={car.images[0]}
                  alt={car.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className='flex justify-between items-center mb-2'>
                <span className="text-xl font-bold font-sans text-gray-800 mb-1">{car.name} </span>
                <span className='font-bold font-sans text-black text-xl'>₹{car.price}/day</span>
               </div>
                  
             
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{car.year} • {car.fuelType}</span>
                  <span>{car.transmission}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cars found matching your search criteria.</p>
            <button
              className="mt-4 text-blue-600 hover:text-blue-800"
              onClick={() => {
                setSearchTerm('');
                setSelectedTransmission('');
                setFilters({
                  transmission: '',
                  fuelType: '',
                  seats: '',
                  features: []
                });
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      
      {/* Car Details Dialog */}
      {showDialog && selectedCar && (
        <div className="fixed font-sans text-black inset-0 bg-black flex z-40 items-center justify-center">
          <div className="flex bg-white rounded-lg shadow-xl max-w-4xl w-full h-[90vh] md:h-[80vh] overflow-hidden">
            <div className="fixed">
              <button
                className="fixed top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 z-10"
                onClick={closeDialog}
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Left side - Car details */}
  <div className="p-6 overflow-y-auto max-h-[90vh] md:max-h-[80vh]">
    <h2 className="text-2xl font-sans font-bold text-gray-800 mb-0.5 md:mb-2">{selectedCar.name}</h2>
    <p className="text-gray-600 font-sans mb-4">{selectedCar.year}</p>
    
    {/* Image carousel */}
    <div className="mb-4 relative aspect-video">
      <div className="rounded-lg overflow-hidden relative h-64 w-full">
        <Image 
          src={selectedCar.images[currentImageIndex]} 
          alt={`${selectedCar.name} - Image ${currentImageIndex + 1}`} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-lg object-cover"
        />
      </div>
      
      {/* Image counter */}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
        {currentImageIndex + 1} / {selectedCar.images.length}
      </div>
      
      {/* Navigation buttons */}
      {selectedCar.images.length > 1 && (
        <>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </>
      )}
    </div>
    
    {/* Thumbnail navigation */}
    {selectedCar.images.length > 1 && (
      <div className="flex space-x-2 overflow-x-auto mb-4">
        {selectedCar.images.map((image, index) => (
          <div 
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-16 w-16 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 relative ${
              index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <Image 
              src={image} 
              alt={`${selectedCar.name} thumbnail ${index + 1}`}
              fill
              sizes="64px"
              className="object-cover" 
            />
          </div>
        ))}
      </div>
    )}
    
    {/* Vehicle Details */}
    <div className="mb-4">
      <h3 className="font-bold font-sans text-xl text-gray-800 mb-2">Vehicle Details</h3>
      <div className="grid grid-cols-2 gap-y-1 text-sm">
      <div className="text-black">Daily Rate:</div>
      <div className="font-bold text-xl font-sans">₹{selectedCar.price}/day</div>
        <div className="text-black">Transmission:</div>
        <div className="text-black">{selectedCar.transmission}</div>
        <div className="text-black">Year:</div>
        <div className="text-black">{selectedCar.year}</div>
        <div className="text-black">Seats:</div>
        <div className="text-black">{selectedCar.seats}</div>
        <div className="text-black">Fuel Type:</div>
        <div className="text-black">{selectedCar.fuelType}</div>
        <div className="text-black">Tank Capacity:</div>
        <div className="text-black">{selectedCar.tankCapacity} liters</div>
        
      </div>
    </div>
    
    {/* Features Section */}
    <div className="mb-4">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">Features</h3>
      <div className="flex flex-wrap gap-2">
        {selectedCar.features.map((feature, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  </div>
  
  {/* Right side - Owner contact & booking */}
  <div className="bg-white p-6 flex flex-col items-center justify-center">
    {/* Company Logo */}
    <div className="mb-3 md:mb-7 flex justify-center">
      <div className="w-52 h-auto flex items-center justify-center relative">
        <Image
          src="/ALMAS.png"
          alt="Company Logo"
          width={150}
          height={40}
          className="w-auto object-contain"
        />
      </div>
    </div>

    <div className="w-full max-w-md">
      <h3 className="font-bold font-sans text-center text-2xl text-gray-800 mb-1 md:mb-4">Contact Owner</h3>
      
      <div className="space-y-3">
        <a 
          href={`tel:${ownerContact.phone}`}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md w-full transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span>Call Owner</span>
        </a>
        
        <a 
          href={`https://wa.me/${ownerContact.whatsapp.replace(/\D/g, '')}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md w-full transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      )}
    </div>

    {/* Call & WhatsApp Buttons */}
    <div className="fixed bottom-6 left-6 flex space-x-4 z-10">
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
    <Footer/>
    </>
  );
};

export default CarListingPage;