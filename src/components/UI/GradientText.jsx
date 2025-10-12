// import React from 'react';

// const GradientText = ({ children, className = "" }) => {
//   return (
//     <span className={`bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 bg-clip-text text-transparent ${className}`}>
//       {children}
//     </span>
//   );
// };

// export default GradientText;


import React from 'react';

const GradientText = ({ children, className = "" }) => {
  return (
    <span className={`bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;