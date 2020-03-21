import Mark from 'mark.js'
import $ from 'jquery'
// const fs = require('fs');

//TODO add sorting alphabetically https://isotope.metafizzy.co/sorting.html
//TODO counter https://www.the-art-of-web.com/javascript/search-highlight-demo/
//TODO jump from word to word https://jsfiddle.net/julmot/973gdh8g/
export function findWord() {


        var keywords = document.querySelector('#keywords');
        keywords.addEventListener('click', function (event) {
            var instance = new Mark(document.querySelector("#content"));
            let target = event.target;
            let keywordtoSearch = target.innerHTML;
            instance.unmark(keywordtoSearch);
            instance.mark(keywordtoSearch);
            $(target).toggleClass('active').siblings().removeClass('active');
        }, false);



};
