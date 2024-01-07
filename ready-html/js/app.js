// slides
document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i + 1}`] = new Swiper(n, {
		freeMode: true,
		// centeredSlides: true,
		loop: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 'auto',
		slidesOffsetBefore: -125,
	})
})
bindSwipers(slider1, slider2, slider3, slider4)

// Loader
const load = document.querySelector('.load')
window.addEventListener('load', () => {
	load.classList.add('active')
}, setTimeout(15000));