
function counterVogais(caracter) {

  caracter = caracter.toLowerCase()

  let vogais = ["a", "e", "i", "o", "u"]

  if (vogais.indexOf(caracter.toLowerCase()) !== -1) {
    return "Vogal"
  } else {
    return "Consoante"
  }


}

module.exports = counterVogais
