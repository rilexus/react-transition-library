# Blur Transition

![](https://media.giphy.com/media/514Nar03RkC72rBDH8/giphy.gif)


```tsx
import { BlurTransition } from "react-transitions-library";

const BlurTransitionExample = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div>
      <BlurTransition 
        in={animate}
        timeout={700}
        from={"0px"}
        to={"10px"}
      >
        BlurTransition
      </BlurTransition>
      <button
        onClick={() => setAnimate((p) => !p)}
      >
        Animate
      </button>
    </div>
  );
}
```