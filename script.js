//console.table(database);

function renderDatabaseFood(){

    let databaseRef = document.getElementById(`foodContent`);
    databaseRef.innerHTML = "";
    for (let databaseIndex = 0; databaseIndex < database.length; databaseIndex++) {
        databaseRef.innerHTML += getFoodTemplate(databaseIndex);
         }
 localCurrency()
}

function toShoppingCart(databaseIndex) {
  let ObjString = Object.values(database);
  let newItem = { ...ObjString[databaseIndex] };
  let collectIndex = newItem.mealIndex;
  const foundItem = shoppingCartDatabase.find(item => {
    return item.mealIndex === collectIndex});
  if (foundItem) {
      foundItem.amount += 1;
      foundItem.price = foundItem.amount * database[collectIndex].price;
  } else {
      newItem.amount = 1;
      newItem.price = database[databaseIndex].price;
      shoppingCartDatabase.push(newItem);
  }
  renderShoppingCart()  
  renderOverlay()
  shoppingCartTotal()
}

function triggerButton(button){
let buttonIndex = parseInt(button.dataset.mealindex)
let trigger = parseInt(button.dataset.value) 
const foundItem = shoppingCartDatabase.find(item => {
  return item.mealIndex === buttonIndex});
  if (foundItem) {
    foundItem.amount += trigger;
    foundItem.price = foundItem.amount * database[buttonIndex].price;
     
      if (foundItem.amount < 1){
        shoppingCartDatabase = shoppingCartDatabase.filter((item) => {
          return item.amount >=1
        })
      }
    }
renderShoppingCart()
renderOverlay()
shoppingCartTotal()
}


function deleteButton(button){
  let deleteIndex = parseInt(button.dataset.mealindex)
  let deleteTrigger = parseInt(button.dataset.value)
  console.log(deleteIndex);
  console.log(deleteTrigger); 
  const findDeleteItem = shoppingCartDatabase.find(item => {
    return item.mealIndex === deleteIndex})
    if (findDeleteItem){
      findDeleteItem.amount = 0
      shoppingCartDatabase = shoppingCartDatabase.filter((item) => {
        return item.amount >=1})
        }
renderShoppingCart()
renderOverlay()
shoppingCartTotal()
}



function shoppingCartTotal() {
  let subTotal = 0;
  let deliveryCost = 2;
  let nodeList = document.querySelectorAll('.total-section');
  let nodeListSubTotal =  document.querySelectorAll('.subTotal') 
  let nodeListDeliveryCost = document.querySelectorAll('.deliveryCost') 
  let nodeListTotal = document.querySelectorAll('.total')
  for (let i = 0; i < shoppingCartDatabase.length; i++) {
    subTotal += shoppingCartDatabase[i].price;
    }   
  if (shoppingCartDatabase.length <1){
    deliveryCost = 0
  } 
  let totalPrice = subTotal + deliveryCost;
for (let index = 0; index < nodeList.length; index++) {
  nodeListSubTotal[index].innerHTML = subTotal;
  nodeListDeliveryCost[index].innerHTML =  deliveryCost ;
  nodeListTotal[index].innerHTML = totalPrice ;
  
  }
  localCurrency()
  renderTotal(nodeListSubTotal , nodeListDeliveryCost, nodeListTotal)
}

function renderTotal(nodeListSubTotal , nodeListDeliveryCost, nodeListTotal){
  let nodeList = document.querySelectorAll('.total-section');
  let SubTotal =  document.querySelectorAll('.subTotal') 
  let DeliveryCost = document.querySelectorAll('.deliveryCost') 
  let Total = document.querySelectorAll('.total')
  for (let index = 0; index < nodeList.length; index++) {
         SubTotal[index].innerHTML ='Zwischensumme: '+ nodeListSubTotal[index].innerHTML
      DeliveryCost[index].innerHTML ='Lieferkosten: '+ nodeListDeliveryCost[index].innerHTML
      Total[index].innerHTML ='Gesamsumme: '+ nodeListTotal[index].innerHTML  
  }
}  



function renderShoppingCart() {
  let shoppingCartRef = document.getElementById('shoppingCartContainer');
  shoppingCartRef.innerHTML = "";
  for (let shoppingCartIndex = 0; shoppingCartIndex < shoppingCartDatabase.length; shoppingCartIndex++) {
    shoppingCartRef.innerHTML += getShoppingCartTemplate(shoppingCartIndex);
}
localCurrency()
}


function getNavbarHeaders(){
let navbarSlide = document.getElementById('navbar')
navbarSlide.innerHTML = ""
for (let index = 0; index < database.length; index++) {
   let headerCategoryObj = database[index];
if(headerCategoryObj.headercategory != undefined){
navbarSlide.innerHTML += getNavbarTemplate(headerCategoryObj.headercategory)
}
}
}


function showResponsiveShoppingCart() {
  let x = document.getElementById('overlay-shoppingcart')
  x.classList.toggle('d_none')
}

function getOverlay(){
  renderOverlay()
}

function renderOverlay() {
  let shoppingCartRef = document.getElementById('overlay');
  shoppingCartRef.innerHTML = "";
  for (let shoppingCartIndex = 0; shoppingCartIndex < shoppingCartDatabase.length; shoppingCartIndex++) {
    shoppingCartRef.innerHTML += getShoppingCartTemplate(shoppingCartIndex);
}
localCurrency()
}

function localCurrency() {
  let priceRef = document.querySelectorAll('.price');
  for (let index = 0; index < priceRef.length; index++) {
  let element = parseFloat(priceRef[index].innerHTML.replace(",", "."));
   let currency = element.toLocaleString("de-DE",{style:"currency", currency:"EUR"})
   priceRef[index].innerHTML = currency
    if (priceRef[index].innerHTML.includes(NaN)){
    priceRef[index].innerHTML = ""
    }
  } 
}

function submitOrder() {
  let modalRef = document.getElementById('modal')
  
  if (shoppingCartDatabase.length != 0){
    modalRef.style.visibility = "visible";
  } else {
   }
shoppingCartDatabase = shoppingCartDatabase.filter((item) => {
  return item.mealIndex < 0
})
 
  renderShoppingCart()
  renderOverlay()
  shoppingCartTotal()
}

function closeModal(){
  let closeModalRef = document.getElementById('modal')
  closeModalRef.style.visibility = "hidden";
}

