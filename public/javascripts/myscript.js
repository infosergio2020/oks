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
                // document.querySelector("audio").pause();
                audio_1.pause();
                botones.forEach(boton => {boton.disabled =true});

                //comparo la opcion con la respuesta
                var result = event.target.value == botonRespuesta.value
                if(result){
                        event.target.style.background="#61ff31b2";//verde
                        document.querySelector("audio").src='../audio/03correcta.mp3';
                }
                else{
                    //cargando sonido de respuesta incorrecta
                        document.querySelector("audio").src='../audio/01nani.mp3';
                        event.target.style.background="#c81414";//rojo
                }

                event.target.disabled=false;
                event.target.style.color="white";
                document.querySelector("audio").play();

                setTimeout(()=>{

                    fetch('/newround', {method:'GET'}).then(res => res.json()).then(data =>{
                        let index = getRandomInt(0,3);
                        let correcta = data[index];
    
                        let i=0;
                        botones.forEach(boton => {
                            boton.style.color="#FFBA5C";
                            boton.style.background="#000";
                            boton.disabled=false;
                            boton.value = data[i].title;
                            boton.innerHTML  = data[i].title;
                            i++;
                        });

                        botonRespuesta.value = correcta.title
                        botonRespuesta.innerHTML = correcta.title

                        audio_1.src='/'+correcta.imagePath+'#t=20,40'
                        audio_1.play();

                    });

                },8000);
 
            });
        });
    }

    //ejecutar el reproductor automaticamente luego de 1 segundo
    return new Promise(() => {
        if(audio_1){
            setTimeout(() => {
                const audio = document.querySelector("audio");
                audio.volume = 0.2;
                audio.play();
            }, 1000);
        }
    });
});

//funciones

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }