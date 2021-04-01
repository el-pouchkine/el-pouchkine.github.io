// ************************************************
// ********************HIDENAV********************
// ************************************************
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


const competences = document.querySelector('.competences')

// nav.addEventListener('click', competences){
// competences.style.visibility = 'visible'
// }



// ****************************************************
// **********************PROGRESS BAR*****************
// ****************************************************
const skills = document.querySelectorAll('.skill')

skills.forEach(skill => {


    const progress = skill.attributes.value.value
    let skillName = skill.id
    let bar = document.createElement('div')
    let progressBar = document.createElement('div')
    let textContainer = document.createElement('p')
    let textBar = document.createTextNode(skillName)

    bar.className = 'bar'
    progressBar.className = 'progressBar'
    progressBar.id = skillName

    skill.appendChild(textContainer)
    skill.appendChild(bar)
    textContainer.appendChild(textBar)
    bar.appendChild(progressBar)

    let barWidth = 0
    let createBar = setInterval(progression, 20)

    function progression() {

        barWidth++

        if (barWidth >= progress) {
            clearInterval(createBar)
        } else {
            progressBar.style.width = barWidth + '%'
        }
    }

})




// ********************************************************************
// **************************GOLDEN RATIO****************************
// *********************************************************************
fibonacci()

setInterval(fibonacci, 5000)

function fibonacci() {
    const base = document.querySelector('.base')

      while (base.firstChild) {
            base.removeChild(base.firstChild);
        }
    
    var cycle = 0

    function createCarreV(parent, color, border) {
        let carreV = document.createElement('div')
        carreV.className = 'carreV fibo'
        carreV.style.width = '100%'
        carreV.style.height = 100 * 0.618 + '%'
        carreV.style.background = color
        carreV.style.border = border
        carreV.style.content = ''
        parent.appendChild(carreV)
    }
    
    function createCarreH(parent, color, border) {
        let carreH = document.createElement('div')
        carreH.className = 'carreH fibo'
        carreH.style.width = 100 * 0.618 + '%'
        carreH.style.height = '100%'
        carreH.style.background = color
        carreH.style.border = border
        carreH.style.content = ''
        parent.appendChild(carreH)
    }

    function createRectangleH(parent) {
        let rectangleH = document.createElement('div')
        rectangleH.className = 'rectangleH fibo'
        rectangleH.style.width = '100%'
        rectangleH.style.height = 100 - (100 * 0.618) + '%'
        rectangleH.style.background = 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')'
        rectangleH.style.content = ''
        rectangleH.style.display = 'flex'
        rectangleH.style.flexDirection = "row"

        parent.appendChild(rectangleH)
    }

    function createRectangleV(parent) {
        let rectangleV = document.createElement('div')
        rectangleV.className = 'rectangleV fibo'
        rectangleV.style.width = 100 - (100 * 0.618) + '%'
        rectangleV.style.height = '100%'
        rectangleV.style.background = 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')'
        rectangleV.style.content = ''
        parent.appendChild(rectangleV)
        rectangleV.style.display = 'flex'
        rectangleV.style.flexDirection = "column"
    }



    createCarreH(base, 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')', 'none')
    createRectangleV(base)


    while (cycle < 3) {
        cycle++

        let rectangleVertical = document.querySelectorAll('.rectangleV')
        let rectangleV = rectangleVertical[rectangleVertical.length - 1]

        createRectangleH(rectangleV)
        createCarreV(rectangleV, 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')', 'none')


        let rectangleHorizontal = document.querySelectorAll('.rectangleH')
        let rectangleH = rectangleHorizontal[rectangleHorizontal.length - 1]

        createRectangleV(rectangleH)
        createCarreH(rectangleH, 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')', 'none')


        rectangleVertical = document.querySelectorAll('.rectangleV')
        rectangleV = rectangleVertical[rectangleVertical.length - 1]


        createCarreV(rectangleV, 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')', 'none')
        createRectangleH(rectangleV)

        rectangleHorizontal = document.querySelectorAll('.rectangleH')
        rectangleH = rectangleHorizontal[rectangleHorizontal.length - 1]

        createCarreH(rectangleH, 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')', 'none')
        createRectangleV(rectangleH)
    }
}


// *****************************SUITE**************************

