// Hamburger menu
const btn_lines = document.querySelectorAll('.ham-btn-line');
const btn_text_menu = document.querySelector('.ham-menu');
const btn_text_close = document.querySelector('.ham-close');
const ham_btn = document.querySelector('.hum-menu');
const side_nav = document.querySelector('.side-nav-wrapper');
const side_nav_anchor = document.querySelectorAll('.nav-item-anchor')


ham_btn.addEventListener("click", () =>{
    btn_lines.forEach((ele) =>{
        ele.classList.toggle('dibya');

        if (ele.classList.contains('dibya')){
            btn_text_menu.classList.remove('dibya-show')
            btn_text_close.classList.add('dibya-show')
        }else{
            btn_text_menu.classList.add('dibya-show')
            btn_text_close.classList.remove('dibya-show')
        };
    });

    // side nav
    side_nav.classList.toggle('dibya-show');

    side_nav_anchor.forEach((element) =>{
        element.addEventListener('click', () =>{
            btn_lines.forEach((ele) =>{
                if (ele.classList.contains('dibya')){
                    ele.classList.remove('dibya');
                    btn_text_menu.classList.add('dibya-show')
                    btn_text_close.classList.remove('dibya-show')
                };
            });
            if (side_nav.classList.contains('dibya-show')){
                side_nav.classList.remove('dibya-show');
            }
        })
    })
});


// Height Hamburger and logo
let hamburger_wrapper = document.querySelector('.ham-menu-wrapper');
let logo_wrapper = document.querySelector('.logo-wrapper');
let logo_anchor = document.querySelectorAll('.logo-anchor a');
let logo_anchor_jinex = document.querySelector('.logo-anchor-jinex');
let logo_anchor_dibya = document.querySelector('.logo-anchor-dibya');
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    if (scrollY < (44 * 5 / 2)){
        if (!logo_anchor_jinex.classList.contains('show'))logo_anchor_jinex.classList.add('show');
        if (logo_anchor_dibya.classList.contains('show'))logo_anchor_dibya.classList.remove('show');
    }else{
        if (logo_anchor_jinex.classList.contains('show'))logo_anchor_jinex.classList.remove('show');
        if (!logo_anchor_dibya.classList.contains('show'))logo_anchor_dibya.classList.add('show');
    };

    if (scrollY < (44 * 5)){
        px =`calc(100px - ${scrollY / 5}px)`;
        hamburger_wrapper.style.height = px;
        logo_wrapper.style.height = px;

        if (scrollY < 10 * 5) {
            logo_anchor.forEach((anchor) =>{
                size =`calc(60px - ${scrollY / 5}px)`;
                anchor.style.fontSize = size;
            })
        }
    }
    else if (scrollY >= (10 * 5)){
        logo_anchor.forEach((anchor) =>{
            anchor.style.fontSize = '50px';
        })
    }

    if (scrollY >= (44 * 5)){
        hamburger_wrapper.style.height = '56px';
        logo_wrapper.style.height = '56px';
    };

});

// Intersection Observer for nice animations

let birthday_decoration = document.querySelector('.birthday-decoration');
let birthday_text = document.querySelector('.birthday-text');
let confetti = document.querySelectorAll('.confetti');

let Observer = new IntersectionObserver(function (items){
    items.forEach((item) => {
        if (item.isIntersecting){
            item.target.classList.add('intersected',);
            Observer.unobserve(item.target);
            // if (item.target.classList.contains('birthday-text') && item.target.classList.contains('intersected')){
            //     console.log('Sushant is awesome')
            //     logo_anchor_dibya.classList.add('animated')
            // };
            
        };
    });
    
},{
    threshold:0.5,
    rootMargin: '-40px'
});

confetti.forEach((item) =>{
    Observer.observe(item)
});
Observer.observe(birthday_decoration);
Observer.observe(birthday_text)
