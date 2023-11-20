let elList = document.querySelector(".card__wrapper")
let elTemplate = document.querySelector(".template").content


function renderArr(arr, list){
    arr.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        let cardTitle = cloneTemplate.querySelector(".card__title")
        let cardImg = cloneTemplate.querySelector(".card__img")
        let cardInfo = cloneTemplate.querySelector(".card__info")

        cardTitle.textContent = item.first_name + " " + item.last_name
        cardImg.src = item.avatar
        cardInfo.textContent = item.email

        
        list.appendChild(cloneTemplate)
    })
}

fetch("https://reqres.in/api/users?page=1")
.then(res => res.json())
.then(data => renderArr(data.data,elList))