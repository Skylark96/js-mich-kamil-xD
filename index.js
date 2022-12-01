
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
  const btnPlus=checkBox.parentElement.parentElement.querySelector(".plus");
  const btnMinus=checkBox.parentElement.parentElement.querySelector(".minus");

if (checkBox.checked===true) {
    totalValue+=priceValue;
    btnPlus.setAttribute("disabled", true)
    btnMinus.setAttribute("disabled", true)
}
else{
    totalValue-=priceValue;
    btnPlus.removeAttribute("disabled")
    btnMinus.removeAttribute("disabled")


}

totalTag.innerHTML=totalValue;



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
  console.log(del);
  const trElt=del.parentElement.parentElement.parentElement.parentElement
  console.log(trElt)
  trElt.remove()
}
function like(e) {
  const btn = e.target;
  btn.style.color = "red";
}