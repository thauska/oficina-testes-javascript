const fizzbuzz = require('./fizzbuzz')

describe('FizzBuzz Puzzle', () => {
  test('Se não for múltiplo de 3 ou de 5 retorne ele mesmo', () => {

    const result = fizzbuzz(0);
    expect(result).toEqual(0);

  });

  test('Deve retornar 7 quando passado 7', () => {

    const result = fizzbuzz(7);
    expect(result).toEqual(7);

  });

  test('Deve retornar Fizz quando passado 3', () => {

    const result = fizzbuzz(3);
    expect(result).toEqual("Fizz");

  });

  test('Deve retornar Buzz quando passado 5', () => {

    const result = fizzbuzz(5);
    expect(result).toEqual("Buzz");

  });

  test('Deve retornar Buzz quando passado 5', () => {

    const result = fizzbuzz(10);
    expect(result).toEqual("Buzz");

  });

  test('Deve retornar FizzBuzz quando passado 15', () => {

    const result = fizzbuzz(15);
    expect(result).toEqual("FizzBuzz");

  });

  test('Deve retornar FizzBuzz quando passado 45', () => {

    const result = fizzbuzz(45);
    expect(result).toEqual("FizzBuzz");

  });

});
