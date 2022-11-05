import '../../styles/login.scss'
import '../../styles/register.scss'
const form=document.forms[0]
const mailInput=document.querySelector('#userMail')
const passwordInput=document.querySelector('#userPassword')
const formButton=document.querySelector('button')
console.log(mailInput)
console.log(passwordInput)
console.log(formButton)
console.log(form)
form.addEventListener('submit', onSubmit)
function onSubmit(event){
event.preventDefault()

if(!mailInput.value.trim()){
    alert('mail boş olmamalıdır')
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
console.log(mailInput.value)
console.log(passwordInput.value)

createUser()
}

async function createUser(){
    const body={
        email: mailInput.value.trim(),
        password: passwordInput.value.trim(),
    }
    try{
        const response= await fetch('https://api.storerestapi.com/auth/login', {
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if(response.ok){
            alert('user created')
            setTimeout(()=>{
                window.location.replace(`/main`)
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

