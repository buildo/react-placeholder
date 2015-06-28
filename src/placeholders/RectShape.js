import React from 'react';
import {assign} from 'lodash/object';

const RectShape = React.createClass({

  /* eslint-disable key-spacing */
  propTypes: {
    className: React.PropTypes.string,
    color: React.PropTypes.string,
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
    const defaultStyle = {
      backgroundColor: this.props.color,
      width: '100%',
      height: '100%',
      marginRight: 10
    };
    return (
      <div className='round-shape' style={assign(defaultStyle, this.props.style)}/>
    );
  }

});


export default RectShape;
