
export class Vista7{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/archivos3.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.zona1 = this.juego.crearZona(0, 400, 100, 200)
		this.zona1.textContent = '<'
		this.zona1.classList.add('movimiento')
		this.zona2 = this.juego.crearZona(1720, 540, 40, 130)
		this.zona2.style.cursor = 'pointer'
		this.zona3 = this.juego.crearZona(1700, 375, 40, 35)
		this.zona3.style.cursor = 'default'
		this.zonaTexto1 = this.juego.crearZona(1400, 500, 200, 200)
		this.zonaTexto1.classList.add('texto')
		this.zonaTexto1.style.opacity = 1
	}
	play(){
		this.base.appendChild(this.fondo)
		this.base.appendChild(this.zona1)
		this.zona1.onclick = this.pulsarZona1.bind(this)
		if (this.juego.ver('caracteristicas')) return

		//Si no se ha cogido características
		this.base.appendChild(this.zona2)
		this.base.appendChild(this.zona3)
		this.base.appendChild(this.zonaTexto1)
		this.zona2.onmouseover = () => {
			this.zonaTexto1.textContent = 'Un bonito pedestal para una estatua tan fea, ¿qué es eso que le sale en la cabeza?'
		}
		this.zona2.onmouseout = () => {
			this.zonaTexto1.textContent = ''
		}
		this.zona2.onclick = () => {
			if (this.juego.ver('Vista7.activo.mecanismo')){
				this.zonaTexto1.textContent = 'Retiras el panel y encuentras un antiguo documento.'
				this.juego.guardar('caracteristicas', true)
				setTimeout( () => {
					this.zona2.remove()
				}, 2000)
				return
			}
			this.zonaTexto1.textContent = '¿Por qué suena a hueco este panel?'
		}
		this.zona3.onclick = () => {
			this.zonaTexto1.textContent = 'Click'
				this.juego.guardar('Vista7.activo.mecanismo', true)
				this.zona3.remove()
		}
	}
	pulsarZona1(){
		this.juego.irAVista4()
	}
}
