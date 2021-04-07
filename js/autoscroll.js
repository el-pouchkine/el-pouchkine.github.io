// //https://stackoverflow.com/questions/25839487/auto-scroll-to-next-anchor-at-mouse-wheel

const portfolio = document.querySelector('.portfolio')
const rightItem = document.querySelectorAll(".right > div")
const leftItem = document.querySelectorAll(".left > div")

document.getElementById(rightItem[0].id).scrollIntoView();
document.getElementById(leftItem[0].id).scrollIntoView();

let initRight = rightItem[0].getClientRects()[0].top
console.log(initRight);

if (initRight == 0) {
    document.getElementById(rightItem[0].id).scrollIntoView({
        block: 'start',
        speed: 2000
    });
}

        // CHECK MOZILLA EVENT LISTENER
if (portfolio.addEventListener)
    portfolio.addEventListener('DOMMouseScroll', autoScroll)

// OTHERS EVENTS LISTENERS
portfolio.onmousewheel = autoScroll




function autoScroll(event) {
    event.preventDefault();



    let ctrl = event.ctrlKey
    let alt = event.altKey
    let viewHeight = window.innerHeight / 100 * 50

    console.log('/////////////////////////////////////////', '///////////////////////////////////////////////');

    if (ctrl == false && alt == false) {


        /////////////MOZILLA///////////
        if(event.detail) {
            var delta = -event.detail / 2;

        if (delta < 0) {
            for (var i = 0; i < rightItem.length; i++) {
                var top = rightItem[i].getClientRects()[0].top;
                if (top >= viewHeight) break
            }
        } else {
            for (var i = rightItem.length - 1; i >= 0; i--) {
                var top = rightItem[i].getClientRects()[0].top;
                if (top < -viewHeight) break
            }
        }
        }


        //////////OPERA////CHROME///////IE////////ETC////////
        else if(event.wheelDelta){
            var delta = event.wheelDelta / 60

            if (delta < 0) {
                for (var i = 0; i < rightItem.length; i++) {
                    var top = rightItem[i].getClientRects()[0].top;
                    if (top < 3000) break
                }
                console.log("n°: " + i + "|||" + "top : " + top);
            } else {
                for (var i = rightItem.length - 1; i >= 0; i--) {
                    var top = rightItem[i].getClientRects()[0].top;
                    if (top > -3000) break
                }
                console.log("n°: " + i + "|||" + "top : " + top);
            }
        }
        


        if(i >= 0 && i < rightItem.length) {
            document.getElementById(rightItem[i].id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                speed: 2000
            });
            document.getElementById(leftItem[i].id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                speed: 2000
            });
        }
    }
}