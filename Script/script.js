// Menu
const menuBtn = document.querySelector('#menu-icon');
// Navbar Mobile
const navMobile = document.querySelector('#menu-navigation');

navMobile.classList.add('menu-closed');


// Function | Open Navigation:
function openNavbar() {
    navMobile.classList.replace('menu-closed', 'menu-active');
    navMobile.style.display = 'grid';
    menuBtn.classList.replace('fi-rr-menu-burger','fi-br-cross');
};
// Function | Closed Navigation:
function closeNavbar() {
    navMobile.classList.replace('menu-active', 'menu-closed')
    navMobile.style.display = 'grid';
    menuBtn.classList.replace('fi-br-cross','fi-rr-menu-burger');
}

// Event | Open & Closed -> Menu Navigation:
menuBtn.addEventListener('click', () => {
    if(navMobile.classList.contains('menu-closed')){
        openNavbar();
    }else{
        closeNavbar();
    }
});







