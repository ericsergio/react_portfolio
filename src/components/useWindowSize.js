import { useState, useEffect } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const breakpoint = 768;
    const isMobile = window.innerWidth < breakpoint ? true : false;

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight,
            });
            
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []); //empty dependency array means this effect runs only once on mount

    return isMobile;
}

export default useWindowSize;