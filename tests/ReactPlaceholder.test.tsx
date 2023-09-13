import * as React from 'react';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import ReactPlaceholder from '../src/ReactPlaceholder';
import { shallow } from 'enzyme';
import { act, render } from '@testing-library/react';
import { JSDOM } from "jsdom"
import '@testing-library/jest-dom';
const flatten = require('lodash.flatten');

const dom = new JSDOM()
global.document = dom.window.document
// @ts-ignore
global.window = dom.window

jest.useFakeTimers();

describe('ReactPlaceholder', () => {
  it('renders the text placeholder with 3 rows as the default placeholder', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder ready={false}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the text placeholder when the content is not ready', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder type="text" rows={2} ready={false}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the text placeholder with the lineSpacing set', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder type="text" rows={2} ready={false} lineSpacing={3}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.find('TextBlock').prop('lineSpacing')).toBe(3);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the media placeholder when the content is not ready', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder type="media" rows={2} ready={false}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the textRow placeholder when the content is not ready', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder type="textRow" ready={false}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the rect placeholder when the content is not ready', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder type="rect" ready={false}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the round placeholder when the content is not ready', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder type="round" ready={false}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the round placeholder with animation when the content is not ready', () => {
    const content = <div>Some content still loading...</div>;
    const tree = shallow(
      <ReactPlaceholder type="round" ready={false} showLoadingAnimation>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders a custom placeholder when the content is not ready', () => {
    const content = <div>Some ready content</div>;
    const customPlaceholder = <div>Custom Placeholder</div>;
    const tree = shallow(
      <ReactPlaceholder ready={false} customPlaceholder={customPlaceholder}>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(false);
    // an empty className is injected to the customer placeholder element,
    // so we'll check the children for now
    expect(tree.text()).toBe(customPlaceholder.props.children);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it('renders the placeholder only after the specified delay', () => {
    const content = <div>Some content still loading...</div>;
    const { container, queryByText, rerender } = render(
      <ReactPlaceholder ready type="text" rows={2} delay={10000}>
        {content}
      </ReactPlaceholder>
    );
    expect(queryByText('Some content still loading...')).toBeInTheDocument();
    rerender(<ReactPlaceholder ready={false} type="text" rows={2} delay={10000}>
      {content}
    </ReactPlaceholder>);
    expect(queryByText('Some content still loading...')).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    expect(queryByText('Some content still loading...')).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the content when it's ready", () => {
    const content = <div>Some ready content</div>;
    const tree = shallow(
      <ReactPlaceholder type="text" rows={2} ready>
        {content}
      </ReactPlaceholder>
    );
    expect(tree.contains(content)).toBe(true);
    expect(tree.getElements()).toMatchSnapshot();
  });

  it("renders content when it's ready, then a placeholder when it's not ready, and finally content again when it's ready", () => {
    const content = <div>Some ready content</div>;
    const { queryByText, container, rerender } = render(
      <ReactPlaceholder type="text" rows={2} ready={true}>
        {content}
      </ReactPlaceholder>
    );
    expect(queryByText('Some ready content')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();

    rerender(<ReactPlaceholder type="text" rows={2} ready={false}>
      {content}
    </ReactPlaceholder>);

    expect(queryByText('Some ready content')).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();

    rerender(<ReactPlaceholder type="text" rows={2} ready={true}>
      {content}
    </ReactPlaceholder>);

    expect(queryByText('Some ready content')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders content when firstLaunchOnly is true and ready changes to true, and keeps it rendered when ready changes to false', () => {
    const content = <div>Some ready content</div>;
    const { queryByText, container, rerender } = render(
      <ReactPlaceholder type="rect" ready={false} firstLaunchOnly={true}>
        {content}
      </ReactPlaceholder>
    );
    expect(queryByText('Some ready content')).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();

    rerender(<ReactPlaceholder  type="rect" ready={true} firstLaunchOnly={true}>
      {content}
    </ReactPlaceholder>);

    expect(queryByText('Some ready content')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();

    rerender(<ReactPlaceholder  type="rect" ready={false} firstLaunchOnly={true}>
      {content}
    </ReactPlaceholder>);

    // content is still rendered
    expect(queryByText('Some ready content')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('build', () => {
  it('build script generates every needed file', () => {
    execSync('npm run build', { stdio: [] });

    const libPath = path.resolve(__dirname, '../lib');

    const libFiles = fs.readdirSync(libPath);

    const files = flatten(
      libFiles.map(fileInRoot => {
        const filePath = path.resolve(libPath, fileInRoot);
        if (fs.lstatSync(filePath).isDirectory()) {
          return fs
            .readdirSync(filePath)
            .map(fileInFolder => `${fileInRoot}/${fileInFolder}`);
        }
        return fileInRoot;
      })
    );

    expect(files).toMatchSnapshot();
  });
});
