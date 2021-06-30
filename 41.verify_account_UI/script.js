const numbers = document.querySelectorAll('.code')


numbers[0].focus();


numbers.forEach((num,idx)=>{
    num.addEventListener('keydown',(e)=>{
        if(idx===0){
            if(e.key ==='Backspace'){
                setTimeout(()=>numbers[idx].focus(),10)
            }else{
                setTimeout(()=>numbers[idx + 1].focus(),10)
            }
        }else if(idx>0 && idx<5){
            if(e.key ==='Backspace'){
                setTimeout(()=>numbers[idx -1].focus(),10)
            }else{
                setTimeout(()=>numbers[idx + 1].focus(),10)
            }
        }else{
            if(e.key ==='Backspace'){
                setTimeout(()=>numbers[idx -1].focus(),10)
            }else{
                numbers[idx].value=''
                setTimeout(()=>numbers[idx].focus(),10)
            }
        }
    })
    
})
