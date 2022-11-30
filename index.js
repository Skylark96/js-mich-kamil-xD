
var btnPlus = document.getElementsByClassName("plus");
var btnminus = document.getElementsByClassName("minus");
var deleteButton = document.getElementsByClassName("delete");
var likebtn = document.getElementsByClassName("like");
const checkboxs = document.querySelectorAll(".check");

for (var i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
  checkboxs[i].addEventListener("click", total);
  btnminus[i].addEventListener("click", decriment);
  likebtn[i].addEventListener("click", like);
  deleteButton[i].addEventListener("click", remove);
}

function increment(event) {
  const btn = event.target;
  const divElt = btn.parentElement;
  var quentityTag = divElt.querySelector("p");
  var quentityValue = Number(quentityTag.innerHTML);
  quentityValue++;
  quentityTag.innerHTML = quentityValue;
  const trElt = divElt.parentElement.parentElement;
  const unitePriceValue = Number(trElt.querySelector(".unitPrice").innerHTML);
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = unitePriceValue * quentityValue;
  priceTag.innerHTML = priceValue;
}
function total(e) {
  const checkBox = e.target;
  const trElt = checkBox.parentElement.parentElement;
  const priceValue = Number(trElt.querySelector(".price").innerHTML);
  var totalTag = document.getElementById("total");
  var totalValue = Number(totalTag.innerHTML);
if (checkBox.checked===true) {
    totalValue+=priceValue
}
else{
    totalValue-=priceValue
}

totalTag.innerHTML=totalValue



}
function decriment(e) {
  const btn = e.target;
  const divElt =btn.parentElement;
  var quentityTag = divElt.querySelector("p");
  var quentityValue = Number(quentityTag.innerHTML);
  quentityValue--;
  quentityTag.innerHTML = quentityValue;
  const trElt = divElt.parentElement.parentElement;
  const unitePriceValue = Number(trElt.querySelector(".unitPrice").innerHTML);
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = unitePriceValue * quentityValue;
  priceTag.innerHTML = priceValue;
  if (priceValue < 0) {
    priceTag.innerHTML = 0;
    quentityTag.innerHTML =0;
  }
}
function remove(e) {
  const del= e.target;
  console.log(del)
}
function like(e) {
  const btn = e.target;
  btn.style.color = "red";
}