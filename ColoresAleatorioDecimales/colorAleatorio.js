const color=document.getElementById("color")
const boton_cambiar=document.getElementById("cambiar_color")

function cambiar_color(){
    let digitos="0123456789ABCDEF";
    let colorHex="#";
    
    for (let i=0; i<6; i++){
        let indiceAleatorio=Math.floor(Math.random() * 16);
        colorHex +=digitos[indiceAleatorio]
    } 
    return colorHex  
}

boton_cambiar.addEventListener("click", function(){
    let colorAleatorio=cambiar_color();
    //actualizar texto
    color.textContent=colorAleatorio
    //actualizar el color de fondo
    document.body.style.backgroundColor=colorAleatorio
})