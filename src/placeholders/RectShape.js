import React from 'react';
import cx from 'classnames';

export default class RectShape extends React.Component {

  static propTypes = {
    color: React.PropTypes.string,
    className: React.PropTypes.string,
    style: React.PropTypes.object
  }

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
