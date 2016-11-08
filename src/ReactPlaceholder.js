import React from 'react';
import {omit} from 'lodash/object';
import placeholders from './placeholders';

export default class ReactFiller extends React.Component {

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.element
    ]).isRequired,
    ready: React.PropTypes.bool.isRequired,
    firstLaunchOnly: React.PropTypes.bool,
    type: React.PropTypes.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
    rows: React.PropTypes.number,
    color: React.PropTypes.string,
    customPlaceholder: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.element
    ])
  }

  static defaultProps = {
    type: 'text',
    color: '#CDCDCD'
  }

  state = {
    ready: this.props.ready
  }

  isReady = () => (
    this.props.firstLaunchOnly ? this.state.ready : this.props.ready
  )

  getFiller = () => {
    const { type, customPlaceholder } = this.props;
    if (customPlaceholder) {
      return customPlaceholder;
    }

    const Placeholder = placeholders[type];
    const props = omit(this.props, ['children', 'ready', 'firstLaunchOnly', 'type']);

    return <Placeholder {...props} />;
  }

  render() {
    return this.isReady() ? this.props.children : this.getFiller();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.ready) {
      this.setState({
        ready: nextProps.ready
      });
    }
  }

}
