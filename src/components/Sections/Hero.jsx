

import React from 'react';
import GradientText from '../UI/GradientText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-700 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gray-600 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gray-500 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative z-10">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 p-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <GradientText>Maliha Sultana</GradientText>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Jr. Front-End Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
           Creative Junior Frontend Developer transforming concepts into engaging digital experiences. I focus on building responsive websites that are both beautiful and easy to use.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/25 transform hover:-translate-y-1 transition-all duration-300 border border-gray-600"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-gray-400 hover:text-gray-200 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

