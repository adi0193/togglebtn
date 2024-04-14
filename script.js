const changeThmebtn=document.querySelector('.change-theme-btn');

const body=document.querySelector('body');


changeThmebtn.addEventListener('click',()=>{
    if(body.classList.contains('light')){
    body.classList.remove('light');
    body.classList.add('dark');
    }else{
         body.classList.remove('dark')
         body.classList.add('light')
    }
 if(changeThmebtn.classList.contains('light')){
    changeThmebtn.classList.remove('light')
    changeThmebtn.classList.add('dark')
 }else{
    changeThmebtn.classList.remove('dark')
    changeThmebtn.classList.add('light')
 }
})