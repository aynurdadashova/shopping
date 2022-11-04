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
    alert('name string olmalidir')
    return
}
if(!nameInput.value.trim()){
    alert('name bosh olmamalidir')
    return
}

if(!mailInput.value.trim()){
    alert('mail bosh olmamalidir')
    return
}
if(!numberInput.value.trim()){
    alert('number bosh olmamalidir')
    return
}
let patternNumber=/\d/g
if(!numberInput.value.match(patternNumber)){
    alert('number daxil edin')
    return
}

if(!passwordInput.value.trim()){
    alert('password bosh olmamalidir')
    return
}
let patternPassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
if(!passwordInput.value.match(patternPassword)){
    alert('Minimum eight characters, at least one letter and one number:')
    return
}
if(!repeatPasswordInput.value.trim()){
    alert('password-repeat bosh olmamalidir')
    return
}
if(repeatPasswordInput.value!==passwordInput.value){
    alert("password don't match")
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



