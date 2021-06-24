const APIURL="https://api.github.com/users/"

const main = document.querySelector('#main')
const form = document.querySelector('#form')
const serach_input = document.querySelector('.serach_input')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getUser(serach_input.value)
    serach_input.value=''
})

async function getUser(username){
    try{
        
        const {data}= await axios(APIURL+username)
        createUserCard(data);
        getRepos(username)
       
    }catch(err){
        if(err.response.status==404){
            failcreateUserCard('No profile with this username');
        }
    }
}

function createUserCard(data){
    const mainEl = document.createElement('div')
    mainEl.innerHTML=`
    <div class="card">
        <div class="img">
            <img src=${data.avatar_url} alt="">
            </div>
            <div class="user-info">
            <h2>${data.login}</h2>
            <p>${data.bio}</p>
            <ul>
                <li class="user-followers">${data.followers} Followers </li>
                <li class="user-followings">${data.following} Followings </li>
                <li class="user-repos">${data.public_repos} Repos </li>
            </ul>
            <div class='repos'id="repos">
                <a href="" class="repo">repo 1</a>
                <a href="" class="repo">repo 2</a>
                <a href="" class="repo">repo 3</a>
            </div>

            </div>
    </div>
    `
    main.innerHTML=mainEl.innerHTML


}

function failcreateUserCard(msg){
    const mainEl = document.createElement('div')
    mainEl.innerHTML=
    `
    <div class="card">
        ${msg}
    </div>
    `
    
    main.innerHTML=mainEl.innerHTML
}
async function getRepos(username){
    try{
        const {data}= await axios(APIURL+username+'/repos?sort=created')
        addReposToCard(data)
    }catch(err){
        failcreateUserCard("Problem fetching repos")
    }
}

function addReposToCard(data){
    const reposEl = document.getElementById('repos')
    data
        .slice(0,5)
        .forEach(repo=>{
            const repoEl=document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href=repo.html_url
            repoEl.traget='_blank'
            repoEl.innerHTML=repo.name
            reposEl.appendChild(repoEl)

    })
}