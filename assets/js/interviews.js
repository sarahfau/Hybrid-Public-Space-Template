$(document).ready(function () {


    var md = window.markdownit()
            .use(markdownitFootnote)
            .use(markdownItAttrs)
            .use(markdownitContainer),
        warning;




    $.get("Interviews.md", function (data) {
        $('#interviews').html(md.render(data));

        setTimeout(function () {

            var list = $('#list-interviews');

            // $("#interviews h1").each(function() {
            //     $(this).prepend('<a name="' + $(this).text() + '"></a>');
            //     $(list).append('<a class="open-interview" href="#' + $(this).text() + '">' +  $(this).text() + '</a>');
            //
            // });

            const index = document.getElementById("interviews");
            const interview_button = index.getElementsByTagName('h1')[0];
            interview_button.classList.add("click");



// console.log(palabras);





            interview_button.onclick = function() {

                const ar = index.getElementsByTagName('p')
                for (i = 0; i < ar.length; ++i)
                {
                    if(ar[i].style.display != "none") //the element is visible
                    {
                        ar[i].style.display = "none";
                    }
                    else
                    {
                        ar[i].style.display = "block"; //If you need to make it block explicitly, otherwise ""
                    }
                }

            };







        }, 200);





    });

});
