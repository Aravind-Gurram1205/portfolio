import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
          <div className="space-y-8">
            {/* <ProjectCard
              title="Plant Health Monitoring System Using Deep Learning"
              description="Developed an advanced plant disease detection system using deep learning models including GoogLeNet, ResNet, and EfficientNetB7. Achieved 95% accuracy in identifying various plant diseases through image analysis."
              tags={['Deep Learning', 'Python', 'TensorFlow', 'OpenCV']}
              link="https://github.com/Aravind-Gurram1205/heart-disease-patient-management"
            /> */}
            <ProjectCard
              title="Heart Disease Patient Management System"
              description="Web-based application developed to address the critical need for secure and efficient management of health data for individuals suffering from heart disease. The system enables healthcare providers to store, access, and monitor vital patient metrics such as blood pressure, heart rate, ECG readings, and medication details in real time through a centralized platform."
              tags={['React', 'Node js', 'MongoDb', 'Express js']}
              link="https://github.com/Aravind-Gurram1205/heart-disease-patient-management"
            />
            <ProjectCard
              title="Tic Tac Toe Game"
              description="This Tic-Tac-Toe game, built with Java Swing, features a 3x3 grid for two players to take turns placing Xs and Os. It detects wins and ties, displaying messages accordingly. Players can easily reset the game after each round."
              tags={['Java', 'Swing']}
              link="https://github.com/Aravind-Gurram1205/tic-tac-toe-game"
            />
            <ProjectCard
              title="Healio"
              description="healthcare appointment platform built with the MERN stack. It allows users to securely register, log in, browse doctors, and book appointments online. The application features a modern, responsive React frontend and a robust Node.js/Express backend with MongoDB for data storage."
              tags={['MongoDB', ' Express.js', 'React', 'Node.js']}
              link="https://github.com/Aravind-Gurram1205/healio"
            />
          </div>
        </div>
      </div>

      {/* Bottom Left: Profile Button */}
      <div className="fixed bottom-6 left-6">
        <button
          onClick={() => navigate('/')}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Profile
        </button>
      </div>

      {/* Bottom Right: Experience Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => navigate('/experience')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
        >
          Experience
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
