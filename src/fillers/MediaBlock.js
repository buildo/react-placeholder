import React from 'react';
import TextBlock from './TextBlock';
import RoundShape from './RoundShape';


const MediaBlock = React.createClass({

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

  render() {
    this.props.style.display = 'flex';
    return (
      <div className={`media-block ${this.props.className}`} style={this.props.style}>
        <RoundShape color={this.props.color} style={{minHeight: 55, width: 55, minWidth: 55, marginRight: 10}}/>
        <TextBlock color={this.props.color} rows={this.props.rows} />
      </div>
    );
  }

});


export default MediaBlock;
