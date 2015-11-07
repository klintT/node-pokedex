
var pdex = require('../src/index.js');

pdex(null, './test/csv').then(function (pokedex) {
	pokedex.getPokemonByName('venusaur')
		.then(function (p) {
			console.log(p);
		}).done();

	pokedex.getMoveByName('swords-dance')
		.then(function (m) {
			console.log(m);
		}).done();

	pokedex.getVersionGroupById(4)
		.then(function (vg) {
			console.log(vg);
		}).done();
}).done();