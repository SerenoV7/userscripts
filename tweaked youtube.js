// ==UserScript==
// @name         Sereno's Customized YouTube
// @namespace    http://serenoapps.pages.dev/
// @version      1.0
// @description  Small tweaks to YouTube
// @author       Sereno
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('country-code').remove();
    document.getElementById('voice-search-button').remove();
    document.getElementById('scroll-container').parentElement.parentElement.parentElement.remove();
    document.querySelector('ytd-notification-topbar-button-renderer').remove();
    document.querySelector('ytd-topbar-menu-button-renderer').remove();
    document.querySelector('ytd-rich-shelf-renderer').parentElement.remove();

})();
