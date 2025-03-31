var menuopen = document.querySelector("#hambur")
var close = document.querySelector("#menu")
var band = document.querySelector("#home")

var tl = gsap.timeline()

tl.to("#menu",{
    right: 10,
    duration:0.2
})
tl.from("#menu h1",{
    right: 200,
    duration: 0.2,
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
