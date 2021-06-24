const jokeEl = document.getElementById('joke')
const jokeBtn = document.querySelector('.jokeBtn')

generateJoke()

jokeBtn.addEventListener('click',generateJoke);

async function generateJoke(){
    const config = {
        headers:{
            Accept:'application/json',
        },
    };
    // await 를 붙이는 이유는 이 fetch 가 끝나야 다음 라인의 코드가 실행됨 이때 await 가 포함한 함수의 앞에 async 를 붙여야 한다. 
    const res = await fetch('https://icanhazdadjoke.com/',config);
    const data = await res.json();
    jokeEl.innerHTML=data.joke;

}



// function generateJoke(){
//     const config = {
//         headers:{
//             Accept:'application/json',
//         },
//     };
//     fetch('https://icanhazdadjoke.com/',config)
//     .then(response => response.json())
//     .then(data => {
//         jokeEl.innerHTML=data.joke;
//     });
// }
