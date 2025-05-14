const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold mb-2">MobileVerse</h3>
          <p>Your one-stop shop for all smart digital products in Nepal.</p>
          <div className="flex space-x-2 mt-2">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>YouTube</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Blog</p>
          <p>FAQs</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Customer Service</h3>
          <p>Shipping Policy</p>
          <p>Returns & Refunds</p>
          <p>Order Tracking</p>
          <p>Warranty</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Newsletter</h3>
          <p>Subscribe to get special offers, free giveaways, and new arrivals.</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 mb-2 bg-gray-800 rounded"
          />
          <button className="bg-purple-600 text-white p-2 rounded w-full">→</button>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© 2025 MobileVerse. All rights reserved.</p>
        <div className="flex justify-center space-x-2 mt-2">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;