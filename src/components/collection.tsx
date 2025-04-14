import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedCars = () => {
  // Sample car data - in a real application, this would come from an API or props
  const featuredCars = [
    {
      id: 1,
      name: 'Alcazar',
      image: 'https://i.postimg.cc/W32wx1Lp/alcazar-exterior-right-front-three-quarter-10.webp',
      price: 4000,
      category: 'Diesel',
      seats: 7,
      transmission: 'Automatic'
    },
    {
      id: 2,
      name: 'New Creta',
      image: 'https://i.postimg.cc/jS1jG8pD/creta-exterior-right-front-three-quarter-2.webp',
      price: 3500,
      category: 'Petrol',
      seats: 5,
      transmission: 'Automatic'
    },
    {
      id: 3,
      name: 'New Ertiga',
      image: 'https://i.postimg.cc/j5LmBcrS/ertiga-exterior-right-front-three-quarter-9.webp',
      price: 2200,
      category: 'Petrol',
      seats: 7,
      transmission: 'Manual'
    },
    {
      id: 4,
      name: 'Innova Crysta',
      image: 'https://i.postimg.cc/HskthVn3/innova-crysta-exterior-right-front-three-quarter-2.webp',
      price: 3500,
      category: 'petrol',
      seats: 7,
      transmission: 'Automatic'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 font-sans bg-white text-black">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Vehicles</h2>
        <Link href="/pages/allcars">
          <button className="px-4 py-2 rounded transition-colors duration-300">
            View All
          </button>
        </Link>
      </div>
      
      {/* Mobile scrollable view */}
      <div className="md:hidden overflow-x-auto pb-4 -mx-4">
        <div className="flex px-4 space-x-4" style={{ width: 'max-content' }}>
          {featuredCars.map((car) => (
            <Link key={car.id} href="/pages/allcars" className="block" style={{ width: '280px' }}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
                <div className="relative h-48 bg-gray-200">
                  <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={car.id === 1}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <span className="font-bold">₹{car.price}/day</span>
                  </div>
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {car.category}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {car.seats} Seats
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {car.transmission}
                    </div>
                    <div className="text-right">
                      <span className="font-medium">
                        More details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Desktop grid view */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredCars.map((car) => (
          <Link key={car.id} href="/pages/allcars" className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="relative h-48 bg-gray-200">
                <Image 
                  src={car.image} 
                  alt={car.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  priority={car.id === 1}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <span className="font-bold">₹{car.price}/day</span>
                </div>
                
                <div className="border-t border-gray-200 my-2"></div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {car.category}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {car.seats} Seats
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12H20M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {car.transmission}
                  </div>
                  <div className="text-right">
                    <span className="font-medium">
                      More details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;