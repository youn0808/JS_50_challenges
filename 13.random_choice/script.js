const tagList = document.querySelector('.tags')
const text_bar = document.querySelector('.text-area')


text_bar.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    
    if(e.key==='Enter')//when typed key is Enter, run the blink tags
        interval()
    
    
    
})

function createTags(input){
    const tags = input.split(',')
    .filter(tag=>tag.trim()!='')
    .map(tag=>tag.trim());
    
    tagList.innerHTML=''
    tags.forEach((tag)=>{
        let span = document.createElement('span');//create a <div>element
        span.innerHTML=tag 
        span.classList.add('tag')
        tagList.appendChild(span);
    })
    
}
function pickRandomTag(){
    const tag = document.querySelectorAll('.tag')
    return tag[Math.floor(Math.random() * tag.length)]
}

function interval(){
    let count = 0;
    let i =setInterval(()=>{
        tagList.childNodes.forEach((list)=>{
            list.classList.remove('active')
        })
        let randomTag= pickRandomTag();
        randomTag.classList.add('active');
        count++;
        if(count===30){
            clearInterval(i)
        }
    },100)
    
}
