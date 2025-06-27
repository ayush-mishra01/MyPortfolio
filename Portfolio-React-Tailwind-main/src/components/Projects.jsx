import React from "react";
import project1 from "../assets/open.png";
import project2 from "../assets/speech-to-text.jpg";
import project3 from "../assets/kidney scanner.jpg"; // Add image if available

const projects = [
  {
    id: 1,
    name: "ChatSphere: Real-Time Chat Platform",
    description:
      "Built a full-stack chat app using Spring Boot, WebSocket, and React.js. Enabled real-time room-based messaging with join/leave notifications and REST API for management.",
    technologies: ["Spring Boot", "WebSocket", "React", "REST API"],
    image: project1,
    github: "https://github.com/ayush-mishra01/ChatSphere-Full-Stack",
  },
  {
    id: 2,
    name: "Audio Transcriber AI",
    description:
      "Developed an audio-to-text converter using Spring AI and OpenAI's Whisper API. RESTful backend with Java 21 and a React.js UI for file uploads and real-time transcriptions.",
    technologies: ["Spring Boot", "Spring AI", "React", "OpenAI Whisper"],
    image: project2,
    github: "https://github.com/ayush-mishra01/Audio-Transcriber-AI",
  },
  {
    id: 3,
    name: "Kidney Disease AI Classifier",
    description:
      "Trained a CNN model in TensorFlow to classify kidney diseases with 99.5% accuracy. Hosted with FastAPI & Hugging Face, with Docker containerization and React.js frontend.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "React"],
    image: project3,
    github: "https://github.com/Not-Sahil-Raja/KindneyDiseaseClassification",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full md:w-60 h-40 object-cover rounded-lg shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-900 text-sm px-3 py-1 rounded-full text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
