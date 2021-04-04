const nav = document.querySelector('nav')


// var width = 1

// CHECK MOZILLA EVENT LISTENER
if (window.addEventListener)
    window.addEventListener('DOMMouseScroll', hideNav)

// OTHERS EVENTS LISTENERS
window.onmousewheel = hideNav


function hideNav(event) {
    let delta = 0
    let ctrl = event.ctrlKey
    let alt = event.altKey

    if (ctrl == false && alt == false) {
        if (event.wheelDelta) {
            delta = event.wheelDelta / 60
        } else if (event.detail) {
            delta = -event.detail / 2 /*MOZILLA*/
        }

        if (delta < 0) {
            nav.style.top = "-5vh"
        } else {
            nav.style.top = "0"
        }

    }

}
