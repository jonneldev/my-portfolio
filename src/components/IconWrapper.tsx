import React from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
  size?: number;
  color?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, size = 24, color }) => {
  return <Icon size={size} color={color} />;
};

export default IconWrapper; 