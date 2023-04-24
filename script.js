// Until we set up a database
fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    let menu = json;
    addItem(menu.appetizers, 'appetizers-container');
    addItem(menu.soups, 'soups-container');
  });

function addItem(itemList, containerClass) {
  const container = document.querySelector(`.${containerClass}`);

  for (item of itemList) {
    const newItem = createItemElement(item.item, item.price, item.img);
    container.append(newItem);
  }
}
function createItemElement(name, price, img) {
  const item = document.createElement('div');
  item.classList.add('menu-item');
  
  const itemImg = document.createElement('img');
  itemImg.classList.add('menu-item-img');
  itemImg.src = img;

  const itemText = document.createElement('div');
  itemText.classList.add('menu-item-text');
  itemText.innerText = name;

  item.append(itemImg);
  item.append(itemText);

  return item;
}