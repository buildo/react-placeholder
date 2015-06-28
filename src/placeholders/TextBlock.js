import React from 'react';
import TextRow from './TextRow';

const widths = [97, 100, 94, 90, 98, 95, 98, 40];

const TextBlock = React.createClass({

  propTypes: {
    rows: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
    className: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      className: '',
      style: {}
    };
  },

  getRowStyle(i) {
    const rows = (this.props.rows * 2) - 1;
    const style = {
      backgroundColor: this.props.color,
      maxHeight: (100 / rows) + '%'
    };
    if (i % 2 === 0) {
      style.width = widths[((i / 2) + widths.length) % widths.length] + '%';
    }
    return style;
  },

  getRows() {
    const rows = (this.props.rows * 2) - 1;
    const range = Array.apply(null, {length: rows});
    return range.map((x, i) => <TextRow style={this.getRowStyle(i)} invisible={i % 2 > 0} key={i}/>);
  },

  render() {
    this.props.style.width = '100%';
    return (
      <div className={`text-block ${this.props.className}`} style={this.props.style}>
        {this.getRows()}
      </div>
    );
  }

});


export default TextBlock;
