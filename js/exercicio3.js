let conexoes3 = []

jsPlumb.ready(function(){

    const instancia3 = jsPlumb.getInstance({

    Connector: ["Flowchart", {

        cornerRadius: 5

    }],

    PaintStyle: {

        stroke: "#2f4f6f",
        strokeWidth: 4

    },

    EndpointStyle: {

        fill: "#2f4f6f",
        radius: 10,
        stroke: "white",
        strokeWidth: 2

    }

})

    const componentes3 = [

    "fonte3",
    "disjuntor3",
    "nf3",
    "na3",
    "releT3",
    "bobina3",
    "selo3",
    "led3"

]

    componentes3.forEach(id => {

    instancia3.addEndpoint(id, {

        anchor: [0.5, 1.15, 0, 1]

    }, {

        isSource: true,
        isTarget: true,

        maxConnections: -1

    })

})

    instancia3.bind("connection", function(info){

        conexoes3.push({

            source: info.sourceId,
            target: info.targetId

        })

    })

})

function verificarComando(){

    const resultado =
    document.getElementById("resultado3")

    const led =
    document.getElementById("img-led3")

    const correto = [

        ["fonte3", "disjuntor3"],

        ["disjuntor3", "nf3"],

        ["nf3", "na3"],

        ["na3", "releT3"],

        ["releT3", "bobina3"],

        ["bobina3", "disjuntor3"],

        ["na3", "selo3"],

        ["led3", "bobina3"]

    ]

    let acertos = 0

    correto.forEach(ligacao => {

        const encontrou = conexoes3.find(c =>

            c.source === ligacao[0] &&
            c.target === ligacao[1]

            ||

            (c.source === ligacao[1] &&
            c.target === ligacao[0])

        )

        if(encontrou){

            acertos++

        }

    })

    if(acertos === 8){

        resultado.innerHTML =
        "Ligação CORRETA!"

        resultado.style.color = "green"

        led.classList.add("led-ligado3")

    }else{

        resultado.innerHTML =
        "Ligação INCORRETA!"

        resultado.style.color = "red"

        led.classList.remove("led-ligado3")

    }

}

function resetar3(){

    location.reload()

}
