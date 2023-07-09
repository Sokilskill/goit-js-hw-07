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

galleryList.addEventListener("click", onClickGalleryList);

function onClickGalleryList(event) {
  event.preventDefault();
  console.dir(event.target.tagName);
  if (event.target.tagName === "IMG") {
    console.log(event.target);

    const lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,

      //   navText: ["", ""],
    });
  }
}
