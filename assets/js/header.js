const header = document.querySelector("header");
const topLevelHTML = document.getElementsByTagName("html");

function paddingHeader() {
    document.body.style.paddingTop = `${header.offsetHeight}px`;
    topLevelHTML[0].style.scrollPaddingTop = `${header.offsetHeight}px`;
}

window.addEventListener("load", paddingHeader);