let conexoes = []

jsPlumb.ready(function(){
    const instancia = jsPlumb.getInstance()

    const componentes = [
        "energia",
        "disjuntor",
        "botao",
        "led"
    ]

    componentes.forEach(id => {
        instancia.addEndpoint(id, {
            anchors: "Right"
        }, {
            isSource: true,
            isTarget: true,
            maxConnections: -1
        })
    })

    instancia.bind("connection", function(info){
        conexoes.push({
            source: info.sourceId,
            target: info.targetId
        })
    })
})

function verificarLigacao(){
    const resultado = document.getElementById("resultado")
    const led = document.getElementById("led")

    const correto = [
        ["energia", "disjuntor"],
        ["disjuntor", "botao"],
        ["botao", "led"]
    ]

    let acertos = 0

    correto.forEach(ligacao => {
        const encontrou = conexoes.find(c =>
            c.source === ligacao[0] &&
            c.target === ligacao[1]
        )

        if(encontrou){
            acertos++
        }
    })

    if(acertos === 3){

    resultado.innerHTML = "Ligação CORRETA!"
    resultado.style.color = "green"

    document
    .getElementById("img-led")
    .classList.add("led-ligado")

}else{

    resultado.innerHTML = "Ligação INCORRETA!"
    resultado.style.color = "red"

    document
    .getElementById("img-led")
    .classList.remove("led-ligado")

}
}

function resetar(){
    location.reload()
}
