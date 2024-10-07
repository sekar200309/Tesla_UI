let menubtn = document.querySelector('.menu-btns');
let whitebg = document.querySelector('.mobiles');
let mobile = document.querySelector('.mobile');

menubtn.addEventListener('click', ()=>{
    console.log('clicked');
    mobile.classList.toggle('show-menu');

    
    whitebg.classList.toggle('mobile-nav');
    
})