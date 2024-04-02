//creamos los elementos
const titulo=document.createElement("h1")
const subTitulo=document.createElement("h3")
const p1=document.createElement("p")
const p2=document.createElement("p")
const div=document.createElement("div")
const input=document.createElement("input")
const boton=document.createElement("button")

//agregemos un atributo al elemento del boton, para especificar de que tipo sera
input.setAttribute("type", "number")

//le agregamos el contenido a los elementos
titulo.innerText="Js vanilla"
subTitulo.innerText="Practica del dom"
p1.textContent="P1: todo los elementos creado de js vanilla"
p2.textContent="P2: Es bueno buscar distintas formas de resolver algo"
boton.innerText="boton"

//agregamos clase a los elementos
titulo.classList.add("titulo")
subTitulo.classList.add("sub_titulo")
p1.classList.add("parrafo")
p2.classList.add("parrafo")
div.classList.add("contenedor")

//agregamos stilos a los elementos
titulo.style.color="red"
titulo.style.backgroundColor="black"
subTitulo.style.color="orange"
p1.style.color="green"
p2.style.color="green"
boton.style.backgroundColor="yellow"
boton.style.padding="7px 20px"
div.style.backgroundColor="black"

//agregamos los elementos al body (titulo)
document.body.append(titulo)
// añadimos los parrafos y subtitulo dentro del div
document.body.append(div);
div.append(subTitulo, input, boton); 
div.append(p1, p2); 