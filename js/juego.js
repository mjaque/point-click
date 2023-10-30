
import {Vista1} from './vista1.js'

class Juego{
	constructor(base){
		this.base = base
		const vista1 = new Vista1(this.base)
		const vista2 = new Vista2(this.base)

		vista1.play()
	}
	
}


window.onload = () => {
	const div = document.getElementById('juego')
	new Juego(div)
}
