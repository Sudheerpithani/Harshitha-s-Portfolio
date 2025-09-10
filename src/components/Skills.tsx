
import { useState, useEffect } from 'react';
import { Code, Database, Cloud, Globe, Award } from 'lucide-react';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import Java from '../assets/Java.png';

const Skills = () => {
  const skills = {
    programming: [
      { name: 'Java', color: 'from-orange-500 to-red-500' },
      { name: 'C++', color: 'from-blue-600 to-purple-600' }
    ],
    web: [
      { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
      { name: 'HTML/CSS', color: 'from-orange-500 to-red-500' },
      { name: 'React', color: 'from-blue-400 to-blue-500' },
      { name: 'Node.js', color: 'from-green-500 to-green-600' }
    ],
    database: [
      { name: 'SQL', color: 'from-blue-500 to-indigo-600' },
      { name: 'MySQL', color: 'from-blue-600 to-blue-700' },
      { name: 'MongoDB', color: 'from-green-500 to-green-600' }
    ],
    cloud: [
      { name: 'AWS', color: 'from-orange-400 to-orange-500' },
      { name: 'DevOps', color: 'from-purple-500 to-purple-600' }
    ]
  };

  const certifications = [
    {
      name: 'Java Certification',
      provider: 'Information Technology Specialist',
      image: Java,
      date: 'December 10, 2024',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'HTML Certification',
      provider: 'Great Learning Academy',
      image: HTML,
      date: 'May 2024',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CSS Certification',
      provider: 'Great Learning Academy',
      image: CSS,
      date: 'June 2024',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const SkillCard = ({ skill }: { skill: any }) => (
    <div className={`bg-gradient-to-r ${skill.color} text-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}>
      <span className="font-semibold text-lg">{skill.name}</span>
    </div>
  );

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.programming,
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: skills.web,
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Database Technologies",
      icon: Database,
      skills: skills.database,
      bgColor: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200"
    },
    {
      title: "Cloud Development",
      icon: Cloud,
      skills: skills.cloud,
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    }
  ];

  return (
    <div id="skills" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full opacity-60 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full opacity-60 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-6">
            <Code className="w-4 h-4 text-pink-600 mr-2" />
            <p className="text-pink-700 font-semibold text-sm uppercase tracking-wider">Skills & Certifications</p>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Technical
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning multiple programming languages, frameworks, and modern development technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-3xl shadow-xl border ${category.borderColor} hover:shadow-2xl transition-all duration-500 group`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center group-hover:text-pink-600 transition-colors duration-300">
                <div className="bg-white p-3 rounded-2xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="text-pink-600" size={24} />
                </div>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-3xl shadow-xl border border-indigo-200 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="bg-white p-3 rounded-2xl shadow-lg mr-4">
              <Award className="text-indigo-600" size={24} />
            </div>
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 font-medium mb-2">{cert.provider}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-xl border border-blue-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="bg-white p-3 rounded-2xl shadow-lg mr-4">
              <span className="text-2xl">💬</span>
            </div>
            Communication Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { skill: "English Proficiency", level: "Expert", color: "blue" },
              { skill: "Technical Writing", level: "Advanced", color: "indigo" },
              { skill: "Presentation Skills", level: "Advanced", color: "purple" }
            ].map((item, index) => (
              <div key={item.skill} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-semibold text-lg">{item.skill}</span>
                  <span className={`bg-${item.color}-100 text-${item.color}-700 px-4 py-2 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-300`}>
                    {item.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
