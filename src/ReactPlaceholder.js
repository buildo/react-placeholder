import React from 'react';
import omit from 'lodash.omit';
import { t, props } from 'tcomb-react';
import placeholders from './placeholders';

@props({
  children: t.ReactChildren,
  ready: t.Boolean,
  firstLaunchOnly: t.maybe(t.Boolean),
  type: t.enums.of(['text', 'media', 'textRow', 'rect', 'round']),
  rows: t.maybe(t.Integer),
  color: t.String,
  customPlaceholder: t.maybe(t.ReactChildren),
  className: t.maybe(t.String),
  style: t.maybe(t.Object)
})
export default class ReactPlaceholder extends React.Component {

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
