import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 
// Add imports above this line
import { galleryItems } from './gallery-items';// import array from gallery-items.js 
// Change code below this line

const boxWrapMn = document.querySelector('.gallery');    // get gallery parent box
const cardsLightbox = boxNewWrap(galleryItems);         // passing an array to the function

//result of work function boxNewWrap to place into parent box
boxWrapMn.insertAdjacentHTML('afterbegin', cardsLightbox);

// function create lightbox
function boxNewWrap(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <a class="gallery__item" href="${original}">
                    <img 
                        class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" />
                </a>
            `;
        })
        .join('');
    
}

// my modal
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',    //get the caption from given attribute
        captionDelay: 250,      //adds a delay before the caption shows (in ms)
        animationSpeed: 200,    //how long takes the slide animation
        scaleImageToRatio: true,//scales the image up to the defined ratio
    });



console.log(galleryItems);
