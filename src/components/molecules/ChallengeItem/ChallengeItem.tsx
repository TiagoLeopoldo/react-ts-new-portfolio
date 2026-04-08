import React from 'react';
import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import './ChallengeItem.css';

interface ChallengeItemProps {
  title: string;
  description: string;
}

const ChallengeItem: React.FC<ChallengeItemProps> = ({ title, description }) => {
  return (
    <div className="challenge-card">
      <div className="challenge-content">
        <Title level={3}>{title}</Title>
        <Text variant="base">{description}</Text>
      </div>
    </div>
  );
};

export default ChallengeItem;
