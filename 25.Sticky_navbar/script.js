const nav_bar = document.querySelector('.navbar')
var y 

window.addEventListener('scroll',printLocation);


function printLocation(){
    y=window.scrollY;
    if(y>=150){
        nav_bar.classList.add('scroll-down')
    }else{
        nav_bar.classList.remove('scroll-down')
    }
    
}