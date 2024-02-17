// ==UserScript==
// @name         EH g All
// @namespace    http://tampermonkey.net/
// @version      2024-01-20
// @description  try to take over the world!
// @author       You
// @match        https://exhentai.org/g/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=exhentai.org
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function useMpv(i) {
    i.firstChild.onclick = (e) => {
      e.preventDefault();
      location =
        location.toString().replace("/g", "/mpv") +
        "#page" +
        i.firstChild.href.slice(i.firstChild.href.lastIndexOf("-") + 1);
    };
  }
  async function fetchAllImages(delayInMs = 3e3) {
    if (!isFirstPage()) {
      return;
    }
    const pageUrls = getPageUrls();
    if (!pageUrls) {
      return;
    }
    if (pageUrls.length === 0) {
      return;
    }
    for (const url of pageUrls) {
      try {
        await delay(delayInMs);
        const doc = await getDoc(url);
        const imageElements = getImageElements(doc);
        if (!imageElements) {
          return;
        }
        imageElements.forEach((i) => useMpv(i));
        appendImages(imageElements);
      } catch (error) {}
    }
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    function getElement(selector, root2 = document) {
      return root2.querySelector(selector);
    }
    function getElements(selector, root2 = document) {
      return root2.querySelectorAll(selector);
    }
    async function getDoc(url, options) {
      const response = await fetch(url, options);
      const html = await response.text();
      return new DOMParser().parseFromString(html, "text/html");
    }
    function isFirstPage() {
      var _a2;
      return (
        ((_a2 = getElement(".ptds")) == null ? void 0 : _a2.innerText) === "1"
      );
    }
    function getImageElements(doc) {
      return getElements(".gdtl", doc);
    }
    function getPageUrls() {
      const lastPageElement = getElement(".ptt td:nth-last-child(2)");
      if (!lastPageElement) {
        return;
      }
      const pageCount2 = Number(lastPageElement.innerText);
      if (pageCount2 === 1) {
        return [];
      }
      const { href } = window.location;
      return Array(pageCount2 - 1)
        .fill("")
        .map((_, index2) => `${href}?p=${index2 + 1}`);
    }
    function appendImages(elements) {
      var _a2;
      (_a2 = getElement("#gdt > .c")) == null
        ? void 0
        : _a2.before(...elements);
    }
  }
  document.querySelectorAll(".gdtl").forEach((i) => useMpv(i));
  fetchAllImages();
})();
