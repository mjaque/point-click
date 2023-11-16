
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
		this.divInventario = this.divJuego.querySelectorAll('div')[1]
		this.modelo = new Map()
		this.vista1 = new Vista1(this, this.base)	//Intro 1 - Tatooine
		this.vista2 = new Vista2(this, this.base)	//Intro 2 - Tatooine - Reclutamiento
		this.vista3 = new Vista3(this, this.base) //Intro 3 - Llegada a Coruscant
		this.vista4 = new Vista4(this, this.base) //Biblioteca - Sala Principal
		this.vista5 = new Vista5(this, this.base) //Biblioteca - Pasillo 1
		this.vista6 = new Vista6(this, this.base) //Biblioteca - Pasillo 2
		this.vista7 = new Vista7(this, this.base) //Biblioteca - Pasillo 3

		this.vista7.play()
	}
	guardar(clave, obj){
		this.modelo.set(clave, obj)
		this.actualizarInventario()
	}
	actualizarInventario(){
		while (this.divInventario.firstElementChild)
			this.divInventario.firstElementChild.remove()
		for(let entrada of this.modelo)
			switch (entrada[0]){
				case 'libro':
					const img = document.createElement('img')
					this.divInventario.appendChild(img)
					img.src = './img/libro.png'
					img.classList.add('inventario')
					img.setAttribute('title', 'Libro de Teoría de Sistemas Operativos, con varias páginas arrancadas.')
					img.onclick = () => {window.open('./docs/teo_sis_op.odt', '_blank')}
					break
				case 'definicion':
					const img1 = document.createElement('img')
					this.divInventario.appendChild(img1)
					img1.src = './img/doc1.png'
					img1.classList.add('inventario')
					img1.setAttribute('title', 'Un antiguo documento sobre la definición de los Sistemas Operativos, que lleva el sello de los Jedi.')
					img1.onclick = () => {window.open('./docs/definicion.pdf', '_blank')}
					break
				case 'caracteristicas':
					const img2 = document.createElement('img')
					this.divInventario.appendChild(img2)
					img2.src = './img/doc2.png'
					img2.classList.add('inventario')
					img2.setAttribute('title', 'Parece un escrito sobre Características de los Sistemas Operativos... interesante.')
					img2.onclick = () => {window.open('./docs/caracteristicas.pdf', '_blank')}
					break
			}
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
