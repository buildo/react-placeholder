import * as React from 'react';
import TextRow from './TextRow';
import { joinClassNames } from '../utils';

export type Props = {
  rows: number;
  color: string;
  lineSpacing?: string | number;
  widths?: number[];
  style?: React.CSSProperties;
  className?: string;
};

const defaultStyles = {
  width: '100%'
};

const defaultWidths = [97, 100, 94, 90, 98, 95, 98, 40];

const TextBlock: React.FC<Props> = ({
  rows,
  lineSpacing,
  color,
  style,
  className,
  widths = defaultWidths
}) => {
  const getRowStyle = (i: number) => {
    return {
      maxHeight: `${100 / (rows * 2 - 1)}%`,
      width: `${widths[(i + widths.length) % widths.length]}%`
    };
  };

  return (
    <div
      className={joinClassNames('text-block', className)}
      style={{ ...defaultStyles, ...style }}
    >
      {Array.apply(null, Array(rows)).map((_, i) => (
        <TextRow
          color={color}
          style={getRowStyle(i)}
          lineSpacing={i !== 0 ? lineSpacing : 0}
          key={i}
        />
      ))}
    </div>
  );
};

export default TextBlock;
