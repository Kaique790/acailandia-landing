var buttonToggleNavbar = document.getElementById("toggle-navbar");
var heroCarrousel = document.querySelector("#hero-carrousel > div");
var heroCarrouselElements = heroCarrousel.querySelectorAll("img");
var heroNextBtn = document.getElementById("hero-next");
var heroPreviousBtn = document.getElementById("hero-previous");
function handleToggleNavbar(e) {
    console.log(e);
}
function checkElements() {
    if (buttonToggleNavbar) {
        buttonToggleNavbar.onclick = handleToggleNavbar;
    }
    else {
        console.error("Does not exists button toggle navbar");
    }
    if (heroNextBtn) {
        heroNextBtn.onclick = function () { return nextCarrousel(heroCarrouselElements); };
    }
    else {
        console.error("Does not exists hero carrousel button");
    }
    if (heroPreviousBtn) {
        heroPreviousBtn.onclick = function () { return previousCarrousel(heroCarrouselElements); };
    }
    else {
        console.error("Does not exists hero carrousel previous button");
    }
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
checkElements();
