function page1animation(){
    var tl = gsap.timeline();

tl.from("nav i, nav h2, nav h4, nav button", {
    y: -30,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1
})

tl.from("#bottom-1 h1, #bottom-1 p", {
    x:-200,
    opacity:0,
    duration:0.7,
    stagger: 0.1
}, "-=1")

tl.from("#bottom-1 button", {
    opacity: 0,
    duration:0.6
}, "-=1")

tl.from("#bottom-2 ", {
    opacity: 0,
    duration: 0.8
}, "-=1")

tl.from("#section-bottom-logo img", {
    opacity: 0,
    x:-100,
    stagger: 0.2
}, "-=1")
}

page1animation()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section-2",
        start:"top 50%",
        end:"top 0%",
        scrub: 2,
        scroller:"body",
  
    }
})

tl2.from(".services h2, .services p", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger:0.2
}, )

tl2.from(".elem", {
    y: -100,
    opacity:0,
    duration: 0.4,
    stagger: 0.2
}, "-=0.5")