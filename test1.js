var listofpieces = ["Cabeçote","Filtro de Óleo","Radiador","Disco de freio"] //Vector or Array

let peso = 50;

if(peso < 100){
    console.log("A peça deve pesar no mínimo 100g / 0.1KG");
}else{
    console.log("A peça deve ser encaminhada à outro setor!");
}
if(listofpieces.length < 11){ //Detectar a quantidade de itens na lista.
    console.log("É possível cadastra mais peças.");
}else{
    console.log("A lista não possui espaço para novas peças");
}
let nomePeca = "Disco de freio"
if(nomePeca.length > 3)
{
    console.log("Nome da peça corresponde ao resuisitos de cadastramento.");
}else if(nomePeca = 0){
    console.log("O nome fornecido não pode ser vazio.");
}else{
    console.log("Digite um nome adequado.");
}