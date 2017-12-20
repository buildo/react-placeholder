import React from 'react';
import PropTypes from 'prop-types';
import TextRow from './TextRow';

export default class TextBlock extends React.Component {

  static propTypes = {
    rows: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    lineSpacing: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    widths: PropTypes.arrayOf(PropTypes.number),
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    widths: [97, 100, 94, 90, 98, 95, 98, 40]
  }

  getRowStyle = (i) => {
    const { rows, color, widths } = this.props;

    return {
      backgroundColor: color,
      maxHeight: `${(100 / (rows * 2 - 1))}%`,
      width: `${widths[(i + widths.length) % widths.length]}%`
    };
  }

  getRows = () => {
    const { rows, lineSpacing } = this.props;
    const range = [...Array(rows)];
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

    const classes = ['text-block', className].filter(c => c).join(' ');

    return (
      <div className={classes} style={{ ...style, width: '100%' }}>
        {this.getRows()}
      </div>
    );
  }

}
