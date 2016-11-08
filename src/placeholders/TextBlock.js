import React from 'react';
import cx from 'classnames';
import { t, props } from 'tcomb-react';
import TextRow from './TextRow';

const widths = [97, 100, 94, 90, 98, 95, 98, 40];

@props({
  rows: t.Number,
  color: t.String,
  style: t.maybe(t.Object),
  className: t.maybe(t.String)
})
export default class TextBlock extends React.Component {

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
