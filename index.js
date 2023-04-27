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

const menuBtn = document.querySelector('nav-menu-btn');
const navCloseBtn = document.querySelector('nav-close-btn');