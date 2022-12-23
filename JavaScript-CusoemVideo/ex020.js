let valores = [8, 9 ,0, 28, 10]

for(let pos=0; pos < valores.length; pos++) {
    console.log(valores[pos])
}
console.log('* Fim ')

//2º forma:
console
.log('Início')
for (let pos in valores) {
    console.log(valores[pos])
}