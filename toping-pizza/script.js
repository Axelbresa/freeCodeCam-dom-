const toppings=document.getElementsByClassName("topping")

function mostrarElemento(e){
    console.log(e.target.innerText)
}

for (let topping of toppings){
    topping.addEventListener('click', mostrarElemento)
}

//crear un elemento//
// const listaToping=document.getElementById("lista-topings")

// const topingNuevo=document.createElement("li")
// //agremos las clases y valor del elemento creado con js
// topingNuevo.classList.add("topping", "rojo")
// topingNuevo.innerText="Queso extra"

// //en el contenedor de <li> agregamos un nuevo li que creamos
// listaToping.append(topingNuevo)

// //puedes borrar cualquier elemento con remove
// topingNuevo.remove()

// //agregar stilos//
// // const primerToping=document.querySelector(".topping")
// // primerToping.style.backgroundColor="orange"
// // primerToping.style.color="green"

// //agregar clases//
// const primerToping=document.querySelector(".topping")
// primerToping.classList.add("texto-verde")

// console.log(primerToping.classList)

// //eliminar clase//
// // primerToping.classList.remove("texto-verde")

// //verificar si una clase existe//
// console.log(primerToping.classList.contains("texto-verde"))

//buscar por id//
// const contenedor=document.getElementById("contenedor")
// console.log(contenedor)

//buscar por clase//
// const toppings=document.getElementsByClassName("topping")
// console.log(toppings)

//buscar por etiqueta//
// const misToppings=document.getElementsByTagName("li")
// console.log(misToppings)

//buscar por elementos o selectores//
//solo uno (el primero)
// const topingRojo=document.querySelector(".topping.rojo")
// console.log(topingRojo)

// //todos los elementos
// const topingRojo=document.querySelectorAll(".topping.rojo")
// console.log(topingRojo)

//operador con un not
// const topingRojo=document.querySelector("ul li:not(.rojo)")
// console.log(topingRojo)

//jerarquia del dom//
// const listaToping=document.getElementById("lista-topings")

//para aceder a hermano anterior del mismo nivel de jerarquia
// console.log(listaToping.previousElementSibling)
//para aceder a hermano proximo del mismo nivel de jerarquia
// console.log(listaToping.nextElementSibling)
// console.log(listaToping.children)
//para aceder a los elementos hijos
// console.log(listaToping.children)
//para aceder al padre pero mas amplio con texto y comentarios
// console.log(listaToping.parentNode.parentNode)
//para aceder al pradre del contenido selecionado
// console.log(listaToping.parentElement.parentElement.parentElement)

//Eventos del dom//

//Evento tarje (recibir) 
//Evento trigger (descencadenar)
//Evento change (manejar)
//Evento listener (escuchar)
//Ejemplo:
//el boton es el blanco(event tarje) si le tocan se desencadena(event trigger) una funcion que es manejada por el (event hanler) y el (event listener) crea la conexion entre el evento  del boton y la funcion