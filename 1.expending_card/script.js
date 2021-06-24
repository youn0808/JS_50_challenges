const cards = document.querySelectorAll('.card');


cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        // remove class

        removeActiveClasses();
        card.classList.add('active')
    })
})

function removeActiveClasses(){
    cards.forEach((card)=>{
        card.classList.remove('active')
    })
}

