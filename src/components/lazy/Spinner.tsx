import React from 'react';

const Spinner: React.FC = () => (
  <div className="flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
  </div>
);

export default Spinner;
