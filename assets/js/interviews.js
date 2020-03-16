import $ from 'jquery'

$(document).ready(function () {

    var md = require('markdown-it')()
        .use(require('markdown-it-container'))
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-classy'));


    $.get("interviews.md", function (data) {
        $('#interviews').html(md.render(data));

        setTimeout(function () {

            var list = $('#list-interviews');

            $("#interviews h1").each(function () {
                $(this).prepend('<a name="' + $(this).text() + '"></a>');
                $(list).append('<a class="open-interview" href="#' + $(this).text() + '">' + $(this).text() + '</a>');

            });

            const index = document.getElementById("interviews");
            const interview_button = index.getElementsByTagName('h1')[0];
            interview_button.classList.add("click");


            interview_button.onclick = function () {

                const ar = index.getElementsByTagName('p')
                let i;
                for (i = 0; i < ar.length; ++i) {
                    if (ar[i].style.display != "none") //the element is visible
                    {
                        ar[i].style.display = "none";
                    } else {
                        ar[i].style.display = "block"; //If you need to make it block explicitly, otherwise ""
                    }
                }

            };


        }, 200);


    });

});

