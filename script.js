const nav = document.querySelector(".navigation");
const pAccodion = document.querySelectorAll('.accordionHidden')
const iconRotate = document.querySelectorAll('.ph-plus')

function openMenu() {
    nav.classList.add("open");
}

function closeMenu() {
    nav.classList.remove("open");
}

function accordion(element, icon) {
    for(let i =0; i < pAccodion.length; i++) {
        if(!pAccodion[i].classList.contains('accordionHidden') && pAccodion[i] !== element) {
            pAccodion[i].classList.add('accordionHidden')
        }

        if(iconRotate[i].classList.contains('iconRotate') && iconRotate[i] !== icon) {
            iconRotate[i].classList.remove('iconRotate')
        }
    }

    icon.classList.toggle('iconRotate')
    element.classList.toggle('accordionHidden')
}