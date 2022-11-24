/**
 * Implemente uma função que receba o nome de um cliente e devolve um cumprimento para ele.
 *
 * EXEMPLO:
 *   - Se o nome do cliente é Bill Gates, o cumprimento deve ser "Olá, Bill Gates!".
 *   - Se o nome do cliente é Steve Jobs, o cumprimento deve ser "Olá, Steve Jobs!".
 */
function cumprimenta(clientName) {
  return `Olá, ${clientName}!`;
}

/**
 * Implemente uma função que recebe o valor de uma compra e a quantidade de itens comprados,
 * e retorne o valor do desconto de acordo com a quantidade de itens.
 *
 * A TABELA DE DESCONTO É:
 *   - 1 item: 0 de desconto;
 *   - 2 itens: 3% de desconto;
 *   - 3 itens: 7% de desconto;
 *   - 4 itens: 12% de desconto;
 *   - 5 itens ou mais: 20% de desconto.
 */
function calculaDesconto(purchaseValue, quantityOfItemsPurchased) {
  const discountTable = {
    1: (value) => (0 * value) / 100,
    2: (value) => (3 * value) / 100,
    3: (value) => (7 * value) / 100,
    4: (value) => (12 * value) / 100,
    5: (value) => (20 * value) / 100,
  };

  if (quantityOfItemsPurchased >= 5) {
    return discountTable[5](purchaseValue);
  }

  return discountTable[quantityOfItemsPurchased](purchaseValue);
}

/**
 * Implemente uma função que receba um número X e devolva a soma dos número de 1 a X.
 *
 * EXEMPLO:
 *   - X é 100: calcula 1 + 2 + 3 + ... + 99 + 100, retorna 5050
 *   - X é 200: calcula 1 + 2 + 3 + ... + 199 + 200, retorna 20100
 */
function somatorio(number) {
  let sumResult = 0;
  let counter = 0;

  while (counter < number) {
    counter += 1;
    sumResult = sumResult + counter;
  }

  return sumResult;
}

/**
 * Implemente uma função que recebe um número N devolve o fatorial do número.
 *
 * EXEMPLO:
 *   - n é 5: 5! = 120
 *   - n é 9: 9! = 362880
 */
function fatorial(number) {
  let sumResult = 1;
  let counter = 0;

  while (counter < number) {
    counter += 1;
    sumResult = sumResult * counter;
  }

  return sumResult;
}

/**
 * Implemente uma função que recebe um array com notas de um aluno e retorne o valor da média dele.
 */
function calculaMedia(studentGrades) {
  const resultSumOfGrades = studentGrades.reduce((prev, curr) => prev + curr, 0);
  const averageResult = resultSumOfGrades / studentGrades.length;

  return averageResult;
}

/**
 * Implemente uma função que calcule uma função do segundo grau (ax² + bx + c = 0).
 * A função deve retornar um array com x1 na primeira posição e x2 na segunda posição.
 */
function equacaoDeSegundoGrau(a, b, c) {
  const formulaResult = b ** 2 - 4 * a * c;

  const resultOfTheFirstEquation = (b * -1 + Math.sqrt(formulaResult)) / (2 * a);

  const resultOfTheSecondEquation =
    (b * -1 + Math.sqrt(formulaResult) * -1) / (2 * a);

  return [resultOfTheFirstEquation, resultOfTheSecondEquation];
}

/**
 * Implemente uma função que receba uma data no formato DD/MM/YYYY,
 * extraia o dia, mês e ano, e retorne um array com:
 *   - o ANO na posição 1.
 *   - o MÊS na posição 2.
 *   - o DIA na posição 3.
 */
function extraiElementosDaData() {}

/**
 * Considerando a sequência de Fibonacci 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...,
 * implemente uma função que receba a enésima posição da sequência, e devolva o algarismo correspondente.
 *
 * EXEMPLO:
 *   - posição é 7: retorna o elemento 13.
 *   - posição é 8: retorna o elemento 21.
 */
function fibonacci() {}

module.exports = {
  cumprimenta,
  calculaDesconto,
  somatorio,
  fatorial,
  calculaMedia,
  equacaoDeSegundoGrau,
  extraiElementosDaData,
  fibonacci,
};
