import { ComponentClass, ReactChild, ReactNode, ReactElement } from 'react';

interface ReactPlaceholderProps {
  // FIXME: children is marked as optional because of https://github.com/Microsoft/TypeScript/issues/8588
  children?: ReactChild,
  ready: boolean,
  firstLaunchOnly?: boolean,
  type?: 'text' |  'media' | 'textRow' | 'rect' | 'round',
  rows?: number,
  color?: string,
  showLoadingAnimation?: boolean,
  customPlaceholder?: ReactNode | ReactElement<any>
}

interface ReactPlaceholderState {
  ready: boolean
}

declare const ReactPlaceholder: ComponentClass<ReactPlaceholderProps>;
export default ReactPlaceholder;
