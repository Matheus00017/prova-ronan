/*4) Apresente o Menu de Lanches:
1 -> X-SALADA-> R$ 20,00
2 -> X-BACON-> R$ 25,00
3 -> X-TUDO-> R$ 23,00
4 -> BAURU -> R$ 29,99
5 -> AMERICANO -> 22,50
*/


var cardapio = "===== escolha um lanche =====\n";
cardapio = cardapio + "codigo | nome | preços\n";
cardapio += "1 |X-SALADA R$ 20,00\n"
cardapio += "2 |X-BACON R$ 25,00\n"
cardapio += "3 |X-TUDO R$ 23,00\n"
cardapio += "4 |BAURU  R$ 29,99\n"
cardapio += "5 |AMERICANO  22,50\n"
cardapio += "\nDigite o código do lanche escolhido:"

var codigo = parseInt(prompt(cardapio));
var quantidade = parseInt(prompt("Digite quantos lanches você vai querer:"));
var valorTotal = 0; 

if(codigo == 1){
    valorTotal = quantidade * 20.00;
}else if(codigo == 2){
    valorTotal = quantidade * 25.00;
}else if(codigo == 3){
    valorTotal = quantidade * 23.00;
}else if(codigo == 4){
    valorTotal = quantidade * 29.99;
}else if(codigo == 5){
    valorTotal = quantidade * 22.50;
}else{
    console.log("Digite um codigo Valído");
}

console.log("o seu pedido está pronto: ");
console.log("foram pedidos: " + quantidade );
console.log("O valor do seu pedido foi de: R$" + valorTotal);

/*Apresente o Menu de Bebidas:
Refrigerante Lata -> R$ 5,00
Refrigerante 2L -> R$ 10,00
Agua -> R$ 3,50
Suco -> R$ 7,50
heineken -> R$ 18,00
heineken long -> R$ 12,50
*/

var carta = "==== carta de bebidas ====\n";
carta = carta + "numero | nome | preço\n";
carta += "1 Refrigerante Lata  R$ 5,00\n";
carta += "2 Refrigerante 2L  R$ 10,00\n";
carta += "3 Agua  R$ 3,50\n";
carta += "4 Suco  R$ 7,50\n";
carta += "5 heineken 18,00\n";
carta += "6 heineken long R$ 12,50\n";
carta += "\nDigite o codigo da Bebida escolhida:";

var Numero = parseInt(prompt(carta));
var quantas = parseInt(prompt("Quantas bebidas você deseja comprar:"));
totalValor = 0;

if(Numero == 1){
    totalValor = quantas * 5.00;
}else if(Numero == 2){
    totalValor = quantas * 10.00;
}else if(Numero == 3){
    totalValor = quantas * 3.50;
}else if(Numero == 4){
    totalValor = quantas * 7.50;
}else if(Numero == 5){
    totalValor = quantas * 18.00;
}else if(Numero == 6){
    totalValor = quantas * 12.50;
}else{
    console.log("Digite um código Valido:")
}

console.log("o sua Bebida já foi separada: ");
console.log("Foram pedidas: " + quantas + " Bebidas")
console.log("O valor do seu pedido foi de: R$" + totalValor);

/* apresente as formas de pagamento:
PIX - 10% de desconto.
Dinheiro - 5% de desconto.
Débito - 3% de desconto.
Crédito - sem desconto.
Apresente todos os dados da compras, com seus calculos e valores;
*/

var formas = "==== formas de pagamento ====\n"

formas += "Opção 1|PIX - 10% de desconto\n"
formas += "Opção 2|Dinheiro - 5% de desconto\n"
formas += "opção 3|Débito - 3% de desconto\n"
formas += "Opção 4|Crédito - sem desconto\n"

var pagamento = parseFloat(prompt(formas));
var TotalApagar = valorTotal + totalValor;
var desconto = 0;

if(pagamento == 1){
    desconto = TotalApagar * 0.10;
    subtracao = TotalApagar - desconto;
    console.log("pagando via pix o cliente tem 10% de desconto:");
    console.log("o seu pedido ficou em: " + subtracao); 
}else if(pagamento == 2){
    desconto = TotalApagar * 0.05;
    subtracao = TotalApagar - desconto;
    console.log("pagando no dinheiro o cliente tem 5% de desconto:");
    console.log("o seu pedido ficou em: " + subtracao) 
}else if(pagamento == 3){
    desconto = TotalApagar * 0.03;
    subtracao = TotalApagar - desconto;
    console.log("pagando no Débitoo cliente tem 3% de desconto:");
    console.log("o seu pedido ficou em: " + subtracao)
}else if(pagamento == 4){
    TotalApagar = valorTotal + totalValor 
    console.log("pagando no Crédito o cliente não tem desconto:");
    console.log("o seu pedido ficou em: " + TotalApagar)
}else{
    console.log("Escolha uma forma de pagamentos Valida :");
}


