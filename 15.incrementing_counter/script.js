const counters = document.querySelectorAll('.counter')

counters.forEach((counter)=>{
    counter.innerText ='0'

    const updateCounter=() =>{
        let target = counter.dataset.target; 
        let c = +counter.innerText;     
        const increment = target/200;   
        if(c<target){
            c+=increment;  
            counter.innerText=`${parseInt(c)}`
            setTimeout(updateCounter,1);
        }else{
            counter.innerText=target;
        }
    }
    updateCounter();
})