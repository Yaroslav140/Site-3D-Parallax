window.addEventListener('scroll', e=>{
	document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlagin(ScrollTrigger, ScrollSmother)
ScrollSmother.create({
	wrapper: '.wrapper',
	content: '.content'
})