import $ from 'jquery'

$(document).ready(function () {


    

    // var prevScrollpos = window.pageYOffset;
    //     window.onscroll = function() {
    //         var currentScrollPos = window.pageYOffset;
    //         if (prevScrollpos > currentScrollPos) {
    //             document.querySelector(".title").style.top = "0";
    //         } else {
    //             document.querySelector(".title").style.top = "-50px";
    //         }
    //         prevScrollpos = currentScrollPos;
    //     }

    var md = require('markdown-it')()
        .use(require('markdown-it-container'))
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-classy'));

// var newdiv;
// const interviews = document.querySelector("interviews");
//     $.get("interview2.md", function (data) {
//
//         var newdiv= interviews.createElement('div');
//         newdiv.className="new_interview";
//         $('new_interview').html(md.render(data));});

    $.get("interviews.md", function (data) {
        $('#interviews').html(md.render(data));

        setTimeout(function () {

            var list = $('#list-interviews');

            $("#interviews-list h1").each(function () {
                $(this).prepend('<a name="' + $(this).text() + '"></a>');
                $(list).append('<a class="open-interview" href="#' + $(this).text() + '">' + $(this).text() + '</a>');

            });

            const index = document.getElementById("interviews");
            const interview_button = index.getElementsByTagName('h1')[0];
            interview_button.classList.add("click");




            // const takeMarkdown = function(number) { return number * number }
            // var x = square(4) // x gets the value 16



    interview_button.onclick = function () {

        const ar = index.getElementsByTagName('p')
        let i;
        for (i = 0; i < ar.length; ++i) {
            if (ar[i].style.display != "none") {
                ar[i].style.display = "none";

            } else {

                ar[i].style.display = "block";

            }
        }

    };




        }, 500);


    });

});

