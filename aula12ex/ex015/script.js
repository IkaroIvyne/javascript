function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('iano')
    var res = document.getElementById('res')
    if (formano.value.length == 0 || Number(formano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'criança-M.png')
            } else if (idade <18) {
                //adolescente
                img.setAttribute('src', 'adolescente-M.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-M.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'criança-F.png')
            } else if (idade <18) {
                //adolescente
                img.setAttribute('src', 'adolescente-F.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adulto-F.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-F.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.display = 'block'
        img.style.margin = 'auto'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //Fará a imagem ser mostrada.
    }
}

/* TAMBÉM PODEMOS FAZER DA SEGUINTE FORMA:

        res.style.textAlign = 'center';
        res.innerHTML = ''; // Limpa o conteúdo atual do elemento res
        res.appendChild(img); // Adiciona a imagem ao elemento res

        // Cria um parágrafo para exibir o texto abaixo da imagem
        var texto = document.createElement('p');
        texto.textContent = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(texto); // Adiciona o texto abaixo da imagem

*/