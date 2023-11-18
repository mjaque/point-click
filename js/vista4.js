
export class Vista4{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/archivos0.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.zonaTexto1 = this.juego.crearZona(400, 50, 1100, 300)
		this.zonaTexto1.classList.add('presentacion')
		this.zonaSeguir = this.juego.crearZona(700, 500, 650)
		this.zonaSeguir.classList.add('presentacion')
		this.zonaSeguir.classList.add('centrado')
		this.zona1 = this.juego.crearZona(0, 400, 100, 200)
		this.zona1.textContent = '<'
		this.zona1.classList.add('movimiento')
		this.zona2 = this.juego.crearZona(1300, 380, 50, 50)
		this.zona2.textContent = '⌃'
		this.zona2.classList.add('movimiento')
		this.zona3 = this.juego.crearZona(1800, 400, 50, 50)
		this.zona3.textContent = '>'
		this.zona3.classList.add('movimiento')
		this.zona4 = this.juego.crearZona(360, 530, 50, 15)
		this.zona4.style.cursor = 'pointer'
		this.zonaTexto2 = this.juego.crearZona(300, 350, 300, 100)
		this.zonaTexto2.classList.add('texto')
		this.zonaTexto2.style.opacity = 1
	}
	play(){
		this.base.appendChild(this.fondo)
		if (this.juego.ver('Vista4.texto.visto')){
			this.play2()
			return
		}
		this.base.appendChild(this.zonaTexto1)
		this.zonaTexto1.innerHTML = texto
		this.zonaTexto1.style.opacity = 0
		setTimeout(()=>{this.zonaTexto1.style.opacity = 0.9}, 500)
		setTimeout(this.seguir.bind(this), 5000)
	}
	seguir(){
		this.base.appendChild(this.zonaSeguir)
		this.zonaSeguir.innerHTML = '(Pulsa ENTER para continuar)'
		window.onkeydown = (evento) => {
			this.juego.guardar('Vista4.texto.visto', true)
			this.juego.guardar('libro', true)
			if (evento.code === 'Enter'){
				window.onkeydown = null
				this.zonaTexto1.remove()
				this.zonaSeguir.remove()
				this.play2()
			}
		}
	}
	play2(){
		this.base.appendChild(this.zona1)
		this.zona1.onclick = this.pulsarZona1.bind(this)
		this.base.appendChild(this.zona2)
		this.zona2.onclick = this.pulsarZona2.bind(this)
		this.base.appendChild(this.zona3)
		this.zona3.onclick = this.pulsarZona3.bind(this)
		this.base.appendChild(this.zona4)
		this.zona4.onclick = this.pulsarZona4.bind(this)
		this.zona4.onmouseover = () => {
			this.zonaTexto2.textContent = '¿Seguro que quieres operar con el terminal? Te la estás jugando'
		}
		this.zona4.onmouseout = () => {
			this.zonaTexto2.textContent = ''
		}
		this.base.appendChild(this.zonaTexto2)
	}
	pulsarZona1(){
		this.juego.irAVista5()
	}
	pulsarZona2(){
		this.juego.irAVista6()
	}
	pulsarZona3(){
		this.juego.irAVista7()
	}
	pulsarZona4(){
		if (prompt("00110100 00110010\nIntroduzca la clave de acceso: ") === "42"){
			this.zonaTexto2.textContent = 'Te cuelas en el ordenador central y encuentras un documento interesante.'
			this.juego.guardar('tabla', true)
			this.zona4.remove()
		}
		else{
			alert('¡BEEP! ¡BEEP! ¡BEEP!')
		}
	}
}
const texto = `Hoy empiezas tu formación de Jedi. Y no va a ser fácil.<br /><br />
En primer lugar deberás superar la prueba de conocimientos.<br /><br />
En tu inventario encontrarás un ejemplar del libro "Teoría de Sistemas Operativos", pero alguno de nuestros enemigos ha arrancado parte de sus contenidos. Afortunadamente el Templo Jedi alberga la mayor biblioteca de conocimiento de la galaxia. Deberás recorrerla buscando la información que falta.<br /><br />
Una vez hayas completado el libro, y transformado su información en CONOCIMIENTO, regresa aquí y supera la prueba para convertire en Caballero Jedi.`
