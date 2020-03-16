const interviewButton = document.querySelector('.interview-menu');
const indexButton = document.querySelector('.index-menu');
const colophonButton = document.querySelector('.colophon-menu');
const interviewDiv =  document.querySelector('.interviews')
const indexDiv =  document.querySelector('.index-words')
const colophonDiv =  document.querySelector('.colophon')

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


interviewButton.onclick = function () {
   indexDiv.style.display="none";
   colophonDiv.style.display="none";
    interviewDiv.style.display="block";



};

indexButton.onclick = function () {
    interviewDiv.style.display="none";
    colophonDiv.style.display="none";
    indexDiv.style.display="block";



};

colophonButton.onclick = function () {
    indexDiv.style.display="none";
    interviewDiv.style.display="none";
    colophonDiv.style.display="block";



};


