let fecha = new Date("11/21/2025");
let msFecha = fecha.getTime();

let dias = document.getElementById("dias");
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

setInterval(() => {
    let hoy = new Date().getTime();
    let distancia = msFecha - hoy;

    let msDia = 1000*60*60*24
    let msHoras = 1000*60*60
    let msMinutos = 1000*60
    let msSegundos = 1000

    let countDias = Math.floor(distancia / msDia);
    let countHoras = Math.floor((distancia % msDia)/msHoras);
    let countMinutos = Math.floor((distancia % msHoras)/msMinutos);
    let countSegundos = Math.floor((distancia % msMinutos)/msSegundos);

    segundos.innerText = countSegundos
    minutos.innerText = countMinutos
    horas.innerText = countHoras
    dias.innerText = countDias

},1000)

