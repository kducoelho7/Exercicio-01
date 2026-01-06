let pessoa = ""
let idade = 50

if (idade < 10) {
    pessoa = "Criança"
} else if (idade >= 11 && idade <= 15) {
    pessoa = "Adolescente"
} else if (idade >= 16 && idade <= 18) { 
    pessoa = "Jovem"
} else {
    pessoa = "Adulta"
}

console.log("Se você tem " + idade + " então você é uma pessoa " + pessoa)