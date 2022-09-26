let productoA = "Zapatillas Nike"
let precioA = 23000
let stockA = 10

let productoB = "Zapatillas Lacoste"
let precioB = 25000
let stockB = 50

let productoC = "Zapatillas Adidas"
let stockC = 40
let precioC = 19000

let productoD = "Zapatillas Vans"
let stockD = 70
let precioD = 17000

let mardelplata = 500
let necochea = 1000
let pinamar = 1000


function menu ()
{
alert("Bienvenido a NET SHOES, acepte para ingresar en nuestra página")
let entrada = prompt("Ingrese el numero para acceder al menu: \n1.Comprar \n2.Stock \n3.Calcular Envío \n4.Salir")
let chart = "s"

while(chart == "s"){
    switch(entrada){
        case "1":
           let opc= prompt("\n1.Comprar Nike \n2.Comprar Lacoste \n3.Comprar Adidas \n4.Comprar Vans \n5.Salir")
           switch(opc){
            case "1":
                alert("Gracias por comprar el precio es de " + precioA)
                chart = "n"
            break
            case "2":
                alert("Gracias por comprar el precio es de " + precioB)
                chart = "n"
            break
            case "3":
                alert("Gracias por comprar el precio es de " + precioC)
                chart = "n"
            break
            case "4":
                alert("Gracias por comprar el precio es de " + precioD)
                chart = "n"
            break
            case "5":
                alert("Gracias por venir")
                chart = "n"
            break
           }
        break
        case "2":
            let opc2= prompt("\n1.Nike \n2.Lacoste \n3.Adidas \n4.Vans \n5.Salir")
            switch(opc2){
                case "1":
                    alert("El Stock es " + stockA + " Unidades")
                    chart = "n"
                    break
                case "2":
                    alert("El Stock es "+ stockB + " Unidades")
                    chart = "n"
                    break
                case "3":
                    alert("El Stock es "+ stockC + " Unidades")
                    chart = "n"
                    break
                case "4":
                    alert("El Stock es "+ stockD + " Unidades")
                    chart = "n"
                    break
                case "5":
                    chart = "n"
                    break
            }
        break
        case "3":
            let opc3=prompt("Ingresa el numero segun corresponda tu ciudad:\n1.Mar del Plata \n2.Pinamar \n3.Necochea ")
            switch(opc3){
                case "1":
                    alert("El envio cuesta " + mardelplata)
                    chart = "n"
                    break
                case "2":
                    alert("El envio cuesta " + necochea)
                    chart = "n"
                    break
                case "3":
                    alert("El envio cuesta " + pinamar)
                    chart = "n"
                    break    
            }
    }
}
}
menu()