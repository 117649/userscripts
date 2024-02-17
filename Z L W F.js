// ==UserScript==
// @name         Z L W F
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zan-live.com/*/live/play/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zan-live.com
// @grant           GM.registerMenuCommand
// @grant           GM.unregisterMenuCommand
// ==/UserScript==

(function() {
    GM.registerMenuCommand("▢", () => {
        var existingStyleBlock = document.querySelector('#toggle-rules');

        if (existingStyleBlock) {
            // Style block already exists, remove it
            existingStyleBlock.remove();
        } else {
            // Style block does not exist, create and append it
            document.head.appendChild(style);
        }});
    var style = document.createElement('style');
    style.id = 'toggle-rules';
    style.textContent = `
#playerArea {
    left: 0px;
    top: 0px;
    width: 100% !important;
    height: 100% !important;
    z-index: 9999999;
    position: fixed;
  }

#rBoxInner {
    z-index: -1;
 }
 `;
    style.style.display = 'none';
})();
