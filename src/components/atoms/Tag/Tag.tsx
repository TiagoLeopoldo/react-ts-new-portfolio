import React from 'react';
import './Tag.css';

interface TagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, variant = 'primary', className = '' }) => {
  return (
    <span className={`tag-atom tag-atom--${variant} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
