const small_cups = document.querySelectorAll('.cup-small')
const percentage_cup = document.querySelector('.percentage')
const cup_big = document.querySelector('.cup-big');
const remainInfo = document.querySelector('#remained')

updateBigCup()
small_cups.forEach((cup,index)=>{
    cup.addEventListener('click',()=>highlightCups(index));
    
    
})


function highlightCups(idx){
    if(
        small_cups[idx].classList.contains('active')&&
        !small_cups[idx].nextElementSibling.classList.contains('active'))
    {
        idx--;
    }

    small_cups.forEach((cup,idx2)=>{
        if(idx2<=idx){ //0  3
            cup.classList.add('active')
        }else{
            cup.classList.remove('active');
        }
    });

    updateBigCup();
}

function updateBigCup(){
    const selectedCups = document.querySelectorAll('.active')
    const total_liter=2;
    let total_num_cups=small_cups.length;
    let selected_num_cups = selectedCups.length;
    let percentage = parseInt((selected_num_cups/total_num_cups)*100);
    let cup_height= +getComputedStyle(cup_big).height.replace('px','');
    
    if(selected_num_cups===0){
        percentage_cup.style.visibility='hidden'
        percentage_cup.style.height=0;
    }else{
        percentage_cup.style.visibility='visible'
        percentage_cup.innerHTML=`${percentage}`+"%"
        percentage_cup.style.height=(cup_height*percentage/100)+'px';
    }
    
    if(total_num_cups===selected_num_cups){
        remainInfo.style.visibility='hidden'
        remainInfo.style.height=0;
    }else{
        remainInfo.style.visibility='visible'
        remainInfo.innerHTML=`${2-(250*selected_num_cups)/1000}`;
        
    }
    
    
    

}