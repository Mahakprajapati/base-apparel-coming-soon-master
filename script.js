const button=document.querySelector('.button');
const input=document.querySelector('input');
const input_container=document.querySelector('.input-container');
console.log(input);

button.addEventListener('click',()=>{
    let inputValue=input.value;
    // console.log(inputValue);
    if(inputValue){
        input_container.classList.remove('errors');
        alert(`you will get updation through your email`);
    }else{
        input_container.classList.add('errors');
    }
});
