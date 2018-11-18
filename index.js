import image1 from './images/confront.png';
import image2 from './images/warsawjs.png';
import {
	Image
} from './image.js';

const images = [image1, image2];
const gallery = document.getElementById('images')
const showFavBtn = document.getElementById('show-favourites')
const fileInput = document.getElementById('file-input')

const galleryElements = images.map(photo => new Image(photo))
galleryElements.forEach(photo => photo.show(gallery));

function showFav() {
	galleryElements.filter(photo => !photo.isFavourite(photo)).forEach(photo => photo.hide());
}

fileInput.onchange = () => {
	if (fileInput.files && fileInput.files[0]) {
		const reader = new FileReader();

		reader.onload = function (e) {
			// dodajemy e.target.result
			let item = new Image(e.target.result)
			galleryElements.push(item)
			item.show(gallery)
		};

		reader.readAsDataURL(fileInput.files[0]);
	}
};

showFavBtn.addEventListener('click', showFav)






// images.forEach( photo => {

// 	const singlePhoto = new Image(photo)
// 	singlePhoto.show()

// })

// function showFavourite(e){
// 	// !this.classList.contains('image--favourite') ?
// 	// this.classList.add('image--favourite') :
// 	// this.classList.remove('image--favourite');

// 	if(e.target.tagName === 'IMG'){
// 		e.target.classList.toggle('image--favourite')
// 	}
// }

// image.addEventListener('click', showFavourite);