function autenticar() {
    const login = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (login === "Jo_Lindo13_<3" && senha === "LongLive") {
        document.getElementById('mensagem').innerHTML = "Usuário autenticado com sucesso!";
        document.getElementById('mensagem').style.color = "green";
    } else {
        document.getElementById('mensagem').innerHTML = "Acesso negado. Usuário ou Senha Inválidos!";
        document.getElementById('mensagem').style.color = "red";
    }
}