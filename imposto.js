/*Elabore um programa que receba o salário bruto mensal de um funcionário e
apresente a faixa e valor do desconto de INSS e IRRF e o valor líquido do salário
baseado na seguinte tabela:

INSS (Instituto Nacional de Seguro Social):
Até R$ 1.302,00 = 7,5%
De R$ 1.302,01 a R$ 2.571,29 = 9%
De R$ 2.571,30 a R$ 3.856,94 = 12%
Acima de R$ 3.856,94 = 14%

IRRF (Imposto Retido na Fonte):
Até R$ 1.903,98 = Isento
De R$ 1.903,99 a R$ 2.826,65 = 7,5%
De R$ 2.826,66 a R$ 3.751,05 = 15%
De R$ 3.751,06 a R$ 4.664,68 = 22,5%
Acima de R$ 4.664,68 = 27,5%
*/

var salario = parseFloat(prompt("Digite o valor de seu SALÁRIO BRUTO MENSAL: R$ "));

var faixaInss = "*** INSS - Instituto Nacional de Seguro Social ***\n";
faixaInss += "    CÓDIGO |             SALÁRIO          | DECONTO\n"
faixaInss += "      1 -> | Até R$ 1.302,00              |   7,5%\n";
faixaInss += "      2 -> | De R$ 1.302,01 a R$ 2.571,29 |     9%\n";
faixaInss += "      3 -> | De R$ 2.571,30 a R$ 3.856,94 |    12%\n";
faixaInss += "      4 -> | Acima de R$ 3.856,94         |    14%\n";
faixaInss += "Digite o CÓDIGO da faixa correspondente ao seu salário bruto: ";

var codigoInss = parseInt(prompt(faixaInss));

var descontoInss;
if (codigoInss == 1) {
    descontoInss = salario * 0.075;
} else if (codigoInss == 2) {
    descontoInss = salario * 0.09
} else if (codigoInss == 3) {
    descontoInss = salario * 0.12;
} else if (codigoInss == 4) {
    descontoInss = salario * 0.14;
} else {
    console.log ("Digite um código VÁLIDO!");
}

var faixaIrrf = "*** IRRF - Imposto de Renda Retido na Fonte ***\n";
faixaIrrf += "    CÓDIGO |             SALÁRIO           | DECONTO\n"
faixaIrrf += "     1 ->  | Até R$ 1.903,98               |  isento\n";
faixaIrrf += "     2 ->  | De R$ 1.903,99 a R$ 2.826,65  |   7,5%\n";
faixaIrrf += "     3 ->  | De R$ 2.826,66 a R$ 3.751,05  |    15%\n";
faixaIrrf += "     4 ->  | De R$ 3.751,06 a R$ 4.664,68  |  22,5%\n";
faixaIrrf += "     5 ->  | Acima de R$ 4.664,68          |  27,5%\n";
faixaIrrf += "Digite o CÓDIGO da faixa correspondente ao seu salário bruto: ";

var codigoIrrf = parseInt(prompt(faixaIrrf));

var descontoIrrf;
if (codigoIrrf == 1){
    descontoIrrf = 0;
} else if (codigoIrrf == 2) {
    descontoIrrf = salario * 0.075;
} else if (codigoIrrf == 3) {
    descontoIrrf = salario * 0.15;
} else if (codigoIrrf == 4) {
    descontoIrrf = salario * 0.225;
} else if (codigoIrrf == 5) {
    descontoIrrf = salario * 0.275;
} else {
    console.log ("Digite um código VÁLIDO!");
}
var totalDescontos = salario - (descontoInss + descontoIrrf);

console.log ("Seu SALÁRIO BRUTO se enquadra na FAIXA " + codigoInss + " e o DESCONTO é de: R$ " + descontoInss);
console.log ("Seu SALÁRIO BRUTO se enquadra na FAIXA " + codigoIrrf + " e o DESCONTO é de: R$ " + descontoIrrf);
console.log ("Seu SALÁRIO LÍQUIDO é de R$ " + totalDescontos);
