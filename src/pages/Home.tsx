import React from 'react';

import {
    Github,
    Linkedin,
    Mail,
    Code2,
    Cpu,
    Globe,
    Database,
    GraduationCap,
    Award,
    BookOpen
} from 'lucide-react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <header className="container mx-auto px-4 py-16 md:py-32 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                        Aravind Gurram
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        IT Student & Front-End Developer
                    </p>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Passionate about using AI and deep learning to solve real-life problems. I'm looking for opportunities to work on creative projects in machine learning and web development.


                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="https://github.com/Aravind-Gurram1205" className="hover:text-blue-400 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/aravind-gurram-923081259/" className="hover:text-blue-400 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:aravinggurram89@gmail.com" className="hover:text-blue-400 transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section className="bg-gray-800/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <img
                                src="images/exa.jpg"
                                alt="Aravind Gurram"
                                className="w-48 h-48 rounded-full object-cover border-4 border-blue-400/20"
                            />
                            <div className="flex-1">
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    I'm a dedicated Computer Science student with a strong foundation in deep learning and web development.
                                    My recent work focuses on applying advanced neural networks to real-world problems, particularly in
                                    the field of plant health monitoring using computer vision techniques.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Through my internship and project experiences, I've developed a keen interest in building scalable
                                    applications that combine cutting-edge AI technologies with robust web development practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects & Experience Sections Side-by-Side */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Projects Section */}
                        <div className="bg-gray-800/50 p-6 rounded-lg">
                            <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
                            <p className="text-gray-300 mb-6 text-center">
                                Explore some of the innovative and hands-on projects I've worked on in AI, web development, and beyond.
                            </p>
                            <div className="text-center">
                                <a
                                    href="/projects"
                                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition"
                                >
                                    Expand
                                </a>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="bg-gray-800/50 p-6 rounded-lg">
                            <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
                            <p className="text-gray-300 mb-6 text-center">
                                Learn about my internship roles, technical experiences, and what I've contributed to various projects.
                            </p>
                            <div className="text-center">
                                <a
                                    href="/experience"
                                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition"
                                >
                                    Expand
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <SkillCard
                                icon={<Code2 className="w-8 h-8" />}
                                title="Programming"
                                skills={['C', 'C++', 'Java', 'Python']}
                            />
                            <SkillCard
                                icon={<Cpu className="w-8 h-8" />}
                                title="AI/ML"
                                skills={['TensorFlow', 'PyTorch', 'GoogLeNet', 'ResNet']}
                            />
                            <SkillCard
                                icon={<Globe className="w-8 h-8" />}
                                title="Web Development"
                                skills={['React', 'JavaSript', 'HTML/CSS']}
                            />
                            <SkillCard
                                icon={<Database className="w-8 h-8" />}
                                title="Tools & Technologies"
                                skills={['Git', 'Docker', 'AWS', 'OpenCV']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="bg-gray-800/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
                        <div className="space-y-8">
                            <EducationCard
                                degree="Bachelor of Technology in Information Technology"
                                institution="Velagapudi RamaKrishna Siddhartha Engineering College (VRSEC)"
                                year="2022 - 2026"
                                score="CGPA: 8.89/10 (current)"
                            />
                            <EducationCard
                                degree="Intermediate Education (MPC)"
                                institution="Sri Chaitanya Junior College"
                                year="2020 - 2022"
                                score="Percentage: 96.7%"
                            />
                            <EducationCard
                                degree="Secondary School Education (SSC)"
                                institution="Geethanjali English Medium School"
                                year="2019 - 2020"
                                score="Percentage: 99%"
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Achievements</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* Certifications */}
                            <div className="bg-gray-800/50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-6 flex items-center">
                                    <BookOpen className="w-6 h-6 mr-2 text-blue-400" />
                                    Certifications
                                </h3>
                                <ul className="space-y-4 text-gray-300">
                                    <li>• Advanced Python Programming</li>
                                    <li>• C++ Professional Certification</li>
                                    <li>• Computing Foundations and Applications</li>
                                </ul>
                            </div>

                            {/* Achievements */}
                            <div className="bg-gray-800/50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-6 flex items-center">
                                    <Award className="w-6 h-6 mr-2 text-blue-400" />
                                    Achievements
                                </h3>
                                <ul className="space-y-4 text-gray-300">
                                    <li>• 2nd Place - Explorers Meet-2k24 Coding Competition</li>
                                </ul>
                            </div>

                            {/* Coding Platforms */}
                            <div className="bg-gray-800/50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-6 flex items-center">
                                    <Award className="w-6 h-6 mr-2 text-blue-400" />
                                    Coding Platform
                                </h3>
                                <div className="flex flex-col gap-4 text-blue-400">
                                    <a
                                        href="https://www.hackerrank.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        • HackerRank
                                    </a>
                                    <a
                                        href="https://leetcode.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        • LeetCode
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>© 2025 Aravind Gurram</p>
                </div>
            </footer>
        </>
    );
};

interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    skills: string[];
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
    return (
        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="text-xl font-semibold ml-3">{title}</h3>
            </div>
            <ul className="space-y-2">
                {skills.map((skill) => (
                    <li key={skill} className="text-gray-300">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}

interface EducationCardProps {
    degree: string;
    institution: string;
    year: string;
    score: string;
}

function EducationCard({ degree, institution, year, score }: EducationCardProps) {
    return (
        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
            <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                    <h3 className="text-xl font-semibold mb-2">{degree}</h3>
                    <p className="text-gray-300">{institution}</p>
                    <p className="text-gray-400">{year}</p>
                    <p className="text-gray-300 mt-2">{score}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
