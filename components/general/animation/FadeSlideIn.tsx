import { RefObject, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import useIntersectionObserver from "../../../effects/general/useIntersectionObserver";


const FadeSlideIn = (props: { offsetDelayIndex?: number, parentRef: RefObject<HTMLElement>, className: string, children: any }) => {
    const entry = useIntersectionObserver(props.parentRef, {});
    const isVisible = !!entry?.isIntersecting;

    const [shouldAnimate, setShouldAnimate] = useState(false);

    const animationProps = useSpring({ 
        delay: props.offsetDelayIndex ? 500 + props.offsetDelayIndex * 250 : 500, 
        from: { opacity: 0, y: 100 }, 
        to: { opacity: shouldAnimate ? 1 : 0, y: shouldAnimate ? 0 : 100 }
    });

    useEffect(() => {
        if (shouldAnimate) { 
            return;
        }

        if (isVisible) {
            setShouldAnimate(true);
        }
    }, [isVisible]);

    return (
        <animated.div style={animationProps} className={props.className}>
            {props.children}
        </animated.div>
    )
}

export default FadeSlideIn;