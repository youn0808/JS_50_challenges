const draggable = document.querySelector('.draggable')
const imgBoxes = document.querySelectorAll('.img_box')

draggable.addEventListener('dragstart',dragStart);
draggable.addEventListener('dragend',dragEnd);
imgBoxes.forEach((img_box)=>{
    img_box.addEventListener('drop',dragDrop)
    img_box.addEventListener('dragover',dragOver)
    img_box.addEventListener('dragenter',dragEnter)
    img_box.addEventListener('dragleave',dragLeave)
    
})

function dragStart(){
    this.classList.add("hold");
    setTimeout(()=>(this.className='invisible'),0);
    
}

function dragEnd(){
    this.className = 'draggable';
}

function dragDrop(){
    this.append(draggable)
    this.classList.remove('hovered')
}


function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){   
    e.preventDefault();
    this.classList.add("hovered");
}

function dragLeave(){
    this.classList.remove("hovered");
}