
export class Vista1{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/tatooine1.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.zonaTexto1 = this.juego.crearZona(500, 200, 900, 300)
		this.zonaTexto1.classList.add('presentacion')
		this.zonaSeguir = this.juego.crearZona(700, 600, 500, 200)
		this.zonaSeguir.classList.add('presentacion')
	}
	play(){
		this.base.appendChild(this.fondo)
		this.base.appendChild(this.zonaTexto1)
		this.zonaTexto1.innerHTML = texto1
		this.zonaTexto1.style.opacity = 0
		setTimeout(()=>{this.zonaTexto1.style.opacity = 1}, 500)
		setTimeout(this.seguir.bind(this), 10000)
	}
	seguir(){
		this.base.appendChild(this.zonaSeguir)
		this.zonaSeguir.innerHTML = '(Pulsa ENTER para continuar)'
		window.onkeydown = (evento) => {
			this.zonaTexto1.style.opacity = 1
			if (evento.code === 'Enter'){
				window.onkeydown = null
				this.juego.irAVista2()
			}
		}
	}
}

const texto1 = `
	Tatooine, un planeta desértico circunvolucional escasamente poblado. Muy escasamente poblado... Y es tu casa.<br /><br />
	Trabajas como granjero de humedad, recuperando agua de la atmósfera para vendérsela a los pocos cultivadores de dátiles negros del planeta. Igual que hicieron tu padre y tu abuelo antes que tú.<br /><br />
	Como dijo un famoso Jedi al llegar a Tatooine: <i>"Si existe un auténtico centro de la galaxia, estás en el planeta más alejado de él"</i>
`
const text2 = `Una tarde, tras un intenso día de trabajo, llegas a casa. Pero esta vez hay algo diferente.<br />
En la puerta te espera un ser alto y delgado, envuelto en una capa turquesa. Parece que no tiene prisa, que lleva toda la vida junto a tu puerta.<br />
Te acercas y reconoces la insignia que cuelga de su capa. Es un caballero Jedi. Por tu cabeza pasan las historias que tu padre te contaba después de la cena.<br />
El caballero Jedi te llama por tu nombre, pero sabes que jamás le habías visto antes. Y la propuesta que te hace a continuación es todavía más sorprendente.<br />
<i>"Estamos buscando seres en los que la fuerza esté muy presente" - te explica - "y hasta Coruscant nos llegó el eco de que alguien aquí en Tatooine posee un don. He venido a buscarte y a proponerte que vengas conmigo para iniciar tu entrenamiento como Jedi"</i>` 
