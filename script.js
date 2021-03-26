const nav = document.querySelector('nav')

const code = document.querySelector('.code')



// ****************************************************
// **********************PROGRESS BAR*****************
// ****************************************************
const skills = {
    html: 40,
    css: 30,
    sass: 20,
    javascript: 5
}




for (var skill in skills) {
    const competences = [skill]

    competences.forEach(skillCreation)

   

    function skillCreation() { 
        const bar = document.createElement('div')
        bar.id = competences
        bar.className = 'skill'
        bar.innerHTML = `<div class="bar"><div class="progress"></div></div>`
        code.appendChild(bar)
    }
}

const bars = document.querySelectorAll('.skill')
console.log(bars);


const progress = document.querySelector('.progress')

skillLevel()

function skillLevel(name, percent) {
    name = skill
    percent = skills[skill]

    var id = setInterval(progressBar, 25)

    function progressBar() {

        if (width >= percent) {
            clearInterval(id)
        } else {
            width++
            progress.style.width = width + '%'
            progress.innerHTML = name + ' ' + width + '%'
        }
    }
}


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