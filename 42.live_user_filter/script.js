const URL = "https://randomuser.me/api/?results=1"
const user_list = document.querySelector('.user-list')
const filter = document.querySelector('#filter')
const listItems= []
getUser(URL)

filter.addEventListener('input',(e)=>filterData(e.target.value))



async function getUser(url){
    const res = await fetch(url)
    const data = await res.json()

    createUsers(data.results)
}


function createUsers(users){
    
    users.forEach((user) => {
        
        const userEl = document.createElement('li')
        userEl.innerHTML=`
        <img src="${user.picture.thumbnail}" alt="">
              <div class="user-info">
                <h3 class='user-name'>${user.name.first} ${user.name.last}</h3>
                <small class='user-origin'>${user.location.city} ${user.location.state} </small>
              </div>
        `
        listItems.push(userEl)
        user_list.appendChild(userEl)
    });    
    
}

function filterData(searchTerm){
    listItems.forEach((user)=>{
        if(user.innerHTML.toLowerCase().includes(searchTerm.toLowerCase())){
            user.classList.remove('hide')
        }else{
            user.classList.add('hide')
        }
    
    })
}