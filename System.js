const view = document.querySelector('#mobile-view');
const viewLinks = document.querySelector('.navbar_menu');

//Display Mobile View
const mobileView = () => {

    view.classList.toggle('is-active');
    viewLinks.classList.toggle('active');
}

view.addEventListener('click', mobileView);