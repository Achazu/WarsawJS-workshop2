
const images = ['images/confront.png', 'images/warsawjs.png'];
const gallery = document.getElementById('images')
const showFavBtn = document.getElementById('show-favourites')

class Image {
	constructor(path){
		this.path = path
	}

	show(){
		this.newImage = document.createElement('img');
		
		this.newImage.setAttribute('src', this.path);	
		gallery.appendChild(this.newImage);
		
		this.newImage.addEventListener('click', () => this.toggleFavourite());
	}

	hide(){
		this.newImage.style.display = 'none';
	}

	isFavourite(){
		this.newImage.classList.contains('image--favourite')
	}

	toggleFavourite(){
		this.newImage.classList.toggle('image--favourite');
	}

	sort(){
		
	}
}

function showFav(){
	galleryElements.filter(photo => !photo.isFavourite(photo)).forEach(photo => photo.hide());
}

const galleryElements = images.map(photo => new Image(photo))
galleryElements.forEach(photo => photo.show());

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