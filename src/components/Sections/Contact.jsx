
import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import GradientText from '../UI/GradientText';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <GradientText>Touch</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about web development. Feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-500 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:from-gray-500 group-hover:to-gray-600 transition-all">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">{portfolioData.personal.email}</p>
                </div>
              </a>
              <div className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300">{portfolioData.personal.location}</p>
                </div>
              </div>
              <a
                href="https://github.com/MaLiHa1321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-500 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:from-gray-500 group-hover:to-gray-600 transition-all">
                  <span className="text-white text-xl">💻</span>
                </div>
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="text-gray-300">View my projects</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/maliha-sultana-2175a7263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-500 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:from-gray-500 group-hover:to-gray-600 transition-all">
                  <span className="text-white text-xl">💼</span>
                </div>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-gray-300">Connect professionally</p>
                </div>
              </a>
            </div>
          </div>

          <div className="text-center mt-12 p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether it's a website or just some development advice, 
              I'm here to help bring your vision to reality.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;