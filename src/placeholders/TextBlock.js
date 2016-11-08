import React from 'react';
import cx from 'classnames';
import TextRow from './TextRow';

const widths = [97, 100, 94, 90, 98, 95, 98, 40];

export default class TextBlock extends React.Component {

  static propTypes = {
    rows: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
    className: React.PropTypes.string
  }

  getRowStyle = (i) => {
    const { rows, color } = this.props;

    const style = {
      backgroundColor: color,
      maxHeight: (100 / (rows * 2 - 1)) + '%'
    };

    if (i % 2 === 0) {
      style.width = widths[((i / 2) + widths.length) % widths.length] + '%';
    }

    return style;
  }

  getRows = () => {
    const rows = (this.props.rows * 2) - 1;
    const range = Array.apply(null, {length: rows});
    return range.map((x, i) => <TextRow style={this.getRowStyle(i)} invisible={i % 2 > 0} key={i}/>);
  }

  render() {
    const { style, className } = this.props;

    return (
      <div className={cx('text-block', className)} style={{ ...style, width: '100%' }}>
        {this.getRows()}
      </div>
    );
  }

}
