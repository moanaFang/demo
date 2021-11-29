// nav
const active = document.querySelectorAll('header > nav li');
let activeState = false;
let preActive = 0;
for (let i=0; i<active.length; i++) {
    active[i].addEventListener('click', function() {
        active[preActive].style.backgroundColor = 'transparent';
        active[i].style.backgroundColor = '#E3DFEF';
        active[i].style.borderRadius = '30% 0 0 30%';
        active[i].style.clipPath = 'polygon(0 15%, 90% 15%, 100% 0%, 100% 100%, 90% 85%, 0 85%)';
        preActive = i;
    });
}



