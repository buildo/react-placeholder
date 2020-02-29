import * as React from 'react';
import TextBlock from './TextBlock';
import RoundShape from './RoundShape';
import { joinClassNames } from '../utils';

export type Props = {
  rows: number;
  color: string;
  style?: React.CSSProperties;
  className?: string;
};

const defaultStyles = {
  display: 'flex'
};

const MediaBlock: React.FC<Props> = ({ className, style, color, rows }) => {
  return (
    <div
      className={joinClassNames('media-block', className)}
      style={{ ...defaultStyles, ...style }}
    >
      <RoundShape
        color={color}
        style={{ minHeight: 55, width: 55, minWidth: 55, marginRight: 10 }}
      />
      <TextBlock color={color} rows={rows} />
    </div>
  );
};

export default MediaBlock;
