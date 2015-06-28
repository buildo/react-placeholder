import React from 'react';
import {omit} from 'lodash/object';
import placeholders from './placeholders';

const ReactFiller = React.createClass({

  /* eslint-disable key-spacing */
  propTypes: {
    children:          React.PropTypes.oneOfType([
                         React.PropTypes.node,
                         React.PropTypes.element
                       ]).isRequired,
    ready:             React.PropTypes.bool.isRequired,
    firstLaunchOnly:   React.PropTypes.bool,
    type:              React.PropTypes.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
    rows:              React.PropTypes.number,
    color:             React.PropTypes.string,
    customPlaceholder: React.PropTypes.oneOfType([
                         React.PropTypes.node,
                         React.PropTypes.element
                       ])
  },
  /* eslint-enable key-spacing */

  getDefaultProps() {
    return {
      type: 'text',
      color: '#CDCDCD'
    };
  },

  getInitialState() {
    return {
      ready: this.props.ready
    };
  },

  isReady() {
    return this.props.firstLaunchOnly ? this.state.ready : this.props.ready;
  },

  getFiller() {
    if (this.props.customPlaceholder) {
      return this.props.customPlaceholder;
    }
  const Placeholder = placeholders[this.props.type];
    const props = omit(this.props, ['children', 'ready', 'firstLaunchOnly', 'type']);
    return <Placeholder {...props} />;
  },

  render() {
    return this.isReady() ? this.props.children : this.getFiller();
  },

  componentWillReceiveProps(nextProps) {
    if (!this.state.ready) {
      this.setState({
        ready: nextProps.ready
      });
    }
  }

});


export default ReactFiller;
