import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import styles from './Reveal.module.scss';

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

/**
 * Fades its content in when it scrolls into view.
 * Content is visible by default (server render, no JS, reduced motion); it is only hidden
 * after mount when it starts out below the fold.
 */
const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<'idle' | 'hidden' | 'shown'>('idle');

    useEffect(() => {
        const element = ref.current;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!element || reducedMotion || !('IntersectionObserver' in window)) {
            return;
        }

        let isFirst = true;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setState(isFirst ? 'idle' : 'shown');
                observer.disconnect();
            } else if (isFirst) {
                setState('hidden');
            }
            isFirst = false;
        }, { rootMargin: '0px 0px -8% 0px' });

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={classNames(styles.reveal, styles[state], className)}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}

export default Reveal;
