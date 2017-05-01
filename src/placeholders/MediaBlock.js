import React from 'react';
import PropTypes from 'prop-types';
import TextBlock from './TextBlock';
import RoundShape from './RoundShape';


export default class MediaBlock extends React.Component {

  static propTypes = {
    rows: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
  }

  render() {
    const { className, style, color, rows } = this.props;

    const classes = ['media-block', className].filter(c => c).join(' ');

    return (
      <div className={classes} style={{ ...style, display: 'flex' }}>
        <RoundShape
          color={color}
          style={{ minHeight: 55, width: 55, minWidth: 55, marginRight: 10 }}
        />
        <TextBlock color={color} rows={rows} />
      </div>
    );
  }

}
