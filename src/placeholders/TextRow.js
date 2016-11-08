import React from 'react';
import cx from 'classnames';

export default class TextRow extends React.Component {

  static propTypes = {
    invisible: React.PropTypes.bool,
    className: React.PropTypes.string,
    color: React.PropTypes.string,
    style: React.PropTypes.object
  }

  render() {
    const { className, maxHeight, color, style, invisible } = this.props;

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
          width: invisible ? 0 : undefined
        }}
      />
    );
  }

}
