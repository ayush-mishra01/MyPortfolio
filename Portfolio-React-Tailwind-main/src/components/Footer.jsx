import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center border-t border-gray-800 pt-8">
        <h3 className="text-xl font-bold text-white mb-2">Ayush Mishra</h3>
        <p className="text-gray-400 mb-4">
          Full-Stack Developer based in Kolkata, West Bengal, India — skilled in building secure and scalable web applications.
        </p>
        <p className="text-gray-600 text-sm">&copy; 2025 Ayush Mishra. All rights reserved.</p>

        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-white">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
