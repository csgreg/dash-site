// Small helpers for the page's motion (the styles are in app.css).

/** Adds `in` the first time the element scrolls into view, so it rises into place (`data-reveal` in app.css). */
export function reveal(node: HTMLElement) {
	node.dataset.reveal ??= '';
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('in');
					observer.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -12% 0px' }
	);
	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}

/** Calls `onCenter` whenever the element crosses the middle of the screen (the feature story's steps). */
export function atCenter(node: HTMLElement, onCenter: () => void) {
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((entry) => entry.isIntersecting)) onCenter();
		},
		{ rootMargin: '-50% 0px -50% 0px' }
	);
	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}

/** Tells `onChange` whether the element is on screen at all (the feature story plays only while it is). */
export function whileInView(node: HTMLElement, onChange: (visible: boolean) => void) {
	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) onChange(entry.isIntersecting);
	});
	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}
