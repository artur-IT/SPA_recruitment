// LOAD PICTURE TO GRID
window.onload = () => {
  const grid = document.querySelector(".our_projects .grid");
  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    gutter: 30,
  });
};

// HANDLE CURTAIN
const fullSection = document.querySelector("section.our_projects");
const curtain = document.querySelector(".curtain");
let flag = true;

const show = (e) => {
  fullSection.classList.toggle("h-auto");
  curtain.classList.toggle("curtain");
  flag ? (e.target.textContent = "Zwiń") : (e.target.textContent = "Rozwiń");
  flag = !flag;
};
document.querySelector(".show_full_gallery").addEventListener("click", show);

// POPUP - FULL IMAGE FROM GALLERY
const myGallery = document.querySelectorAll(".grid-item img");
const waitingDiv = document.querySelector(".waiting_my_popup");
const fullImg = document.querySelector(".full_img");

myGallery.forEach((item) => {
  item.onclick = (e) => {
    const fullPathImg = e.target.src;
    const cropPathImg = fullPathImg.substring(fullPathImg.length - 15);
    fullImg.setAttribute("src", `${cropPathImg}`);
    waitingDiv.classList.toggle("show_popup");
    const getPopup = document.querySelector(".full_img");
    getPopup.onclick = () => {
      waitingDiv.classList.toggle("show_popup");
      fullImg.setAttribute("src", ``);
    };
  };
});
