// const resultadoFinal = (resultado) => {
//     console.log(resultado);
// }




// const funcSoma = (num1, num2) => num1 + num2;

// let resultadoSoma = funcSoma(10, 8);

// resultadoFinal(resultadoSoma);



//2 outra maneira conforme abaixo simplificando as chamadas de funções

// const resultadoFinal = (resultado) => {
//     console.log(resultado);
// }

// const funcSoma = (num1, num2) => {
//    let soma = num1 + num2;
//    resultadoFinal(soma)
// }

// funcSoma(10, 8);


// 3 abaixo eu passo uma função como paramentro para outra funcao

const resultadoFinal = (resultado) => {
    console.log(resultado);
}

const funcSoma = (num1, num2, callback) => {
   let soma = num1 + num2;
   callback(soma)
}

funcSoma(10, 8, resultadoFinal);
