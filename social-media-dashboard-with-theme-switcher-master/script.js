const toggle = document.querySelector('.toggle-btn');

const background = document.querySelector('.background');
const toggleBall = document.querySelector('.toggle-ball');
const toggleBtn = document.querySelector('.toggle-btn');
const navTitle = document.querySelector('.nav-title');
const navSub = document.querySelector('.nav-sub');
const subTitle = document.querySelector('.sub-title');






toggle.addEventListener('click',function () {

    background.classList.toggle('color');
    toggleBall.classList.toggle('color');
    toggleBtn.classList.toggle('color');
    navTitle.classList.toggle('color');
    navSub.classList.toggle('color');
    subTitle.classList.toggle('color');
    

});