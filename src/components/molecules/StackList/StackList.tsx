import React from 'react';
import Tag from '../../atoms/Tag/Tag';
import './StackList.css';

interface StackListProps {
  technologies: string[];
  className?: string;
}

const StackList: React.FC<StackListProps> = ({ technologies, className = '' }) => {
  return (
    <div className={`stack-list-molecule ${className}`}>
      {technologies.map((tech) => (
        <Tag key={tech} variant="secondary">
          {tech}
        </Tag>
      ))}
    </div>
  );
};

export default StackList;
