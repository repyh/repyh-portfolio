import { useEffect, useState } from "react";

interface UseIntersectionOptions {
    rootMargin?: string;
}

interface UseIntersectionReturn {
    isVisible: boolean;
}

export const useIntersection = (
    element: React.RefObject<HTMLDivElement | null>,
    rootMargin: UseIntersectionOptions['rootMargin']
): UseIntersectionReturn['isVisible'] => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const current = element?.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            },
            { rootMargin }
        );
        current && observer?.observe(current);

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [element, rootMargin]);

    return isVisible;
};