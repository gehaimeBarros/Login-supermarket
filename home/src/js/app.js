function viewSenha() {
    var SENHAUSUARIO = document.getElementById('senha-dig');

    if (SENHAUSUARIO.type == "password") {
        SENHAUSUARIO.type = "text";
    } else {
        SENHAUSUARIO.type = "password";
    }
}

function viewNome() {

    if (document.getElementById('viewUsuario').value == "mostrar") {
        document.getElementById('viewUsuario').value = "ocultar";
    } else {
        document.getElementById('viewUsuario').value = "mostrar";
    }
}

function loginUsuario() {

    const USER = ("admin");
    const PASS = ("admin");

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
    if (done == 0) {
        alert("Dados invalidos");
    }
}

function notPage() {
    window.history.forward();
}
setTimeout(notPage(), 0);
window.onunload = function () {
    null;
}