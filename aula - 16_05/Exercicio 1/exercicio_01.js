var quantidade = Number(prompt("Digite a quantidade de números que deseja: "));

while(isNaN(quantidade)){
    alert("O valor da quantidade de números deve ser uma letra");
    quantidade = Number(prompt("Digite a quantidade de números que deseja: "));
}
var num = [];

for (i = 0; i < quantidade; i++) {
    let n = Number(prompt("Digite um número: "));
    while(isNaN(n)){
        alert("Número inválido");
        n = Number(prompt("Digite um número: "));
    }
    num[i] = (n);
}

alert ("Tamanho do vetor desejado:");
alert (quantidade);
alert ("Números digitados: ");
alert (num);

num.sort(function(a,b){

    if (a < b){
        return -1;
    }
    if (a > b){
        return 1;
    }
    return 0;

});

alert ("O vetor organizado de forma crescente fica da seguinte forma: \n");
alert (num);

console.log(num);
