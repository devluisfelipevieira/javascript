var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
if(minuto<10){
    minuto = '0'+ minuto
}
console.log(`A hora certa é ${hora}:${minuto}`)
if (hora < 5){
    console.log('Boa madrugada')
}
else if (hora < 12){
    console.log('Bom dia')
}
else if (hora < 18 ){
    console.log('Boa tarde')
} 
else{
    console.log('Boa noite')
}