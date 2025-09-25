const comentariosArea = document.getElementById("comentarios");
const msgInput = document.getElementById("msg")
const sendButton = document.getElementById("send")


const comentar = async () => {
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

    const comentariosArray = data.data.split("\n")
    console.log(comentariosArray)

    comentariosArray.forEach(coment => {
        let p = document.createElement("p");
        p.innerText =`"${coment}"`;
    
        comentariosArea.appendChild(p)
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    publicar();
})

sendButton.addEventListener("click", async () => {
    comentar();
})