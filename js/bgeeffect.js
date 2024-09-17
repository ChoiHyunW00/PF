let blend = 50;
let delay = -10;
let windowWidth = window.innerWidth;
const section = document.getElementById('section')

document.onmousemove = function(e){
    mouseX = Math.round(e.pageX / windowWidth * 100 - delay)

    c1 = mouseX - blend
    c2 = mouseX + blend
    
    section.style.background = 'linear-gradient(to right, #141226 ' + c1 +'%, #FF5EC4 ' + c2 +'%)'
}