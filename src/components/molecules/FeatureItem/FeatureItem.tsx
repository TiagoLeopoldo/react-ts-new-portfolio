import React from 'react';
import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import './FeatureItem.css';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="feature-item">
      <div className="feature-marker">
        <span className="line"></span>
      </div>
      <div className="feature-content">
        <Title level={3}>{title}</Title>
        <Text variant="base">{description}</Text>
      </div>
    </div>
  );
};

export default FeatureItem;
