let respuestaCorrecta = "1969";
let frase= "Te quedan ";
let intentos=4;



function enviar() {
	
    let rta=document.getElementById("blabla").value;
    

    if(rta==respuestaCorrecta) {
        document.getElementById("maquina").innerHTML = "MUY BIEN, LA RESPUESTA ES CORRECTA!!";
        document.getElementById("boton-enviar").disabled = true;

    }else{
        intentos--;
        document.getElementById("maquina").innerHTML = "RESPUESTA INCORRECTA - " + frase + intentos + " intentos" ;
        if(intentos>=1){
			if(intentos==2){
                document.getElementById("pistas").innerHTML = "PISTA 1: Actualmente tiene 50 años";    
			} 
            if(intentos==1){
                document.getElementById("pistas2").innerHTML = "PISTA 2: En ese año, el hombre llegó a la luna por primera vez"
            }
        }else{
        	alert("PERDISTE!!");
            document.getElementById("boton-enviar").disabled = true;
            
        }
        
    }

}



