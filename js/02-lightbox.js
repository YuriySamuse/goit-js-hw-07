import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryMarkup(galleryItems);
// console.log(createGalleryMarkup(galleryItems));

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallety__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" data-caption="${description}" src="${preview}" alt="${description}">
      </a>
    </li>    
    `}).join('');  
}

// galleryContainer.addEventListener('click', onGalleryContainerClick)

// function onGalleryContainerClick (evt) {
//     evt.preventDefault()

//     if(evt.target.nodeName !== "IMG") {
//         return;
//     }
//     console.log('click');

    
// }

const lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 250,
});