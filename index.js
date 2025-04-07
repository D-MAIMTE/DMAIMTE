var menuopen = document.querySelector("#hambur")
var close = document.querySelector("#menucontainer")
var band = document.querySelector("#home")

var tl = gsap.timeline()

tl.to("#menucontainer",{
    right:0,
    duration:0.2
})
tl.from("#menucontainer #book",{
    right: 0,
    duration: 0.2,
    opacity:0.3,
    stagger: 0.2
})

tl.pause()

menuopen.addEventListener("click",function(){
    tl.play()
})

close.addEventListener("click",function(){
    tl.reverse()
})
band.addEventListener("click",function(){
    tl.reverse()
})

