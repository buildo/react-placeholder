import React from 'react';
import ReactPlaceholder from '../src/ReactPlaceholder';
import { shallow } from 'enzyme';

describe('ReactPlaceholder', () => {

  it('renders the placeholder when the content is not ready', () => {
    const content = <div>Some content still loading...</div>
    const tree = shallow(
      <ReactPlaceholder type='text' rows={2} ready={false}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.getNodes()).toMatchSnapshot();
  });

  it('renders the content when it\'s ready', () => {
    const content = <div>Some ready content</div>
    const tree = shallow(
      <ReactPlaceholder type='text' rows={2} ready={true}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(true);
    expect(tree.getNodes()).toMatchSnapshot();
  });

});