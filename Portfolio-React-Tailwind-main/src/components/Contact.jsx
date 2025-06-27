import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-green-400">Let’s Connect</h3>
            <p className="text-gray-300">
              I’m open to internships, projects, or entry-level opportunities in full-stack development or AI-powered applications.
            </p>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-400" />
              <a href="mailto:aayushmishra1001@gmail.com" className="text-gray-300 hover:underline">
                aayushmishra1001@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-green-400" />
              <a href="tel:+918429363152" className="text-gray-300 hover:underline">
                +91-8429363152
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-400" />
              <span className="text-gray-300">Kolkata, West Bengal, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
