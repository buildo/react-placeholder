import { ComponentClass } from 'react';
  
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
export declare const RectShape: ComponentClass<RectShapeProps>;

interface RoundShapeProps {
  color?: string,
  className?: string,
  style?: {}
}
export declare const RoundShape: ComponentClass<RoundShapeProps>;

interface MediaBlockProps {
  rows: number,
  color: string,
  style?: {},
  className?: string
}
export declare const MediaBlock: ComponentClass<MediaBlockProps>;

interface TextBlockProps {
  rows: number,
  color: string,
  style?: {},
  className?: string,
  lineSpacing?: string | number
}
export declare const TextBlock: ComponentClass<TextBlockProps>;

interface TextRowProps {
  invisible?: boolean,
  className?: string,
  color?: string,
  style?: {},
  lineSpacing?: string | number
}
export declare const TextRow: ComponentClass<TextRowProps>;
