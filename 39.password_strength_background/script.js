const password = document.querySelector('#password')
const background = document.querySelector('.background')
password.addEventListener('keyup',()=>{
    
    let length = password.value.length;
    let value  =20- length *2;
    background.style.filter=`blur(${value}px)`
})

