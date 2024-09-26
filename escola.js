/*Análise de Desempenho Escolar: Desenvolva um algoritmo que leia as notas de 4 bimestres de um aluno e calcule a média. 
Informe se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).
*/

var nota1 = parseFloat(prompt("escreva a sua nota"));
var nota2 =  parseFloat(prompt("escreva a sua nota"));
var nota3 =  parseFloat(prompt("escreva a sua nota"));
var nota4 =  parseFloat(prompt("escreva a sua nota"));


var media = nota1 + nota2 + nota3 + nota4; 
var notaFinal = media / 4;


if(notaFinal >= 7){
    console.log("Você está aprovado a sua nota foi:" + notaFinal); 
}else if(notaFinal > 5){
    console.log("Você está de recuperação a sua nota foi:" + notaFinal)
}else if(notaFinal < 5 ){
    console.log("você está reprovado a sua nota foi:" + notaFinal)
}else{
    console.log("Escreva uma nota valída:");
}