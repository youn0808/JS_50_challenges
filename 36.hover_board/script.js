const container = document.querySelector('.container')

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
createSqure();


function createSqure(){
    for(let i = 0; i<500; i++){
        const square = document.createElement('div')
        square.classList.add("square")
        container.appendChild(square)
    }
    
    const squares = document.querySelectorAll('.square')
    squares.forEach((square)=>{
        square.addEventListener('mouseenter',(e)=>{
            color_in(e.target)
                       
        })
    })

    squares.forEach((square)=>{
        square.addEventListener('mouseleave',(e)=>{
            color_out(e.target)
                       
        })
    })

}

function color_in(event){
    const randomColor=  colors[Math.floor(Math.random()*colors.length)];
    event.style.background=`${randomColor}`
    event.style.boxShadow = `0 0 20px ${randomColor}, 0 0 10px ${randomColor}`
}

function color_out(event){
    event.style.background="transparent"
    event.style.boxShadow = ``
}

