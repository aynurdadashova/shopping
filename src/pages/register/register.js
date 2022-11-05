import '../../styles/register.scss'
const form=document.forms[0]
const nameInput=document.querySelector('#userName')
const mailInput=document.querySelector('#userMail')
const numberInput=document.querySelector('#userNumber')
const passwordInput=document.querySelector('#userPassword')
const repeatPasswordInput=document.querySelector('#passwordRepeat')
const formButton=document.querySelector('button')
form.addEventListener('submit', onSubmit)
function onSubmit(event){
event.preventDefault()
let patternName=/[a-zA-Z]+/g
if(!nameInput.value.match(patternName)){
    alert('name string olmalıdır')
    return
}
if(!nameInput.value.trim()){
    alert('name boş olmamalıdır')
    return
}

if(!mailInput.value.trim()){
    alert('mail boş olmamalıdır')
    return
}
if(!numberInput.value.trim()){
    alert('number boş olmamalıdır')
    return
}
let patternNumber=/\d/g
if(!numberInput.value.match(patternNumber)){
    alert('number daxil edin')
    return
}

if(!passwordInput.value.trim()){
    alert('password boş olmamalıdır')
    return
}
if(passwordInput.value.length<6){
    alert('passwordun uzunlugu minimum 6 olmalıdır ')
    return
}
if(!repeatPasswordInput.value.trim()){
    alert('password-repeat boş olmamalıdır')
    return
}
if(repeatPasswordInput.value!==passwordInput.value){
    alert("parol uyğun gəlmir")
}
createUser()
}

async function createUser(){
    const body={
        name: nameInput.value.trim(),
        email: mailInput.value.trim(),
        number: numberInput.value.trim(),
        password: passwordInput.value.trim(),
        password_repeat: repeatPasswordInput.value.trim()
    }
    try{
        const response= await fetch(`https://api.storerestapi.com/auth/register`, {
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if(response.ok){
            alert('Yeni user yarandi!')
            setTimeout(()=>{
                window.location.replace(`/login`)
            }, 1000)
        }
        else{
            alert('Yeni user yaranarken xeta bash verdi!')

        }
    
    }
    catch(error){
        alert(error.message)
    }
}



