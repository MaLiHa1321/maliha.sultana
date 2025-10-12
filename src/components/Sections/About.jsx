import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import GradientText from '../UI/GradientText';

const About = () => {
  return (
    <section id="about" className="py-20 w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src={portfolioData.personal.avatar}
                alt="About Me"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl -z-10"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <GradientText>Me</GradientText>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">{portfolioData.personal.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600">🎓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Education</p>
                  <p className="text-gray-600">B.Sc. in Computer Science</p>
                </div>
              </div>
            </div>
<div className="pt-6">
  <a
    href="#contact"
    className="inline-flex items-center space-x-2 bg-gray-900 text-gray-100 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:shadow-xl hover:shadow-black/30 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700"
  >
    <span>Let's Work Together</span>
    <span className="text-gray-400 group-hover:text-white">→</span>
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;