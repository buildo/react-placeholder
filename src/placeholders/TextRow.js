import React from 'react';
import cx from 'classnames';

export default class TextRow extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    color: React.PropTypes.string,
    lineSpacing: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    style: React.PropTypes.object
  }

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

    return (
      <div
        className={cx('text-row', className)}
        style={{ ...defaultStyles, ...style }}
      />
    );
  }

}
