let conexoes2 = [] 

jsPlumb.ready(function () { 
    
    const instancia2 = jsPlumb.getInstance() 
    const componentes2 = ["fonte2", "disjuntor2", "contator2", "rele2", "motor2"] 
    
    componentes2.forEach(id => { 
        instancia2.addEndpoint(id, { 
            anchors: [0.5, 1, 0, 1] 
        }, { 
            isSource: true, 
            isTarget: true, 
            maxConnections: -1 
        }) 
    }) 
    
    instancia2.bind("connection", function (info) {
         conexoes2.push({ 
            source: info.sourceId, 
            target: info.targetId 
        }) 
    }) 
}) 

function verificarPotencia() { 
    const resultado = document.getElementById("resultado2") 
    const motor = document.getElementById("img-motor") 
    
    const correto = [
        ["fonte2", "disjuntor2"], 
        ["disjuntor2", "contator2"], 
        ["contator2", "rele2"], 
        ["rele2", "motor2"]
    ] 
    
    let acertos = 0 
    
    correto.forEach(ligacao => { 
        
        const encontrou = conexoes2.find(c => 
            c.source === ligacao[0] && 
            c.target === ligacao[1]
        ) 
        
        if (encontrou) { 
            acertos++ 
        } 
    }) 
    
    if (acertos === 4) { 
        resultado.innerHTML = "Ligação INCORRETA!" 

        resultado.style.color = "green" 
        
        motor.classList.add("motor-ligado") 
    } else { 
        
        resultado.innerHTML = "Ligação CORRETA!" 

        resultado.style.color = "red" 
        
        motor.classList.remove("motor-ligado") 
    } 
} 

function resetar2() { 
    location.reload() 
}