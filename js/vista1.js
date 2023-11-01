
export class Vista1{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/tatooine1.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.texto1 = this.juego.crearZona(500, 200, 900, 300)
		this.texto1.classList.add('presentacion')
	}
	play(){
		this.base.appendChild(this.fondo)
		this.base.appendChild(this.texto1)
		this.texto1.innerHTML = texto1
	}
}

const texto1 = `
	Tatooine, un planeta desértico circunvolucional escasamente poblado. Muy escasamente poblado... Y es tu casa.<br /><br />
	Trabajas como granjero de humedad, recuperando agua de la atmósfera para vendérsela a los pocos cultivadores de dátiles duros del planeta. Igual que hicieron tu padre y tu abuelo antes que tú.<br /><br />
	Como dijo un famoso Jedi al llegar a Tatooine: <i>"Si existe un auténtico centro de la galaxia, estás en el planeta más alejado de él"</i>
`
