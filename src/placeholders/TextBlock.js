import React from 'react';
import TextRow from './TextRow';

const widths = [97, 100, 94, 90, 98, 95, 98, 40];

export default class TextBlock extends React.Component {

  static propTypes = {
    rows: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    lineSpacing: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    style: React.PropTypes.object,
    className: React.PropTypes.string
  }

  getRowStyle = (i) => {
    const { rows, color } = this.props;

    return {
      backgroundColor: color,
      maxHeight: `${(100 / (rows * 2 - 1))}%`,
      width: `${widths[(i + widths.length) % widths.length]}%`
    };
  }

  getRows = () => {
    const { rows, lineSpacing } = this.props;
    const range = Array.apply(null, { length: rows }); // eslint-disable-line prefer-spread
    return range.map((x, i) => (
      <TextRow
        style={this.getRowStyle(i)}
        lineSpacing={i !== 0 ? lineSpacing : 0}
        key={i}
      />
    ));
  }

  render() {
    const { style, className } = this.props;

    return (
      <div className={`text-block ${className}`} style={{ ...style, width: '100%' }}>
        {this.getRows()}
      </div>
    );
  }

}
