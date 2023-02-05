// Atividade 09 - 01

/* 

    Desenvolva um algoritmo para percorrer um vetor de 15 elementos
    inteiros já preenchido e imprima todos os valores pares.

*/

function exercicio01() {

    let vetoresPares = [12, 36, 25, 589, 74, 98, 76, 165, 69, 147, 65, 69, 1747, 274, 78];

    for (i = 0; i < vetoresPares.length; i++) {
        if (vetoresPares[i] % 2 === 0) {
            console.log(vetoresPares[i]);
        }
        
    }
}

exercicio01();



// Atividade 09 - 02

/* 

    Desenvolva um algoritmo para percorrer um vetor de 20 elementos
    inteiros e no final mostre a soma de todos os elementos.

*/

function exercicio02() {
    
    let vetor20 = [12, 15, 18, 19, 25, 29, 34, 37, 39, 42, 45, 48, 52, 56, 62, 67, 75, 77, 83, 87];
    let soma = 0;

    for (i = 0; i < vetor20.length; i++) {
        soma += vetor20[i];
    }

    console.log(`A soma de todos os elementos é: ${soma}`);
}

exercicio02();



// Atividade 09 - 03

/* 

    Desenvolva um algoritmo que preenche um vetor com os 4
    primeiros números perfeitos.

*/

function exercicio03() {
    
    let vetor03 = [];
    for (i = 1; vetor03.length < 4; i++) {
        let somar = 0;
        for (contador = 0; contador < i; contador++) {
            if (i % contador === 0) {
                somar += contador;
            }
            
        }
        if (somar === i) {
            vetor03.push(i);
        }
    }
    console.log(vetor03);
}

exercicio03();



// Atividade 09 - 04

/* 

    Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
    retorne a união dos dois em um novo vetor.

*/

function exercicio04() {
    
    let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let vetor2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    let novoVetor = [];
    

    for (i = 0; i < vetor1.length; i++) {
        const numero = vetor1[i];
        novoVetor.push(numero);
    }

    for (i = 0; i < vetor2.length; i++) {
        const numero = vetor2[i];
        novoVetor.push(numero)
    }

    console.log(novoVetor);

}

exercicio04();



// Atividade 09 - 05

/* 

    Crie uma função que recebe um vetor de inteiros e um número
    inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
    se não faz parte.

*/

function exercicio05() {
    
    let verificaVetor = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40];
    let numeroInformado = Number (prompt('Informe aqui o número para verificar se o mesmo consta no vetor:'));
    let confirmacao = false;

    for (i = 0; i < verificaVetor.length; i++) {
        if (numeroInformado === verificaVetor[i]) {
            confirmacao = true;
        }  
    }

    if (confirmacao) {
        console.log(`O ${numeroInformado} encontra-se no vetor!`);
    } else {
        console.log(`O ${numeroInformado} não encontra-se no vetor!`);
    }

}

exercicio05();



// Atividade 09 - 06

/* 

    Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
    e que exiba a lista desses nomes na tela. Após exibir essa lista, o
    programa deve mostrar também os nomes na ordem inversa em
    que o usuário os digitou.

    Ex:
    Entrada: Édson, Marcelo, Letícia, Ju, Thobias
    Saída: Thobias, Ju, Letícia, Marcelo, Édson

*/

function exercicio06() {

    let listaNomes = [];

    for (let i = 0; i < 5; i++) {
        let nomeUsuario = prompt('Digite aqui os nomes:');
        listaNomes.push(nomeUsuario);
    }

    let listaInvertida = [];
    for (let index = listaNomes.length-1; index >= 0; index--) {
        const element = listaNomes[index];
        listaInvertida.push(element);
    }

    alert(`Entrada: ${listaNomes}.\n 
    Saída: ${listaInvertida}.`)

    console.log(`Entrada: ${listaNomes}.`);
    console.log(`Saída: ${listaInvertida}.`);

}

exercicio06();

