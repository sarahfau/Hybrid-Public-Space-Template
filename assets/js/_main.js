import $ from 'jquery'
import {findWord, sortList} from './index-words'
import {menuInterviews, getInterviewsToMarkdown} from './interviews'
import {espaceFine} from './espacefine.min'
import {menuRight, smoothScroll} from './helper'
import {ResizeFootnotes, porcentage, putNotes, footnotesElements, createMenu, getmarkdown} from './main_content'
import {getmarkdownFromAnywhere} from './main_content'

window.addEventListener("DOMContentLoaded", (event) => {
    findWord();
    getmarkdown();
    putNotes(".footnote-item");
    createMenu();
    footnotesElements();
    ResizeFootnotes();
    porcentage();
    getInterviewsToMarkdown();
    espaceFine();
    menuRight();
    menuInterviews();
    smoothScroll();
    getmarkdownFromAnywhere('colophon.md', '#content-colophon');
    getMarkdownToData("colophon.md");
    // sortList()
});

export function getMarkdownToData(textMD) {
    fetch(textMD)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            return data;
        })
}



