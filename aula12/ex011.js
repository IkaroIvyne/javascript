var idade = 45
 console.log (`Você têm ${idade} anos.`)

if (idade < 16) {
    console.log('Você Não vota!');
} else if (idade < 18) {
        console.log('Seu voto é opcional!');
} else if (idade < 65) {
    console.log('Seu voto é obrigatório!');
} else {
    console.log('Seu voto é opcional!')
}