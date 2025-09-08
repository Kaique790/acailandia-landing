var navbar = document.getElementById("navbar");
var nodeCarrouselElements = document.querySelectorAll(".node-carrousel");
var nextElementBtns = document.querySelectorAll(".next-carrousel");
var previousElementBtns = document.querySelectorAll(".previous-carrousel");
var nodeCarrouselNavs = document.querySelectorAll(".carrousel-nav");
var buttonToggleNavbar = document.getElementById("toggle-navbar");
buttonToggleNavbar.addEventListener("click", handleToggleNavbar);
function handleToggleNavbar() {
    navbar.classList.toggle("show");
}
function nextCarrousel(elements) {
    var elementsArray = Array.from(elements);
    var activeIndex = elementsArray.findIndex(function (el) {
        return el.classList.contains("active");
    });
    var nextElement = elements[activeIndex + 1];
    elements.forEach(function (el, i) {
        el.classList.remove("active");
    });
    if (activeIndex >= elements.length - 1) {
        elements[0].classList.add("active");
        return;
    }
    nextElement.classList.add("active");
}
function previousCarrousel(elements) {
    var elementsArray = Array.from(elements);
    var activeIndex = elementsArray.findIndex(function (el) {
        return el.classList.contains("active");
    });
    var previousElement = elements[activeIndex - 1];
    elements.forEach(function (el, i) {
        el.classList.remove("active");
    });
    if (activeIndex === 0) {
        var lastElementIndex = elements.length - 1;
        elements[lastElementIndex].classList.add("active");
        return;
    }
    previousElement.classList.add("active");
}
function addNavCarrousel(carrouselElements, nodeElement) {
    carrouselElements.forEach(function () {
        var navElement = document.createElement("div");
        nodeElement.appendChild(navElement);
    });
    changeNavCarrousel(carrouselElements, nodeElement);
}
function changeNavCarrousel(carrouselElements, nodeElement) {
    var elementsArray = Array.from(carrouselElements);
    var activeIndex = elementsArray.findIndex(function (el) {
        return el.classList.contains("active");
    });
    var navs = nodeElement.querySelectorAll("div");
    navs.forEach(function (nav) {
        nav.classList.remove("active");
    });
    var activeNav = navs[activeIndex];
    activeNav.classList.add("active");
}
nodeCarrouselElements.forEach(function (node, index) {
    var carrouselElements = node.querySelectorAll("img");
    var navNode = nodeCarrouselNavs[index];
    addNavCarrousel(carrouselElements, navNode);
    nextElementBtns.forEach(function (btn) {
        btn.onclick = function () {
            nextCarrousel(carrouselElements);
            changeNavCarrousel(carrouselElements, navNode);
        };
    });
    previousElementBtns.forEach(function (btn) {
        btn.onclick = function () {
            previousCarrousel(carrouselElements);
            changeNavCarrousel(carrouselElements, navNode);
        };
    });
});
