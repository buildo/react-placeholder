import * as React from 'react';
import * as placeholders from './placeholders';

export type CommonProps = {
  children: React.ReactNode,
  /** pass `true` when the content is ready and `false` when it's loading */
  ready: boolean,
  /** delay in millis to wait when passing from ready to NOT ready */
  delay?: number,
  /** if true, the placeholder will never be rendered again once ready becomes true, even if it becomes false again */
  firstLaunchOnly?: boolean,
  className?: string,
  style?: React.CSSProperties
}

export type Props = (CommonProps & {
  /** type of placeholder to use */
  type: 'text' | 'media' | 'textRow' | 'rect' | 'round',
  /** number of rows displayed in 'media' and 'text' placeholders */
  rows?: number,
  /** color of the placeholder */
  color?: string,
  /** pass true to show a nice loading animation on the placeholder */
  showLoadingAnimation?: boolean,
  customPlaceholder?: undefined
}) | (CommonProps & {
  /** pass any renderable content to be used as placeholder instead of the built-in ones */
  customPlaceholder?: React.ReactNode | React.ReactElement<{ [k: string]: any }>,
  type?: undefined,
  rows?: undefined,
  color?: undefined,
  showLoadingAnimation?: undefined
})

export default class ReactPlaceholder extends React.Component<Props> {

  static defaultProps = {
    delay: 0,
    type: 'text',
    color: '#CDCDCD'
  }

  state = {
    ready: this.props.ready
  }

  timeout?: number;

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

    const Placeholder = placeholders[type!];

    // @ts-ignore
    return <Placeholder {...rest} className={classes} />;
  };

  setNotReady = () => {
    const { delay } = this.props;

    if (delay && delay > 0) {
      this.timeout = window.setTimeout(() => {
        this.setState({ ready: false });
      }, delay);
    } else {
      this.setState({ ready: false });
    }
  }

  setReady = () => {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  }

  render() {
    return this.state.ready ? this.props.children : this.getFiller();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!this.props.firstLaunchOnly && this.state.ready && !nextProps.ready) {
      this.setNotReady();
    } else if (nextProps.ready) {
      this.setReady();
    }
  }
}
