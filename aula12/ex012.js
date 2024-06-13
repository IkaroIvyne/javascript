var agora = new Date()
var horas = agora.getHours()
    console.log(`Agora são exatamente ${horas} horas.`)

if (horas >= 0 && horas < 6) {
    console.log('Boa Madrugada!')
} else if (horas < 12 ) { 
    console.log('Bom dia')
} else if (horas < 18){
    console.log('Boa Tarde')
} else if (horas <= 24) {
    console.log('Boa noite')
} else {
    console.log('Hora não reconhecida...')
}



/*var horas = 11
    console.log(`Agora são exatamente ${horas} horas.`)

if (horas >= 0 && horas < 6) {
    console.log('Boa Madrugada!')
} else if (horas < 12 ) { 
    console.log('Bom dia')
} else if (horas < 18){
    console.log('Boa Tarde')
} else if (horas <= 24) {
    console.log('Boa noite')
} else {
    console.log('Hora não reconhecida...')
}*/