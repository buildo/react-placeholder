import { Component } from 'react';
  
export { TextRow as textRow };
export { RectShape as rect };
export { RoundShape as round };
export { TextBlock as text };
export { MediaBlock as media };
  
interface RectShapeProps {
  color?: string,
  className?: string,
  style?: {}
}
export declare class RectShape extends Component<RectShapeProps, void> { }

interface RoundShapeProps {
  color?: string,
  className?: string,
  style?: {}
}
export declare class RoundShape extends Component<RoundShapeProps, void> { }

interface MediaBlockProps {
  rows: number,
  color: string,
  style?: {},
  className?: string
}
export declare class MediaBlock extends Component<MediaBlockProps, void> { }

interface TextBlockProps {
  rows: number,
  color: string,
  style?: {},
  className?: string,
  lineSpacing?: string | number
}
export declare class TextBlock extends Component<TextBlockProps, void> { }

interface TextRowProps {
  invisible?: boolean,
  className?: string,
  color?: string,
  style?: {},
  lineSpacing?: string | number
}
export declare class TextRow extends Component<TextRowProps, void> { }
