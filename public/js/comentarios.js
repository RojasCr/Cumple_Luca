const comentariosArea = document.getElementById("comentarios");
const msgInput = document.getElementById("msg")
const sendButton = document.getElementById("send")


const comentar = async () => {
    
    if(msgInput.value == ""){
        alert("El mensaje no puede estar vacío")
        return;
    }
    
    const primerComentario = document.getElementById("Primer-comentario")
    if(primerComentario){
        console.log("Borrar");
        comentariosArea.removeChild(primerComentario)
    }
    
    
    
    
    const url = "/comentar";
    const method = "POST";
    const body = JSON.stringify({comentario: msgInput.value});
    
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json' // Indicate the content type of the body
        },
        body
    })
    
    const data = await response.json();
    console.log(data)

    let p = document.createElement("p");
    p.innerText =`"${msgInput.value}"`;
    comentariosArea.appendChild(p)
    
    msgInput.value = ""
    
}

const publicar = async() => {
    const response = await fetch("/publicar");
    const data = await response.json();
    
    if(data.data == "No hay mensajes"){
        let p = document.createElement("p");
        p.innerText =`Sé el primero en comentar`;
        p.style.justifyContent = "center";
        p.id = "Primer-comentario"
        
        comentariosArea.appendChild(p)
        console.log(data.data)
        return;
    }
    
    const comentariosArray = data.data.split("\n")
    console.log(comentariosArray)
    
    comentariosArray.forEach(coment => {
        let p = document.createElement("p");
        p.innerText =`"${coment}"`;
        
        comentariosArea.appendChild(p)
    });

    return;
}

document.addEventListener("DOMContentLoaded", async () => {
    await publicar();
})

sendButton.addEventListener("click", async () => {
    await comentar();
})