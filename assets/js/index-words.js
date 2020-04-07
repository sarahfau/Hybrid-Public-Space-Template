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

//TODO counter https://www.the-art-of-web.com/javascript/search-highlight-demo/
//TODO jump from word to word https://jsfiddle.net/julmot/973gdh8g/
export function findWord() {

    const keywords = document.querySelector('#keywords');
    keywords.addEventListener('click', function (event) {
        $(target).siblings().find('span').remove();
        let instance = new Mark(document.querySelector("#content"));
        let target = event.target;
        let keywordtoSearch = target.textContent;
        $(target).siblings().find('span').remove();
        if (target.className === 'active') {
            instance.unmark();
            $(target).find('span').remove();
            target.classList.remove("active");
        } else {
            instance.unmark(keywordtoSearch, {
                "done": function () {
                    $(target).siblings().find('span').remove();
                    Mark.unmark();
                }

            });
            instance.mark(keywordtoSearch, {
                done: function (counter) {
                    let eachCounter = "(" + counter + ")";
                    $(target).find('span').remove();
                    var para = document.createElement("span");
                    var nodi = document.createTextNode(eachCounter);
                    para.appendChild(nodi);
                    target.appendChild(para);


                },
                filter: function (textNode, foundTerm) {

                    return true;
                },
            });

            $(target).toggleClass('active').siblings().removeClass('active');
        }

    }, false);


}
