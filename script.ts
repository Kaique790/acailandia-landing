const navbar = document.getElementById("navbar")!;

const nodeCarrouselElements = document.querySelectorAll(".node-carrousel")!;

const nextElementBtns =
  document.querySelectorAll<HTMLButtonElement>(".next-carrousel")!;

const previousElementBtns = document.querySelectorAll<HTMLButtonElement>(
  ".previous-carrousel"
)!;

const nodeCarrouselNavs = document.querySelectorAll(".carrousel-nav")!;

const buttonToggleNavbar = document.getElementById("toggle-navbar")!;

buttonToggleNavbar.addEventListener("click", handleToggleNavbar);

function handleToggleNavbar() {
  navbar.classList.toggle("show");
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
  nodeElement: HTMLElement | Element
) {
  carrouselElements.forEach(() => {
    const navElement = document.createElement("div");
    nodeElement.appendChild(navElement);
  });

  changeNavCarrousel(carrouselElements, nodeElement);
}

function changeNavCarrousel(
  carrouselElements: NodeListOf<HTMLElement>,
  nodeElement: HTMLElement | Element
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

nodeCarrouselElements.forEach((node, index) => {
  const carrouselElements = node.querySelectorAll("img")!;

  const navNode = nodeCarrouselNavs[index];
  addNavCarrousel(carrouselElements, navNode);

  nextElementBtns.forEach((btn) => {
    btn.onclick = () => {
      nextCarrousel(carrouselElements);
      changeNavCarrousel(carrouselElements, navNode);
    };
  });

  previousElementBtns.forEach((btn) => {
    btn.onclick = () => {
      previousCarrousel(carrouselElements);
      changeNavCarrousel(carrouselElements, navNode);
    };
  });
});
