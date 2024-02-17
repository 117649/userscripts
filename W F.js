// ==UserScript==
// @name         W F
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.g916.com/play/*
// @match        https://www.yzxg68.com/play/*
// @match        https://www.lmm66.com/play/*
// @match        https://www.lmm08.com/play/*
// @match        https://www.lmm88.com/play/*
// @match        https://www.lmm33.com/play/*
// @match        https://www.lmm55.com/play/*
// @match        https://www.5dm.link/bangumi/*
// @grant           GM.registerMenuCommand
// @grant           GM.unregisterMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    GM.registerMenuCommand("▢", () => {
        var existingStyleBlock = document.querySelector('#toggle-rules');

        if (existingStyleBlock) {
            // Style block already exists, remove it
            existingStyleBlock.remove();
        } else {
            // Style block does not exist, create and append it
            document.head.appendChild(style);
        }}
                          );
    var style = document.createElement('style');
    style.id = 'toggle-rules';
    style.textContent = `
#playleft iframe,
#player-embed iframe{
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    position: fixed;
  }
 `;
    style.style.display = 'none';
})();
