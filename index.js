window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const serviceModals = document.querySelectorAll(".service-modal");
const closeModalBtn = document.querySelectorAll(".close-btn");
const readMoreBtn = document.querySelectorAll(".read-more-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

readMoreBtn.forEach((readBtn, i) => {
    readBtn.addEventListener("click", ()=> {
        modal(i);
    });
});

closeModalBtn.forEach((closeBtn) =>{
    closeBtn.addEventListener("click", ()=>{
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio Modal

const portfolioModals = document.querySelectorAll(".portfolio-modal");
const modalBtnsClose = document.querySelectorAll(".portfolio-close-btn");
const imgCards = document.querySelectorAll(".img-crd");

var portfolioModal = function(portfolioModalClick){
    portfolioModals[portfolioModalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", ()=> {
        portfolioModal(i);
    });
});

modalBtnsClose.forEach((modalCloseBtn) =>{
    modalCloseBtn.addEventListener("click", ()=>{
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

// Dark / light mode theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains('sun') ? "sun" : "moon";

const savedTheme = localStorage.getItem('saved-theme');
const savedIcon = localStorage.getItem('saved-icon');

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]('dark-theme');
    themeBtn.classList[savedIcon === "sun" ?  "add" : "remove"]('sun');
}

//Navbar-toggle

const menuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const navBar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.nav-items');


menuBtn.addEventListener('click', ()=>{
    navBar.classList.add('active');
});

navCloseBtn.addEventListener('click', ()=>{
    navBar.classList.remove('active');
});

navItems.forEach((item) => {
    item.addEventListener('click', () =>{
        navBar.classList.remove('active');
    });
});


//scroll animations
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
 });

 ScrollReveal().reveal('.home .info h2, .about .container .title, .service-section .container .title', {delay: 500, origin: 'left'});
 ScrollReveal().reveal('.home .info h3, .home .info p, .about-img, .sub-contact-title, .portfolio .container .content, .contact .container .content .contact-left', {delay: 600, origin: 'left'});
 ScrollReveal().reveal('.home .info .btn, .home .scroll, .about-info .download, .contact-btn,', {delay: 700, origin: 'bottom'});
 ScrollReveal().reveal('.social-icons i, .about-info .desc p, .service-section .container .sub-title, .service-section .container .content, footer', {delay: 500, origin: 'bottom', interval: 200});
 ScrollReveal().reveal('.home-img, .about-info .desc h3, .sub-contact, .portfolio .container .title, .contact .container .content .contact-right', {delay: 500, origin: 'right'});
 ScrollReveal().reveal('.contact .container .contact-title', {delay: 500, origin: 'bottom'});