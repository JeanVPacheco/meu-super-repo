const mathFunctions = require('./mathFunctions');

// Função "sum"
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('Tests sum function', () => {
  test('if the sum of 4 and 5 results in 9', () => {
    expect(mathFunctions.sum(4, 5)).toBe(9);
  });
  test('if the sum of 0 and 0 results in 0', () => {
    expect(mathFunctions.sum(0, 0)).toBe(0);
  });
  test('if sum throws an error when you try to sum a string', () => {
    expect(() => {
      mathFunctions.sum(4, '5');
    }).toThrow();
  });
  test('if error message equals to "parameters must be numbers"', () => {
    expect(() => {
      mathFunctions.sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  })
});

// Função "myRemove"
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações

describe('Tests myRemove function', () => {
  test('if myRemove([1, 2, 3, 4], 3) removes the "3" element', () => {
    expect(mathFunctions.myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });
  test('if myRemove([1, 2, 3, 4], 3) does not return the same array', () => {
    expect(mathFunctions.myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });
  const myList = [5, 6, 7, 8];
  mathFunctions.myRemove(myList, 5);
  test('if myList wasnt modified', () => {
    expect(myList).toStrictEqual([5, 6, 7, 8]);
  });
});