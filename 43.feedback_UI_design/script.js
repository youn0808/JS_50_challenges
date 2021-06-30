const ratings = document.querySelectorAll('.rating')
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const selected_condition = document.querySelector('.active').getElementsByTagName('small')[0].innerText

select_rating();


function select_rating(){
    ratings.forEach((rating)=>{
        rating.addEventListener('click',(e)=>{
            remove_active();
            rating.classList.add('active')
        })
    })
}



function remove_active(){
    ratings.forEach((rating)=>{
        rating.classList.remove('active')
    })
}

btn.addEventListener('click',()=>{
    container.innerHTML=`
    <i class="fas fa-heart" style="color: red;"></i>
      <p>Thank you!</p><br>
      <p class='feedback_text'>Feedback:${selected_condition}</p>
      <p>We'll use your feedback to improve our<br> customer support</p>
    `
    
    

})