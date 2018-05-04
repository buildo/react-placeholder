import * as React from 'react';
import {
  TextRow,
  RoundShape,
  RectShape,
  TextBlock,
  MediaBlock
} from '../src/placeholders';

import '../src/reactPlaceholder.scss';
import '../examples/examples.scss';

(global as any).CustomPlaceholder = () => (
  <div style={{ color: 'blue', backgroundColor: 'yellow' }}>
    I'm a custom placeholder!
  </div>
);

(global as any).RealComponent = () => (
  <div style={{ padding: 10, backgroundColor: '#F0F0F0', color: 'red' }}>
    I'm the real component!
  </div>
);

(global as any).TextRow = TextRow;
(global as any).RoundShape = RoundShape;
(global as any).RectShape = RectShape;
(global as any).TextBlock = TextBlock;
(global as any).MediaBlock = MediaBlock;
