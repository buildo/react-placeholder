import * as React from 'react';

export type Props = {
  color: string,
  style?: React.CSSProperties,
  className?: string
}

export default class RoundShape extends React.Component<Props> {

  render() {
    const { className, style, color } = this.props;

    const defaultStyles = {
      backgroundColor: color,
      borderRadius: '500rem',
      width: '100%',
      height: '100%'
    };

    const classes = ['round-shape', className].filter(c => c).join(' ');

    return (
      <div className={classes} style={{ ...defaultStyles, ...style }} />
    );
  }

}
