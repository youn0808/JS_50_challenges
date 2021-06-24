const loading_text = document.querySelector('.loading-text');
const background=document.querySelector('.bg');

window.addEventListener('load',()=>{
    blurring();
})


let load = 0;
let int = setInterval(blurring,30)

function blurring(){
    load++;
    if(load>99)
    {
        clearInterval(int)
    }
    loading_text.innerHTML=`${load}%`
    let blurryness=get_scale(load,0,100,30,0);
    // loading_text.style.opacity=`${blurryness}`;
    background.style.filter=`blur(${blurryness}px)`;
}



function get_scale(value, sourceRangeMin, sourceRangeMax, targetRangeMin, targetRangeMax) {
    var targetRange = targetRangeMax - targetRangeMin;
    var sourceRange = sourceRangeMax - sourceRangeMin;
    return (value - sourceRangeMin) * targetRange / sourceRange + targetRangeMin;
}

