const btn_notification = document.getElementById('notification')
const toast_notification = document.querySelector('.toast-notification')
const message_list=["Message One", "Message Two", "Message Three","Message Four","Message Five"]
const random_color=['red','blue','white','pink','purple']
btn_notification.addEventListener('click',()=>{
    createNotification();
})


function createNotification(){
    const msgEl = document.createElement('div')
    msgEl.classList.add('notification','msg')
    msgEl.innerText= randomMsg();
    msgEl.style.color=randomColor();
    toast_notification.appendChild(msgEl)

    setTimeout(()=>{
        toast_notification.removeChild(msgEl)
    },2000)
}

function randomMsg(){
    return message_list[Math.floor(Math.random()*message_list.length)]
}


function randomColor(){
    return random_color[Math.floor(Math.random()*random_color.length)]
}