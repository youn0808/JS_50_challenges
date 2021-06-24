const down_btn  = document.querySelector('.down-button')
const up_btn = document.querySelector('.up-button')
const right_slide= document.querySelector('.right-slide')
const left_slide = document.querySelector('.left-slide')
const sliderContainer = document.querySelector('.slider-container');

const slide_length = right_slide.childElementCount;

left_slide.style.top=`-${(slide_length - 1) * 100}vh`;
let count=0;
down_btn.addEventListener('click',()=>slideChange('down'))
up_btn.addEventListener('click',()=>slideChange('up'))

function slideChange(direction){
    const sliderHeight=sliderContainer.clientHeight;
    

    if(direction==='up')
    {
        count++;
        if(count>slide_length-1){
            count=0;
        }
        
    }else if(direction==='down')
    {   
        count--;
        if(count<0){
            count=slide_length-1;
        }
     
    }
    right_slide.style.transform=`translateY(-${(count)*sliderHeight}px)`
    left_slide .style.transform=`translateY(${(count)*sliderHeight}px)`
}