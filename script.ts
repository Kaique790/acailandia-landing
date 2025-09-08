const buttonToggleNavbar = document.getElementById("toggle-navbar");

const heroCarrousel = document.querySelector("#hero-carrousel > div");
const heroCarrouselElements = heroCarrousel!.querySelectorAll("img");

const heroNextBtn = document.getElementById("hero-next");
const heroPreviousBtn = document.getElementById("hero-previous");

const navHeroCarrouselNode = document.getElementById("hero-nav-carrousel");

function handleToggleNavbar(e: PointerEvent) {
  console.log(e);
}

function checkElements() {
  if (buttonToggleNavbar) {
    buttonToggleNavbar.onclick = handleToggleNavbar;
  } else {
    console.error("Does not exists button toggle navbar");
  }

  if (heroNextBtn && navHeroCarrouselNode) {
    heroNextBtn.onclick = () => {
      nextCarrousel(heroCarrouselElements);
      changeNavCarrousel(heroCarrouselElements, navHeroCarrouselNode);
    };
  } else {
    console.error(
      "Does not exists hero carrousel button or nav hero carrousel"
    );
  }

  if (heroPreviousBtn && navHeroCarrouselNode) {
    heroPreviousBtn.onclick = () => {
      previousCarrousel(heroCarrouselElements);
      changeNavCarrousel(heroCarrouselElements, navHeroCarrouselNode);
    };
  } else {
    console.error(
      "Does not exists hero carrousel previous button or nav hero carrousel"
    );
  }

  if (heroCarrouselElements && navHeroCarrouselNode) {
    addNavCarrousel(heroCarrouselElements, navHeroCarrouselNode);
  } else {
    console.error("Does not exists hero carrousel nav or elements ");
  }
}

function nextCarrousel(elements: NodeListOf<HTMLElement>) {
  const elementsArray = Array.from(elements);

  const activeIndex = elementsArray.findIndex((el) =>
    el.classList.contains("active")
  );
  const nextElement = elements[activeIndex + 1];

  elements.forEach((el, i) => {
    el.classList.remove("active");
  });

  if (activeIndex >= elements.length - 1) {
    elements[0].classList.add("active");
    return;
  }

  nextElement.classList.add("active");
}

function previousCarrousel(elements: NodeListOf<HTMLElement>) {
  const elementsArray = Array.from(elements);

  const activeIndex = elementsArray.findIndex((el) =>
    el.classList.contains("active")
  );
  const previousElement = elements[activeIndex - 1];

  elements.forEach((el, i) => {
    el.classList.remove("active");
  });

  if (activeIndex === 0) {
    const lastElementIndex = elements.length - 1;
    elements[lastElementIndex].classList.add("active");

    return;
  }

  previousElement.classList.add("active");
}

function addNavCarrousel(
  carrouselElements: NodeListOf<HTMLElement>,
  nodeElement: HTMLElement
) {
  carrouselElements.forEach(() => {
    const navElement = document.createElement("div");
    nodeElement.appendChild(navElement);
  });

  changeNavCarrousel(carrouselElements, nodeElement);
}

function changeNavCarrousel(
  carrouselElements: NodeListOf<HTMLElement>,
  nodeElement: HTMLElement
) {
  const elementsArray = Array.from(carrouselElements);
  const activeIndex = elementsArray.findIndex((el) =>
    el.classList.contains("active")
  );

  const navs = nodeElement.querySelectorAll("div");
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });

  const activeNav = navs[activeIndex];
  activeNav.classList.add("active");
}

checkElements();
