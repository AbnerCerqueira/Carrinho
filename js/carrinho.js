function insereBanco() {
    const banco = [{ id: Date.now(), nome: "Maçã", valor: 29.99 },
    { id: Date.now(), nome: "Banana", valor: 5.99 },
    { id: Date.now(), nome: "Abacaxi", valor: 9.99 },
    { id: Date.now(), nome: "Manga", valor: 16.99 },
    { id: Date.now(), nome: "Laranja", valor: 7.99 },
    { id: Date.now(), nome: "Morango", valor: 19.99 }
    ]
    const carrinho = []

    let bd = JSON.stringify(banco)
    let car = JSON.stringify(carrinho)

    localStorage.setItem("bd", bd)
    sessionStorage.setItem("car", car)
}

function Create(button) {
    const dados = JSON.parse(localStorage.getItem("bd"));
    const carrinho = JSON.parse(sessionStorage.getItem("car"));

    let nome = button.previousElementSibling.value;

    let itemExistente = false;

    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome == nome) {
            carrinho[i].quantidade++;
            itemExistente = true;
            break;
        }
    }

    if (!itemExistente) {
        let data = {
            id: dados.find(item => item.nome == nome).id,
            nome: nome,
            quantidade: 1,
            valor: dados.find(item => item.nome == nome).valor
        };
        carrinho.push(data);
    }

    const ds = JSON.stringify(dados);
    const car = JSON.stringify(carrinho);

    localStorage.setItem("bd", ds);
    sessionStorage.setItem("car", car);
}
function Exibe() {
    const carrinho = JSON.parse(sessionStorage.getItem("car"));
    let produto = document.querySelector("#nome").value
    switch (produto) {
        case ("Abacaxi"):
            document.querySelector("#numero").innerHTML = carrinho[0].quantidade
        case ("Banana"):
            document.querySelector("#numero").innerHTML = carrinho[1].quantidade
        case ("Laranja"):
            document.querySelector("#numero").innerHTML = carrinho[2].quantidade
        case ("Manga"):
            document.querySelector("#numero").innerHTML = carrinho[3].quantidade
        case ("Maça"):
            document.querySelector("#numero").innerHTML = carrinho[4].quantidade
        case ("Morango"):
            document.querySelector("#numero").innerHTML = carrinho[5].quantidade
    }
    console.log(carrinho[0].quantidade)
}
function Total() {
    const carrinho = JSON.parse(sessionStorage.getItem("car"));
    let total = 0
    for (i = 0; i < carrinho.length; i++) {
        total += carrinho[i].valor * carrinho[i].quantidade
    }
    document.querySelector("#total-exibe").innerHTML = total
    return total
}
function Fim() {
    const carrinho = JSON.parse(sessionStorage.getItem("car"));
    alert("TOTAL: R$ " + Total() + "\nOBRIGADO POR COMRAR\nVOLTE SEMPRE NO SACOLÃO DO JOÃO")
    window.location.reload()
}