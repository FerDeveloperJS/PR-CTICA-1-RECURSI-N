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




function PoblarMatrizConOrganismos(matriz, fila = 0, columna = 0) {
    if (fila === matriz.length) {
        return matriz  
    }
  
  let NumeroAleatorio = Math.random()
  
  
  if (NumeroAleatorio < 0.2) {
    matriz[fila][columna] = "Depredador"

  } else if (NumeroAleatorio < 0.4) {
    matriz[fila][columna] = "Presa"
    
  } else if (NumeroAleatorio < 0.6) {
    matriz[fila][columna] = "Planta"
    
  } else {
    matriz[fila][columna] = ""
  }
  
  
    if (columna === matriz[fila].length - 1) {
        return PoblarMatrizConOrganismos(matriz, fila + 1, 0)
    }
  
  
  return PoblarMatrizConOrganismos(matriz, fila, columna + 1)
}




