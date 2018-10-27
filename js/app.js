var aUppA = (65 + 33) % 26;//ASCII para A
var aUppZ = 90;//ASCII para Z
var aLowA = 97;//ASCII Para a
var aLowZ = 122;//ASCII para z
var message = "";

do {message = prompt("Ingresa una mensaje  \n ***números, carácteres extaños o espacios no son válidos***");//Se solicita al usuario que ingrese un mensaje
    }
    while (!message || !/^[a-zA-Z]*$/.test(message));//valida que se ingrese una frase y que sólo sean letras tanto mayúsculas como minúsculas
    cipher(message);


function cipher (msg) {
    var phraseCipher="";

    for (var i=0; i< phrase.length; i++){
        var codAscii= phrase.charCodeAt(i);

    if(coAscii>=65 && codAscii <= 90) {
        var asciiCipherNum = ((codAscii -65 +33)% 26) + 65
      } else {
        var asciiCipherNum = ((codAscii -97 + 33) % 26) +97
      }
      var newLetter = String.fromChartCode(asciiCipherNum);
      phraseCipher += newLetter;
      }
      return phraseCipher;
    }
