//tentar com o códifo dentro de contato, se nao, tentar dentro do dom, se nao tentar fora

document.addEventListener("DOM Content Loaded", () => {

    document.getElementById("feedback").addEventListener('submit', (e) => {

        e.preventDefault()

        const whatsPanificadora = "5511975679441"

        const escolha = document.getElementById("opcao").value

        const resposta = document.getElementById("resposta").value

        let texto = 'Formulário de feedback \n \n'

        texto += *Opção:* ${escolha}\n;

        texto += *resposta:* ${resposta}\n;

        const url = 'https://wa.me/${whatsPanificadora}?tex${encodeURIComponent(texto)}window.open(url, "_blank");'

    } )

})

