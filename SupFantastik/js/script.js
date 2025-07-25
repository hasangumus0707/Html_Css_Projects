//Toggle mobile menu
document.addEventListener('DOMContentLoaded', function(){
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleButton.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });

    // Accordion animations on scroll
    const accordionItems = document.querySelectorAll('.accordion li');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    accordionItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

//Change Navbar background on scroll
window.addEventListener('scroll',function(){
const navbar = document.querySelector('.navbar');

if(window.scrollY > 0){
    navbar.classList.add('navbar-scroll');
}else{
    navbar.classList.remove('navbar-scroll');
}
});
