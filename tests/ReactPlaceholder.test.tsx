import * as React from 'react';
import ReactPlaceholder from '../src/ReactPlaceholder';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.useFakeTimers();

describe('ReactPlaceholder', () => {

  it('renders the placeholder when the content is not ready', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder type='text' rows={2} ready={false}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the placeholder only after the specified delay', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder
        ready
        type='text'
        rows={2}
        delay={10000}
      >
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(true);
    tree.setProps({ ready: false });
    tree.update();
    expect(tree.contains(content)).toBe(true);
    jest.runAllTimers();
    tree.update();
    expect(tree.contains(content)).toBe(false);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the content when it\'s ready', () => {
    const content = <div>Some ready content</div>;
    const tree = shallow(
      <ReactPlaceholder type='text' rows={2} ready>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(true);
    expect(tree.getElements()).toMatchSnapshot();
  });

});
