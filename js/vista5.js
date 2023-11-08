
export class Vista5{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/archivos1.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.zona1 = this.juego.crearZona(0, 400, 100, 200)
		this.zona1.textContent = '<'
		this.zona1.classList.add('movimiento')
		this.zona2 = this.juego.crearZona(600, 700, 200, 100)
		this.zona2.textContent = '⌄'
		this.zona2.classList.add('movimiento')
		this.zona2.classList.add('centrado')
	}
	play(){
		this.base.appendChild(this.fondo)
		this.base.appendChild(this.zona1)
		this.zona1.onclick = this.pulsarZona1.bind(this)
		this.base.appendChild(this.zona2)
		this.zona2.onclick = this.pulsarZona2.bind(this)
	}
	pulsarZona1(){
	}
	pulsarZona2(){
		this.juego.irAVista4()
	}
}
const texto = `Hoy empiezas tu formación de Jedi. Y no va a ser fácil.<br /><br />
En primer lugar deberás superar la prueba de conocimientos.<br /><br />
En tu inventario encontrarás un ejemplar del libro "Teoría de Sistemas Operativos", pero está incompleto. Afortunadamente el Templo Jedi alberga la mayor biblioteca de conocimiento de la galaxia. Deberás recorrerla buscando el conocimiento que necesitas.<br /><br />
Una vez hayas completado el libro, regresa aquí y prepárate para la prueba.`
