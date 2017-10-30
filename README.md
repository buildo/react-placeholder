# React Placeholder
A React component to easily replicate your page with nice placeholders while the content is loading.
You can use a placeholder from the default set, or pass your own!

![image](https://cloud.githubusercontent.com/assets/691940/24140211/78406120-0e1f-11e7-9738-af2b2434c50e.png)

```jsx
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

React.renderComponent(
  <div>
    <ReactPlaceholder type='media' rows={7} ready={this.state.ready}>
      <MyComponent />
    </ReactPlaceholder>
  </div>,
  document.body);
```



[**Live Demo**](https://rawgit.com/buildo/react-placeholder/master/examples/build/index.html)

you can find more examples [here](https://github.com/buildo/react-placeholder/tree/master/examples)

### Install
```
npm install --save react-placeholder
```

### Props

```jsx
children:             PropTypes.oneOfType([
                         PropTypes.node,
                         PropTypes.element
                      ]).isRequired,
ready:                PropTypes.bool.isRequired,
delay:                PropTypes.number,
firstLaunchOnly:      PropTypes.bool,
showLoadingAnimation: PropTypes.bool,
type:                 PropTypes.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
rows:                 PropTypes.number,
color:                PropTypes.string,
customPlaceholder:    PropTypes.oneOfType([
                         PropTypes.node,
                         PropTypes.element
                      ]),
holdPlaceholder:      PropTypes.number,
```

### Customization
If the built-in set of placeholders is not enough, you can pass you own through the prop **"customPlaceholder"**

```jsx
<ReactPlaceholder ready={this.state.ready} customPlaceholder={<MyCustomPlaceholder />}>
  <MyComponent />
</ReactPlaceholder>
```

You can also import the built-in placeholders directly. This might be useful to use them to create your own customized placeholder:

```jsx
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

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

### Delay
You can pass an optional `delay` prop which specifies the time (in milliseconds) `react-placeholder` should wait before displaying the placeholder element. This is useful if you want to show a placeholder for slower connections while avoiding a brief "flash" on faster connections.

Note that this delay will __not__ affect the initial render, only subsequent "ready" state changes. Setting the `firsLaunchOnly` prop to `true` will also disable this feature.

### Hold Placeholder
You can pass an optional `holdPlaceholder` prop which specifies the time (in milliseconds) `react-placeholder` should keep displaying the placeholder before displaying the content element even if the `ready` prop is `true`. This is useful if you want to keep displaying the placeholder for slower connections while avoiding a brief "flash" on faster connections.

### Animation
`react-placeholder` already comes with one default pulse animation to better tell the user that the page is loading.
The animation is defined in a separate CSS file so, in order to enable it, you should import that style in your project like this:

```js
import 'react-placeholder/lib/reactPlaceholder.css';
```

Once you've done this, you can simply pass the boolean prop `showLoadingAnimation` to tell `ReactPlaceholder` to animate itself:

```jsx
import 'react-placeholder/lib/reactPlaceholder.css';

<ReactPlaceholder showLoadingAnimation ready={this.state.ready} type="media" rows={5}>
  <p>This is a Test.</p>
</ReactPlaceholder>
```

### Style
you can style the placeholder by passing **```className```** or **```style```** or by using the built-in classes:

*"text-block", "media-block", "text-row", "rect-shape", "round-shape".*
