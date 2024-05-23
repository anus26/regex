

const form=document.querySelector('#form')
const username=document.querySelector('#username')
const password=document.querySelector('#password')
const cnic=document.querySelector('#cnic')
const email=document.querySelector('#email')


 let emailRegex=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/

 let cnicRegex= /^42\d{11}$/;

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    // console.log(username.value);
    // console.log(cnic.value);
    // console.log(email.value);
    // console.log(password.value);
    
console.log(emailRegex.test(email.value));
    console.log(cnicRegex.test(email.value));
})
