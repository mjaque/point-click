
import {Vista1} from './vista1.js'
import {Vista2} from './vista2.js'
import {Vista3} from './vista3.js'
import {Vista4} from './vista4.js'
import {Vista5} from './vista5.js'
import {Vista6} from './vista6.js'
import {Vista7} from './vista7.js'

class Juego{
	constructor(divJuego){
		this.divJuego = divJuego
		this.base = this.divJuego.querySelectorAll('div')[0]
		this.modelo = new Map()
		this.vista1 = new Vista1(this, this.base)	//Intro 1 - Tatooine
		this.vista2 = new Vista2(this, this.base)	//Intro 2 - Tatooine - Reclutamiento
		this.vista3 = new Vista3(this, this.base) //Intro 3 - Llegada a Coruscant
		this.vista4 = new Vista4(this, this.base) //Biblioteca - Sala Principal
		this.vista5 = new Vista5(this, this.base) //Biblioteca - Pasillo 1
		this.vista6 = new Vista6(this, this.base) //Biblioteca - Pasillo 2
		this.vista7 = new Vista7(this, this.base) //Biblioteca - Pasillo 3

		this.vista4.play()
	}
	guardar(clave, obj){
		this.modelo.set(clave, obj)
	}
	ver(clave){
		return this.modelo.get(clave)
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
		if (height)
			zona.style.height = height + 'px'
		zona.classList.add('zona')
		return zona
	}
	limpiar(){
		while (this.base.firstElementChild)
			this.base.firstElementChild.remove()
	}
	irAVista2(){
		this.limpiar()
		this.vista2.play()
	}
	irAVista3(){
		this.limpiar()
		this.vista3.play()
	}
	irAVista4(){
		this.limpiar()
		this.vista4.play()
	}
	irAVista5(){
		this.limpiar()
		this.vista5.play()
	}
	irAVista6(){
		this.limpiar()
		this.vista6.play()
	}
	irAVista7(){
		this.limpiar()
		this.vista7.play()
	}
}


window.onload = () => {
	resizeTo(1900, 1000)	//200px para inventario
	const div = document.getElementById('juego')
	new Juego(div)
}
