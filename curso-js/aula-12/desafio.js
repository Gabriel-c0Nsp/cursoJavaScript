let varA = 'A'; //valor de A aporntar para o valor de B
let varB = 'B'; //valor de B apontar para o valor de C
let varC = 'C'; //valor de C apontar para o valor de A

//Minha solução
const ABC =`${varB} ${varC} ${varA}`;

console.log(ABC);

//Resolução esperada

const varAtemp = varA;

varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC);






