let arrayTriplicado = []

function triplicarNumeros(arrayDeNumeros) {
  for (let numero of arrayDeNumeros) {
    const numeroTriplicado = numero * 3
    arrayTriplicado.push(numeroTriplicado)
  }
  return arrayTriplicado
}

/* console.log(triplicarNumeros([9, -21, 882, 3, -57])) */

function retornarPares(arrayDeNumeros) {
  const arrayPares = []

  for(let numero of arrayDeNumeros) {
    if(numero % 2 === 0){
    arrayPares.push(numero)
  }
}
  return arrayPares
}

/* console.log(retornarPares([2, 4, 5, 8, 9])) */

function manipulaNumeros(arrayDeNumeros, callback){
  const novoArray = callback(arrayDeNumeros)
  return novoArray
}

console.log(manipulaNumeros([3, 16, 17, 22, 38, 44], retornarPares))
console.log(manipulaNumeros([3, 16, 17, 22, 38, 44], triplicarNumeros))

////////////

const numeros1 = [1, 12, 16, 28, 32, 54]

const numerosTriplicados2 = numeros1.map((elemento, index, arrayOriginal) => {
  return elemento * 3
})

console.log(numerosTriplicados2)

const soPares = numeros1.filter((elemento) => {
  return elemento % 2 === 0
})

console.log(soPares)