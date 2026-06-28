function corrigirQuiz() {

    const gabarito = {
        q1: "A",
        q2: "B",
        q3: "C",
        q4: "C",
        q5: "C",
        q6: "B",
        q7: "C",
        q8: "C",
        q9: "B",
        q10: "C"
    };

    let acertos = 0;
    let totalQuestoes = Object.keys(gabarito).length;

    let resultadoHTML = `
        <h2>Resultado da Prova</h2>
    `;

    for (let questao in gabarito) {

        const respostaMarcada =
            document.querySelector(`input[name="${questao}"]:checked`);

        if (!respostaMarcada) {

            resultadoHTML += `
                <p>
                    <strong>${questao.toUpperCase()}</strong>:
                    Não respondida.
                    <br>
                    Gabarito: ${gabarito[questao]}
                </p>
            `;

            continue;
        }

        if (respostaMarcada.value === gabarito[questao]) {

            acertos++;

            resultadoHTML += `
                <p style="color:green;">
                    <strong>${questao.toUpperCase()}</strong>:
                    Correta
                </p>
            `;

        } else {

            resultadoHTML += `
                <p style="color:red;">
                    <strong>${questao.toUpperCase()}</strong>:
                    Errada
                    <br>
                    Sua resposta: ${respostaMarcada.value}
                    <br>
                    Gabarito: ${gabarito[questao]}
                </p>
            `;
        }
    }

    const nota = ((acertos / totalQuestoes) * 10).toFixed(1);
    const percentual = ((acertos / totalQuestoes) * 100).toFixed(0);

    resultadoHTML =
        `
        <div class="alert alert-dark">
            <h3>Nota: ${nota}</h3>
            <h4>${acertos}/${totalQuestoes} acertos (${percentual}%)</h4>
        </div>
        `
        + resultadoHTML;

    document.getElementById("resultadoQuiz").innerHTML = resultadoHTML;

    document.getElementById("resultadoQuiz")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function limparQuiz() {
    document.getElementById("resultadoQuiz").innerHTML = "";
}