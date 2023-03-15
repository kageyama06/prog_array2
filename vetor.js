let valor_cidade = []  //variável global do tipo array
let res = document.getElementById('res')

function inserir(){
    let cidade = document.getElementById('cidade').value
    valor_cidade.push(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}

function insert_inicio(){
    let cidade = document.getElementById('cidade').value
    valor_cidade.unshift(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}

function excluir(){
    let cidade = document.getElementById('cidade').value
    valor_cidade.pop(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}

function excluir_final(){
    let cidade = document.getElementById('cidade').value
    valor_cidade.shift(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}