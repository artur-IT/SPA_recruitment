// LOAD PICTURE TO GRID
window.onload = () => {
  const grid = document.querySelector(".our_projects .grid");
  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    gutter: 30,
  });
};

// HANDLE CURTAIN
const expandButton = document.querySelector(".show_full_gallery");
const fullSection = document.querySelector("section.our_projects");
const curtain = document.querySelector(".curtain");
let flag = true;

const show = (e) => {
  fullSection.classList.toggle("h-auto");
  curtain.classList.toggle("curtain");
  flag ? (e.target.textContent = "Zwiń") : (e.target.textContent = "Rozwiń");
  flag = !flag;
};

expandButton.addEventListener("click", show);
