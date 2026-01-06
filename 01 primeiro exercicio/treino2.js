
let saldo = "50000"
let classeSocial = ""

if (saldo <=1500){
    classeSocial = "Pobre"
}else if ( saldo >=1501 && saldo <=3500){
    classeSocial = "independente"
}else if ( saldo >=3501 && saldo <=7000){
    classeSocial = "Classe Media"   
}else if ( saldo >=7001 && saldo <=20000){
    classeSocial = " Classe media alta"
}else if ( saldo >=20001 && saldo <=100000){
    classeSocial ="Classe Alta"
}else classeSocial = "Rico"

console.log( "Se seu saldo eh " + saldo +" entao voce eh "+ classeSocial)