import React from "react";

const Education = () => {
  return (
    <div className="bg-black text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            University of Engineering and Management, Kolkata
          </h3>

          <p className="text-gray-300 mb-2">
            🎓 <strong>Degree:</strong> B.Tech in Computer Science and Engineering
          </p>
          <p className="text-gray-300 mb-2">
            📈 <strong>CGPA:</strong> 8.25
          </p>
          <p className="text-gray-300 mb-4">
            📅 <strong>Duration:</strong> August 2021 – July 2025 (Expected)
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-white mb-2">🧠 Subject Interests</h4>
            <p className="text-gray-300 mb-4">
              Passionately exploring a wide range of core and emerging areas in computer science, with a strong focus on:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Artificial Intelligence</strong> – Applying machine learning and deep learning to solve real-world problems
              </li>
              <li>
                <strong>Data Structures & Algorithms</strong> – Building efficient, optimized solutions for complex challenges
              </li>
              <li>
                <strong>Software Engineering & System Design</strong> – Designing scalable, modular, and maintainable software systems
              </li>
              <li>
                <strong>Blockchain Technology</strong> – Exploring decentralized applications, smart contracts, and distributed ledger systems
              </li>
              <li>
                <strong>Web Development</strong> – Full-stack apps with Java, Spring Boot & React, focused on performance & security.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
