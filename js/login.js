function Usuario() {
    if (localStorage.getItem("banco") === null) {
        const usuario = [{ id: 0, user: "admin", pass: "admin" }]
        localStorage.setItem("usuario", JSON.stringify(usuario))
    }
}
function Cadastro() {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    let user = document.querySelector("#user").value
    let pass = document.querySelector("#pass").value
    let dados = { id:Date.now(),user: user, pass: pass }
    usuario.push(dados)
    localStorage.setItem("usuario", JSON.stringify(usuario))
    window.location.replace("index.html")
}
function Logar() {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    let user = document.querySelector("#user").value
    let pass = document.querySelector("#pass").value

    let usuariologado = false
    for (i = 0; i < usuario.length; i++) {
        if (user == usuario[i].user && pass == usuario[i].pass) {
            usuariologado = true
            window.location.href = "principal.html"
            break;
        }
    }

    if(!usuariologado) {
        alert("Usuário ou Senha errados")
        window.location.reload()
    }
}
function Nome() {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    document.querySelector("#nome").innerHTML = usuario[0].user
}