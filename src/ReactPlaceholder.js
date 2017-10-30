import React from 'react';
import PropTypes from 'prop-types';
import * as placeholders from './placeholders';

export default class ReactPlaceholder extends React.Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]).isRequired,
    delay: PropTypes.number,
    ready: PropTypes.bool.isRequired,
    firstLaunchOnly: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
    rows: PropTypes.number,
    color: PropTypes.string,
    showLoadingAnimation: PropTypes.bool,
    customPlaceholder: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]),
    holdPlaceholder: PropTypes.number
  }

  static defaultProps = {
    delay: 0,
    type: 'text',
    color: '#CDCDCD',
    holdPlaceholder: 0
  }

  state = {
    ready: this.props.ready,
    holdPlaceholder: this.props.holdPlaceholder > 0
  }

  getFiller = () => {
    const {
      firstLaunchOnly, children, ready, className, holdPlaceholder, // eslint-disable-line no-unused-vars
      type, customPlaceholder, showLoadingAnimation, ...rest
    } = this.props;

    const classes = showLoadingAnimation ?
      ['show-loading-animation', className].filter(c => c).join(' ') :
      className;

    if (customPlaceholder && React.isValidElement(customPlaceholder)) {
      const mergedCustomClasses = [
        customPlaceholder.props.className,
        classes
      ].filter(c => c).join(' ');
      return React.cloneElement(customPlaceholder, { className: mergedCustomClasses });
    } else if (customPlaceholder) {
      return customPlaceholder;
    }

    const Placeholder = placeholders[type];

    return <Placeholder {...rest} className={classes} />;
  };

  setNotReady = () => {
    const { delay } = this.props;

    if (delay > 0) {
      this.timeout = setTimeout(() => {
        this.setState({ ready: false });
      }, delay);
    } else {
      this.setState({ ready: false });
    }
  }

  setReady = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  }

  render() {
    const { ready, holdPlaceholder } = this.state;
    return ready && !holdPlaceholder ? this.props.children : this.getFiller();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.firstLaunchOnly && !nextProps.ready) {
      if (this.state.ready) {
        this.setNotReady();
      }
      if (this.props.holdPlaceholder) {
        clearTimeout(this.holdPlaceholderTimeout);
        this.setState({ holdPlaceholder: true });
        this.holdPlaceholderTimeout = setTimeout(() => this.setState({ holdPlaceholder: false }), nextProps.holdPlaceholder);  
      }
    } else if (nextProps.ready) {
      this.setReady();
    }
  }

  componentWillMount() {
    if (this.props.holdPlaceholder > 0) {
      this.holdPlaceholderTimeout = setTimeout(() => this.setState({ holdPlaceholder: false }), this.props.holdPlaceholder);
    }
  }
}
