let inputSearch = document.querySelector('.inputSearch')
let vals = inputSearch.value
let res = document.querySelector(".result")
let addBtn = document.querySelector(".container button")
let h3 = document.querySelector(".resH3")
let spinner =  document.querySelector(".spinner")


addBtn.addEventListener('click',function(){
    res.innerHTML=""
    h3.innerHTML=""
    if (res.textContent==""){
        spinner.style.display="flex"
    }


searchRepos()

})



function searchRepos(){
        fetch(`https://api.github.com/search/repositories?q=${inputSearch.value}&sort=stars&order=desc`)
    .then(result=>result.json())
    .then((data)=>{data.items.forEach(element => {
        console.log(element)
        let div = document.createElement('div')
        div.className="elemDiv"
        let div2 = document.createElement('div')
        div2.className="elemDiv2"
        let div3 = document.createElement('div')
        div3.className="elemDiv3"
        let link = document.createElement('a')
        let img = document.createElement('img')
        img.className="avatar"
        link.setAttribute("href",element.html_url)
        link.setAttribute("target","_blank")
        img.setAttribute("src",element.owner.avatar_url)
        link.innerHTML=element.name
        link.className="reposLink"
        let p=document.createElement('a')
        p.innerHTML=`Автор: ${element.owner.login}`
        p.setAttribute("href",element.owner.html_url)
        p.setAttribute("target","_blank")
        p.className="autorLink"
        div3.innerHTML=`${element.stargazers_count} &#127775`
        div.append(img)
        div.append(div2)
        div.append(div3)
        div2.append(link)
        div2.append(p)
        res.append(div)
    })
    spinner.style.display="none"
    h3.innerHTML=`Найдено ${data.total_count} репозиториев`             
            })
        }

    

