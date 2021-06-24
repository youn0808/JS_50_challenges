const buttons = document.querySelectorAll("nav ul li")
const img_container = document.querySelector('.img-container')
const imgs = document.querySelectorAll("img")
console.log(buttons[0])

buttons.forEach((button,idx)=>{
    button.addEventListener('click',()=>{
        
        
        switchScreen(idx)
        remove_active(idx)
        
    })
})

function switchScreen(idx){
    
    for(let i = 0; i<imgs.length; i++){
        imgs[i].classList.remove('show')
    }
    imgs[idx].classList.add('show')
}

function remove_active(idx){
    for(let i = 0; i<buttons.length; i++){
        buttons[i].classList.remove('active')
        
    }
    buttons[idx].classList.add('active')
}