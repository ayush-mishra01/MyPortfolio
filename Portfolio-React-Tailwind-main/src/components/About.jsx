import React from "react";
import AboutImage from "../assets/aboutme2.jpg";


const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a final-year Computer Science and Engineering student at the University of Engineering and Management in Kolkata. I have a strong interest in full-stack development and applied artificial intelligence. My technical skills include Java, Spring Boot, React.js, and Python. I enjoy working in teams, which I have shown through successful group projects and my internship as a Java Developer. I am motivated by curiosity, love solving complex problems, and always look for chances to improve my technical skills and make meaningful contributions to innovative teams and projects.
            </p>

            {/* Skill Bars */}
            <div className="space-y-4">
              <SkillBar label="Java" width="95%" />
              <SkillBar label="Spring Boot" width="65%" />
              <SkillBar label="MySQL" width="95%" />
              <SkillBar label="React JS" width="65%" />
              <SkillBar label="HTML/CSS" width="95%" />
              <SkillBar label="Python" width="40%" />
              <SkillBar label="JavaScript" width="65%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ label, width }) => (
  <div className="flex items-center">
    <label className="w-2/12">{label}</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-transform duration-300 hover:scale-105"
        style={{ width }}
      ></div>
    </div>
  </div>
);

export default About;
