import React from 'react';
import {assign} from 'lodash/object';

const RoundShape = React.createClass({

  /* eslint-disable key-spacing */
  propTypes: {
    color: React.PropTypes.string,
    className: React.PropTypes.string,
    style: React.PropTypes.object
  },
  /* eslint-enable key-spacing */

  getDefaultProps() {
    return {
      className: '',
      style: {}
    };
  },

  render() {
    const defaultStyles = {
      backgroundColor: this.props.color,
      borderRadius: '500rem',
      width: '100%',
      height: '100%'
    };
    return (
      <div className={`round-shape ${this.props.className}`} style={assign(defaultStyles, this.props.style)}/>
    );
  }

});


export default RoundShape;
