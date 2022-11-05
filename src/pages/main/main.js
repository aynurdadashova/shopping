import '../../styles/style.scss';
const page=window.location.search.slice(1).split('=')[1];
console.log(page);

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

    const row=document.querySelector('.row');
    const pagination=document.querySelector('.pagination')
    console.log(pagination)
    let htmlString='';
    const linkPage1=document.querySelector('.page1')
    const linkPage2=document.querySelector('.page2')
    const linkPage3=document.querySelector('.page3')
    console.log(linkPage1);
    console.log(linkPage2);
    console.log(linkPage3);
    (async function (){
        try{
            const response=await fetch(`https://api.storerestapi.com/products?limit=10&page=${page}`)
            const categories=await response.json()
               categories.data.forEach(items=>{
                htmlString+= `
                <div class="col-md-4">
                <div class="imgProdustc">
                <div class="icons">
                <i class="fa-solid fa-bag-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                </div>
                </div>
                <div class="textProducts">
                <div class="titleProducts">
                <h5>
                <a href="/product/?${items.slug}" class="titleLink">${items.title}</a>
                </h5>
                <h5>$${items.price}</h5>
                </div>
                <p><a href="">${items.category.name}</a></p>
                </div>
                </div>
                `
                console.log(items)
               })
               row.innerHTML=htmlString

        }
        catch(error){
            alert(error.message)
        }
    })();

