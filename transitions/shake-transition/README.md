# Shake Transition Example

![](https://media.giphy.com/media/aoKsF122rsH2wWjsCx/giphy.gif)

```tsx
import { ShakeTransition } from "react-transitions-library";

const ShakeTransitionExample = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div>
      <ShakeTransition 
        in={animate} 
        delay={1000}
        timeout={700}
        from={"0px"}
        to={"2rem"}
      >
        ShakeTransition
      </ShakeTransition>
      <button
        onClick={() => setAnimate((p) => !p)}
      >
        Animate
      </button>
    </div>
  );
}
```
Internally the "ShakeTransition" is a combination of the "ShakeInTransition" and the "ShakeOutTransition":
```tsx
import { ShakeInTransition, ShakeOutTransition } from "react-transitions-library";

const ShakeTransition = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <ShakeInTransition
      // shake when animate === true
      in={animate}
      from={from}
      to={to}
      timeout={timeout}
    >
      <ShakeOutTransition
        // shake when animate === false
        in={animate}
        to={to}
        from={from}
        timeout={timeout}
      >
        {children}
      </ShakeOutTransition>
    </ShakeInTransition>
  )
};
```
