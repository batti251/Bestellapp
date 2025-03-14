function getFoodTemplate(databaseIndex) {
  let objKey = database[databaseIndex];
  return ` 
  <div id="food-container" class="${objKey.headercategory}"> <h4>${objKey.headercategory}</h4> <img class="food-img" src="img/food/img-${objKey.headercategory}.jpg" alt="${objKey.headercategory}-Gericht"></div>
        <section id="${objKey.category}" class="meal-container">
        <div>
        <div><h4>${objKey.name}</h4></div>
        <div class="price">${objKey.price}</div>
        <div>${objKey.description}</div>
        </div>
        <input class="icon" type="image" src="img/icon/add-icon.png"  id="${databaseIndex}button" onclick="toShoppingCart(${databaseIndex})">
         </section>
         `;
}



function getShoppingCartTemplate(shoppingCartIndex) {
  let objKey = shoppingCartDatabase[shoppingCartIndex];
  return `   
  <div class="shoppingMeal">
      <div id=""> <h4>${objKey.name}</h4></div>
             <div class="price">${objKey.price}</div>    
             </div>
             <div id="price">Menge: ${objKey.amount} </div>
            <div class="align-buttons"> <div>
             <input class="icon" type="image" src="img/icon/remove-icon.png" onclick="triggerButton(this)" data-value="-1" data-mealindex="${objKey.mealIndex}">
             <input class="icon" type="image" src="img/icon/add-icon.png" onclick="triggerButton(this)" data-value="1" data-mealindex="${objKey.mealIndex}">
            </div>
             <input class="icon" type="image" src="img/icon/trash_delete.png" alt="Tonne zum löschen" onclick="deleteButton(this)" data-value="0" data-mealindex="${objKey.mealIndex}"> 
               <div></div></div>
               </div>    
    `;
}

function getNavbarTemplate(headercategory) {
  return`
  <nav id="navbar">
  <li><a href="#${headercategory}">${headercategory}</li>
  </nav>
  `
}
