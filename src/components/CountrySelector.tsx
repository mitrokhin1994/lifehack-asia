import { useState } from 'react';
import { countries } from '../data/countries';
import { Country } from '../types';

interface CountrySelectorProps {
  onSelect: (country: Country) => void;
  selectedCountry?: Country;
}

export const CountrySelector = ({ onSelect, selectedCountry }: CountrySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {selectedCountry ? (
          <>
            <span className="text-2xl">{selectedCountry.flag}</span>
            <span>{selectedCountry.name}</span>
          </>
        ) : (
          <span>Выберите страну</span>
        )}
        <svg
          className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="py-1">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => {
                  onSelect(country);
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                <span className="text-2xl">{country.flag}</span>
                <span>{country.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 