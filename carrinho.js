function Carrinho() {
    const banco = [
        { id: 0, nome: "arroz", qtde: 0, img: "arroz.jpg", preco: 10.00 },
        { id: 0, nome: "feijao", qtde: 0, img: "feijao.jpg", preco: 10.00 }
    ]
    sessionStorage.setItem("banco", JSON.stringify(banco))
}
function Iniciar() {
    const banco = JSON.parse(sessionStorage.getItem("banco"))
    for (i = 0; i < banco.length; i++) {
        document.querySelector("#produtos").innerHTML += `
            <div class = "produto-single">
                <img src = `+ banco[i].img + ` height="100px"">
                `+ banco[i].nome + `
                <button class="botao" onclick="Adicionar()" value="`+ i + `">+1</button>
            </div>
                                                        `
    }
}
function Adicionar() {
    const banco = JSON.parse(sessionStorage.getItem("banco"))
    let produto = document.querySelectorAll(".botao")
    console.log(produto)
    for (i = 0; i < banco.length; i++) {
        if (produto[i].value == banco[i].id) {
            banco[i].qtde += 1
            sessionStorage.setItem("banco", JSON.stringify(banco))
        }
    }
}
function Adicionar1() {
    const banco = JSON.parse(sessionStorage.getItem("banco"))
    let produto = document.querySelectorAll(".botao")
    banco[1].qtde += 1
    sessionStorage.setItem("banco", JSON.stringify(banco))
}
