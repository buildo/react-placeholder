## Examples

### ReactPlaceholder comes with various built-in types

`type='text'`
```js
<ReactPlaceholder type='text' ready={false} rows={6} color='#E0E0E0'>
  <RealComponent />
</ReactPlaceholder>
```

`type='media'`
```js
<ReactPlaceholder type='media' ready={false} rows={4}>
  <RealComponent />
</ReactPlaceholder>
```

`type='textRow'`
```js
<ReactPlaceholder type='textRow' ready={false} color='#E0E0E0'>
  <RealComponent />
</ReactPlaceholder>
```

`type='rect'`
```js
<ReactPlaceholder type='rect' ready={false} color='#E0E0E0' style={{ width: 50, height: 50 }}>
  <RealComponent />
</ReactPlaceholder>
```

`type='round'`
```js
<ReactPlaceholder type='round' ready={false} color='#E0E0E0' style={{ width: 50, height: 50 }}>
  <RealComponent />
</ReactPlaceholder>
```

### Use a custom placeholder
You can use your own custom placeholder:

```js
<ReactPlaceholder customPlaceholder={<CustomPlaceholder />} ready={false}>
  <RealComponent />
</ReactPlaceholder>
```

### Animation
Pass `showLoadingAnimation={true}` to enable the default loading animation:

```js
<ReactPlaceholder showLoadingAnimation={true} type='media' ready={false} rows={4}>
  <RealComponent />
</ReactPlaceholder>
```

### firstLaunchOnly
With `firstLaunchOnly={true}` the placeholder will be rendered only the first time `ready` is `false`

```js
initialState = { ready: false }
const [state, setState] = React.useState(initialState)

function toggleReady() {
  setState({ ready: !state.ready })
}

<div>
  <button onClick={toggleReady}>toggle "ready" state (ready is "{String(state.ready)}")</button>

  <ReactPlaceholder firstLaunchOnly={true} ready={state.ready} rows={4} color='#E0E0E0'>
    <RealComponent />
  </ReactPlaceholder>
</div>
```

### delay
You can delay the switch from "real component" to the placeholder with the prop `delay`

```js
initialState = { ready: true }
const [state, setState] = React.useState(initialState)

function toggleReady() {
  setState({ ready: !state.ready })
}

<div>
  <button onClick={toggleReady}>toggle "ready" state (ready is "{String(state.ready)}")</button>

  <ReactPlaceholder delay={1000} ready={state.ready} rows={4} color='#E0E0E0'>
    <RealComponent />
  </ReactPlaceholder>
</div>
```

### Use the built-in placeholders directly

TextBlock
```js
<TextBlock color='#E0E0E0' rows={4} />
```

MediaBlock
```js
<MediaBlock color='#E0E0E0' rows={4} />
```

TextRow
```js
<TextRow color='#E0E0E0' />
```

RectShape
```js
<RectShape color='#E0E0E0' style={{ width: 50, height: 50 }} />
```

RoundShape
```js
<RoundShape color='#E0E0E0' style={{ width: 50, height: 50 }} />
```
