import {md} from './main_content'

export function getMarkdownToColophon() {
    fetch('colophon.md')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#content-colophon').innerHTML = (md.render(data));
        })

};
