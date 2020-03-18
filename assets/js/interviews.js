import $ from 'jquery'

const md = require('markdown-it')().use(require('markdown-it-container')).use(require('markdown-it-footnote')).use(require('markdown-it-classy'));
const interviewsList = ["interview1.md", "interview2.md", "interview3.md", "interview4.md", "interview5.md", "interview6.md"];


$(document).ready(function () {

    function getInterviewsToMarkdown() {

        for (var i = 0; i < interviewsList.length; i++) {

            $.get(interviewsList[i], function (data) {
                var locationInterviews = document.querySelector('#div1')
                var newContent = md.render(data);
                var newDiv = document.createElement("div");
                newDiv.className = "abrir";
                newDiv.innerHTML = newContent;
                document.getElementById('div1').appendChild(newDiv);
                var h1s = newDiv.getElementsByTagName('h1')[0];
                $(".abrir").click(function () {
                    $(".abrir").removeClass("active");
                    $(this).addClass("active");
                } );
            });
        }
    }

    getInterviewsToMarkdown();

    setTimeout(function () {
        $(".abrir h1").click(function () {
            $(this).siblings().toggle('5000');
            $(this).toggleClass("active");
            // $(this).toggleClass("underline");
        });
    }, 2000);


});





