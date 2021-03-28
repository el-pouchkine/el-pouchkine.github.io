// ****************************************************
// **********************PROGRESS BAR*****************
// ****************************************************
const skills = document.querySelectorAll('.skill')

// skills.forEach(skill => {
//     const bar = skill.querySelector('.progress')
//     const skillName = bar.id
//     const progress = bar.attributes.value.value

//     bar.style.width = progress + '%'
//     bar.innerHTML = skillName

//     console.log(progress);
//     console.log(skillName);
// });

skills.forEach (skill => {


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

    function progression(){
        
        barWidth++

        if (barWidth >= progress){
            clearInterval(createBar)
        }else{
            progressBar.style.width = barWidth + '%'
        }
    }

})





// ************************************************
// ********************HIDENAV********************
// ************************************************
const nav = document.querySelector('nav')

var width = 1

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