// GSAP Animation

gsap.registerPlugin();

// Header Animation
gsap.from('.logo', {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: 'power2.inOut'
});

gsap.from('.branding', {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: 'power2.inOut',
  delay: 0.5
});

gsap.from('.nav-item', {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: 'power2.inOut',
  stagger: 0.2 // Adjusted stagger for smoother effect
});

// Hero Section Animation
gsap.from('.hero', {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: 'power2.inOut',
  delay: 0.4 // Added delay for sequence effect
});

gsap.from('.hero-left', {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: 'power2.inOut',
  delay: 0.4 // Added delay for sequence effect
});

gsap.from('.hero-right', {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: 'power2.inOut',
  delay: 0.4 // Added delay to match left side
});

// Content Section Animation
gsap.from('.content-section', {
  duration: 1,
  y: 50, // Changed from x to y for a smooth vertical slide
  opacity: 0,
  ease: 'power2.inOut',
  delay: 0.4
});

// Left Column Animation
gsap.from('.col-left', {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: 'power2.inOut',
  delay: 0.4 // Added delay to sync with other elements
});

// Right Column Animation
gsap.from('.col-right', {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: 'power2.inOut',
  delay: 0.4 // Adjusted delay to create a staggered effect
});

// Footer Animation (if you have one)
gsap.from('.footer', {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: 'power2.inOut',
  delay: 0.3 // Ensure it animates last
});
