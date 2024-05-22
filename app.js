

const form=document.querySelector('#form')
const username=document.querySelector('#username')
const passward=document.querySelector('#passward')
const cnic=document.querySelector('#cnic')
const email=document.querySelector('#email')




form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(username.value);
})
