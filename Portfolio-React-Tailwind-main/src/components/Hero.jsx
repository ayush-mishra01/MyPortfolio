import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import HeroImage from '../assets/aboutme1.jpg';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8">
        <img
          src={HeroImage}
          alt="Ayush Mishra"
          className="w-full h-full object-cover object-[-6%_-1%] scale-[1.1] transform transition-transform duration-300 hover:scale-[1.5]"
        />
      </div>

      <h1 className='text-4xl font-bold'>
        I'm{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Ayush Mishra
        </span>
        , Passionate web developer.
        <br />Always learning, always building.
      </h1>

      <p className='mt-4 text-lg text-gray-300'>
        Dedicated to continuous learning and contributing to impactful tech projects.
      </p>

      <div className='mt-8 space-x-4 flex justify-center items-center flex-wrap'>
        <a
          href="https://www.linkedin.com/in/ayush-mishra-71518323b/"
          target="_blank"
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>

        <a
          href="https://leetcode.com/u/aayushmishra1001/"
          target="_blank"
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          <SiLeetcode size={20} />
          LeetCode
        </a>

        <a
          href="https://github.com/ayush-mishra01"
          target="_blank"
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-gray-700 to-black text-white flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          <FaGithub size={20} />
          GitHub
        </a>

        {/* 
        <a
          href="/Ayush-Mishra-Resume.pdf"
          download
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block'
        >
          Resume
        </a>
        */}
      </div>
    </div>
  );
};

export default Hero;
