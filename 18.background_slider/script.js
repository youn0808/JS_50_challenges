const slides = document.querySelectorAll('.slide')
const left_btn = document.querySelector('.left-arrow')
const right_btn = document.querySelector('.right-arrow')
const body =document.body;

let active_slide= 0;
setBodyBg();

left_btn.addEventListener('click',()=>{
    active_slide--;
    if(active_slide<0){  // 0    2
        active_slide=slides.length-1;
    }
    changeBackground(active_slide)
    changeBodyBg(active_slide)
    
})

right_btn.addEventListener('click',()=>{
    active_slide++;
    if(active_slide>=slides.length){  // 0    2
        active_slide=0;
    }    
    changeBackground(active_slide)
    setBodyBg(active_slide)
        
})


function changeBackground(count){
    slides.forEach((slide,idx)=>{
        if(idx===count){
            slide.classList.add('active')
        }else{
            slide.classList.remove('active')
        }
    })
}

function setBodyBg(){
    body.style.backgroundImage=slides[active_slide].style.backgroundImage;   
}