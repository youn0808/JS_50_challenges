const toggles = document.querySelectorAll('.toggle')
const labels = document.querySelectorAll('label')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach((toggle) => {
    toggle.addEventListener('change', (e) => {
        doTheTrick(e.target);
    })
})



function doTheTrick(clickedOne) {

    if (good.checked && cheap.checked && fast.checked) {
        if (clickedOne.id === 'good') {
            cheap.checked = false;
        } else if (clickedOne.id === 'cheap') {
            fast.checked = false;
        } else if (clickedOne.id === 'fast') {
            good.checked = false;
        }

    }

}

