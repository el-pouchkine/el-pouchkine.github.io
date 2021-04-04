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