import { gsap, ScrollTrigger, SplitText, reducedMotion, scrollToTarget } from './motion';

/*
 * Animaciones declarativas por atributo:
 *   data-split[="lines"|"chars"]  texto que sube línea a línea o letra a letra (data-split-load: al cargar)
 *   data-blur                     palabras que aparecen desenfocadas
 *   data-scrub                    palabras que se iluminan con el scroll
 *   data-reveal                   bloque que sube con fade
 *   data-reveal-stagger           igual, pero con cada hijo escalonado
 *   data-counter="12"             número que cuenta hasta el valor (data-suffix opcional)
 *   data-parallax="0.15"          desplazamiento vertical con el scroll
 */

const onScroll = (trigger: Element, start = 'top 85%') => ({ trigger, start, once: true });

function splitText() {
	document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
		const byChars = el.dataset.split === 'chars';
		const onLoad = el.hasAttribute('data-split-load');

		SplitText.create(el, {
			type: byChars ? 'lines,chars' : 'lines',
			mask: 'lines',
			autoSplit: true,
			onSplit(self) {
				gsap.set(el, { visibility: 'visible' });
				// Con interlineado apretado la máscara recorta tildes (Ñ, É, Ó): se amplía sin mover el texto
				gsap.set(self.masks, { paddingTop: '0.18em', marginTop: '-0.18em', paddingBottom: '0.06em', marginBottom: '-0.06em' });
				return gsap.from(byChars ? self.chars : self.lines, {
					yPercent: 125,
					duration: byChars ? 1.1 : 1,
					stagger: byChars ? 0.035 : 0.09,
					ease: 'expo.out',
					delay: onLoad ? 0.2 : 0,
					scrollTrigger: onLoad ? undefined : onScroll(el)
				});
			}
		});
	});
}

function blurText() {
	document.querySelectorAll<HTMLElement>('[data-blur]').forEach((el) => {
		SplitText.create(el, {
			type: 'words',
			autoSplit: true,
			onSplit(self) {
				gsap.set(el, { visibility: 'visible' });
				return gsap.from(self.words, {
					opacity: 0,
					filter: 'blur(12px)',
					y: 8,
					duration: 0.9,
					stagger: 0.025,
					ease: 'power2.out',
					delay: el.hasAttribute('data-blur-load') ? 0.6 : 0,
					scrollTrigger: el.hasAttribute('data-blur-load') ? undefined : onScroll(el)
				});
			}
		});
	});
}

function scrubText() {
	document.querySelectorAll<HTMLElement>('[data-scrub]').forEach((el) => {
		SplitText.create(el, {
			type: 'words',
			autoSplit: true,
			onSplit(self) {
				return gsap.fromTo(
					self.words,
					{ opacity: 0.15 },
					{
						opacity: 1,
						stagger: 0.1,
						ease: 'none',
						scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true }
					}
				);
			}
		});
	});
}

function reveal() {
	document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
		gsap.fromTo(
			el,
			{ autoAlpha: 0, y: 40 },
			{ autoAlpha: 1, y: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: onScroll(el) }
		);
	});

	document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((el) => {
		gsap.fromTo(
			el.children,
			{ autoAlpha: 0, y: 40 },
			{ autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out', scrollTrigger: onScroll(el) }
		);
	});
}

function counters() {
	document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
		const value = Number(el.dataset.counter);
		const suffix = el.dataset.suffix ?? '';
		const state = { n: 0 };
		gsap.to(state, {
			n: value,
			duration: 1.8,
			ease: 'power3.out',
			scrollTrigger: onScroll(el, 'top 90%'),
			onUpdate: () => (el.textContent = `${Math.round(state.n)}${suffix}`)
		});
	});
}

function parallax() {
	document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
		const amount = Number(el.dataset.parallax) || 0.15;
		gsap.fromTo(
			el,
			{ yPercent: -amount * 100 },
			{
				yPercent: amount * 100,
				ease: 'none',
				scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true }
			}
		);
	});
}

function anchorLinks() {
	document.addEventListener('click', (event) => {
		const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
		const hash = link?.getAttribute('href');
		if (!link || !hash || hash === '#') return;
		const target = document.querySelector<HTMLElement>(hash);
		if (!target) return;
		event.preventDefault();
		scrollToTarget(target);
		history.replaceState(null, '', hash);
	});
}

anchorLinks();

if (!reducedMotion) {
	// Esperamos a las fuentes para que SplitText mida las líneas con la tipografía final
	document.fonts.ready.then(() => {
		splitText();
		blurText();
		scrubText();
		reveal();
		counters();
		parallax();
		ScrollTrigger.refresh();
	});
}
