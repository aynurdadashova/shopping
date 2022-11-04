import '../../styles/product.scss'
const slug=window.location.search.slice(1);
(async function (){
    try{
        const response=await fetch('https://api.storerestapi.com/categories')
        const categories=await response.json()
        const categoriesNames=categories.data
        categoriesNames.forEach(items => {
            const navbarNav=document.querySelector('.navbar-nav')
            const navLi=document.createElement('li')
            navLi.setAttribute('class', 'nav-item')
            const navLink=document.createElement('a')
            navLink.setAttribute('class', 'nav-link')
            navLink.setAttribute('href', '#')
            navLink.innerText=items.name
            navLi.appendChild(navLink)
            navbarNav.appendChild(navLi)
        });
    }
    catch(error){
        alert(error.message)
    }
})();

const productText=document.querySelector('.productText')
let htmlString='';
console.log(productText);
(async function (){
    try{
        const response=await fetch(`https://api.storerestapi.com/products/?${slug}`)
        const categories=await response.json()
           categories.data.forEach(items=>{
            console.log(items)
            htmlString+= `
            <h3>${items.title}</h3>
            <h4>$${items.price}</h4>
            <p>Category : ${items.category.name}</p>
            `

           })
           productText.innerHTML=htmlString
           
    }
    catch(error){
        alert(error.message)
    }
})();



