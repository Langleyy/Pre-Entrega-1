var eleccion = 0
var dulce = 0


function getRandomArbitrary(min, max) {
  min = 1
  max = 3
  return Math.round(Math.random() * (max - min) + min)
}

console.log("Bienvenido a la tienda Coffee Shop!")
console.log("------------------------------------------")

eleccion = parseInt(prompt("Escribe el número del producto que desees:\n1. Espresso.\n2. Doble Espresso.\n3. Latte Machiatto.\n4. No disponible.\n5. Aleatorio."))

switch (eleccion) {
  case 1:
    console.log("Marche espresso")
    document.write("<div class='card'><img src='img/cafe-1.png'  /></div>")
    break
  case 2:
    console.log("Marche doble espresso")
    document.write("<div class='card'><img src='img/cafe-2.png'  /></div>")
    break
  case 3:
    console.log("Marche latte machiatto")
    document.write("<div class='card'><img src='img/cafe-3.png'  /></div>")
    break
  case 4:
    console.log("Sin stock")
    break
  case 5:
    const num1 = Math.floor(Math.random() * 3) + 1;
    switch (num1) {
        case 1:
            console.log("Marche espresso")
            document.write("<div class='card'><img src='img/cafe-1.png'  /></div>")
        break
        case 2:
            console.log("Marche doble espresso")
            document.write("<div class='card'><img src='img/cafe-2.png'  /></div>")
        break
        case 3:
            console.log("Marche latte machiatto")
            document.write("<div class='card'><img src='img/cafe-3.png'  /></div>")
        break
    }
    break
  default:
    console.log("Opción no válida")
}

dulce = parseInt(prompt("¿Deseas azúcar?\n1. Sí.\n2. No.\n3. Edulcorante."))

// Mostrar imagen de azúcar

switch (dulce) {
  case 1:
    console.log("Aquí tiene su azúcar.")
    document.write("<div class='card'><img src='img/azucar.png'  /></div>")
    break
  case 2:
    console.log("Aquí tiene su café.")
    document.write("<div class='card'><img src='img/sin-azucar.png'  /></div>")
    break
  case 3:
    console.log("Aquí tiene su edulcorante.")
    document.write("<div class='card'><img src='img/edulcorante.png'  /></div>")
    break
}