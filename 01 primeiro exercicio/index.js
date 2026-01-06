let nomeDoAluno = "Carlos"
let nota = 90
let Resultado = ""

if (nota <=50){
  Resultado = "Reprovado"
}else if (nota >=51 && nota <70){
  Resultado ="Recuperacao"

}else Resultado ="Aprovado"

console.log( "O aluno " + nomeDoAluno + " esta " + Resultado )