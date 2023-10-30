
export class Vista1{
	constructor(base){
		this.base = base
		this.imagen = new Image()
		this.imagen.src = './img/tatooine2.png'
	}
	play(){
		const img = document.createElement('img')
		this.base.appendChild(img)
		img.src = this.imagen.src
	}
}
