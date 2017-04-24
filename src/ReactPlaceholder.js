import React from 'react';
import PropTypes from 'prop-types';
import * as placeholders from './placeholders';

export default class ReactPlaceholder extends React.Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]).isRequired,
    ready: PropTypes.bool.isRequired,
    firstLaunchOnly: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
    rows: PropTypes.number,
    color: PropTypes.string,
    customPlaceholder: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
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
    // eslint-disable-next-line no-unused-vars
    const { type, customPlaceholder, children, ready, firstLaunchOnly, ...rest } = this.props;

    if (customPlaceholder) {
      return customPlaceholder;
    }

    const Placeholder = placeholders[type];

    return <Placeholder {...rest} />;
  };

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
