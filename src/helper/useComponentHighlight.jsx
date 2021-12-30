import { useState, useEffect, useRef } from 'react';

export default function useComponentHighlight(initial) {
    const [isComponentHighlighted, setIsComponentHighlighted] = useState(initial);
    const ref = useRef([]);

    return { ref, isComponentHighlighted, setIsComponentHighlighted };
}