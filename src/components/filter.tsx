'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

// Define the filters interface to avoid using 'any'
interface FilterState {
  transmission: string;
  fuelType: string;
  seats: string;
  features: string[];
}

interface FilterComponentProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTransmission: string;
  setSelectedTransmission: (transmission: string) => void;
  transmissions: string[];
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  searchTerm,
  setSearchTerm,
  selectedTransmission,
  setSelectedTransmission,
  transmissions,
  filters,
  setFilters
}) => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // Ref for the filter component container
  const filterRef = useRef<HTMLDivElement>(null);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    // Add event listener when a dropdown is open
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  // Handle transmission selection - we'll use this in the UI
  const handleTransmissionSelect = (transmission: string) => {
    setSelectedTransmission(transmission === 'All' ? '' : transmission);
    setFilters({ ...filters, transmission: transmission === 'All' ? '' : transmission });
  };

  // Handle fuel type selection
  const handleFuelTypeChange = (fuelType: string) => {
    setFilters({ ...filters, fuelType });
    setOpenDropdown(null);
  };

  // Handle seats selection
  const handleSeatsChange = (seats: string) => {
    setFilters({ ...filters, seats });
    setOpenDropdown(null);
  };

  // Handle feature toggle
  const handleFeatureToggle = (feature: string) => {
    let updatedFeatures;
    if (filters.features.includes(feature)) {
      updatedFeatures = filters.features.filter(f => f !== feature);
    } else {
      updatedFeatures = [...filters.features, feature];
    }
    setFilters({ ...filters, features: updatedFeatures });
  };

  return (
    <div ref={filterRef} className="bg-white shadow-xl p-4 mb-6 rounded-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          {/* Search and Transmissions Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by car name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Transmission filter */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="h-5 w-5 text-gray-500" />
              {transmissions.map(transmission => (
                <button
                  key={transmission}
                  className={`px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap ${
                    selectedTransmission === (transmission === 'All' ? '' : transmission) 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => handleTransmissionSelect(transmission)}
                >
                  {transmission}
                </button>
              ))}
            </div>
          </div>
          
          {/* Additional Filters Row */}
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Fuel Type dropdown */}
            <div className="relative">
              <button
                className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => toggleDropdown('fuelType')}
              >
                <span>Fuel Type: {filters.fuelType || 'Any'}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {openDropdown === 'fuelType' && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1">
                  <button
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFuelTypeChange('')}
                  >
                    Any
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFuelTypeChange('Petrol')}
                  >
                    Petrol
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFuelTypeChange('Diesel')}
                  >
                    Diesel
                  </button>
                </div>
              )}
            </div>
            
            {/* Number of Seats dropdown */}
            <div className="relative">
              <button
                className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => toggleDropdown('seats')}
              >
                <span>Number of Seats: {filters.seats || 'Any'}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {openDropdown === 'seats' && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-y-auto">
                  <button
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleSeatsChange('')}
                  >
                    Any
                  </button>
                  {[4, 5, 6, 7].map(seat => (
                    <button
                      key={seat}
                      className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                      onClick={() => handleSeatsChange(seat.toString())}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Features dropdown */}
            <div className="relative">
              <button
                className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => toggleDropdown('features')}
              >
                <span>Features: {filters.features.length > 0 ? `${filters.features.length} selected` : 'Any'}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {openDropdown === 'features' && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1">
                  {['AC', 'Music System', 'Power Steering', 'ABS', 'Sunroof'].map(feature => (
                    <div key={feature} className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <input
                        type="checkbox"
                        id={`feature-${feature}`}
                        checked={filters.features.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                        className="mr-2"
                      />
                      <label htmlFor={`feature-${feature}`} className="text-sm text-gray-700">
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Active Filters Display */}
          {(filters.transmission || filters.fuelType || filters.seats || filters.features.length > 0) && (
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              
              {filters.transmission && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Transmission: {filters.transmission}
                  <button 
                    className="ml-1 text-blue-500 hover:text-blue-700"
                    onClick={() => setFilters({ ...filters, transmission: '' })}
                  >
                    ×
                  </button>
                </span>
              )}
              
              {filters.fuelType && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Fuel: {filters.fuelType}
                  <button 
                    className="ml-1 text-blue-500 hover:text-blue-700"
                    onClick={() => setFilters({ ...filters, fuelType: '' })}
                  >
                    ×
                  </button>
                </span>
              )}
              
              {filters.seats && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Seats: {filters.seats}
                  <button 
                    className="ml-1 text-blue-500 hover:text-blue-700"
                    onClick={() => setFilters({ ...filters, seats: '' })}
                  >
                    ×
                  </button>
                </span>
              )}
              
              {filters.features.map(feature => (
                <span key={feature} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {feature}
                  <button 
                    className="ml-1 text-blue-500 hover:text-blue-700"
                    onClick={() => handleFeatureToggle(feature)}
                  >
                    ×
                  </button>
                </span>
              ))}
              
              {(filters.transmission || filters.fuelType || filters.seats || filters.features.length > 0) && (
                <button
                  className="text-sm text-red-600 hover:text-red-800"
                  onClick={() => setFilters({ transmission: '', fuelType: '', seats: '', features: [] })}
                >
                  Clear all
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;