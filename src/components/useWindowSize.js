import { useState, useEffect } from 'react';

const breakpoint = 768;

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

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

    const isMobile = window.innerWidth < breakpoint ? true : false;
    const isLandscape = windowSize.width > windowSize.height;

    return {
        isMobile:isMobile,
        isLandscape:isLandscape,
        width:windowSize.width,
        height:windowSize.height,
    };
}

export default useWindowSize;