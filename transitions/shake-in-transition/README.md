# ShakeInTransition

```tsx
import { ShakeInTransition } from "react-transitions-library";

const ShakeInTransition = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div>
      <ShakeInTransition 
        in={animate}
        delay={1000}
        timeout={700}
        from={"0px"}
        to={"2rem"}
      >
        ShakeInTransition
      </ShakeInTransition>
      <button
        onClick={() => setAnimate((p) => !p)}
      >
        Animate
      </button>
    </div>
  );
}
```
