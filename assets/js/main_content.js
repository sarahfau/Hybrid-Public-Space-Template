import $ from 'jquery'


export const md = require('markdown-it')()
    .use(require('markdown-it-container'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-classy'));

// Take the Markdown File and passes it to HTML

export function getmarkdownFromAnywhere(textMD,DIV) {

    fetch(textMD)
        .then(response => response.text())
        .then(data => {
            document.querySelector(DIV).innerHTML = (md.render(data));
        })

};


export function getmarkdown() {

    fetch('Thesis.md')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#content').innerHTML = (md.render(data));
        })

};

export function createMenu() {
    setTimeout(function () {
        var list = document.querySelector("#sidebar")
        var menuH1s = document.querySelector(".content-article").querySelectorAll("h1");
        // console.log(menuH1s);
        $(".content-article h1").each(function () {
            $(this).prepend('<a name="' + $(this).text() + '"></a>');
            $(list).append('<li><a href="#' + $(this).text() + '">' + $(this).text() + '</a></li>');
        });
    }, 500);

};

export function footnotesElements() {
    setTimeout(function () {
    var elements = document.getElementsByClassName("footnote-ref");
    for (var i = 0; i < elements.length; ++i) {
        elements[i].innerHTML = elements[i].innerHTML.replace('[', ' ').replace(']', '');
    }
    }, 500);
}

export function putNotes(footerClassName) {

    setTimeout(function () {
        const footerNotesElements = document.querySelectorAll(footerClassName);
        const noteContainer = document.querySelector(".r-notes-container");
        let prevFootnoteBottomPosition = 0;
        noteContainer.style.opacity = 0;
        noteContainer.style.transition = "opacity 1000ms ease-in-out";
        noteContainer.innerHTML = "";

        for (const footerElement of footerNotesElements) {

            const copyOfFooterElement = footerElement.cloneNode(true);
            const footerID = copyOfFooterElement.id;
            const num = footerID.substring(2);
            const numElementInTextID = "#fnref" + num;
            const numElement = document.querySelector(numElementInTextID);
            copyOfFooterElement.style.display = "block";
            footerElement.style.display = "none";
            if (numElement instanceof HTMLElement) {
                const marginTopNote = 20; //px unit
                const noteElementToAdd = noteContainer.appendChild(copyOfFooterElement);
                const noteNumberValueElement = document.createElement("span");
                let first;
                let topPosition = numElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
                first = false;
                noteNumberValueElement.innerText = num + " ";
                noteNumberValueElement.className = "footnote-counter";
                copyOfFooterElement.insertBefore(noteNumberValueElement, copyOfFooterElement.firstChild);



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
    }, 500);
};

export function ResizeFootnotes() {
    window.addEventListener("resize", function () {
        putNotes(".footnote-item");


    });
};

export function porcentage() {
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
};




