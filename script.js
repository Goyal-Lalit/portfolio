// locomovie code
// gsap.registerPlugin(ScrollTrigger);
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".scrollbar"),
//   smooth: true
// });

// ScrollTrigger.scrollerProxy(".scrollbar", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },

//   pinType: document.querySelector(".scrollbar").style.transform ? "transform" : "fixed"
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();


//cursor
// document.addEventListener("mousemove", (lele) => {
//     gsap.to(".cursor",{
//         left:lele.x,
//         top:lele.y
//     })
// })


// document.querySelectorAll(".child").forEach( (elem) => {
//     elem.addEventListener("mouseenter", () =>{
//         gsap.to(".cursor",{
//             transform: 'translate(-50%,-50%) scale(1)'
//         })
//     })
// })


// document.querySelectorAll(".child").forEach( (elem) => {
//     elem.addEventListener("mouseleave", () =>{
//         gsap.to(".cursor",{
//             transform: 'translate(-50%,-50%) scale(0)'
//         })
//     })
// })



//animationss ):
var tl = gsap.timeline()

// Loader Animation
tl.from(".loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

tl.to(".loader h3", {
    opacity: 0,
    x: -40,
    stagger: 0.1
})

tl.to(".loader", {
    opacity: 0
})

// Intro Info Animation
tl.from(".info h1", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    delay: -0.5
})

tl.from('#paregraf', {
    y: 200,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    delay: -0.5
})

tl.to(".loader", {
    display: "none"
})

tl.from(".info h3", {
    y: -200,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    delay: -0.5
})

tl.from(".info a", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    delay: -0.5
})

// Project Items Animation
tl.from("#item1", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    delay: 1
})

tl.from("#item2", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    delay: 1
})

tl.from("#item3", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    delay: 1
})

/* -------------------------------------------
   ✨ Contact Section Animations (Newly Added)
-------------------------------------------- */
tl.from(".contact", {
    opacity: 0,
    duration: 0.5,
    delay: -0.2,
})

tl.from(".contact-left", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "<")

tl.from(".contact-left ul li", {
    x: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
}, "<+0.2")

tl.from(".contact-right form input, .contact-right form textarea, .contact-right form button, .contact-right .download-cv", {
    y: 50,
    stagger: 0.2,
    duration: 0.5
}, "<+0.3")
