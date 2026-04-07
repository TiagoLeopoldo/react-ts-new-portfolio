import React from 'react';
import './Title.css';

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  id?: string;
}

const Title: React.FC<TitleProps> = ({ children, level = 1, className = '', id }) => {
  const TagName = `h${level}` as React.ElementType;
  
  return (
    <TagName id={id} className={`title-atom title-atom--h${level} ${className}`}>
      {children}
    </TagName>
  );
};

export default Title;
