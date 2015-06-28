import React from 'react';
import {assign} from 'lodash/object';

const TextRow = React.createClass({

  /* eslint-disable key-spacing */
  propTypes: {
    invisible: React.PropTypes.bool,
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
    const defaultStyles = {
      width: '100%',
      height: 8,
      maxHeight: this.props.maxHeight,
      backgroundColor: this.props.color
    };
    const style = assign(defaultStyles, this.props.style);
    if (this.props.invisible) {
      style.width = 0;
    }

    const invisible = this.props.invisible ? 'invisible' : '';
    return (
      <div className={`text-row ${this.props.className} ${invisible}`} style={style}/>
    );
  }

});


export default TextRow;
