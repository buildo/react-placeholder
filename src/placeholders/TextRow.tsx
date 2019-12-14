import * as React from 'react';

export type Props = {
  maxHeight?: string | number,
  invisible?: boolean,
  className?: string,
  color: string,
  style?: React.CSSProperties,
  lineSpacing?: string | number
}

export default class TextRow extends React.Component<Props> {

  static defaultProps = {
    lineSpacing: '0.7em'
  }

  render() {
    const { className, maxHeight, color, lineSpacing, style } = this.props;

    const defaultStyles = {
      maxHeight,
      width: '100%',
      height: '1em',
      backgroundColor: color,
      marginTop: lineSpacing
    };

    const classes = ['text-row', className].filter(c => c).join(' ');

    return (
      <div
        className={classes}
        style={{ ...defaultStyles, ...style }}
      />
    );
  }

}
