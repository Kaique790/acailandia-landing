const buttonToggleNavbar = document.getElementById("toggle-navbar");

const heroCarrousel = document.querySelector("#hero-carrousel > div");
const heroCarrouselElements = heroCarrousel!.querySelectorAll("img");

const heroNextBtn = document.getElementById("hero-next");
const heroPreviousBtn = document.getElementById("hero-previous");

function handleToggleNavbar(e: PointerEvent) {
  console.log(e);
}

function checkElements() {
  if (buttonToggleNavbar) {
    buttonToggleNavbar.onclick = handleToggleNavbar;
  } else {
    console.error("Does not exists button toggle navbar");
  }

  if (heroNextBtn) {
    heroNextBtn.onclick = () => nextCarrousel(heroCarrouselElements);
  } else {
    console.error("Does not exists hero carrousel button");
  }

  if (heroPreviousBtn) {
    heroPreviousBtn.onclick = () => previousCarrousel(heroCarrouselElements);
  } else {
    console.error("Does not exists hero carrousel previous button");
  }
}

function nextCarrousel(elements: NodeListOf<HTMLImageElement>) {
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

function previousCarrousel(elements: NodeListOf<HTMLImageElement>) {
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

checkElements();
