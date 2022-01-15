# Custom Transition

```tsx
import {useMemo} from "react";
import {Ease} from "./Ease.enum";

/**
 * Custom Opacity Transition 
 */
const CustomTransitionExample =
    forwardRef((
        {
            timeout, 
            from, 
            to, 
            ease = Ease.ease, 
            delay = 0, 
            ...props
        }, 
        outsideRef
    ) => {
        const defaultStyle = useMemo(() => ({
            // define the transition as in CSS
            transition: `opacity ${timeout}ms ${ease} ${delay}ms`
        }), [timeout, ease, delay]);
    
        const transitionStyle = useMemo(() => ({
            entering: {
                // add any CSSProperties
                opacity: to,
            },
            entered: {
                opacity: to,
            },
            exiting: {
                opacity: from,
            },
            exited: {
                opacity: from,
            },
        }), [to, from]);
        
        return (
            <Transition
                {...props}
                as={'div'} // is optional
                ref={outsideRef}
                timeout={timeout}
                defaultStyle={defaultStyle}
                transitionStyle={transitionStyle}
            />
        )
})
```