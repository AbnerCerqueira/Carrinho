function Usuario() {
    const usuario = []
    localStorage.setItem("usuario", JSON.stringify(usuario))
}
function Cadastro() {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    let user = document.querySelector("#user").value
    let pass = document.querySelector("#pass").value
    let dados = { user: user, pass: pass }
    usuario.push(dados)
    localStorage.setItem("usuario", JSON.stringify(usuario))
    window.location.replace("index.html")
}
function Logar() {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    let user = document.querySelector("#user").value
    let pass = document.querySelector("#pass").value
    for (i = 0; i < usuario.length; i++) {
        if (user == usuario[i].user && pass == usuario[i].pass) {
            window.location.replace("principal.html")
        }
        else {
            alert("Usuário ou Senha errados")
            window.location.reload()
        }
    }
}
function Nome(){
    const usuario = JSON.parse(localStorage.getItem("usuario"))  
    document.querySelector("#nome").innerHTML = usuario[0].user
}