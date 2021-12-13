const express = require("express");
const router = express.Router();
const pokeController = require("../controllers/pokemons");

router.get("/", (req, res, next) => {
  const controller = new pokeController();
  controller
    .getPokemons()
    .then(({ data: { results } }) => {
      if (results.length) {
        const pokemons = results.map(({ name, url }) => {
          const res = url.match(/\/(\d{1,5})\b/);
          const img = res
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res[1]}.png`
            : null;

          return {
            name,
            img,
          };
        });
        return res.json(pokemons);
      }
      res.status(404).end();
    })
    .catch((err) => next(err));
});

router.get("/:name", (req, res, next) => {
  const { name } = req.params;
  const controller = new pokeController();

  controller
    .getPokemonByName(name)
    .then(({ data }) => {
      console.log(data);
      if (data) return res.json(data);
      res.status(404).end();
    })
    .catch((err) => next(err));
});

module.exports = router;
