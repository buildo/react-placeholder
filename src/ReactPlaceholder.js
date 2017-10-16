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
    ])
  }

  static defaultProps = {
    delay: 0,
    type: 'text',
    color: '#CDCDCD'
  }

  state = {
    ready: this.props.ready
  }

  getFiller = () => {
    const {
      firstLaunchOnly, children, ready, className, // eslint-disable-line no-unused-vars
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
    this.timeout = setTimeout(() => {
      this.setState({ ready: false });
    }, this.props.delay);
  }

  setReady = () => {
    clearTimeout(this.timeout);

    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  }

  render() {
    return this.state.ready ? this.props.children : this.getFiller();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.firstLaunchOnly && this.state.ready && !nextProps.ready) {
      this.setNotReady();
    } else if (nextProps.ready) {
      this.setReady();
    }
  }
}
