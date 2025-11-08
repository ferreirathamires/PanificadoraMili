//tentar com o códifo dentro de contato, se nao, tentar dentro do dom, se nao tentar fora

document.addEventListener("DOM Content Loaded", () => {

    document.getElementById("contato").addEventListener('submit', (e) => {

        e.preventDefault()

        const whatsPanificadora = "5511975679441"

        const nome = document.getElementById('nome'.value)

        const email = document.getElementById('email'.value)

        const telefone = document.getElementById('telefone'.value)

        let texto = 'Formulário de contato \n \n'

        texto += 'Nome: ${nome} \n'

        texto += 'email: ${email} \n'

        texto += 'telefone: ${telefone} \n'

        const url = 'https://wa.me/${whatsPanificadora}?tex${encodeURIComponent(texto)}window.open(url, "_blank");'

    } )

})
