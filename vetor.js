let valor_cidade = []  //variável global do tipo array
let res = document.getElementById('res')

function inserir(){
    let cidade = document.getElementById('cidade').value
    valor_cidade.push(cidade)
    console.log(valor_cidade)
    res.innerHTML = cidade
}

function excluir(){
    valor_cidade.pop(cidade)
    console.log(valor_cidade)
    res.innerHTML = cidade
}