import { useState, useEffect } from "react";

const useIntersection = (element) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin: "-50% 0px", treshold: 0 }
        );

        element.current && observer.observe(element.current);
    }, []);

    return isVisible;
};
export { useIntersection }