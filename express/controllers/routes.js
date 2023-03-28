
var mongoose = require("mongoose");
var Pokemon = mongoose.model("pokemon");
const ObjectId = require('mongodb').ObjectId;

//GET - Return all pokemon in the DB
exports.findAllpokemon = function (req, res) {
  Pokemon.find(function (err, pokemon) {
    if (err) res.status(500, err.message);

    console.log("GET /pokemon");
    res.status(200).jsonp(pokemon);
  });
};
//GET - Return a pokemon with specified ID
exports.findById = function (req, res) {
  Pokemon.findById(req.params.id, function (err, pokemon) {
    if (err) return res.status(500, err.message);

    console.log('GET /pokemon/id/' + req.params.id);
    res.status(200).jsonp(pokemon);
  });
};
//GET Return pokemon by name
exports.findByName = function (req, res) {
  var nombre = req.params.nombre;
  Pokemon.find({ nombre: nombre }, (err, pokemon) => {
    if (err) return res.status(500, err.message);
    console.log('GET /pokemon/nombre/' + req.params.nombre);
    console.log(req.body);
    res.status(200).jsonp(pokemon);
  })
}
/* exports.findByPrice = function (req, res) {
  var precio = parseFloat(req.params.precio);
  Pokemon.find({ precio: { $gt: precio } }, (err, pokemons) => { //menor o igual: $lte
    if (err) return res.status(500, err.message);
    console.log('GET /pokemon/precio/' + req.params.precio);
    console.log(req.body);
    res.status(200).jsonp(pokemons);
  });
};
 */


//POST - Insert new pokemon(s) in the DB
exports.addpokemon = function (req, res) {
  console.log("POST");
  console.log(req.body);

  var pokemonArr = req.body;

  Pokemon.insertMany(pokemonArr, function (err, pokemon) {
    if (err) return res.status(500).send(err.message);
    res.status(200).jsonp(pokemon);
  });
};


//PUT - Update a register already exists
exports.updatepokemon = function (req, res) {
  console.log("PUT");
  console.log(req.body);

  let id = { _id: req.params.id };
  // let result = await Pokemon.deleteOne({ _id: id })
  var pokemonArr = req.body;

  Pokemon.updateOne(id, pokemonArr, function (err, pokemon) {
    if (err) return res.status(500).send(err.message);
    res.status(200).jsonp(pokemon);

  });
};

//DELETE - Delete a pokemon with specified ID
////exports.deletepokemon = function (req, res) {
//pokemon.findById(req.params.id, function (err, pokemon) {
//pokemon.remove(function (err) {
//if (err) return res.status(500).send(err.message);
//res.status(200).send();
//});
//});
//};

//delete option

exports.deletePokemon = async function (req, res) {
  try {
    let id = req.params.id;
    let result = await Pokemon.deleteOne({ _id: id })
    if (result) {
      console.log('DELETE /pokemon/' + req.params.id);
      return res.status(200).send({ result: "Pokemon has been deleted" });
    }
    return res.status(200).send({ result: "Not able to delete" })
  } catch (error) {
    return res.status(200).send({ message: error.message })
  }

}
