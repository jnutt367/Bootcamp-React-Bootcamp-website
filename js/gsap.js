gsap.fromTo("#third ", { y: 100, opacity: 0 }, { y: 0, duration: 2, ease: "elastic", opacity: 1 }, 0)
gsap.fromTo("h1", { color: "white", y: -200 }, { duration: 3, y: 0, color: "aqua" })
gsap.fromTo("#thinking-cap", { opacity: 0 }, { duration: 3, y: -150, opacity: 1 })
gsap.to("#thinking-cap", { stroke: "silver", strokeWidth: 2, fill: "black" }, 3)
gsap.to("#ball1", { scale: 1.1, repeat: 2 })
gsap.to("#ball2", { scale: 1.1, repeat: -1, duration: 1 })
gsap.to("#ball3", { scale: 1.1, repeat: 2 })
gsap.to("#ball4", { scale: 1.1, repeat: -1, duration: 1 })
gsap.to("#ball5", { scale: 1.1, repeat: 2 })
gsap.to("#ball6", { scale: 1.1, repeat: -1, duration: 1 })
gsap.to("#rect1", { scale: 2, duration: 1 })
gsap.to("#redspan", { color: "orange", fontSize: "35", padding: "20", duration: 3, ease: "elastic", fontFamily: "Roboto" }, 2)
gsap.fromTo("#a75d69e6-d07c-4db3-9c83-72b2470e5561", { y: 300, opacity: 0 }, { y: 20, ease: "elastic", duration: 2, opacity: 1 }, 0)
gsap.fromTo("#e7334088-53de-4589-99a2-090044ddfc90", { y: 300, opacity: 0 }, { y: 20, ease: "elastic", duration: 2, opacity: 1 }, 0)