window.onload = function() {

const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

//Vamos a crear una funciona para poder cifrar
// investigar que el un valor ternario
function cifrado(){
    //declarar el texto a cifrar
    const textoIngresado = texto.value;
    textoCifrado.value = textoIngresado.split('').map(c=>{
        let mayus = (c === c.toUpperCase()) ? true : false; 
        let valorEntero = c.toLowerCase().charCodeAt(0);
         if(valorEntero>= 97 && valorEntero<=122){
             const valorDesplazamiento = parseInt(desplazamiento.value);
             if(valorEntero + valorDesplazamiento > 122){
                 valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
             }else{
                 valorEntero = valorEntero + valorDesplazamiento
             }
         }else if (valorEntero >= 48 && valorEntero <= 57) { 
            const valorDesplazamiento = parseInt(desplazamiento.value);
            if(valorEntero + valorDesplazamiento > 57){
                //valorEntero = 49 + ((valorEntero - 47 + valorDesplazamiento) % 10);
                valorEntero = 49 + ((valorEntero - 47 + valorDesplazamiento) % 10);
            }
        }
        
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
};

texto.addEventListener('keyup', cifrado);


desplazamiento.addEventListener("change", cifrado);
}