import { Lifehack } from '../types';
import { countries } from '../data/countries';

interface LifehackCardProps {
  lifehack: Lifehack;
  onSelect: (lifehack: Lifehack) => void;
}

export const LifehackCard = ({ lifehack, onSelect }: LifehackCardProps) => {
  const country = countries.find(c => c.id === lifehack.countryId);

  return (
    <div
      className="card cursor-pointer"
      onClick={() => onSelect(lifehack)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{country?.flag}</span>
          <span className="font-medium">{country?.name}</span>
        </div>
        <span className="category-badge">
          {lifehack.category}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{lifehack.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{lifehack.description}</p>
      
      <div className="space-y-2 mb-4">
        {lifehack.tips.slice(0, 3).map((tip, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-primary">•</span>
            <span className="text-sm text-gray-600">{tip}</span>
          </div>
        ))}
        {lifehack.tips.length > 3 && (
          <div className="text-sm text-primary">
            +{lifehack.tips.length - 3} еще...
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{lifehack.tips.length} советов</span>
        <span>{new Date(lifehack.createdAt).toLocaleDateString('ru-RU')}</span>
      </div>
    </div>
  );
}; 