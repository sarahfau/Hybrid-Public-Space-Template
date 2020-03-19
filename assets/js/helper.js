const interviewButton = document.querySelector('.interview-menu');
const indexButton = document.querySelector('.index-menu');
const colophonButton = document.querySelector('.colophon-menu');
const interviewDiv = document.querySelector('.interviews')
const indexDiv = document.querySelector('.index-words')
const colophonDiv = document.querySelector('.colophon')
import $ from 'jquery'

interviewButton.onclick = function () {
    indexDiv.style.display = "none";
    colophonDiv.style.display = "none";
    interviewDiv.style.display = "block";
};

indexButton.onclick = function () {
    interviewDiv.style.display = "none";
    colophonDiv.style.display = "none";
    indexDiv.style.display = "block";
};

colophonButton.onclick = function () {
    indexDiv.style.display = "none";
    interviewDiv.style.display = "none";
    colophonDiv.style.display = "block";
};


setTimeout(function () {
    $("#sidebar a").click(function () {
        $("#sidebar a").removeClass("active");
        $(this).toggleClass("active");
    });

    $(".menu-right-sub li a").click(function () {

        $(".menu-right-sub li a").removeClass("active");
        $(this).toggleClass("active");
    });
}, 2000);




