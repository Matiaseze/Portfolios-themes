import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll suave sincronizado con el ticker de GSAP para que ScrollTrigger lea la misma posición
export const lenis = reducedMotion ? null : new Lenis({ lerp: 0.1 });

if (lenis) {
	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((time) => lenis.raf(time * 1000));
	gsap.ticker.lagSmoothing(0);
}

export function scrollToTarget(target: string | HTMLElement) {
	if (lenis) {
		lenis.scrollTo(target, { offset: -72, duration: 1.4 });
	} else {
		const el = typeof target === 'string' ? document.querySelector(target) : target;
		el?.scrollIntoView();
	}
}

export { gsap, ScrollTrigger, SplitText };
