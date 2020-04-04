import $ from 'jquery'


const interviewButton = document.querySelector('.interview-menu');
const indexButton = document.querySelector('.index-menu');
const colophonButton = document.querySelector('.colophon-menu');
const interviewDiv = document.querySelector('.interviews');
const indexDiv = document.querySelector('.index-words');
const colophonDiv = document.querySelector('.colophon');
const az = document.querySelector('.sort');
const freq = document.querySelector('.freq');

export function menuRight() {
    interviewButton.onclick = function () {
        indexDiv.style.display = "none";
        colophonDiv.style.display = "none";
        az.style.display = "none";
        freq.style.display = "none";
        interviewDiv.style.display = "block";
    };

    indexButton.onclick = function () {
        interviewDiv.style.display = "none";
        colophonDiv.style.display = "none";
        indexDiv.style.display = "block";
        indexDiv.style.height = "100%";
        freq.style.display = "inline";
        az.style.display = "inline";

    };

    colophonButton.onclick = function () {
        indexDiv.style.display = "none";
        interviewDiv.style.display = "none";
        az.style.display = "none";
        freq.style.display = "none";
        colophonDiv.style.display = "block";
    };

    // Menu Active
    setTimeout(function () {
        $(".menu-principal-sub a").click(function () {
            $(".menu-principal-sub a").removeClass("active");
            $(this).toggleClass("active");
        });

        $(".menu-right-sub li a").click(function () {

            $(".menu-right-sub li a").removeClass("active");
            $(this).toggleClass("active");
        });
    }, 500);


}


export function smoothScroll() {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function () {
                window.location.hash = hash;
            });
        }
    });


}

setTimeout(function () {
    $(window).scroll(function () {
        var position = $(this).scrollTop();
        var menu = document.querySelector(".menu-principal-sub");

        var sections = menu.getElementsByTagName("a");

        $(".content-article h1 a").each(function () {
            var target = $(this).offset().top;
            var id = $(this).attr('id');

            if (position >= target) {
                $('.menu-principal-sub > li > a').removeClass('active');
                $('.menu-principal-sub > li > a[href$=' + id + ']').addClass('active');
            }
        });
    });
}, 2000);


//scroll fix content (https://css-tricks.com/scroll-fix-content/)
/*$(window).scroll(function(){
    if ($(window).scrollTop() >= 400) {
        $('.full-text').addClass('full-text-fixed');
    }
    else {
        $('.full-text').removeClass('full-text-fixed');
    }
});*/