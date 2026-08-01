// ==========================
// GET BUTTONS
// ==========================

const viewBtn = document.getElementById("viewBtn");
const cartBtn = document.getElementById("cartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");
const purchaseBtn = document.getElementById("purchaseBtn");

// ==========================
// GET SECTIONS
// ==========================

const productSection = document.getElementById("product-section");
const detailsSection = document.getElementById("details-section");
const cartSection = document.getElementById("cart-section");
const checkoutSection = document.getElementById("checkout-section");
const successSection = document.getElementById("success-section");

// ==========================
// VIEW PRODUCT
// ==========================

viewBtn.addEventListener("click", function () {

    productSection.style.display = "none";

    detailsSection.style.display = "block";

});

// ==========================
// ADD TO CART
// ==========================

cartBtn.addEventListener("click", function () {

    detailsSection.style.display = "none";

    cartSection.style.display = "block";

});

// ==========================
// CHECKOUT
// ==========================

checkoutBtn.addEventListener("click", function () {

    cartSection.style.display = "none";

    checkoutSection.style.display = "block";

});

// ==========================
// PURCHASE
// ==========================

purchaseBtn.addEventListener("click", function () {

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value.trim();
    const state = document.getElementById("state").value.trim();
    const address = document.getElementById("address").value.trim();

    if (
        fname === "" ||
        lname === "" ||
        email === "" ||
        phone === "" ||
        country === "" ||
        state === "" ||
        address === ""
    ) {

        alert("Please fill in all customer details.");

        return;

    }

    checkoutSection.style.display = "none";

    successSection.style.display = "block";

    alert("Purchase Successful!");

});
  
