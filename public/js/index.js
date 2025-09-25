let audioHome = document.getElementById("audioHome");
let binevienidoBtn = document.getElementsByClassName("bienvenido")[0]
let audio = document.getElementsByTagName("audio")



const reproducir =  () => {
    
    audioHome.volume = 0.2;
    audioHome.play().catch(err => {
        console.log("Autoplay bloqueado por el navegador:", err);
    });
};

document.body.addEventListener("click", reproducir)
// Una vez que arranca, removemos el listener para no repetir
document.removeEventListener("click", reproducir);


binevienidoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        window.location.href = "/home.html"
    }, 2000)
})