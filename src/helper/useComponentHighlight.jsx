import { useState, useEffect, useRef } from 'react';

export default function useComponentHighlight(initial) {
    const [isComponentHighlighted, setIsComponentHighlighted] = useState(initial);
    const ref = useRef([]);

    const handleMouseOVer = (event) => {
        
    };

    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside, true);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, true);
    //     };
    // });

    return { ref, isComponentHighlighted, setIsComponentHighlighted };
}