const appetizersElement = document.querySelector(".appetizers > .menu-item-list");
const soupsElement = document.querySelector(".soups > .menu-item-list");
const riceElement = document.querySelector(".fried-rice > .menu-item-list");
const beveragesElement = document.querySelector(".beverages > .menu-item-list");
const plattersElement = document.querySelector(".platters > .menu-item-list");
const specialdishesElement = document.querySelector(".special-dishes > .menu-item-list");
const combinationsElement = document.querySelector(".combinations > .menu-item-list");

// Mocking Database Calls
fetchData();
async function fetchData() {
  const data = await (await fetch('./db.json')).json();
  createMenuItems(data.appetizers, appetizersElement);
  createMenuItems(data.soups, soupsElement);
  createMenuItems(data.rice, riceElement);
  createMenuItems(data.beverages, beveragesElement);
  createMenuItems(data.platters, plattersElement);
  createMenuItems(data.specialdish, specialdishesElement);
  createMenuItems(data.combinations, combinationsElement);
}

function createMenuItems(items, container) {
  for (let item of items) {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("menu-item");

    const menuItemNameElement = document.createElement("div");
    menuItemNameElement.classList.add("menu-item-name");
    menuItemNameElement.innerText = item.name;
    menuItemElement.append(menuItemNameElement);
    
    const menuItemPriceListElement = document.createElement("div");
    menuItemPriceListElement.classList.add("menu-item-price-list");

    for (let price of item.prices) {
      const menuItemPriceElement = document.createElement("div");
      menuItemPriceElement.classList.add("menu-item-price");
      menuItemPriceElement.innerText = price;
      menuItemPriceListElement.append(menuItemPriceElement);
    }
    menuItemElement.append(menuItemPriceListElement);

    container.append(menuItemElement);
  }
}