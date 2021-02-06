import * as React from 'react';
import * as placeholders from './placeholders';
import { joinClassNames } from './utils';

type CommonProps = {
  children?: React.ReactNode;
  /** pass `true` when the content is ready and `false` when it's loading */
  ready: boolean;
  /** delay in millis to wait when passing from ready to NOT ready */
  delay?: number;
  /** if true, the placeholder will never be rendered again once ready becomes true, even if it becomes false again */
  firstLaunchOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

type PlaceholderProps = CommonProps & {
  // we have a default color, so we can set this as optional
  color?: string;
  // we have a default number of rows, so we can set this as optional
  rows?: number;
  showLoadingAnimation?: boolean;
  customPlaceholder?: undefined;
};

type CustomPlaceholderProps = CommonProps & {
  /** pass any renderable content to be used as placeholder instead of the built-in ones */
  customPlaceholder?: React.ReactElement<{ [k: string]: any }> | null;
  type?: undefined;
  rows?: undefined;
  color?: undefined;
  showLoadingAnimation?: boolean;
};

type MediaPlaceholderProps = PlaceholderProps &
  Omit<
    React.ComponentProps<typeof placeholders.media>,
    'color' | 'rows' | 'children'
  > & {
    type: 'media';
  };

type RectPlaceholderProps = PlaceholderProps &
  Omit<React.ComponentProps<typeof placeholders.rect>, 'children'> & {
    type: 'rect';
  };

type RoundPlaceholderProps = PlaceholderProps &
  Omit<
    React.ComponentProps<typeof placeholders.round>,
    'color' | 'children'
  > & {
    type: 'round';
  };

type TextPlaceholderProps = PlaceholderProps &
  Omit<
    React.ComponentProps<typeof placeholders.text>,
    'color' | 'rows' | 'children'
  > & {
    type: 'text';
  };

type TextRowPlaceholderProps = PlaceholderProps &
  Omit<
    React.ComponentProps<typeof placeholders.textRow>,
    'color' | 'children'
  > & {
    type: 'textRow';
  };

export type Props =
  | MediaPlaceholderProps
  | RectPlaceholderProps
  | RoundPlaceholderProps
  | TextRowPlaceholderProps
  | TextPlaceholderProps
  | CustomPlaceholderProps;

const ReactPlaceholder: React.FC<Props> = ({
  delay = 0,
  type = 'text',
  color = '#CDCDCD',
  rows = 3,
  ready: readyProp,
  firstLaunchOnly,
  children,
  className,
  showLoadingAnimation,
  customPlaceholder,
  ...rest
}) => {
  const [ready, setReady] = React.useState(readyProp);
  const timeout = React.useRef<null | number>(null);

  const getFiller = (): React.ReactElement | null => {
    const classes = showLoadingAnimation
      ? joinClassNames('show-loading-animation', className)
      : className;

    if (customPlaceholder && React.isValidElement(customPlaceholder)) {
      const mergedCustomClasses = joinClassNames(
        customPlaceholder.props.className,
        classes
      );
      return React.cloneElement(customPlaceholder, {
        className: mergedCustomClasses
      });
    } else if (customPlaceholder) {
      return customPlaceholder;
    }

    const Placeholder = placeholders[type];

    return (
      <Placeholder {...rest} color={color} rows={rows} className={classes} />
    );
  };

  React.useEffect(() => {
    if (!firstLaunchOnly && ready && !readyProp) {
      if (delay && delay > 0) {
        timeout.current = window.setTimeout(() => {
          setReady(false);
        }, delay);
      } else {
        setReady(false);
      }
    } else if (readyProp) {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
      }

      if (!ready) {
        setReady(true);
      }
    }
  }, [firstLaunchOnly, ready, readyProp, delay]);

  // clear the timeout when the component unmounts
  React.useEffect(
    () => () => {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
      }
    },
    []
  );

  // Casting - workaround for DefinitelyTyped/react issue with
  // FunctionComponents returning ReactElement, where they should be able to
  // return ReactNode. Casting also doesn't introduce another layer in the
  // component tree like another `<>children</>` workaround does.
  //
  // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33006
  // and https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
  return ready ? children as React.ReactElement : getFiller();
};

export default ReactPlaceholder;
