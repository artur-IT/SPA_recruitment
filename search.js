const searchButton = document.querySelector(".menu button img.search_icon");

handleSearch = (e) => {
  e.preventDefault();
  const searchInput = document.querySelector(".menu input");
  searchInput.classList.toggle("visually-hidden");
};
searchButton.addEventListener("click", handleSearch);
