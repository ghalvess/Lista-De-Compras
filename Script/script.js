 //inner text
let nome = prompt("Digite seu nome:")

let paragrafo = document.getElementById("paragrafo")

paragrafo.innerText = nome
                

        //inner HTML
const outro = prompt("Agora digite uma tag com texto:")

let outroparagrafo = document.getElementById("outroparagrafo")

outroparagrafo.innerHTML = outro


function alterarP() {
    let n = prompt("Digite o valor que você deseja colocar no P:")
    let pa = document.getElementById("paragrafo")

    pa.innerText = n

}

function adicionarrHabito(){
    const text = prompt("Digite o seu habito:")

    let lista = document.getElementById("lista")

    let novoElementoLi = document.createElement("li")
    novoElementoLi.innerText = text

    lista.append(novoElementoLi)
}