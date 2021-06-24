const left = document.querySelector('.left')
const right = document.querySelector('.right')
const pics_len = document.querySelectorAll('img').length
const img_container = document.querySelector('.img-container')

let curr = 0;
let interval = setInterval(run, 2000)


function run() {
    curr++;
    changeImage();
}
right.addEventListener('click', () => {
    curr++;
    resetInterval();
    changeImage();
})

left.addEventListener('click', () => {
    curr--;
    resetInterval();
    changeImage();
})

function changeImage() {
    if (curr < 0) {
        curr = pics_len - 1;
    } else if (curr > pics_len - 1) {
        curr = 0;
    }

    img_container.style.transform = `transLateX(-${500 * curr}px)`
}


function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}