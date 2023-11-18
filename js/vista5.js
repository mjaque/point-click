
export class Vista5{
	constructor(juego, base){
		this.juego = juego
		this.base = base

		this.imgFondo = new Image()
		this.imgFondo.src = './img/archivos1.png'
		this.fondo = this.juego.crearFondo(this.imgFondo)
		this.zona1 = this.juego.crearZona(1800, 600, 100, 200)
		this.zona1.textContent = '>'
		this.zona1.classList.add('movimiento')
		this.zona2 = this.juego.crearZona(40, 257, 10, 35)
		this.zona2.style.cursor = 'pointer'
		this.zonaTexto1 = this.juego.crearZona(100, 250, 200, 200)
		this.zonaTexto1.classList.add('texto')
		this.zonaTexto1.style.opacity = 1
		this.zona3 = this.juego.crearZona(1000, 450, 200, 300)
		this.zona3.style.cursor = 'pointer'
		this.zonaTexto2 = this.juego.crearZona(1000, 350, 200, 100)
		this.zonaTexto2.classList.add('texto')
		this.zonaTexto2.style.opacity = 1
		this.zona4 = this.juego.crearZona(1525, 25, 20, 40)
		this.zona4.style.cursor = 'default'
	}
	play(){
		this.base.appendChild(this.fondo)
		this.base.appendChild(this.zona1)
		this.zona1.onclick = this.pulsarZona1.bind(this)
		this.base.appendChild(this.zona3)
		this.base.appendChild(this.zonaTexto2)
		this.base.appendChild(this.zona4)
		this.zona3.onmouseover = () => {
			this.zonaTexto2.textContent = 'Parecen dos Jedis de alto rango. No creo que quieras hablar con ellos.'
		}
		this.zona3.onclick = () => {
			if (!this.juego.ver('vista5.dialogo')){
				this.juego.guardar('vista5.dialogo', 1)
				this.zonaTexto2.textContent = '"Joven padawan, ¿no ves que resultas molesto?"'
			}
			else{
				if (this.juego.ver('vista5.dialogo') == 1){
					this.juego.guardar('vista5.dialogo', 2)
					this.zonaTexto2.textContent = '"Joven padawan, definitivamente ERES molesto."'
				}
				else{
					this.zonaTexto2.textContent = '"Joven padawan, la perseverancia es una virtud."'
					this.zona4.style.cursor = 'pointer'
					this.zona4.style.border = '1px solid blue'
					this.zona4.onmouseover = () => {
						this.zonaTexto2.textContent = '"¿Has visto como la perseverancia tiene recompensa?"'
					}
					this.zona4.onmouseout = () => {
						this.zonaTexto2.textContent = ''
					}
					this.zona4.onclick = () => {
						this.zonaTexto2.textContent = '"Estudialo con cuidado"'
						this.juego.guardar('funciones', true)
						this.zona4.remove()
					}
				}
			}
		}
		
		//Si no se ha cogido definicion
		this.base.appendChild(this.zona2)
		this.base.appendChild(this.zonaTexto1)
		this.zona2.onmouseover = () => {
			this.zonaTexto1.textContent = 'Este libro parece interesante'
		}
		this.zona2.onmouseout = () => {
			this.zonaTexto1.textContent = ''
		}
		this.zona2.onclick = () => {
			this.zonaTexto1.textContent = 'Añades el documento a tu inventario'
			this.juego.guardar('definicion', true)
			setTimeout( () => {
				this.zona2.remove()
				this.zonaTexto1.remove()
			}, 2000)
		}
	}
	pulsarZona1(){
		this.juego.irAVista4()
	}
}
