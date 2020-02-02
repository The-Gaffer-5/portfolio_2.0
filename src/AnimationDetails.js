export const firstScroll = () => {
    document.getElementById('hej-wrapper').style.left = "35%"
    document.getElementById('name').style.color = "#FFCD00"
    document.getElementById('name').style.marginRight = "5%"
    document.getElementById('logo').style.marginLeft = "-2.4%"
    document.getElementById('yellow-line').style.marginLeft = "56.5%"
    document.getElementById('yellow-line').style.transitionDelay = "1000ms"
    document.getElementById('yellow-line').style.transitionDuration = "500ms"
    document.getElementById('yellow-line').style.opacity = "1"
    document.getElementById('left-side').style.width = "100%"
    document.getElementById('reveal-container').style.opacity = "1"
    document.getElementById('left-side').style.backgroundColor = "#004B87"
    document.getElementById('the-box-1').style.backgroundColor = "#004B87"
    document.getElementById('the-box-2').style.backgroundColor = "#004B87"
    document.getElementById('right-side').style.width = "100%"
    document.getElementById('blurb-line-1').style.top = "150px"
    document.getElementById('blurb-line-2').style.top = "90px"
    document.getElementById('blurb-line-1').style.transitionDelay = "200ms"
    document.getElementById('blurb-line-2').style.transitionDelay = "400ms"
    document.getElementById('scroll-down-wrapper').style.opacity = "0"
    document.getElementById('scroll-down-wrapper').style.top = "110vh"
    document.getElementById('scroll-down-wrapper').style.transitionDelay = "0ms"
}
export const addParallaxing = (offset) => {
    // PARALLAXING -----------------------
    // document.getElementById('blurb-line-1').style.transform = "matrix(1, 0, 0, 1, 0, -" + offset/2.5 + ")"
    // document.getElementById('blurb-line-2').style.transform = "matrix(1, 0, 0, 1, 0, -" + offset/2.5 + ")"
    // document.getElementById('yellow-line').style.transform = "matrix(1, 0, 0, 1, 0, -" + offset/2.5 + ")"
    document.getElementById('name').style.transform = "matrix(1, 0, 0, 1, 0, -" + offset/2.5 + ")"
    document.getElementById('reveal-container').style.transform = "matrix(1, 0, 0, 1, 0, -" + offset/2.5 + ")"
    // MAINTAIN OLD -----------------------
    document.getElementById('hej-wrapper').style.left = "35%"
    document.getElementById('left-side').style.width = "100%"
    document.getElementById('right-side').style.width = "100%"
    document.getElementById('blurb-line-1').style.transitionDelay = "200ms"
    document.getElementById('blurb-line-2').style.transitionDelay = "400ms"
    document.getElementById('reveal-container').style.opacity = "1"
    document.getElementById('the-box-1').style.opacity = "1"
    document.getElementById('the-box-2').style.opacity = "1"
    document.getElementById('yellow-line').style.marginLeft = "56.5%"
    document.getElementById('yellow-line').style.transitionDelay = "1000ms"
    document.getElementById('yellow-line').style.opacity = "1"
}
export const revertToClosed = () => {
    document.getElementById('hej-wrapper').style.left = "2%"
    document.getElementById('name').style.color = "rgb(160, 160, 160)"
    document.getElementById('left-side').style.width = "50%"
    document.getElementById('left-side').style.backgroundColor = "rgb(117, 117, 117)"
    document.getElementById('the-box-1').style.backgroundColor = "rgb(117, 117, 117)"
    document.getElementById('the-box-2').style.backgroundColor = "rgb(117, 117, 117)"
    document.getElementById('reveal-container').style.opacity = "0"
    document.getElementById('right-side').style.width = "100%"
    document.getElementById('blurb-line-1').style.top = "200px"
    document.getElementById('blurb-line-2').style.top = "140px"
    document.getElementById('blurb-line-1').style.transitionDelay = "0ms"
    document.getElementById('blurb-line-2').style.transitionDelay = "0ms"
    document.getElementById('the-box-1').style.opacity = "1"
    document.getElementById('the-box-2').style.opacity = "1"
    document.getElementById('name').style.paddingTop = "0"
    document.getElementById('blurb-line-1').style.paddingTop = "0"
    document.getElementById('blurb-line-2').style.paddingTop = "0"
    document.getElementById('yellow-line').style.opacity = "0"
    document.getElementById('yellow-line').style.transitionDuration = "0ms"
    document.getElementById('yellow-line').style.marginLeft = "55%"
    document.getElementById('yellow-line').style.transitionDelay = "0ms"
    document.getElementById('scroll-down-wrapper').style.opacity = "1"
    document.getElementById('scroll-down-wrapper').style.transitionDelay = "600ms"
    document.getElementById('scroll-down-wrapper').style.top = "80vh"
    // STOP-PARALLAXING -----------------------
    // document.getElementById('blurb-line-1').style.transform = "matrix(1, 0, 0, 1, 0, 0)"
    // document.getElementById('blurb-line-2').style.transform = "matrix(1, 0, 0, 1, 0, 0)"
    // document.getElementById('yellow-line').style.transform = "matrix(1, 0, 0, 1, 0, 0)"
    document.getElementById('name').style.transform = "matrix(1, 0, 0, 1, 0, 0)"
    document.getElementById('reveal-container').style.transform = "matrix(1, 0, 0, 1, 0, 0)"
}
export const nameOpacity = () => {
    document.getElementById('name').style.opacity = 1
    document.getElementById('logo').style.opacity = 0
    document.getElementById('scroll-down-wrapper').style.top = "80vh"
    document.getElementById('scroll-down-wrapper').style.opacity = 1
}
export const hoverToggleEnter = (theName, theId, theId2) => {
    document.getElementById(theName).style.top = "40px"
    document.getElementById(theName).style.opacity = 1
    document.getElementById(theName).style.transitionDelay = "300ms"
    document.getElementById(theName).style.transitionDuration = "500ms"
    document.getElementById(theId).style.top = "60px"
    document.getElementById(theId).style.opacity = 1
    document.getElementById(theId).style.transitionDelay = "500ms"
    document.getElementById(theId).style.transitionDuration = "500ms"
    document.getElementById(theId2).style.opacity = 1
    document.getElementById(theId2).style.transitionDuration = "300ms"
    document.getElementById(theId2).style.transitionDelay = "900ms"
    document.getElementById(theId2).style.animation = "flicker 1.5s infinite 1.2s"
}
export const hoverToggleLeave = (theName, theId, theId2) => {
    document.getElementById(theName).style.top = "-30px"
    document.getElementById(theName).style.opacity = 0
    document.getElementById(theName).style.transitionDelay = "0ms"
    document.getElementById(theName).style.transitionDuration = "0ms"
    document.getElementById(theId).style.top = "150px"
    document.getElementById(theId).style.opacity = 0
    document.getElementById(theId).style.transitionDelay = "0ms"
    document.getElementById(theId).style.transitionDuration = "0ms"
    document.getElementById(theId2).style.opacity = 0
    document.getElementById(theId2).style.transitionDuration = "0ms"
    document.getElementById(theId2).style.transitionDelay = "0ms"
    document.getElementById(theId2).style.animation = "none"
}