# Fadein Transition

![](https://media.giphy.com/media/wH7NVwMuB8nTNGSxGs/giphy.gif)

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
