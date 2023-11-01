
import {Vista1} from './vista1.js'
import {Vista2} from './vista2.js'

class Juego{
	constructor(divJuego){
		this.divJuego = divJuego
		this.base = this.divJuego.querySelectorAll('div')[0]
		this.pAviso = this.divJuego.querySelectorAll('p')[0]
		this.vista1 = new Vista1(this, this.base)
		this.vista2 = new Vista2(this, this.base)

		this.vista1.play()
	}
	crearFondo(img){
		const fondo = document.createElement('img')
		fondo.src = img.src
		fondo.classList.add('fondo')
		return fondo
	}
	crearZona(left, top, width, height){
		let zona = document.createElement('div')
		zona.style.left = left + 'px'
		zona.style.top = top + 'px'
		zona.style.width = width + 'px'
		zona.style.height = height + 'px'
		zona.classList.add('zona')
		return zona
	}
	avisar(texto){
		this.pAviso.textContent = texto
		this.pAviso.style.display = 'block'
	}
	ocultarAviso(){
		this.pAviso.style.display = 'none'
	}
	limpiar(){
		while (this.base.firstElementChild)
			this.base.firstElementChild.remove()
		this.pAviso.textContent = ''
	}
	irAVista2(){
		this.limpiar()
		this.vista2.play()
	}
	
}


window.onload = () => {
	resizeTo(1900, 1000)	//200px para inventario
	const div = document.getElementById('juego')
	new Juego(div)
}
