import { useState } from 'react';

const RegisterModal = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Login</h2>
          <h2 className="text-xl font-semibold text-purple-600">Register</h2>
        </div>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <label className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" /> I agree to the Terms and Conditions
        </label>
        <button className="w-full bg-purple-600 text-white p-2 rounded mb-4">
          Create Account
        </button>
        <div className="text-center mb-4">Or continue with</div>
        <div className="flex justify-between">
          <button className="bg-red-500 text-white p-2 rounded w-5/12">Google</button>
          <button className="bg-blue-600 text-white p-2 rounded w-5/12">Facebook</button>
        </div>
        <button onClick={onClose} className="w-full bg-gray-300 p-2 rounded mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;