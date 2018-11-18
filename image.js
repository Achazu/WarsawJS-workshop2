export class Image {
	constructor(path){
		this.path = path;
	}

	show(gallery){
		
		this.newImage = document.createElement('img');
		
		this.newImage.setAttribute('src', this.path);	
		gallery.appendChild(this.newImage);
		
		this.newImage.addEventListener('click', () => this.toggleFavourite());
	}

	hide(){
		this.newImage.style.display = 'none';
	}

	isFavourite(){
		return this.newImage.classList.contains('image--favourite')
	}

	toggleFavourite(){
		this.newImage.classList.toggle('image--favourite');
	}
}