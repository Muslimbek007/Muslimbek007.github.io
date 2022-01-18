var elNav = document.querySelector('.nav');
var elbody = document.querySelector('body');

document.addEventListener('scroll', function(){
    if(window.scrollY > 220){
        elNav.classList.add('nav--fixed');
        elbody.style.marginTop = elNav.offsetHeight + 'px';
    }
    else{
        elNav.classList.remove('nav--fixed');
        elbody.style.marginTop = 0;
    }
})


