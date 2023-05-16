const toggle = document.querySelector('.toggle-btn');

const background = document.querySelector('.background');
const toggleBall = document.querySelector('.toggle-ball');
const toggleBtn = document.querySelector('.toggle-btn');







toggle.addEventListener('click',function () {

    background.classList.toggle('color');
    toggleBall.classList.toggle('color');
    toggleBtn.classList.toggle('color');
});