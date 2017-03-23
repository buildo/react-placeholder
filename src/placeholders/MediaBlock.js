import React from 'react';
import TextBlock from './TextBlock';
import RoundShape from './RoundShape';


export default class MediaBlock extends React.Component {

  static propTypes = {
    rows: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
    className: React.PropTypes.string
  }

  render() {
    const { className, style, color, rows } = this.props;
    return (
      <div className={`media-block ${className}`} style={{ ...style, display: 'flex' }}>
        <RoundShape
          color={color}
          style={{ minHeight: 55, width: 55, minWidth: 55, marginRight: 10 }}
        />
        <TextBlock color={color} rows={rows} />
      </div>
    );
  }

}
