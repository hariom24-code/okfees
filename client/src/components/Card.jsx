import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
