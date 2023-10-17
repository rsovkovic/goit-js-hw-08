import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
list.addEventListener("click", handleImages);
console.log(galleryItems);
function renderList() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`;
    })
    .join("");
  list.innerHTML = markup;
}
renderList();

function handleImages(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const changeImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${changeImg}" width="800" height="600">
  `);

  instance.show();
  // onClose: (instance) => {
  //   document.removeEventListener("keyup", closeModal);
  // };
  document.addEventListener("keyup", closeModal);

  function closeModal(e) {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keyup", closeModal);
    }
  }
}
