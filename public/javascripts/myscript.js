window.addEventListener("DOMContentLoaded", event => {
    //ocultar el reproductor de musica
    const audio_1 = document.querySelector("audio");
    if(audio_1){
        audio_1.style.display="none";
    }
    
    //agregar eventos a los botones
    var botones = document.getElementsByName("boton_opcion")
    var botonRespuesta = document.getElementsByName("boton_solucion")[0]

    if(botones){
        botones.forEach(boton => {
            boton.addEventListener("click",event =>{
                document.querySelector("audio").pause();
                //comparo la opcion con la respuesta
                var result = event.target.value == botonRespuesta.value
                if(result){
                    event.target.style.color="white";
                    event.target.style.background="#61ff31b2";

                    document.querySelector("audio").src='../audio/03correcta.mp3';
                    document.querySelector("audio").play();
                }
                else{
                    //cargando sonido de 
                    document.querySelector("audio").src='../audio/01nani.mp3';
                    document.querySelector("audio").play();

                    event.target.style.color="white";
                    event.target.style.background="#c81414";
                }
            });
        });
    }

    //ejecutar el reproductor automaticamente luego de 1 segundo
    return new Promise(() => {
        setTimeout(() => {
            const audio = document.querySelector("audio");
            audio.volume = 0.2;
            audio.play();
        }, 1000);
    });
});
