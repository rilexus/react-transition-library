# Scale Transition

```tsx
import { ScaleTransition } from "react-transitions-library";

const ScaleTransition = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div>
      <ScaleTransition
        in={animate}
        delay={1000}
        timeout={700}
        from={1}
        to={1.5}
      >
          ScaleTransition
      </ScaleTransition>
      <button
        onClick={() => setAnimate((p) => !p)}
      >
        Animate
      </button>
    </div>
  );
}
```
