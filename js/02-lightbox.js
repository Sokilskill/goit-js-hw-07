import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const createGalleryItems = galleryItems
  .map(
    (el) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" alt='${el.description}'  />
   </a>
</li>`
  )
  .join("");

galleryList.innerHTML = createGalleryItems;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.8,
  swipeTolerance: 400,
  // showCounter: false,
});
