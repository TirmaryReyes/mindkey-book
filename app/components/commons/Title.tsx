import React from 'react';

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
  const baseClass = 'text-white text-center font-bold hero-title'; 

  return <h1 className={`${baseClass} ${className}`}>{children}</h1>;
};

export default Title;
