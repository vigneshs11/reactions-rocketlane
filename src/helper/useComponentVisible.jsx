import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        console.log(ref)
        if (ref.current && !ref.current.contains(event.target) && !event.target.id) {
            setIsComponentVisible(false);
        } else if (ref.current && ref.current.contains(event.target) || event.target.id) {
            setIsComponentVisible(true)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}