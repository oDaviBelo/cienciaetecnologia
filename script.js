
function openmenu() {
    if(document.querySelector('#menu-area').style.width=="0px") {
        document.querySelector('#menu-area').style.width = "200px"
    } else {
        document.querySelector('#menu-area').style.width = "0px"
    }
    
}


openmenu.addEventListener('click', 1000)