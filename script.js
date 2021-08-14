//heading
const headings = document.getElementsByTagName("h2");
for (const heading of headings) {
  heading.style.color = "blueViolet";
}
//back pack
const coloredCards = document.querySelectorAll(".backpack-bg");
for (const coloredCard of coloredCards) {
  coloredCard.style.backgroundColor = "tomato";
}
//card
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}
//console log function

function handlebye() {
  console.log("Are you buy this product");
}

//btn hide
const buyBtns = document.querySelectorAll(".buy");

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", function (e) {
    e.target.style.display = "none";
  });
}

// btn enable
const emailField = document.getElementById("email-field");
const sendBtn = document.getElementById("button-addon2");

emailField.addEventListener("keyup", function (e) {
  if (e.target.value == "email") {
    sendBtn.removeAttribute("disabled");
  }
});

//mouse enter image change
const gripImg = document.getElementById("bag1");
gripImg.addEventListener("mouseover", function () {
  gripImg.src = "images/bags/bag-3.png";
});

//background change
const contactBg = document.querySelector(".contact");
contactBg.addEventListener("dblclick", function () {
  contactBg.style.backgroundColor = "blueViolet";
  contactBg.style.color = "white";
});
