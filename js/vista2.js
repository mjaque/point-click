
export class Vista2{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/tatooine2.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.zonaTexto1 = this.juego.crearZona(400, 50, 1100, 300)
		this.zonaTexto1.classList.add('presentacion')
		this.zonaSeguir = this.juego.crearZona(700, 700, 650, 200)
		this.zonaSeguir.classList.add('presentacion')
		this.zonaSeguir.classList.add('centrado')
	}
	play(){
		this.base.appendChild(this.fondo)
		this.base.appendChild(this.zonaTexto1)
		this.zonaTexto1.innerHTML = texto
		this.zonaTexto1.style.opacity = 0
		setTimeout(()=>{this.zonaTexto1.style.opacity = 1}, 500)
		setTimeout(this.seguir.bind(this), 10000)
	}
	seguir(){
		this.base.appendChild(this.zonaSeguir)
		this.zonaSeguir.innerHTML = 'Sí claro, no me voy a rajar antes de empezar (Pulsa ENTER para continuar)'
		window.onkeydown = (evento) => {
			if (evento.code === 'Enter'){
				window.onkeydown = null
				this.juego.irAVista3()
			}
		}
	}
}
const texto = `Una tarde, tras un intenso día de trabajo, llegas a casa. Pero esta vez hay algo diferente.<br /><br />
En la puerta te espera un ser alto y delgado, envuelto en una capa turquesa. Parece que no tiene prisa, que lleva toda la vida junto a tu puerta. Te acercas y reconoces la insignia que cuelga de su capa. Es un caballero Jedi. Por tu cabeza pasan las historias que tu padre te contaba después de la cena.<br /><br />
El caballero Jedi te llama por tu nombre, pero sabes que jamás le habías visto antes. Y la propuesta que te hace a continuación es todavía más sorprendente.<br /><br />
<i>"Estamos buscando seres en los que la fuerza esté muy presente" - te explica - "y hasta Coruscant nos llegó el eco de que alguien aquí en Tatooine posee un don. He venido a buscarte y a proponerte que vengas conmigo para iniciar tu entrenamiento como Jedi"</i><br /><br />
¿Te atreves a ir con él?` 
