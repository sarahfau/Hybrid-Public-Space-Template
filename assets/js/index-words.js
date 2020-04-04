import Mark from 'mark.js'
import $ from 'jquery'


const buttonElement = document.querySelector('.sort');

buttonElement.addEventListener('click', function (event) {

    sortList();
});


export function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("keywords");
    switching = true;
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("a");

        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}


//TODO add sorting alphabetically https://isotope.metafizzy.co/sorting.html
//TODO counter https://www.the-art-of-web.com/javascript/search-highlight-demo/
//TODO jump from word to word https://jsfiddle.net/julmot/973gdh8g/
export function findWord() {


    var keywords = document.querySelector('#keywords');
    keywords.addEventListener('click', function (event) {
        let instance = new Mark(document.querySelector("#content"));
        let target = event.target;
        let keywordtoSearch = target.textContent;
        // console.log(keywordtoSearch);
        keywordtoSearch.replace(/\([^\(]*\)/g, "");

        if (target.className === 'active') {
            instance.unmark();

            target.classList.remove("active");
        } else {
            instance.unmark(keywordtoSearch, {
                "done": function () {
                    Mark.unmark();
                }
            });
            instance.mark(keywordtoSearch, {
                done: function (counter) {
                    // let eachCounter = "(" + counter + ")";
                    // target.textContent += eachCounter;
                },
                filter: function (textNode, foundTerm) {

                    return true;
                },
            });

            $(target).toggleClass('active').siblings().removeClass('active');
        }

    }, false);


}
