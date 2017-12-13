import React from 'react';
import {
  TextRow,
  RoundShape,
  RectShape,
  TextBlock,
  MediaBlock
} from '../src/placeholders';

import '../src/reactPlaceholder.scss';
import '../examples/examples.scss';

global.CustomPlaceholder = () => (
  <div style={{ color: 'blue', backgroundColor: 'yellow' }}>
    I'm a custom placeholder!
  </div>
);

global.RealComponent = () => (
  <div style={{ padding: 10, backgroundColor: '#F0F0F0', color: 'red' }}>
    I'm the real component!
  </div>
);

global.TextRow = TextRow;
global.RoundShape = RoundShape;
global.RectShape = RectShape;
global.TextBlock = TextBlock;
global.MediaBlock = MediaBlock;
