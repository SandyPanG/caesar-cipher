// var aUppA = (65 + 33) % 26;//ASCII para A
// var aUppZ = 90;//ASCII para Z
// var aLowA = 97;//ASCII Para a
// var aLowZ = 122;//ASCII para z
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
      var newLetter = String.fromCharCode(codNumAscii);//se obtiene la nueva letra por cifrado cesar
      encryption += newLetter;
      console.log(newLetter);
      
      }
      return document.getElementById("encrypted").innerHTML = encryption;//muestra el texto cifrado en la página
    }

    var msgToDecipher = confirm(" Deseas descifrar un mensaje? ");
    if( msgToDecipher === true){
      do {
        text = prompt("Ingresa una frase a cifrar. \n Por favor no ingreses: numeros, espacios y/o caracteres especiales"); // Se solicita al usuario el texto a cifrar, se repetira tantas veces hasta que el usuario ingrese una entrada valida
      }
        while (!text|| !/^[a-zA-Z]*$/.test(text)); // Condicion de validacion de entrada de texto, se repetira mientras que sea diferente a un string,o si contiene caracteres diferentes de letras mayusculas o minusculas
        decipher(text);
      }

      // var msgToDecipher = document.getElementById('decrypted').value;
      // console.log(msgToDecipher);
      

      //  var validateInput = function(e) {
      //       e.preventDefault();
      //       console.log('ingresa al evento');
      //       if( msgToDecipher === true){
      //         do {
      //           msgToDecipher = alert("Ingresa una frase a cifrar. \n Por favor no ingreses: numeros, espacios y/o caracteres especiales"); // Se solicita al usuario el texto a cifrar, se repetira tantas veces hasta que el usuario ingrese una entrada valida
      //         }
      //           while (!msgToDecipher|| !/^[a-zA-Z]*$/.test(msgToDecipher)); // Condicion de validacion de entrada de texto, se repetira mientras que sea diferente a un string,o si contiene caracteres diferentes de letras mayusculas o minusculas
      //           decipher(msgToDecipher);
      //       return msgToDecipher;
      //   };

      //   var validate = function (e) {
      //     validateInput(e);
      //   };

      //   msgToDecipher.addEventListener('click', validate);


      function decipher (msg) {//función decifrar mensaje
        var decryption = "";

          for(var i=0; i < msg.length; i++){ // iteracion donde se obtiene el valor numerico de cada letra del texto ingresado
            var codAscii= msg.charCodeAt(i);
            var codNumAscii = 0

            console.log(codAscii);
            console.log(codNumAscii);

            if((codAscii >= 65) && (codAscii <= 90)){ // Condicion para diferenciar mayusculas de minusculas, Si no esta dentro del rango indicado se trata de una letra minuscula, si, si se encuentra es una letra mayuscula
              codNumAscii = ((codAscii + 65 - 33) % 26) + 65;// Aplicacion del olgaritmo cifrado Cesar, se cambian los simbolos para aplicar el descifrado del texto
            }else{
                codNumAscii =((codAscii + 97 + 33) % 26) + 97;
              }
              var newDecipher = String.fromCharCode(codNumAscii);// Se obtiene la letra del valor numerico obtenido por el algoritmo de cifrado Cesar
              decryption += newDecipher; // Se agrega letra por letra para construir el texto descifrado
              console.log(newDecipher);
              
            }
            return document.getElementById("decrypted").innerHTML = decryption;
          }
        