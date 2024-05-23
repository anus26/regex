
 const emailRegex=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
 const usernameRegex = /^[a-zA-Z0-9]{4,5}$/;
const cnicRegex= /^\d{11}$/;
const passwordRegex = /^(?=.*\d)[a-zA-Z0-9]{8,}$/;

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    
    const form=document.querySelector('#form')
    const username=document.querySelector('#username')
    const password=document.querySelector('#password')
    const cnic=document.querySelector('#cnic')
    const email=document.querySelector('#email')
    // console.log(username.value);
    // console.log(cnic.value);
    // console.log(email.value);`
    // console.log(password.value);
    
    console.log(emailRegex.test(email.value));
    console.log(cnicRegex.test(cnic.value));
    console.log(usernameRegex.test(username.value));
    console.log(passwordRegex.test(password.value));

})
