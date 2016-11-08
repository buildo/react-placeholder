import React from 'react';
import cx from 'classnames';
import { t, props } from 'tcomb-react';

@props({
  color: t.maybe(t.String),
  className: t.maybe(t.String),
  style: t.maybe(t.Object)
})
export default class RoundShape extends React.Component {

  render() {
    const { className, style, color } = this.props;

    const defaultStyles = {
      backgroundColor: color,
      borderRadius: '500rem',
      width: '100%',
      height: '100%'
    };

    return (
      <div className={cx('round-shape', className)} style={{ ...defaultStyles, ...style }}/>
    );
  }

}
