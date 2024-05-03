// hooks/useScrollTrigger.js

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollTrigger = (triggerRef, animation) => {
    useEffect(() => {
        const triggerElement = triggerRef.current;

        if (triggerElement) {
            ScrollTrigger.create({
                trigger: triggerElement,
                start: 'top center',
                end: 'bottom center',
                animation: animation,
                scrub: true,
                // markers: true,
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [triggerRef, animation]);
};
