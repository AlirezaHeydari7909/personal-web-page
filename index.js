document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
      link.setAttribute('aria-current', 'page')
    }
  })

const menuBurger = document.querySelector('.navbar-burger');
const list = document.querySelector('.navbar');
var bool = true;
menuBurger.addEventListener('click', () =>{
    if(bool == true){
        menuBurger.classList.add('open');
        list.style.display = 'block';
        bool = false;
    }
    else{
        menuBurger.classList.remove('open');
        list.style.display = 'none'
        bool = true;

    }
})