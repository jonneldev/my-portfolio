import React, { CSSProperties } from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
  size?: number;
  color?: string;
  style?: CSSProperties; // Add the style prop
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, size = 24, color, style }) => {
  const IconComponent = Icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  return <IconComponent style={{ fontSize: size, color, ...style }} />;
};

export default IconWrapper;