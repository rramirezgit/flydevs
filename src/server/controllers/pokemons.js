const Axios = require('axios')
const qs = require('qs')
const BASE_URL = "https://pokeapi.co/api/v2/" //process.env.ANDREANI_API

class pokeController {

	constructor() {
		this.pokeControllerInstance = Axios.default.create({
			baseURL: BASE_URL,
		})
	}
	async getPokemonByName(name) {
		return await this.pokeControllerInstance.get(`/pokemon/${name}`)
	}

    async getPokemons() {
		return await this.pokeControllerInstance.get('/pokemon?limit=1500')
	}
}

module.exports = pokeController
