function viewSenha() {
    var SENHAUSUARIO = document.getElementById('senha-dig');

    if (SENHAUSUARIO.type == "password") {
        SENHAUSUARIO.type = "text";
    } else {
        SENHAUSUARIO.type = "password";
    }
}

function viewNome() {

    if (document.getElementById('viewUsuario').value == "Mostrar") {
        document.getElementById('viewUsuario').value = "Ocultar";
    } else {
        document.getElementById('viewUsuario').value = "Mostrar";
    }
}

function btnEnter() {

    if (document.getElementById('enter-usuario').value == "enter") {
        document.getElementById('enter-usuario').value = "Ok";
    } else {
        document.getElementById('enter-usuario').value = "enter";
    }
}

function loginUsuario() {

    const USER = ("admin");
    const PASS = ("admin");

    const TELEFONEUSER = ("983920932");
    const TELEFONEPASS = ("admin");

    var done = 0;

    var EMAILUSUARIO = document.getElementsByName('email')[0].value;
    EMAILUSUARIO = EMAILUSUARIO.toLowerCase();

    var SENHAUSER = document.getElementsByName('senha')[0].value;
    SENHAUSER = SENHAUSER.toLowerCase();

    if (EMAILUSUARIO == (USER) && SENHAUSER == (PASS)) {
        setTimeout(() => {
            alert("Email e senha coretas!");
            window.location.href = './home/src/html/menu.html'
        }, 2000);
        done = 1;


    }
    if (EMAILUSUARIO == (TELEFONEUSER) && SENHAUSER == (TELEFONEPASS)) {
        setTimeout(() => {
            alert("Email e senha coretas!");
            window.location.href = './home/src/html/menu.html'
        }, 2000);
        done = 1;
    }
    if (done == 0) {
        alert("Dados invalidos");
        window.location.reload();
    }
}

function notPage() {
    window.history.forward();
}
setTimeout(notPage(), 0);
window.onunload = function () {
    null;
}

function ClearFields() {

    var RESPOSTA = prompt("Gostaria de excluir tudo?");

    if (RESPOSTA == ("sim")) {
        document.getElementById("senha-dig").value = "";
        document.getElementById("email-usuario").value = "";
    } else if (RESPOSTA == ("nao")) {
        var RESPOSTA2 = prompt("Ou so email ou senha? 1 para email ou 2 para senha 3 para nenhuma.");

        if (RESPOSTA2 == 1) {
            document.getElementById("email-usuario").value = "";
        } else if (RESPOSTA2 == 2) {
            document.getElementById("senha-dig").value = "";
        } else if (RESPOSTA2 == 3) {

        }
    }
}

function Data() {

    var data = new Date();
    var dias = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
    var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Outubro",
        "Novembro", "Dezembro");

    document.write(dias[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] + " de " + data
        .getFullYear() + ".");
}