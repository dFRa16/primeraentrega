const prendas = [
    {nombre: "tenis" , precio: 2500},
    {nombre: "pantalon" , precio: 1000},
    {nombre: "playera" , precio: 500},
    {nombre: "chamarra" , precio: 2000},
    {nombre: "gorra" , precio: 400},
];
let caja = []
let seleccion = prompt("¿Desea comprar alguna articulo?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("¿Deseas alguna prenda?")
}

if ( seleccion == "si"){
    alert("Le mostramos nuestros articulos")
    let todasLasPrendas = prendas.map(
        (prendas) => prendas.nombre + " " + prendas.precio + "$"
    );
    alert(todasLasPrendas.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por tu tiempo")
}
while(seleccion != "no"){
    let prenda = prompt("Agrega tu articulo al carrito")
    let precio= 0

    if (prenda == "tenis" || prenda == "pantalon" || prenda == "playera" || prenda == "chamarra" || 
     prenda == "gorra") {
    switch (prendas) {
        case "tenis":
            precio = 2500;
            break;
        case "pantalon":
            precio = 1000;
            break;
        case "playera":
            precio = 500;
            break;
        case "chamarra":
            precio = 2000;
            break;
        case "gorra":
            precio = 400;
            break;
        default:
            break;
            }
    let unidades = parseInt(prompt("Cuantos articulos deseas llevar"))
    caja.push({prendas, precio, unidades})
    console.log(caja)
    } else {
        alert("no tenemos ese articulo")
    }
   
    seleccion = prompt("¿desea seguir comprando?")

    while(seleccion == "no"){
        alert("gracias por su compra, vuelva pronto")
        caja.forEach((cajaFinal) =>{
            console.log(`prendas: ${cajaFinal.prendas}, unidades: ${cajaFinal.unidades}, total a pagar por producto ${cajaFinal.unidades * cajaFinal.precio}`)
        })
    break;
    }
}

     

        
    



