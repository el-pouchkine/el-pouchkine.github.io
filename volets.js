const navLinks = document.querySelectorAll("a")

navLinks.forEach(link => {
    link.addEventListener('click', event => {

        const main = document.querySelector('main')
        const pages = document.querySelectorAll('.volet')

        pages.forEach(oldPage => {
            if (oldPage.childNodes.length == 0) {
                oldPage.remove()
            }
        })

        console.log('event : ' + event.target);
        // CHECKIN' MOZILLA EVENTS
        if (event.target.hash && event.target.hash != "#") {
            target = event.target.hash
        } else if (event.target.hash == '') {
            target = "#acceuil"
        } else if (event.explicitOriginalTarget.hash && event.explicitOriginalTarget.attributes.href.nodeValue != "#") {
            target = event.explicitOriginalTarget.hash
        } else {
            target = "#acceuil"
        }

        const page = document.createElement('div')
        page.className = 'volet'

        const voletContent = document.querySelector(target)

        voletContent.style.visibility = 'visible'

        main.appendChild(page)
        page.appendChild(voletContent)

        let scroll = -100
        let voletScroll = setInterval(scrollDown, 1)

        function scrollDown() {
            scroll = scroll + 2
            if (scroll == 0) {
                clearInterval(voletScroll)
            }
            page.style.top = scroll + 'vh'
        }
    })
})