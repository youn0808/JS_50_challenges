const course_img = document.querySelector(".course-img")
const course_tittle = document.querySelector(".course-tittle")
const tittle_info = document.querySelector('.tittle-info')
const author_img = document.querySelector('.author-img')
const author_name = document.querySelector('.author_name')
const date= document.querySelector('.date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')
setTimeout(getData,2500)


function getData(){
    course_img.innerHTML=`<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt>`
    course_tittle.innerHTML=`Comp 1020`
    tittle_info.innerHTML=`Introduction of computer science world`
    author_img.innerHTML='<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    author_name.innerHTML=`James Young`
    date.innerHTML=`Mar 11 2020`
    animated_bgs.forEach((bg)=> bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach((bg_text)=> bg_text.classList.remove('animated-bg-text'))
}