import React from 'react';
import cx from 'classnames';
import { t, props } from 'tcomb-react';

@props({
  invisible: t.maybe(t.Boolean),
  className: t.maybe(t.String),
  color: t.maybe(t.String),
  style: t.maybe(t.Object)
})
export default class TextRow extends React.Component {

  static defaultProps = {
    style: {}
  }

  render() {
    const { className, maxHeight, color, invisible, style } = this.props;

    const defaultStyle = {
      maxHeight,
      width: '100%',
      height: 8,
      backgroundColor: color
    };

    return (
      <div
        className={cx('text-row', className, { invisible })}
        style={{
          ...defaultStyle,
          ...style,
          width: invisible ? 0 : (style.width || defaultStyle.width)
        }}
      />
    );
  }

}
