const click_count = document.querySelector('.click-count')
const img = document.querySelector('.image')

let clickedTime = 0;
let count = 0;

img.addEventListener('click', (e) => {
    if (clickedTime === 0) {
        var date = new Date();
        clickedTime = date.getTime();//first clicked time
    } else {
        if ((new Date().getTime() - clickedTime) < 500) {
            createHeart(e)
            clickedTime = 0;
        } else {
            clickedTime = new Date().getTime()
        }
    }
})

function createHeart(e) {
    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    const heartEl = document.createElement('i')
    heartEl.classList.add('fas')
    heartEl.classList.add('fa-heart')
    heartEl.style.color = "red"
    heartEl.style.left = `${xInside}px`
    heartEl.style.top = `${yInside}px`
    img.appendChild(heartEl)

    count++;
    click_count.innerHTML = count

    setTimeout(() => heartEl.remove(), 1000)
}