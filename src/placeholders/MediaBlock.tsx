import * as React from 'react';
import TextBlock from './TextBlock';
import RoundShape from './RoundShape';

export type Props = {
  rows: number,
  color: string,
  style?: React.CSSProperties,
  className?: string
}

export default class MediaBlock extends React.Component<Props> {

  render() {
    const { className, style, color, rows } = this.props;

    const defaultStyles = {
      display: 'flex'
    };

    const classes = ['media-block', className].filter(c => c).join(' ');

    return (
      <div className={classes} style={{ ...defaultStyles, ...style }}>
        <RoundShape
          color={color}
          style={{ minHeight: 55, width: 55, minWidth: 55, marginRight: 10 }}
        />
        <TextBlock color={color} rows={rows} />
      </div>
    );
  }

}
