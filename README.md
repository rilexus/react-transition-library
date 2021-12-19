# React-Transitions-Library

## Docs
[Homepage](https://rilexus.github.io/react-transition-library/)

## Available Transition
* [FadeInTransition](transitions/fade-in-transition/README.md)
* [ZoomInTransition](transitions/zoom-in-transition/README.md)

## Examples
### Single Transition
```tsx
const Example = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <FadeInTransition timeout={400} from={0} to={1}>
                React Transitions Library
            </FadeInTransition>
            <button onClick={() => setShow(true)}>in</button>
            <button onClick={() => setShow(false)}>out</button>
        </div> 
    );
}
```

### Combined Transition
```tsx
const Example = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
          <FadeInTransition in={show} timeout={400} from={0} to={1}>
            <ZoomInTransition in={show} from={0.8} to={1} timeout={400}>
              <h1>React Transitions Library</h1>
            </ZoomInTransition>
          </FadeInTransition>
          <button onClick={() => setShow(true)}>in</button>
          <button onClick={() => setShow(false)}>out</button>
        </div> 
    );
}
```

### Transition Group
Transition on mount and on unmount.
```tsx
const FadeInZoomInTransition = ({ children, ...props }) => (
	<FadeInTransition {...props} timeout={400} from={0} to={1}>
          <ZoomInTransition {...props} from={0.8} to={1} timeout={400}>
            {children}
          </ZoomInTransition>
	</FadeInTransition>
);

const Example = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
          <TransitionGroup>
            {show ? (
            	<FadeInZoomInTransition key={"FadeInZoomInTransition"}>
                  <h1>React Transitions Library</h1>
            	</FadeInZoomInTransition>
            ) : null}
          </TransitionGroup>
          <button onClick={() => setShow(true)}>in</button>
          <button onClick={() => setShow(false)}>out</button>
        </div> 
    );
}
```
