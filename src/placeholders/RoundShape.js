import React from 'react';
import cx from 'classnames';

export default class RoundShape extends React.Component {

  static propTypes = {
    color: React.PropTypes.string,
    className: React.PropTypes.string,
    style: React.PropTypes.object
  }

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
