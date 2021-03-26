const nav = document.querySelector('nav')



// ****************************************************
// **********************PROGRESS BAR*****************
// ****************************************************
const progress = document.querySelectorAll('.progress')
const test = document.querySelector('.test')

for (const childElementCount of progress) {
    console.log(childElementCount.id);
    test.innerHtml = 'childElementCount.id'
}

console.log(progress);




// ************************************************
// ********************HIDENAV********************
// ************************************************

var width = 1

// CHECK MOZILLA EVENT LISTENER FOR HIDE NAV
if (window.addEventListener)
    window.addEventListener('DOMMouseScroll', hideNav)

// OTHERS EVENTS LISTENERS FOR HIDE NAV
window.onmousewheel = hideNav


function hideNav(event) {

    let delta = 0
    let ctrl = event.ctrlKey

    if (!event) event = window.event

    if (event.wheelDelta) {
        delta = event.wheelDelta / 60
    } else if (event.detail) {
        delta = -event.detail / 2 /*MOZILLA*/
    }

    if (delta < 0 && ctrl == false) {
        nav.style.top = "-5vh"
    } else {
        nav.style.top = "0"
    }
}