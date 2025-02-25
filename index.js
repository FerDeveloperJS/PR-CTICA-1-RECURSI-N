const lodash = require("lodash") 


class Depredador {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  mover() {

  }
}

class Presa {
  constructor(x, y, energia) {
    this.x = x
    this.y = y
    this.energia = energia
  }

  mover() {

  }
}

class Planta {
  constructor(x, y, energia) {
    this.x = x
    this.y = y
    this.energia = energia
  }
}




function GenerarMatriz(n, matriz = [], fila = [], fila_idx = 0) {
  if (matriz.length === n) {
    return matriz
  }
    
  if (fila_idx < n) {
    fila.push("")
    return GenerarMatriz(n, matriz, fila, fila_idx + 1)
  }
    
  matriz.push(fila)
  return GenerarMatriz(n, matriz, [], 0)
}




function PoblarMatrizConOrganismos(matriz, n_organismos, organismos = ["Depredador", "Presa", "Planta"], n_ciclos = 0, organismos_idx = 0) {
  if (n_organismos > matriz.length ** 2) {
    return "El número de organismos debe ser menor o igual a: " + matriz.length ** 2
  }

  if (n_ciclos === n_organismos) {
    return matriz
  }

  let filaAleatoria = lodash.random(0, matriz.length - 1)
  let columnaAleatoria = lodash.random(0, matriz.length - 1)

  if (matriz[filaAleatoria][columnaAleatoria] === "") {
    matriz[filaAleatoria][columnaAleatoria] = organismos[organismos_idx]

        
    if (organismos_idx === organismos.length - 1) {
      return PoblarMatrizConOrganismos(matriz, n_organismos, organismos, n_ciclos + 1, 0)
    }

    return PoblarMatrizConOrganismos(matriz, n_organismos, organismos, n_ciclos + 1, organismos_idx + 1)
  }

  return PoblarMatrizConOrganismos(matriz, n_organismos, organismos, n_ciclos, organismos_idx)
}

let matriz = GenerarMatriz(3)

let matrizPoblada = PoblarMatrizConOrganismos(matriz, 8)
console.log(matrizPoblada)




