
export class Vista5{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/archivos1.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.zona1 = this.juego.crearZona(1800, 600, 100, 200)
		this.zona1.textContent = '>'
		this.zona1.classList.add('movimiento')
	}
	play(){
		this.base.appendChild(this.fondo)
		this.base.appendChild(this.zona1)
		this.zona1.onclick = this.pulsarZona1.bind(this)
	}
	pulsarZona1(){
		this.juego.irAVista4()
	}
}
