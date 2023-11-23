function insereBanco() {
    const banco = [{ id: Date.now(), nome: "Maçã", valor: 7.99 },
    { id: Date.now(), nome: "Banana", valor: 5.99 },
    { id: Date.now(), nome: "Abacaxi", valor: 29.99 },
    { id: Date.now(), nome: "Manga", valor: 16.99 },
    { id: Date.now(), nome: "Laranja", valor: 9.99 },
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
function Exibe(button) {
    const carrinho = JSON.parse(sessionStorage.getItem("car"));
    let nome = button.previousElementSibling.value;
    console.log(nome)
    switch (nome) {
        case ("Abacaxi"):
            document.querySelector("#numero1").innerHTML = carrinho[0].quantidade
            break;
        case ("Banana"):
            document.querySelector("#numero2").innerHTML = carrinho[1].quantidade
            break;
        case ("Laranja"):
            document.querySelector("#numero3").innerHTML = carrinho[2].quantidade
            break;
        case ("Manga"):
            document.querySelector("#numero4").innerHTML = carrinho[3].quantidade
            break;
        case ("Maçã"):
            document.querySelector("#numero5").innerHTML = carrinho[4].quantidade
            break;
        case ("Morango"):
            document.querySelector("#numero6").innerHTML = carrinho[5].quantidade
            break;
    }
    console.log(carrinho[0].quantidade)
}
function remove(button){
    const dados = JSON.parse(localStorage.getItem("bd"));
    const carrinho = JSON.parse(sessionStorage.getItem("car"));

    let nome = button.previousElementSibling.value;


    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome == nome) {
            carrinho[i].quantidade--;
            break;
        }
    }

    const ds = JSON.stringify(dados);
    const car = JSON.stringify(carrinho);

    localStorage.setItem("bd", ds);
    sessionStorage.setItem("car", car);
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