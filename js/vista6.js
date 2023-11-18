
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
		this.zona2 = this.juego.crearZona(1400, 440, 10, 40)
		this.zona2.style.cursor = 'pointer'
		this.zona3 = this.juego.crearZona(450, 20, 10, 40)
		this.zona3.style.cursor = 'pointer'
		this.zona4 = this.juego.crearZona(500, 615, 10, 40)
		this.zona4.style.cursor = 'default'
		this.zonaTexto1 = this.juego.crearZona(900, 300, 200, 200)
		this.zonaTexto1.classList.add('texto')
		this.zonaTexto1.style.opacity = 1
	}
	play(){
		this.base.appendChild(this.fondo)
		this.base.appendChild(this.zona1)
		this.zona1.onclick = this.pulsarZona1.bind(this)
		this.base.appendChild(this.zonaTexto1)
		this.base.appendChild(this.zona2)
		this.base.appendChild(this.zona3)
		this.base.appendChild(this.zona4)
		if (this.juego.ver('vista6.libro1.pulsado'))
			this.zona2.style.border = '1px solid red'
		this.zona2.onclick = () => {
			this.zonaTexto1.textContent = 'Click'
			if (this.juego.ver('vista6.libro1.pulsado')){
				this.juego.guardar('vista6.libro1.pulsado', false)
				this.zona2.style.border = 'none'
			}
			else{
				this.juego.guardar('vista6.libro1.pulsado', true)
				this.zona2.style.border = '1px solid red'
			}
			this.comprobarLibro()
		}
		if (this.juego.ver('vista6.libro2.pulsado'))
			this.zona3.style.border = '1px solid blue'
		this.zona3.onclick = () => {
			this.zonaTexto1.textContent = 'Click'
			if (this.juego.ver('vista6.libro2.pulsado')){
				this.juego.guardar('vista6.libro2.pulsado', false)
				this.zona3.style.border = 'none'
			}
			else{
				this.juego.guardar('vista6.libro2.pulsado', true)
				this.zona3.style.border = '1px solid blue'
			}
			this.comprobarLibro()
		}
	}
	pulsarZona1(){
		this.juego.irAVista4()
	}
	comprobarLibro(){
			if (this.juego.ver('vista6.libro1.pulsado') && this.juego.ver('vista6.libro2.pulsado')){
				this.zona4.style.border = '1px solid yellow'
				this.zona4.onclick = () => {
					this.zonaTexto1.textContent = 'Este libro no estaba aquí antes. Es mejor que lo guardes tú.'
					this.juego.guardar('arquitectura', true)
					this.zona4.remove()
				}
				this.zona4.style.cursor = 'pointer'
			}
			else {
				this.zona4.style.border = 'none'
				this.zona4.onclick = () => {}
				this.zona4.style.cursor = 'default'
			}
	}
}
