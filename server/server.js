const express = require("express");
const app = express();
const path = require("path");
const pokemonsRoutes = require("./routes/pokemons");

app.use(express.json());

app.use("/pokeApi", pokemonsRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.static(path.join(__dirname, 'client/docs')))
app.get("*", (req, res) => {
    let dir = __dirname.replace('/server/', '/')
    res.sendFile(path.join(dir, "client", "docs","index.html"))
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
