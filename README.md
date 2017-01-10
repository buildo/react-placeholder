# React Placeholder
A React component to easily show a placeholder while loading. You can use one of the default set, or pass your own!

```jsx
import ReactPlaceholder from 'react-placeholder';

React.renderComponent(
  <div>
    <ReactPlaceholder type='text' rows={6} ready={this.state.ready}>
      <MyComponent />
    </ReactPlaceholder>
  </div>,
  document.body);
```
[**Live Demo**](https://rawgit.com/buildo/react-placeholder/master/examples/index.html)

you can find more examples [here](https://github.com/buildo/react-placeholder/tree/master/examples)

###Install
```
npm install --save react-placeholder
```

###Props

```jsx
children:          React.PropTypes.oneOfType([
                      React.PropTypes.node,
                      React.PropTypes.element
                   ]).isRequired,
ready:             React.PropTypes.bool.isRequired,
firstLaunchOnly:   React.PropTypes.bool,
type:              React.PropTypes.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
rows:              React.PropTypes.number,
color:             React.PropTypes.string,
customPlaceholder: React.PropTypes.oneOfType([
                      React.PropTypes.node,
                      React.PropTypes.element
                   ])
```

###Customization
If the built-in set of placeholders is not enough, you can pass you own through the prop **"customPlaceholder"**

```jsx
<ReactPlaceholder ready={this.state.ready} customPlaceholder={<MyCustomPlaceholder />}>
  <MyComponent />
</ReactPlaceholder>
```

You can also import the built-in placeholders directly. This might be useful to use them to create your own customized placeholder:

```jsx
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/placeholders';

const awesomePlaceholder (
  <div className='my-awesome-placeholder'>
    <RectShape color='blue' style={{width: 30, height: 80}}/>
    <TextBlock rows={7} color='yellow'/>
  </div>
);

<ReactPlaceholder ready={this.state.ready} customPlaceholder={awesomePlaceholder}>
  <MyComponent />
</ReactPlaceholder>
```

###Style
you can style the placeholder by passing **```className```** or **```style```** or by using the built-in classes:

*"text-block", "media-block", "text-row", "rect-shape", "round-shape".*

