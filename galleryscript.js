import data from './menu.js'

const galleryTitleDiv = document.querySelector('.gallary-title-text');
galleryTitleDiv.addEventListener("click", () => window.location.href="./index.html")

const appetizerDiv = document.querySelector('.appetizer-photos > .gallary-display');
const soupDiv = document.querySelector('.soup-photos > .gallary-display');
const riceDiv = document.querySelector('.rice-photos > .gallary-display');
const platterDiv = document.querySelector('.platter-photos > .gallary-display');
const specialdishDiv = document.querySelector('.specialdish-photos > .gallary-display');

createMenuPhotos(data.appetizers, appetizerDiv);
createMenuPhotos(data.soups, soupDiv);
createMenuPhotos(data.rice, riceDiv);
createMenuPhotos(data.platters, platterDiv);
createMenuPhotos(data.specialdish, specialdishDiv);

function createMenuPhotos(items, container) {
  for (let item of items) {
    const photoContainer = document.createElement("div");
    photoContainer.classList.add("gallary-photo");

    const photoLabel = document.createElement("span");
    photoLabel.classList.add("photo-label");
    photoLabel.innerText = item.name;
    photoContainer.append(photoLabel);

    container.append(photoContainer);
  }
}