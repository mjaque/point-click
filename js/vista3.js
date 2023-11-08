
export class Vista3{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/templo.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.zonaTexto1 = this.juego.crearZona(400, 200, 1100)
		this.zonaTexto1.classList.add('presentacion')
		this.zonaTexto1.classList.add('fondoTexto')
		this.zonaSeguir = this.juego.crearZona(700, 500, 650)
		this.zonaSeguir.classList.add('presentacion')
		this.zonaSeguir.classList.add('centrado')
	}
	play(){
		this.base.appendChild(this.fondo)
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
			if (evento.code === 'Enter'){
				window.onkeydown = null
				this.juego.irAVista4()
			}
		}
	}
}
const texto = `La veloz nave de transporte te lleva hasta el planeta Coruscant en un salto de luz. Ahí está el imponente Templo Jedi, centro de leyendas y misterios.<br /><br />
Jamás pensaste que un día lo verías con tus propios ojos. Y ahora estás a punto de entrar en él`
