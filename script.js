var buttonToggleNavbar = document.getElementById("toggle-navbar");
var heroCarrousel = document.querySelector("#hero-carrousel > div");
var heroCarrouselElements = heroCarrousel.querySelectorAll("img");
var heroNextBtn = document.getElementById("hero-next");
var heroPreviousBtn = document.getElementById("hero-previous");
var navHeroCarrouselNode = document.getElementById("hero-nav-carrousel");
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
    if (heroNextBtn && navHeroCarrouselNode) {
        heroNextBtn.onclick = function () {
            nextCarrousel(heroCarrouselElements);
            changeNavCarrousel(heroCarrouselElements, navHeroCarrouselNode);
        };
    }
    else {
        console.error("Does not exists hero carrousel button or nav hero carrousel");
    }
    if (heroPreviousBtn && navHeroCarrouselNode) {
        heroPreviousBtn.onclick = function () {
            previousCarrousel(heroCarrouselElements);
            changeNavCarrousel(heroCarrouselElements, navHeroCarrouselNode);
        };
    }
    else {
        console.error("Does not exists hero carrousel previous button or nav hero carrousel");
    }
    if (heroCarrouselElements && navHeroCarrouselNode) {
        addNavCarrousel(heroCarrouselElements, navHeroCarrouselNode);
    }
    else {
        console.error("Does not exists hero carrousel nav or elements ");
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
checkElements();
