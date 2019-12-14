import * as React from 'react';
import TextRow from './TextRow';

export type DefaultedProps = Props & {
  widths: NonNullable<Props['widths']>
}

export type Props = {
  rows: number,
  color: string,
  lineSpacing?: string | number,
  widths?: number[],
  style?: React.CSSProperties,
  className?: string
}

export default class TextBlock extends React.Component<Props> {

  static defaultProps: Partial<Props> = {
    widths: [97, 100, 94, 90, 98, 95, 98, 40]
  }

  getRowStyle = (i: number) => {
    const { rows, widths } = this.props as DefaultedProps;

    return {
      maxHeight: `${(100 / (rows * 2 - 1))}%`,
      width: `${widths[(i + widths.length) % widths.length]}%`
    };
  }

  getRows = () => {
    const { rows, lineSpacing, color } = this.props;
    const range = Array.apply(null, Array(rows));
    return range.map((_, i) => (
      <TextRow
        color={color}
        style={this.getRowStyle(i)}
        lineSpacing={i !== 0 ? lineSpacing : 0}
        key={i}
      />
    ));
  }

  render() {
    const { style, className } = this.props;


    const defaultStyles = {
      width: '100%'
    };

    const classes = ['text-block', className].filter(c => c).join(' ');

    return (
      <div className={classes} style={{ ...defaultStyles, ...style }}>
        {this.getRows()}
      </div>
    );
  }

}
