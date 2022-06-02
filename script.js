function subirtela() {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
}

var verificar = setInterval(()=>{
    if(window.scrollY == 0){
        document.querySelector('.butao').style.opacity = 0;
        document.querySelector('.butao').style.transition = '0.3s ease';
    }
    else{
        document.querySelector('.butao').style.opacity = 1;
    }
}
,10)


function openmenu() {
    if(document.querySelector('#menu-area').style.width=="0px") {
        document.querySelector('#menu-area').style.width = "200px"
    } else {
        document.querySelector('#menu-area').style.width = "0px"
    }
    
}


openmenu.addEventListener('click', 1000)