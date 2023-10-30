class Juego{
	constructor(base){
		this.base = base
	}
	
}


window.onload = () => {
	const div = document.getElementById('juego')
	new Juego(div)
}
