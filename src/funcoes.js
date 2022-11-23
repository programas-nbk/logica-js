/**
 * Implemente uma função que receba o nome de um cliente e devolve um cumprimento para ele.
 * 
 * EXEMPLO: 
 *   - Se o nome do cliente é Bill Gates, o cumprimento deve ser "Olá, Bill Gates!".
 *   - Se o nome do cliente é Steve Jobs, o cumprimento deve ser "Olá, Steve Jobs!".
 */
function cumprimenta(nome) { return `Olá, ${nome}!`}


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
function calculaDesconto(valor, quantidade) {
    switch (true){
        case (quantidade == 1):
            return 0;
        case (quantidade == 2):
            return valor * 0.03;
        case (quantidade == 3):
            return valor * 0.07;
        case (quantidade == 4):
            return valor * 0.12;
        case (quantidade >= 5):
            return valor * 0.20;  
    }
}


/**
 * Implemente uma função que receba um número X e devolva a soma dos número de 1 a X.
 * 
 * EXEMPLO:
 *   - X é 100: calcula 1 + 2 + 3 + ... + 99 + 100, retorna 5050
 *   - X é 200: calcula 1 + 2 + 3 + ... + 199 + 200, retorna 20100
 */
function somatorio(x) {
    var total = 0
    for(var i=1; i <= x; i++){
        total += i
    }
    return total
}


/**
 * Implemente uma função que recebe um número N devolve o fatorial do número.
 * 
 * EXEMPLO:
 *   - n é 5: 5! = 120
 *   - n é 9: 9! = 362880
 */
function fatorial(n) {
    var total = 1
    for(var i=1; i <= n; i++){
        total *= i
    }
    return total
}


/**
 * Implemente uma função que recebe um array com notas de um aluno e retorne o valor da média dele.
 */
 function calculaMedia(notas) {
    let total = notas.reduce((total, nota) => total += nota)
    return total / notas.length
 }


/**
 * Implemente uma função que calcule uma função do segundo grau (ax² + bx + c = 0).
 * A função deve retornar um array com x1 na primeira posição e x2 na segunda posição.
 */
function equacaoDeSegundoGrau(a, b, c) {
    let delta = b*b-4*a*c
    console.log(delta)
    let x1 = (-b + Math.sqrt(delta)) / (2*a)
    let x2 = (-b - Math.sqrt(delta)) / (2*a)
    return [x1, x2]
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
    fibonacci
}