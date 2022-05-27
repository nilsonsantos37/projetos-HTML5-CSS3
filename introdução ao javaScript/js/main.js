

function clicou(){
document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
//console.log(document.getElementById("agradecimento"));
   // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globalacademy.com/");
   // window.location.href = "https://globalacademy.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
   // alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; 
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1,n2){
    return n1 + n2;
}
*/
/*
var validar = 0; // var fora da função chama a variavel global, var dentro da função chama variavel local
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
   return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validaIdade(validar));

//alert(soma(5, 10));
*/
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/
/*
var idade = prompt("qual sua idade?")
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/
/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta ={nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista =  ["maçã", "pêra", "laranja"];
//lista.push("uva");//push adiciona elemento
//lista.pop();   //pop exclui elemento.


//console.log(lista.length); //list.length dis o tamalho da minha lista
//console.log(lista.reverse());//list.reverse ela reverte a ordem da lista de traz para frente.
//console.log(lista[0]); //mostra a maçã
//console.log(lista.toString()[0]);// mostra a primeira letra M da maçã
//console.log(lista);
//console.log(lista.toString()); //separa as palavras por virgula
//console.log(lista.join(" | ")); // '|' chamase pipeline  lista.join é usado para usar qualquer tipo de sinal no lugar de uma virgula e mantem como uma string, basta escolher qual sinal quer usar.



//var nome = "Nilson dos Santos ";  //as aspas ("") indicam uma string se colocar um numero entre as aspas dupra ele entende que  não é mais um inteiro  e sim uma string
//var n1 = 5;  
//var n2 = 3;
//var frase = "japão é o melhor time do mundo";
//alert( nome + " tem " + idade +  " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toUpperCase()); //toUpperCase deixa tudo maisculo ja o loLowerCase deixa tudo minúsculo
//alert(frase.replace("Japõ", "Brasil")); pode ser usado no lugar de console.log(frase.toUpperCase());