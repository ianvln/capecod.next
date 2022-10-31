import { useEffect, useRef, useState } from "react"

const useSticky = () => {
    const stickyRef = useRef<HTMLElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [stickyOffset, setStickyOffset] = useState(0);

    useEffect(() => {
        if (!stickyRef.current) {
            return;
        }

        setStickyOffset(stickyRef.current.offsetTop);
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!stickyRef.current) {
                return;
            }

            const shouldBeSticky = window.scrollY > stickyOffset;
            setIsSticky(shouldBeSticky);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => { window. removeEventListener('scroll', handleScroll)};
    }, [stickyRef, setIsSticky, stickyOffset])

    return { stickyRef, isSticky }
}

export default useSticky;