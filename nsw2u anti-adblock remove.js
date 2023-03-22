// ==UserScript==
// @name         nsw2u.com Anti-AdBlock Remover
// @namespace    https://sereno.pages.dev/
// @version      1.0
// @description  Prevent the Anti-AdBlock from EXISTING
// @author       Sereno
// @match        https://nsw2u.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nsw2u.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const h4Element = document.querySelector('h4.adblock_title'); //Selects the "AdBlock Detected" text
    const topDiv = h4Element.parentNode.parentNode.parentNode.parentNode.parentNode; //Selects the top most div that composes the block
    topDiv.parentNode.removeChild(topDiv); //Deletes the block

})();