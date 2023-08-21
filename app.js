// ŁADUJE ZDJĘCIA DO SIATKI
window.onload = () => {
  const grid = document.querySelector(".our_projects .grid");
  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    gutter: 30,
  });
};
