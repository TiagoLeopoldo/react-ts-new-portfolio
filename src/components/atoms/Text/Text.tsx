import React from 'react';
import './Text.css';

interface TextProps {
  children: React.ReactNode;
  variant?: 'base' | 'sm' | 'lg' | 'xs';
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'base', 
  className = '', 
  color = 'secondary' 
}) => {
  return (
    <p className={`text-atom text-atom--${variant} text-atom--color-${color} ${className}`}>
      {children}
    </p>
  );
};

export default Text;
