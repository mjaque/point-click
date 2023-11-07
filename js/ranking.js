
class Ranking{
	constructor(){
		this.base = document.body
		this.crearMapaInsignias()
		setTimeout(this.iniciar.bind(this), 20)
	}
	crearMapaInsignias(){
		this.insignias = new Map()
		this.insignias.set( 'padawan', 'insignia1.png')
		this.insignias.set( 'caballero', 'insignia1.png')
		this.insignias.set( 'maestro', 'insignia1.png')
		this.insignias.set( 'leyenda', 'insignia1.png')
		//Otros rangos posibles: centinela, gran maestro, cónsul
	}
	iniciar(){
		fetch('./datos.json')
		.then( respuesta => respuesta.json())
		.then( respuesta => {this.mostrar(respuesta.jedis)})
	}
	mostrar(jedis){
	console.log(this.insignias)
		jedis.forEach( jedi => {
		console.log(jedi)
			const div = document.createElement('div')
			document.body.appendChild(div)
			const divNombre = document.createElement('div')
			div.appendChild(divNombre)
			divNombre.textContent = jedi.nombre
			const divRango = document.createElement('div')
			div.appendChild(divRango)
			divRango.textContent = jedi.rango
			const img = document.createElement('img')
			div.appendChild(img)
			img.src = `img/${this.insignias.get(jedi.rango)}`
		})
	}
}
window.onload = new Ranking()
