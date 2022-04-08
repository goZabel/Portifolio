document.querySelector(".hamburguer").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu")
})

document.querySelector("#qtde").addEventListener("change", mudarPreco)
document.querySelector("#js").addEventListener("change", mudarPreco)
document.querySelector("#layout-sim").addEventListener("change", mudarPreco)
document.querySelector("#layout-nao").addEventListener("change", mudarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value

    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
    if (prazo != 1) document.querySelector("label[for=prazo]").innerHTML += "s"

    mudarPreco()
})

function mudarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const layoutSim = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100
    if (temJS) preco *= 1.1
    if (layoutSim) preco += 500
    let taxaUrgencia = 1 - prazo*0.1
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = `<span class="dica">Total: </span>R$ ${preco.toFixed(2).replace(".", ",")}`
}