import $ from 'jquery'
import {md} from './main_content'

const interviewsList = ["interview1.md", "interview2.md", "interview3.md", "interview4.md", "interview5.md", "interview6.md"];


export function getInterviewsToMarkdown() {

    let counter = 1;
    for (var i = 0; i < interviewsList.length; i++) {
        fetch(interviewsList[i])
            .then(response => response.text())
            .then(data => {
                var locationInterviews = document.querySelector('#div1')
                var newContent = md.render(data);
                var newDiv = document.createElement("div");
                newDiv.className = "abrir";
                newDiv.classList.add("interview-" + counter++);
                newDiv.innerHTML = newContent;
                document.getElementById('div1').appendChild(newDiv);
                var h1s = newDiv.getElementsByTagName('h1')[0];
                document.querySelector(".abrir").click(function () {
                    document.querySelector(".abrir").removeClass("active");
                    this.addClass("active");
                });
            })
    }
};

export function menuInterviews() {
    setTimeout(function () {
        //TODO passer a javascript
        $(".abrir h1").click(function () {
            $(".abrir h1").removeClass("active");
            $(this).siblings().toggle();
            $(this).toggleClass("active");
        });


        // var abrir =document.querySelector(".abrir");
        // abrir.click(function () {
        //     this.removeClass("active");
        //     this.addClass("active");
        //
        // });

        //TODO reparer ce code! c'est sale


        // var inter = document.querySelectorAll('.abrir');
        // console.log(inter);
        //
        // inter.click(function () {
        //
        //     console.log(inter);
        //
        // });




        $(".open-interview-1").click(function () {


            $(".interview-1 h1").toggleClass("active");
            $(".interview-1 p").toggle();
            $(".interview-2 p").hide();
            $(".interview-3 p").hide();
            $(".interview-4 p").hide();
            $(".interview-5 p").hide();
            $(".interview-6 p").hide();

        });

        $(".open-interview-2").click(function () {
            $(".interview-2 h1").toggleClass("active")
            $(".interview-2 p").toggle();
            $(".interview-1 p").hide();
            $(".interview-3 p").hide();
            $(".interview-4 p").hide();
            $(".interview-5 p").hide();
            $(".interview-6 p").hide();

        });

        $(".open-interview-3").click(function () {
            $(".interview-3 h1").toggleClass("active");
            $(".interview-3 p").toggle();
            $(".interview-2 p").hide();
            $(".interview-4 p").hide();
            $(".interview-5 p").hide();
            $(".interview-6 p").hide();
            $(".interview-1 p").hide();

        });

        $(".open-interview-4").click(function () {
            $(".interview-4 h1").toggleClass("active");
            $(".interview-4 p").toggle();
            $(".interview-1 p").hide();
            $(".interview-2 p").hide();
            $(".interview-3 p").hide();
            $(".interview-5 p").hide();
            $(".interview-6 p").hide();


        });

        $(".open-interview-5").click(function () {
            $(".interview-5 h1").toggleClass("active");
            $(".interview-5 p").toggle();
            $(".interview-1 p").hide();
            $(".interview-2 p").hide();
            $(".interview-3 p").hide();
            $(".interview-4 p").hide();
            $(".interview-6 p").hide();

        });

        $(".open-interview-6").click(function () {
            $(".interview-6 h1").toggleClass("active");
            $(".interview-6 p").toggle();
            $(".interview-1 p").hide();
            $(".interview-2 p").hide();
            $(".interview-3 p").hide();
            $(".interview-4 p").hide();
            $(".interview-5 p").hide();

        });


        $(".open-interview-5").click(function () {
            $(".interview-5 h1").toggleClass("active");
            $(".interview-5 p").toggle();
            $(".interview-1 p").hide();
            $(".interview-2 p").hide();
            $(".interview-3 p").hide();
            $(".interview-4 p").hide();
            $(".interview-6 p").hide();


        });


        $(".open-interview-6").click(function () {
            $(".interview-6 h1").toggleClass("active");
            $(".interview-6 p").toggle();
            $(".interview-1 p").hide();
            $(".interview-2 p").hide();
            $(".interview-3 p").hide();
            $(".interview-4 p").hide();
            $(".interview-5 p").hide();


        });


    }, 500);
};










