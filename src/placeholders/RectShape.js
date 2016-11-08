import React from 'react';
import cx from 'classnames';
import { t, props } from 'tcomb-react';

@props({
  color: t.maybe(t.String),
  className: t.maybe(t.String),
  style: t.maybe(t.Object)
})
export default class RectShape extends React.Component {

  render() {
    const { className, style, color } = this.props;

    const defaultStyle = {
      backgroundColor: color,
      width: '100%',
      height: '100%',
      marginRight: 10
    };

    return (
      <div className={cx('rect-shape', className)} style={{ ...defaultStyle, ...style }}/>
    );
  }

}
