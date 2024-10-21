const buttons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll("#doctor .box-container .box");

// Check if there's a saved active filter in localStorage and apply it
document.addEventListener("DOMContentLoaded", () => {
  const savedFilter = localStorage.getItem("activeFilter");
  if (savedFilter) {
    setActiveFilter(savedFilter);
  } else {
    setActiveFilter("all"); // Default to "all" if no filter is saved
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", showProduct);
});

function showProduct(e) {
  let productButtonName = e.target.dataset.name;

  // Store the active filter name in localStorage
  localStorage.setItem("activeFilter", productButtonName);

  setActiveFilter(productButtonName);
}

function setActiveFilter(filterName) {
  // Remove active class from any active button
  document.querySelector(".active").classList.remove("active");

  document.querySelector(`[data-name='${filterName}']`).classList.add("active");

  productCards.forEach((productCard) => {
    let productCardName = productCard.dataset.name;
    if (filterName === productCardName || filterName === "all") {
      productCard.classList.remove("hide");
    } else {
      productCard.classList.add("hide");
    }
  });
}
