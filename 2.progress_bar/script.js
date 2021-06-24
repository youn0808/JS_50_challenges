const prev_btn = document.getElementById('prev')
const next_btn = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const progress_bar = document.querySelector('.progress_bar')

let currentActive = 1;


next_btn.addEventListener('click',()=>{
    currentActive++;

    if(currentActive>circles.length){
        currentActive=circles.length;
    }
    update()
})

prev_btn.addEventListener('click',()=>{
    currentActive--;

    if(currentActive<1)
        currentActive=1
    
    update()
})

function update(){
    circles.forEach((circle,index)=>{
        if(index<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }

        
    })
    
    const actives = document.querySelectorAll('.active');
    progress_bar.style.width=(actives.length-1)/(circles.length-1)*100+'%'

    if(currentActive===circles.length){
        next_btn.disabled=true;
    }else if(currentActive===1){
        prev_btn.disabled=true;
    }else{
        next_btn.disabled=false;
        prev_btn.disabled=false;
    }

    
}