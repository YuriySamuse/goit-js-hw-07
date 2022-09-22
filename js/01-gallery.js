import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryMarkup(galleryItems);
// console.log(createGalleryMarkup(galleryItems));

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
		})
		.join('');

	// console.log(markup);
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
	// console.log(evt.target);
	evt.preventDefault();

	// const isGalleryItemEl = evt.target.classList.contains('gallery__image');
	// if(!isGalleryItemEl) {
	//     return;
	// }

	// Це те саме що і нижче, але для себе залишив на память

	if (evt.target.nodeName !== 'IMG') {
		return;
	}

	// const originalImgEl = evt.target.dataset.source;
	// console.log(originalImgEl);

	const instance = basicLightbox.create(
		`
    <img src="${evt.target.dataset.source}" wtdth = "800" height = "600"/>
`,
		{
			onShow: (instance) => {
				window.addEventListener('keydown', (evt) => {
					if (evt.code === 'Escape') {
						return instance.close();
					}
				});
			},
			onClose: (instance) => {
				window.removeEventListener('keydown', (evt) => {
					if (evt.code === 'Escape') {
						return instance.close();
					}
				});
			},
		}
	);
	instance.show();
}
