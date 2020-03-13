import * as React from 'react';
import { shallow } from 'enzyme';
import {
  MediaBlock,
  RectShape,
  RoundShape,
  TextBlock,
  TextRow
} from '../src/placeholders';

describe('placeholder', () => {
  describe('MediaBlock', () => {
    it('renders a MediaBlock', () => {
      const tree = shallow(<MediaBlock rows={2} color="rebeccapurple" />);

      expect(tree.getElements()).toMatchSnapshot();
    });

    it('renders a MediaBlock with custom styles and classNames', () => {
      const tree = shallow(
        <MediaBlock
          rows={2}
          color="rebeccapurple"
          className="test more-classes"
          style={{
            backgroundColor: 'hotpink',
            display: 'block'
          }}
        />
      );

      expect(tree.getElements()).toMatchSnapshot();
    });
  });

  describe('RectShape', () => {
    it('renders a RectShape', () => {
      const tree = shallow(<RectShape />);

      expect(tree.getElements()).toMatchSnapshot();
    });

    it('renders a RectShape with custom styles, classNames, and color', () => {
      const tree = shallow(
        <RectShape
          color="rebeccapurple"
          className="test more-classes"
          style={{
            backgroundColor: 'hotpink',

            height: '50%',
            width: '50%',
            marginRight: 5
          }}
        />
      );

      expect(tree.getElements()).toMatchSnapshot();
    });
  });

  describe('RoundShape', () => {
    it('renders a RoundShape', () => {
      const tree = shallow(<RoundShape color="rebeccapurple" />);

      expect(tree.getElements()).toMatchSnapshot();
    });

    it('renders a RoundShape with custom styles and classNames', () => {
      const tree = shallow(
        <RoundShape
          color="rebeccapurple"
          className="test more-classes"
          style={{
            backgroundColor: 'hotpink',
            height: '50%',
            width: '50%',
            borderRadius: '2px'
          }}
        />
      );

      expect(tree.getElements()).toMatchSnapshot();
    });
  });

  describe('TextBlock', () => {
    it('renders a TextBlock', () => {
      const tree = shallow(<TextBlock rows={2} color="rebeccapurple" />);

      expect(tree.getElements()).toMatchSnapshot();
    });

    it('renders a TextBlock with custom lineSpacing and widths', () => {
      const tree = shallow(
        <TextBlock
          rows={2}
          color="rebeccapurple"
          lineSpacing={1.5}
          widths={[10, 12, 15, 13, 14, 11]}
        />
      );

      expect(tree.getElements()).toMatchSnapshot();
    });

    it('renders a TextBlock with custom styles and classNames', () => {
      const tree = shallow(
        <TextBlock
          rows={2}
          color="rebeccapurple"
          className="test more-classes"
          style={{
            backgroundColor: 'hotpink',
            width: '50%'
          }}
        />
      );

      expect(tree.getElements()).toMatchSnapshot();
    });
  });

  describe('TextRow', () => {
    it('renders a TextRow', () => {
      const tree = shallow(<TextRow color="rebeccapurple" />);

      expect(tree.getElements()).toMatchSnapshot();
    });

    it('renders a TextRow with custom maxHeight and lineSpacing', () => {
      const tree = shallow(
        <TextRow color="rebeccapurple" maxHeight={123} lineSpacing={'5rem'} />
      );

      expect(tree.getElements()).toMatchSnapshot();
    });

    it('renders a TextRow with a lineSpacing of 0', () => {
      const tree = shallow(
        <TextRow color="rebeccapurple" lineSpacing={0} />
      );

      expect(tree.prop('style').marginTop).toBe(0);
      expect(tree.getElements()).toMatchSnapshot();
    });

    it('renders a TextRow with custom styles and classNames, overriding set maxHeight and lineSpacing', () => {
      const tree = shallow(
        <TextRow
          color="rebeccapurple"
          className="test more-classes"
          maxHeight={123}
          lineSpacing={'5rem'}
          style={{
            backgroundColor: 'hotpink',
            height: '5em',
            width: '50%',
            marginTop: 2,
            maxHeight: 50
          }}
        />
      );

      expect(tree.getElements()).toMatchSnapshot();
    });
  });
});
