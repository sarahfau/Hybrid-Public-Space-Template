import $ from 'jquery'
// Take the Markdown File and passes it to HTML

$(document).ready(function () {

  var md = require('markdown-it')()
      .use(require('markdown-it-container'))
      .use(require('markdown-it-footnote'))
      .use(require('markdown-it-classy'));
  

  $.get("Thesis.md", function (data) {
    $('#content').html(md.render(data));

    setTimeout(function () {

      var list = $('#sidebar');

      $(".content-article h1").each(function() {
        $(this).prepend('<a name="' + $(this).text() + '"></a>');
        $(list).append('<li><a href="#' + $(this).text() + '">' +  $(this).text() + '</a></li>');

      });

      putNotes(".footnote-item")
      var elements = document.getElementsByClassName("footnote-ref");
      for (var i = 0; i < elements.length; ++i) {
        elements[i].innerHTML = elements[i].innerHTML.replace('[',' ').replace(']','');
      }
    }, 200);



  });

  var sentences = document.querySelector('#content');
  var keywords = document.querySelector('#keywords');

  keywords.addEventListener('click', function(event){
    var target = event.target;
    var text = sentences.textContent;
    var regex = new RegExp('('+target.textContent+')', 'ig');
    text = text.replace(regex, '<span class="highlight">$1</span>');
    sentences.innerHTML = text;
  }, false);

  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();
  //
  //     document.querySelector(this.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });
  // });




});


function putNotes(footerClassName) {
    const noteContainer = document.querySelector(".r-notes-container");
    noteContainer.style.opacity = 0;
    noteContainer.style.transition = "opacity 1000ms ease-in-out";
    noteContainer.innerHTML = "";

    const footerNotesElements = document.querySelectorAll(footerClassName);


    let prevFootnoteBottomPosition = 0;
    for (const footerElement of footerNotesElements) {
      footerElement.style.display = "none";
      const copyOfFooterElement = footerElement.cloneNode(true);
      copyOfFooterElement.style.display = "block";
      const footerID = copyOfFooterElement.id;
      const num = footerID.substring(2);
      const numElementInTextID = "#fnref" + num;
      const numElement = document.querySelector(numElementInTextID);
      if (numElement instanceof HTMLElement) {
        const noteElementToAdd = noteContainer.appendChild(copyOfFooterElement);
        let first;
        first = false;
        const noteNumberValueElement = document.createElement("span");
        noteNumberValueElement.innerText = num + " ";
        noteNumberValueElement.className = "footnote-counter";
        copyOfFooterElement.insertBefore(noteNumberValueElement, copyOfFooterElement.firstChild);
        let topPosition = numElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

        // console.log("body top", document.body.getBoundingClientRect().top)
        // console.log("body numElement", numElement.getBoundingClientRect().top)

        const marginTopNote = 20; //px unit

        if (topPosition - marginTopNote <= prevFootnoteBottomPosition) {
          topPosition = prevFootnoteBottomPosition + marginTopNote;
        }
        noteElementToAdd.className = "font-small footnote";
        noteElementToAdd.style.position = "absolute";
        noteElementToAdd.style.top = topPosition + "px";
        prevFootnoteBottomPosition = noteElementToAdd.getBoundingClientRect().height + topPosition;
      }
    }
    noteContainer.style.opacity = 1;




  }

  window.addEventListener("resize", function () {
    putNotes(".footnote-item");




  });

  $(function () {
    //porcetange
    $(window).scroll(function () {
      var hauteur = $(document).height() - $(window).height();
      var pourcentage = (100 * $(window).scrollTop()) / hauteur;
      $(".dizaine").css("opacity", 1);
      $(".compteur_pourcentage").html(Math.round(pourcentage));
    });


    if ($("html").hasClass("mobile")) {
      var windowWidth = $(window).width();
    }
  });







