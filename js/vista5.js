
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
		this.zona2 = this.juego.crearZona(40, 257, 10, 35)
		this.zona2.style.cursor = 'pointer'
		this.zona2.style.backgroundColor = 'red'
		this.zonaTexto1 = this.juego.crearZona(100, 250, 200, 200)
		this.zonaTexto1.classList.add('texto')
		this.zonaTexto1.style.opacity = 1
	}
	play(){
		this.base.appendChild(this.fondo)
		this.base.appendChild(this.zona1)
		this.zona1.onclick = this.pulsarZona1.bind(this)
		if (this.juego.ver('definicion')) return
		
		//Si no se ha cogido definicion
		this.base.appendChild(this.zona2)
		this.base.appendChild(this.zonaTexto1)
		this.zona2.onmouseover = () => {
			this.zonaTexto1.textContent = 'Este libro parece interesante'
		}
		this.zona2.onmouseout = () => {
			this.zonaTexto1.textContent = ''
		}
		this.zona2.onclick = () => {
			this.zonaTexto1.textContent = 'Añades el documento a tu inventario'
			this.juego.guardar('definicion', true)
			setTimeout( () => {
				this.zona2.remove()
				this.zonaTexto1.remove()
			}, 2000)
		}
	}
	pulsarZona1(){
		this.juego.irAVista4()
	}
}
