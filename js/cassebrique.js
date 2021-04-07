const contact = document.querySelector('.contact')
const playground = document.createElement('div')
const plateforme = document.createElement('div')

playground.className = 'playground'
plateforme.id = 'plateforme'

contact.appendChild(playground)
playground.appendChild(plateforme)

const windowWidth = window.innerWidth
const playgroundWidth = windowWidth / 100 * 70



contact.addEventListener('mousemove', mouse => {
    const mousePosPx = mouse.clientX - ((windowWidth - playgroundWidth) / 2)
    const mousePosPerc = Math.floor(mousePosPx / (playgroundWidth / 100))


    

    if(mousePosPerc < 0){
        plateforme.style.left = '0%'
    }else if (mousePosPerc > 95){
        plateforme.style.left = '95%'
    }else{
        plateforme.style.left = mousePosPerc + '%'
    }

    console.log(mousePosPerc);


    // console.log(Math.floor(mouse.clientX / (windowWidth / 100)));
})