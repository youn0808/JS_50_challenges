const container = document.querySelector('.container')

window.addEventListener('keydown',(e)=>{
    container.innerHTML = `
        <div class="keyInfo">
            <p>enter key</p>       
            ${e.key===' ' ? 'space' : e.key}
        </div>
        <div class="keyInfo">
            <p>Event key code</p>
            ${e.keyCode}
        </div>
        <div class="keyInfo">
            <p>Event code</p>
            ${e.code}
        </div>
    `
});
