import './../styles/style.scss';

function burgerClick() {
    document.querySelector('.first-screen__header').classList.toggle('active');
}

document.querySelector('.header__exit').addEventListener('click', burgerClick)
document.querySelector('.header__burger').addEventListener('click', burgerClick)