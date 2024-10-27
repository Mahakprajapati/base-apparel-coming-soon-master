const button=document.querySelector('.button');
const input=document.querySelector('input');
const input_container=document.querySelector('.input-container');
// console.log(input);

let emailPattern=/^[A-Za-z._]{4,}[0-9]{0,3}@[gmail.com]{9}$/ ;

button.addEventListener('click',()=>{
    let inputValue=input.value;
    // console.log(inputValue);
    if(emailPattern.test(input.value)){
        input_container.classList.remove('errors');
        alert(`you will get updation through your email ${inputValue}`);
    }else{
        input_container.classList.add('errors');
    }
});
