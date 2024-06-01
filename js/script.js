// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
document.querySelector("#search").onclick = () => {
  searchForm.classList.toggle("active");
};
// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector(".modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// ketika di klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
//klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
    e.preventDefault();
  }
};
