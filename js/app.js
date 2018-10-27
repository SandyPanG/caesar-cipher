var aUppA = (65 + 33) % 26;//ASCII para A
var aUppZ = 90;//ASCII para Z
var aLowA = 97;//ASCII Para a
var aLowZ = 122;//ASCII para z
var message = "";

do {message = prompt("Ingresa una mensaje  \n ***números, carácteres extaños o espacios no son válidos***");//Se solicita al usuario que ingrese un mensaje
    }
    while (!message || !/^[a-zA-Z]*$/.test(message));//valida que se ingrese una frase y que sólo sean letras tanto mayúsculas como minúsculas
    cipher(message);


function cipher (msg) {//función para cifrar el mensaje
    var encryption = "";

    for (var i=0; i< msg.length; i++){//for que itera para obtener el valor númerico de cada una de las letras
        var codAscii= msg.charCodeAt(i);
        var codNumAscii = 0

        console.log(codAscii);
        console.log(codNumAscii);
        
        

    if((codAscii >= 65)  && (codAscii <= 90)) {//funcion para identificar mayusculas y minusculas en el código ascii
        codNumAscii = ((codAscii -65 + 33) % 26) + 65;// se aplica la fórmula para ascii mayusculas
      } else {
        codNumAscii = ((codAscii -97 + 33) % 26) +97// fórmula para ascii minusculas
      }
      var newLetter = String.fromCharCode(codNumAscii);
      encryption += newLetter;
      console.log(newLetter);
      
      }
      return encryption;
    }
