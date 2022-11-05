import '../../styles/product.scss'
const slug=window.location.search.slice(1);
console.log(slug);
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

const h3=document.querySelector('h3')
const h4=document.querySelector('h4')
const p=document.querySelector('p');
(async function(){
     try{
        const response=await fetch(`https://api.storerestapi.com/products/${slug}`)
        const categories=await response.json()
        h3.innerText= categories.data.title
        h4.innerText= '$ '+ categories.data.price
        p.innerText= categories.data.category.name
        }
    catch(error){
        alert(error.message)
    }

})()