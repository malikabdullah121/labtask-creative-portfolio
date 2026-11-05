// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Section Entrance Animation
gsap.from(".avatar-wrapper", {
    duration: 1.2,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)"
});

gsap.from(".hero-container > *:not(.avatar-wrapper)", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.3,
    ease: "power3.out"
});

// 2. Desktop Section Scrollytelling Animation
gsap.from(".desktop-section .section-info", {
    scrollTrigger: {
        trigger: ".desktop-section",
        start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".browser-mockup", {
    scrollTrigger: {
        trigger: ".desktop-section",
        start: "top 65%",
        end: "bottom 80%",
        scrub: 1
    },
    scale: 0.85,
    opacity: 0.3,
    rotateX: 10,
    transformOrigin: "center top",
    ease: "power2.out"
});

// 3. Mobile Section Scrollytelling Animation
gsap.from(".mobile-section .section-info", {
    scrollTrigger: {
        trigger: ".mobile-section",
        start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".phone-mockup", {
    scrollTrigger: {
        trigger: ".mobile-section",
        start: "top 70%",
        end: "bottom 80%",
        scrub: 1.2
    },
    y: 100,
    scale: 0.85,
    rotate: -5,
    ease: "power2.out"
});

// 4. Contact Section Entrance
gsap.from(".contact-card", {
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});