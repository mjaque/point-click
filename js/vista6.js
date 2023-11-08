
export class Vista6{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/archivos2.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.zona1 = this.juego.crearZona(900, 700, 200, 100)
		this.zona1.textContent = '⌄'
		this.zona1.classList.add('movimiento')
		this.zona1.classList.add('centrado')
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
