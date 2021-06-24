const vol_up = document.querySelector(".vol_up")
const vol_down = document.querySelector(".vol_down")
const size = document.querySelector('.size')
const selected_color = document.getElementById('color')
const reset_btn = document.querySelector('.reset_btn')
const canvas = document.querySelector('.canvas')

const ctx = canvas.getContext('2d');


let current_size=parseInt(size.innerText);
let isPressed = false;
let color = 'black';
let x;
let y;

vol_down.addEventListener('click',()=>{
    
    current_size-=5;
    if(current_size<=0){
        current_size=5;
    }
    size.innerText=current_size;
})


vol_up.addEventListener('click',()=>{
    current_size+=5;
    if(current_size>=50){
        current_size=50;
    }
    size.innerText=current_size;
})

canvas.addEventListener('mousedown',(e)=>{
    isPressed=true;
    x = e.offsetX;
    y= e.offsetY; 
})

canvas.addEventListener('mouseup',(e)=>{
    isPressed=false;
    x= undefined;
    y= undefined;
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x= x2;
        y= y2;
    }
    
})

selected_color.addEventListener('change',(e)=>{
    color=e.target.value;
})

reset_btn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
})

function drawCircle(x,y){
    ctx.fillStyle=color;
    ctx.beginPath();
    
    ctx.arc(x,y,current_size,0,Math.PI*2);
    ctx.fill();
}

function drawLine(x,y,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=2*current_size;
    ctx.stroke();
    
}


