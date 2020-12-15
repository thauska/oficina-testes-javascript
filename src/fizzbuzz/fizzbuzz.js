function fizzbuzz(numero) {

  let resultFinal = ""

  if (numero === 0) return numero

  if (numero % 3 === 0) resultFinal = "Fizz"

  if (numero % 5 === 0) resultFinal += "Buzz"

  if (resultFinal === "") resultFinal = numero

  return resultFinal

}

module.exports = fizzbuzz
