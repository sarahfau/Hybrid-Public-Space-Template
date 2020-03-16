var sentences = document.querySelector('#content');
var keywords = document.querySelector('#keywords');

keywords.addEventListener('click', function(event){

    var target = event.target;
    var text = sentences.innerHTML;
    var regex = new RegExp('('+target.innerHTML+')', 'ig');
    text = text.replace(regex, '<span class="highlight">$1</span>');
    sentences.innerHTML = text;
}, false);
