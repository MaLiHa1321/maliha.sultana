
import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import GradientText from '../UI/GradientText';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>Skills & Technologies</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My technical toolkit and expertise areas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {portfolioData.skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative w-32 h-32 transform hover:scale-110 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gray-800 transform rotate-45 rounded-xl border-2 border-gray-600 group-hover:border-gray-400 transition-all duration-300"></div>
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 text-center">
                <div className="text-2xl mb-2 transform -rotate-45">{skill.icon}</div>
                <h3 className="text-white font-semibold text-sm transform -rotate-45">
                  {skill.name}
                </h3>
                
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45">
                  <div className="bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                    {skill.level}%
                  </div>
                </div>
  
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-gray-600/10 rounded-xl transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {['frontend', 'backend'].map((category) => (
            <div key={category} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-white font-semibold text-lg mb-4 capitalize text-center">
                {category} Skills
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {portfolioData.skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <span
                      key={skill.name}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                    >
                      {skill.name}
                    </span>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


