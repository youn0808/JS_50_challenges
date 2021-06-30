const button = document.querySelector('.magic')
const boxes = document.querySelector('.boxes')
const times = 16;
const row_num = 4;
const col_num = 4;
addBoxes()
button.addEventListener('click',()=>{
    boxes.classList.toggle('big')
})

function addBoxes(){
    for(let i = 0; i<row_num; i++){
        for(let j = 0; j<col_num; j++){
            const boxEl = document.createElement('div')
            boxEl.classList.add("box")
            boxEl.style.backgroundPosition=`${-j*125}px ${-i*125}px`
            boxes.appendChild(boxEl)
        }
    }
}
œ
