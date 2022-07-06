let inputSearch = document.querySelector('.inputSearch')
let vals = inputSearch.value
let res = document.querySelector(".result")
let addBtn = document.querySelector(".container button")


addBtn.addEventListener('click',function(){
searchRepos()

})


function searchRepos(){
    setTimeout(
        ( fetch(`https://api.github.com/search/repositories?q=${inputSearch.value}&sort=stars&order=desc`)
    .then(result=>result.json())
    .then((data)=>{data.items.forEach(element => {
        console.log(data.total_count)
        let div = document.createElement('div')
        let h3=document.createElement('h3')
        h3.innerHTML=`Найдено ${data.total_count} репозиториев`
        let link = document.createElement('a')
        link.setAttribute("href",element.html_url)
        link.setAttribute("target","_blank")
        link.innerHTML=element.name
        div.append(link)
        res.append(div)
    })

    let h3=document.createElement('h3')
    h3.innerHTML=`Найдено ${data.total_count} результатов`
    res.append(h3)
        
        
    
        
               
            })),1000)
         
        }

    

