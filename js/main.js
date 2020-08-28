// =========================


function change(){
    let img1 = document.querySelector('.plan1');
    let img2 = document.querySelector('.plan2');

    let link1 = Math.floor(Math.random()*5) +1;
    let link2 = Math.floor(Math.random()*5) +1;
    img1.src = `img/start-now-img${link1}.png`;
    img2.src = `img/start-now-img${link2}.png`;
    
}
setInterval(change,5000);




// =============================================
// =============================================

let config = document.querySelector('.grid');

let mixer = mixitup(config);

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

// ============================================
// ============================================
let popupTrigger = document.querySelectorAll('.popup__trigger');
let popup = document.querySelector('.popup')

function popup__trigger(){
    popup.classList.toggle('active');
}



// ============================================
// ============================================
let arrow = document.getElementById('select');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function(){
    arrow.classList.toggle('active');
})
 
// ============================================
// ============================================
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





















