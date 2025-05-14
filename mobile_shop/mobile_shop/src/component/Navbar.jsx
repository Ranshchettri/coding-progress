import { useState } from 'react';
import { FaShoppingCart, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [cartCount] = useState(3); // Example cart count
  const [chatCount] = useState(1); // Example chat count

  return (
    <nav className="bg-white p-4 shadow flex justify-between items-center">
      <div className="text-2xl font-bold text-purple-800">MobileVerse</div>
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex items-center space-x-4">
        <select className="border p-2 rounded">
          <option>All Categories</option>
          <option>Mobiles</option>
          <option>Laptops</option>
        </select>
        <div className="relative">
          <FaShoppingCart className="text-red-500 text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </div>
        <div className="relative">
          <FaComment className="text-green-500 text-2xl" />
          {chatCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {chatCount}
            </span>
          )}
        </div>
        <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded">
          Login / Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;