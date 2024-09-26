/*Calculadora de Imposto: crie um programa que leia a renda anual de um usuário e calcule o imposto a ser pago com base nas faixas:
até R$ 22.847,76 (isento)
de R$ 22.847,77  a R$ 33.919,80 (7,5%)
de R$ 33.919,81 a R$ 45.012,60 (15%)
e acima de R$ 45.012,61 (22,5%)
Apresente o valor digitado e o valor do imposto a ser pago.*/

var rendaAnual = parseFloat(prompt("Digite a sua RENDA ANUAL: "));
var renda = 0;
if (rendaAnual >= 0) {
renda = rendaAnual;
} else {
    console.log ("Digite corretamente sua RENDA ANUAL declarada.");
}
var retido = 0;

if (rendaAnual < 22847.77) {
retido = "ISENTO!!!";
} else if (renda < 33919.81) {
retido = renda * 0.075;
} else if (renda < 45012.62) {
    retido = renda * 0.15;
} else if (renda > 45012.61) {
    retido = renda * 0.225;
} else {
    console.log ("Digite corretamente sua RENDA ANUAL.");
}
console.log ("Sua RENDA ANUAL declarada foi de: R$ " + renda);
console.log ("O valor deduzido é de: R$ " + retido);
