function insereBanco(){
    const banco = [{id: Date.now(),nome: "Maçã", valor: 1},
                    {id: Date.now(),nome: "Banana", valor :1},
                    {id: Date.now(),nome: "Abacaxi", valor: 1},
                    {id: Date.now(),nome: "Manga", valor: 1},
                    {id: Date.now(),nome: "Laranja", valor: 1},
                    {id: Date.now(),nome: "Morango", valor: 1}
                ]
    const carrinho = []

    let bd = JSON.stringify(banco)
    let car = JSON.stringify(carrinho)

    localStorage.setItem("bd",bd)
    localStorage.setItem("car",car)
}

function Create(button) {
    const dados = JSON.parse(localStorage.getItem("bd"));
    const carrinho = JSON.parse(localStorage.getItem("car"));

    let nome = button.previousElementSibling.value;

    let itemExistente = false;

    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome == nome) {
            carrinho[i].quantidade++;
            carrinho[i].valor += dados[i].valor;
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
    localStorage.setItem("car", car);
}