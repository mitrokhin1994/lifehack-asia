import { Link } from 'react-router-dom';
import { LifehackCategory } from '../types';

const categories = Object.values(LifehackCategory);

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">TravelHacks</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category}`}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/submit"
              className="btn btn-primary"
            >
              Добавить лайфхак
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 