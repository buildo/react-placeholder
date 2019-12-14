import * as React from 'react';
import { joinClassNames } from '../utils';

export type Props = {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

const RectShape: React.FC<Props> = ({ className, style, color }) => {
  const defaultStyle = {
    backgroundColor: color,
    width: '100%',
    height: '100%',
    marginRight: 10
  };

  return (
    <div
      className={joinClassNames('rect-shape', className)}
      style={{ ...defaultStyle, ...style }}
    />
  );
};

export default RectShape;
