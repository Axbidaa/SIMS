const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const buttonPopup = document.querySelector('.button-login-popup');
const iconClose = document.querySelector('.icon-close');
const home = document.querySelector('.home');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

buttonPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    home.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    home.classList.remove('active-popup');
});