import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';


interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

function ExperienceCard({ title, company, period, responsibilities }: ExperienceCardProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
      <div className="flex items-start gap-4">
        <BriefcaseIcon className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 mb-2">{company} • {period}</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 flex flex-col justify-between">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Work Experience</h1>

          <div className="space-y-8">
            <ExperienceCard
              title="Web Development Intern"
              company="Tech Solutions Inc."
              period="Summer 2023"
              responsibilities={[
                "Developed and maintained responsive web applications using HTML, CSS, and JavaScript",
                "Collaborated with senior developers on implementing new features and fixing bugs",
                "Gained hands-on experience with  development methodologies",
                
                
              ]}
            />
            <ExperienceCard
              title="Student Development Chapter as the Vice-Chairperson"
              company="Acm SIGSpatial Student Chapter"
              period="2024 - Present"
              responsibilities={[
                "Lead development of club website using modern web technologies",
                "Mentored junior students in web development fundamentals",
                "Organized technical workshops, Events and coding competitions",
                
              ]}
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 left-6">
        <button
          onClick={() => navigate('/projects')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Projects
        </button>
      </div>

      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => navigate('/')}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
        >
          Profile
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
