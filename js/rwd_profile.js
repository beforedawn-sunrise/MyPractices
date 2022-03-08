$(document).ready(function () {
    // 滑下來會出現紅色menu
    $(window).scroll(function () {
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }

        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // 滑上去的時候
    $(".scroll-up-btn").click(function () {
        $("html").animate({scrollTop: 0 });
    });


    // 手機版menu
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // 打字動畫
    var typed = new Typed(".typing",{
        strings:["網頁前端開發","網頁SEO"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing-2", {
        strings: ["網頁前端開發", "網頁SEO"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel
    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        AutoplayTimeOut:2000,
        AutoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },

            600:{
                items: 2,
                nav: false,
            },

            1000:{
                items: 3,
                nav: false,
            }
        }
    });
});