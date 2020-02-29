import * as React from 'react';
import { joinClassNames } from '../utils';

export type Props = {
  color: string;
  style?: React.CSSProperties;
  className?: string;
};

const RoundShape: React.FC<Props> = ({ className, style, color }) => {
  const defaultStyles = {
    backgroundColor: color,
    borderRadius: '500rem',
    width: '100%',
    height: '100%'
  };

  return (
    <div
      className={joinClassNames('round-shape', className)}
      style={{ ...defaultStyles, ...style }}
    />
  );
};

export default RoundShape;
