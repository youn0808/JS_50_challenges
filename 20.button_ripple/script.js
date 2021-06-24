const button = document.querySelector('.ripple')

button.addEventListener('click',(e)=>{
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop=e.target.offsetTop;
    const buttonLeft=e.target.offsetLeft;
    
    const xInsideBox = x-buttonLeft;
    const yInsideBox = y-buttonTop;

    
    const circle  = document.createElement('span')
    circle.classList.add('circle');
    circle.style.top=yInsideBox+'px';
    circle.style.left=xInsideBox+'px';

    button.appendChild(circle)

    setTimeout(() => circle.remove(), 500);

})
