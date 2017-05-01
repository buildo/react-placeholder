import React from 'react';
import PropTypes from 'prop-types';

export default class TextRow extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    lineSpacing: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    style: PropTypes.object
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

    const classes = ['text-row', className].filter(c => c).join(' ');

    return (
      <div
        className={classes}
        style={{ ...defaultStyles, ...style }}
      />
    );
  }

}
