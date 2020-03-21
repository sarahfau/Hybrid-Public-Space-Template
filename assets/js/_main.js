import $ from 'jquery'
import { findWord } from './index-words'
import {menuInterviews,getInterviewsToMarkdown} from './interviews'
import {espaceFine} from './espacefine.min'
import {menuRight,smoothScroll} from './helper'
import {ResizeFootnotes,porcentage,putNotes,footnotesElements,createMenu,getmarkdown} from './main_content'
import {getMarkdownToColophon} from './colophon'
window.addEventListener("DOMContentLoaded", (event) => {
    findWord();
    getmarkdown();
    putNotes(".footnote-item");
    createMenu();
    footnotesElements();
    ResizeFootnotes();
    porcentage();
    getInterviewsToMarkdown()
    espaceFine();
    menuRight();
    menuInterviews();
    getMarkdownToColophon();
    smoothScroll();

});
