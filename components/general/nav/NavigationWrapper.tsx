import { useEffect, useState } from "react";
import MobileNavigationBar from "./MobileNavigationBar";
import NavigationBar from "./NavigationBar";

const NavigationWrapper = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = () => width <= 768;

    return (
        
        <>
            { !isMobile() && <NavigationBar />}
            { isMobile() && <MobileNavigationBar />}
        </>
    )
}

export default NavigationWrapper;