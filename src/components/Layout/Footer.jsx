import React from 'react';
import GradientText from '../UI/GradientText';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo & Copyright */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AJ</span>
            </div>
            <div>
              <GradientText className="text-lg font-bold">
                AlexJohnson
              </GradientText>
              <p className="text-gray-400 text-sm">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {[
              { name: 'GitHub', icon: '🐱', url: '#' },
              { name: 'LinkedIn', icon: '💼', url: '#' },
              { name: 'Twitter', icon: '🐦', url: '#' },
              { name: 'Email', icon: '📧', url: '#' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                title={social.name}
              >
                <span className="text-sm">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;