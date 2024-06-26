//qtd.innerHTML = Number(qtd.innerHTML) + 1 é igual a qtd.innerHTML++ 
// O mesmo se aplica para subtração, diferindo apenas o simbolo: qtd.innerHTML--

function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

if (acao == '-' && qtd.innerHTML == 0){
        alert('A quantidade selecionada não é suportada.')
} else {
    acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
    const valorTotal = qtd.innerHTML * somenteNumeros(valor.innerHTML)
    total.innerHTML = formatarValor(valorTotal)
    soma()
}}

function soma(){
    let soma = 0
    
    for(let i = 1 ; i < 4; i++){
        let numero = somenteNumeros(document.getElementById('total_' + i).innerHTML)
        soma += Number(numero)
    }
    document.getElementById('subtotal').innerHTML = formatarValor(soma)
}

function somenteNumeros(n){
    return n.replace(/\D/g, '')
}

function formatarValor(n){
    return n.toLocaleString('pt-BR')

}

function link_1(){
window.open("https://linktr.ee/ctechtest")
}

function link_2(){

    window.open("C:/Users/Analista - Eliel/Documents/praticas/CTech")
}

function link_3(){

    window.open("https://asafecortes.wixsite.com/my-site")
}

function link_4(){

    window.open("https://asafecortes.wixsite.com/nossa-hist")
}



