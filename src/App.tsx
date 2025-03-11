import React, { useState } from 'react';
import { lifehacks } from './data/lifehacks';
import { LifehackCategory } from './types';

const countries = Array.from(new Set(lifehacks.map(lh => lh.countryId)));

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string>(countries[0]);
  const [selectedCategory, setSelectedCategory] = useState<LifehackCategory | 'all'>('all');

  const filteredLifehacks = lifehacks.filter(lh => {
    if (selectedCountry && lh.countryId !== selectedCountry) return false;
    if (selectedCategory !== 'all' && lh.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="App">
      <header className="header">
        <h1>Лайфхаки для путешествий по Азии</h1>
      </header>

      <main className="main">
        <div className="filters">
          <select 
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map(country => (
              <option key={country} value={country}>
                {country.charAt(0).toUpperCase() + country.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as LifehackCategory | 'all')}
          >
            <option value="all">Все категории</option>
            {Object.values(LifehackCategory).map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="lifehacks-grid">
          {filteredLifehacks.map(lifehack => (
            <div key={lifehack.id} className="lifehack-card">
              <h2>{lifehack.title}</h2>
              <p className="description">{lifehack.description}</p>
              <ul>
                {lifehack.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
              <div className="category">
                Категория: {lifehack.category}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
