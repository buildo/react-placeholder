import React from 'react';
import PropTypes from 'prop-types';

export default class RoundShape extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
  }

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
