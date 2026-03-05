let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

let varAuxA = varA;
let varAuxB = varB;
let varAuxC = varC;

varA = varAuxB;
varB = varAuxC;
varC = varAuxA;

console.log(varA, varB, varC);

// Resolução moderna:

varA = "A"; // B
varB = "B"; // C
varC = "C"; // A

[varA, varB, varC] = [varB, varC, varA]; // trocar valores

console.log(varA, varB, varC);