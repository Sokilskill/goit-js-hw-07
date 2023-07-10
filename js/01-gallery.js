import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (el) =>
      `<li class="gallery__item" > 
        <a class="gallery__link" href="${el.original}">
        <img class="gallery__image"  src="${el.preview}" data-source="${el.original}" alt="${el.description}"/>
        </a>
        </li>`
  )
  .join("");

// ======Рендер
galleryList.insertAdjacentHTML("beforeend", gallery);

// ======Відкриття модалки при кліку на картику
galleryList.addEventListener("click", onClickGalleryList);

function onClickGalleryList(event) {
  event.preventDefault();

  if (event.target.tagName === "IMG") {
    const largeImageURL = event.target.dataset.source;
    openModal(largeImageURL);
  }
}

//
//===================Спосіб 1й закриття модалки кнопкою Escape
//
// ====== Для того, щоб використати код розкоментуй даний 1й спосіб та закоментуй 2гий спосіб

function openModal(url) {
  const instance = basicLightbox.create(
    `<img src="${url}" width="800" height="600"  />`,
    {
      onShow: () => {
        document.addEventListener("keydown", handleModalClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleModalClose);
      },
    }
  );

  instance.show();

  function handleModalClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

//
// ==================== Спосіб    2гий закриття модалки кнопкою Escape
//
// ====== Для того, щоб використати код розкоментуй даний спосіб та закоментуй 1й спосіб

// function openModAL(url) {
//   instance = basicLightbox.create(
//     `<img src='${url}' width="800" height="600" tabindex="0" />`,
//     {
//
//     }
//   );

//   instance.show();

//   //   console.log(document);

//   galleryList.addEventListener("keydown", openModalTest);

//   function openModalTest(event) {
//     if (event.code === "Escape") {
//       console.log(event.code);

//       closeModalTest();
//     }
//   }

//   function closeModalTest() {
//     if (instance) {
//       console.log(event.code, 2);

//       instance.close();
//       instance = null;
//       galleryList.removeEventListener("keydown", openModalTest);
//     }
//   }
// }
