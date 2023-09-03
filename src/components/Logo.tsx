// components/Logo.tsx

import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  className?: string; // Add className prop
}

export const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
  return (
    <div className={`logo ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Logo;