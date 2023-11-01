
export class Vista2{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/tatooine2.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
	}
	play(){
		this.base.appendChild(this.fondo)
	}
}
