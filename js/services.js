let navTrigger = document.querySelector('.nav__trigger');
        let mobileNav = document.querySelector('.mobile__nav');

        function navToggle(){
            mobileNav.classList.toggle('active');
        }

// ==============================================
// ==============================================

window.addEventListener('scroll', function(){
    let nav = document.querySelector('.nav');
    let value = Math.floor(window.pageYOffset);
    if(value >= 50){
        nav.classList.add('sticky')
    }else{
        nav.classList.remove('sticky');
    }
})

// ============================================
// ============================================
let arrow = document.getElementById('select');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function(){
    arrow.classList.toggle('active');
})

// =============================================
// =============================================
let buttons = document.querySelectorAll('.control');

buttons.forEach(button => {
    button.addEventListener('click',function(){
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// ==============================================
// ==============================================
let navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(navLink => {
    navLink.addEventListener('click',function(){
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// ====================================================
// ====================================================

window.addEventListener('scroll', function(){
    let scrollTop = document.querySelector('.scroll__top');
    let value = Math.floor(window.pageYOffset);
    if(value >= 400){
        scrollTop.classList.add('active')
    }else{
        scrollTop.classList.remove('active');
    }
})