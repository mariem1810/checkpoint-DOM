var plus_btns = document.querySelectorAll(".plus");

var minus_btns = document.querySelectorAll(".minus");
var prices = document.querySelectorAll(".price");
var likes_btn = document.querySelectorAll(".like");
var delete_btns = document.querySelectorAll(".delete");

function inc(e) {
  var clickedButton = e.target;

  var div = clickedButton.parentElement;

  var p = div.querySelector("p");

  var value = Number(p.innerHTML);

  value++;

  p.innerHTML = value;

  var tr = div.parentElement.parentElement;

  console.log(tr);

  var uPrice = tr.querySelector(".unitPrice");

  var calculatedPrice = value * Number(uPrice.innerHTML);

  var price = tr.querySelector(".price");

  price.innerHTML = calculatedPrice;
  sum();
}

function dec(e) {
  var clickedButton = e.target;

  var div = clickedButton.parentElement;

  var p = div.querySelector("p");

  var value = Number(p.innerHTML);

  if (value > 0) {
    value--;
  }

  p.innerHTML = value;
  var tr = div.parentElement.parentElement;

  var uPrice = tr.querySelector(".unitPrice");

  var calculatedPrice = value * Number(uPrice.innerHTML);

  var price = tr.querySelector(".price");

  price.innerHTML = calculatedPrice;
  sum();
}
function sum() {
  var total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += Number(prices[i].innerHTML);
  }

  document.querySelector("#total").innerHTML = total;
}
function LikeColor(e) {
  var clickedButton = e.target;
  if (clickedButton.style.color !== "red") {
    clickedButton.style.color = "red";
  } else {
    clickedButton.style.color = "black";
  }
}

function removeRow(e) {
  clickedDelete = e.target;

  var tr =
    clickedDelete.parentElement.parentElement.parentElement.parentElement;
  var price = tr.querySelector(".price");
  price.innerHTML = 0;
  sum();
  tr.remove();
}

for (let i = 0; i < plus_btns.length; i++) {
  plus_btns[i].addEventListener("click", inc);
}

for (let i = 0; i < minus_btns.length; i++) {
  minus_btns[i].addEventListener("click", dec);
}

for (let i = 0; i < plus_btns.length; i++) {
  plus_btns[i].addEventListener("click", inc);
}

for (let i = 0; i < minus_btns.length; i++) {
  minus_btns[i].addEventListener("click", dec);
}
for (let i = 0; i < likes_btn.length; i++) {
  likes_btn[i].addEventListener("click", LikeColor);
}
for (let i = 0; i < delete_btns.length; i++) {
  delete_btns[i].addEventListener("click", removeRow);
}
