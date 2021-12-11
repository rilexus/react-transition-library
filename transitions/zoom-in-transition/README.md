# Zoom in Transition

![](https://media.giphy.com/media/3XjzDCXrQcsZsBQeHH/giphy.gif)

````tsx
const Example = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <ZoomInTransition timeout={400} from={0} to={1}>
                React Transitions Library
            </ZoomInTransition>
            <button onClick={() => setShow(true)}>in</button>
            <button onClick={() => setShow(false)}>out</button>
        </div> 
    );
}
```
