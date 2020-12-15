const counterVogais = require('./counterVogal')

describe('Counter Vogal', () => {

  test('Se caracter for vogal retorne vogal', () => {

    const result = counterVogais("a");
    expect(result).toEqual("Vogal");

  });

  test('Se caracter não for vogal retorne consoante', () => {

    const result = counterVogais("b");
    expect(result).toEqual("Consoante");

  });


});
