import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 shadow-md'>
      <div className='container py-4 flex justify-between items-center'>
        {/* Left Brand / Title */}
        <div className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Portfolio
        </div>

        {/* Navigation Links */}
        <div className='space-x-6 text-lg font-medium'>
          <a href="#home" className='hover:text-green-400 transition-colors'>Home</a>
          <a href="#about" className='hover:text-green-400 transition-colors'>About Me</a>
          <a href="#education" className='hover:text-green-400 transition-colors'>Education</a>
          <a href="#project" className='hover:text-green-400 transition-colors'>Projects</a>
        </div>

        {/* Connect Me Button */}
       <a
          href="mailto:aayushmishra1001@gmail.com"
          className='hidden md:inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full 
          transform transition-transform duration-300 hover:scale-105 font-semibold'
>
  Connect Me
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
