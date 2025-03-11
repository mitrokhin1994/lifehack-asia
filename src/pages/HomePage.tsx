import { useState } from 'react';
import { Country } from '../types';
import { CountrySelector } from '../components/CountrySelector';
import { LifehackCard } from '../components/LifehackCard';
import { lifehacks } from '../data/lifehacks';

export const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>();

  const filteredLifehacks = selectedCountry
    ? lifehacks.filter(lifehack => lifehack.countryId === selectedCountry.id)
    : lifehacks;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Лайфхаки для путешествий по Юго-Восточной Азии
        </h1>
        <p className="text-gray-600">
          Полезные советы и рекомендации от опытных путешественников
        </p>
      </div>

      <div className="mb-8">
        <CountrySelector
          onSelect={setSelectedCountry}
          selectedCountry={selectedCountry}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLifehacks.map(lifehack => (
          <LifehackCard
            key={lifehack.id}
            lifehack={lifehack}
            onSelect={(lifehack) => {
              // Здесь будет логика для открытия детальной страницы
              console.log('Selected lifehack:', lifehack);
            }}
          />
        ))}
      </div>
    </div>
  );
}; 