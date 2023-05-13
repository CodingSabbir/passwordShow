
// var password=document.querySelector('#password');
// var togglePassword=document.querySelector('#togglePassword');

// togglePassword.addEventListener('click',function(){
// var type=  password.getAttribute('type')=== 'password'? 'text':'password'
// password.setAttribute('type',type)
// togglePassword.classList.toggle("bi-eye");
// });



var password=document.querySelector('#password');
var togglePassword=document.querySelector('#togglePassword');

togglePassword.addEventListener('click',function(){
var type=    password.getAttribute('type')==='password'? 'text':'password'
    password.setAttribute('type',type)
    togglePassword.classList.toggle('bi-eye')
})