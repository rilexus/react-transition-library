# Translate Transition

![](https://media.giphy.com/media/Mb5XpjsO1IRgJo2IM9/giphy.gif)

```tsx
import { TranslateTransition } from "react-transitions-library";

const TranslateTransition = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div>
      <TranslateTransition
        in={animate}
        delay={1000}
        timeout={700}
        from={['0px', '0px']}
        to={['20px', '20px']}
      >
        TranslateTransition
      </TranslateTransition>
      <button
        onClick={() => setAnimate((p) => !p)}
      >
        Animate
      </button>
    </div>
  );
}
```
