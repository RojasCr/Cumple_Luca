const fotosDerecha = document.getElementsByClassName("fotos")
const fotosIzquierda = document.getElementsByClassName("izquierda")

const fotosDerechaAnimation = () => {

    for(i=0; i<fotosDerecha.length; i++){
        let fotosHeight = fotosDerecha[i].offsetTop;
        let diferencia = fotosHeight - scrollY;
        
        console.log(diferencia)
    
        if(diferencia<window.innerHeight-130){
            fotosDerecha[i].style.animation = "apareceIzquierda 2s linear forwards";
        //} /*else{
            //trabajos.style.animation = "desapareceIzquierda 2s linear forwards";
            
        }


    }
}
        
        // const nosotrosAnimation = () => {
            //     const nosotrosHeight = nosotros.offsetTop;
            //     const diferencia = nosotrosHeight - scrollY;
            
            //     if(diferencia<window.innerHeight-120){
                //         nosotros.style.animation = "apareceAbajo 2s linear forwards";
                //     }/* else{
                    //         nosotros.style.animation = "desapareceAbajo 2s linear forwards";
                    
                    //     }*/
                    // }
                    
                    
window.addEventListener("scroll", () => {
    fotosDerechaAnimation();
    
})