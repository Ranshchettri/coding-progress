import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-gray-200 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold text-white mb-4">New Arrivals</h1>
        <p className="text-xl text-white mb-6">Discover the latest tech innovations</p>
        <Link to="/products" className="bg-purple-600 text-white px-6 py-3 rounded">
          Explore →
        </Link>
        <div className="grid grid-cols-5 gap-4 mt-6">
          {/* Placeholder for product images */}
          <div className="bg-gray-300 h-64"></div>
          <div className="bg-gray-300 h-64"></div>
          <div className="bg-gray-300 h-64"></div>
          <div className="bg-gray-300 h-64"></div>
          <div className="bg-gray-300 h-64"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;