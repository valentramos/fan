import React, { useEffect, useState } from 'react';

interface ScrollSpyProps {
    sectionIds: string[];
    offset?: number;
}

export const ScrollSpy: React.FC<ScrollSpyProps> = ({ sectionIds, offset = 0 }) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observers = sectionIds.map((id) => {
            const element = document.getElementById(id);
            if (!element) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                        document.body.setAttribute('data-active-section', id);
                    }
                },
                { rootMargin: `${-offset}px 0px 0px 0px` }
            );

            observer.observe(element);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, [sectionIds, offset]);

    return null;
};