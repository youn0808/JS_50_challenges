const btn = document.querySelector('.btn')
const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const numbs = document.querySelectorAll('span')

startCount()
btn.addEventListener('click', () => {

    resetDome();
    startCount();

})


function resetDome() {

    counter.classList.remove('hide')
    final.classList.remove('show')

    numbs.forEach(num => {
        num.classList.value = ''
    })

    numbs[0].classList.add('in')
}


function startCount() {
    numbs.forEach((num, index) => {
        const lastIndex = numbs.length - 1;
        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && index < lastIndex) {
                num.classList.remove('in')//remove current num class
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                final.classList.add('show')
            }
        })
    })

}