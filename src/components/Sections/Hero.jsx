
import React from 'react';
import GradientText from '../UI/GradientText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center pt-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-x-hidden">
      <div className="w-full max-w-full px-4 sm:px-6 mx-auto">

        <div className="absolute top-1/4 left-4 sm:left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gray-700 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-4 sm:right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gray-600 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-gray-500 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative z-10 w-full">
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 p-1">
              <img
                src="https://i.ibb.co.com/Rpd0HxNJ/my-photo.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold mb-4 sm:mb-6 px-2">
            <span className="text-white">Hi, I'm </span>
            <GradientText>Maliha Sultana</GradientText>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-center px-2 md:px-0">
            Jr. Front-End Developer
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Creative Junior Frontend Developer transforming concepts into engaging digital experiences. I focus on building responsive websites that are both beautiful and easy to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/25 transform hover:-translate-y-1 transition-all duration-300 border border-gray-600 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border-2 border-gray-600 text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-gray-400 hover:text-gray-200 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
          </div>
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;