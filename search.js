const searchButton = document.querySelector(".menu button img.search_icon");
const offerMenu = document.querySelector("a.offer");

handleSearch = (e) => {
  e.preventDefault();
  const searchInput = document.querySelector(".menu input");
  searchInput.classList.toggle("visually-hidden");
};
searchButton.addEventListener("click", handleSearch);

handleOfferMenu = () => {
  const ulOffer = document.querySelector(".menu ul.offer");
  ulOffer.classList.toggle("dropdown-menu");
};
offerMenu.addEventListener("click", handleOfferMenu);
