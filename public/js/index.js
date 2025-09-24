let audioHome = document.getElementById("audioHome");
let binevienidoBtn = document.getElementsByClassName("bienvenido")[0]
let audio = document.getElementsByTagName("audio")


audioHome.play()

audioHome.volume = 0.6;

binevienidoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        window.location.href = "/home.html"
    }, 2000)
})