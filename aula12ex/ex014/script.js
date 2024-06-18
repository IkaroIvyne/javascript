function carregar() {
    var msg = window.document.getElementById('mensagem');
    var imgday = window.document.getElementById('imgday');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >=0 && hora < 12) {
        //BOM DIA!
        imgday.src = '../imagens/manha.png'
        document.body.style.background = '#BDDBE5'
    } else if (hora >=12 && hora <=18) {
        //BOA TARDE!
        imgday.src = '../imagens/tarde.png'
        document.body.style.background = '#FF8C36'
    } else {
        //BOA NOITE!
        imgday.src = '../imagens/noite.png'
        document.body.style.background = '#47778F'
    }
}
