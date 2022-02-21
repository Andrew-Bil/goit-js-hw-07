import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const items = galleryItems.map(( { preview, original, description } ) => {
    const listEl = `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    return listEl;
}).join("");

galleryRef.insertAdjacentHTML("beforeend", items);

galleryRef.addEventListener("click", onImageClick);

function onImageClick(e){
    if(e.target.nodeName !== 'IMG'){
        return;
    }

      e.preventDefault();

      const instance = basicLightbox.create(
      `<img src="${e.target.dataset.source}" width="800" height="600">
      `, {
        onShow: () => window.addEventListener('keydown', onEscClose),
        onClose: () => window.removeEventListener('keydown', onEscClose)
      })

      instance.show();

      
      function onEscClose(e){
        if(e.code === 'Escape')
        instance.close();

      }
}









