import React from 'react';

export default function RentalSteps() {
    const steps = [
      { title: "Choose Your Ride", description: "Browse and select the perfect car for your trip.", icon: "🚗" },
      { title: "Book on Call or whatsapp", description: "Reserve your car instantly by contacting us.", icon: "📞" },
      { title: "Pick Up or Get It Delivered", description: "Collect your car or opt for doorstep delivery.", icon: "📦" },
      { title: "Drive & Enjoy", description: "Hit the road with confidence and enjoy your journey!", icon: "🏁" },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center py-10 bg-gray-100 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 text-center text-gray-800">Rent a Car In 4 Steps</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative w-full max-w-6xl">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center bg-white shadow-lg rounded-full p-6 w-full max-w-xs md:w-64"
            >
              <div className="text-3xl mb-2">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">{step.title}</h3>
              <p className="text-sm text-gray-600 text-center mt-1">{step.description}</p>
              
              {/* Desktop Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:absolute md:flex top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 items-center justify-center bg-orange-500 text-white rounded-full shadow-md">
                  →
                </div>
              )}
              
              {/* Mobile Separator */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-full h-px bg-gray-300 my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }