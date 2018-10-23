/*var aUppA = (65 + 33) % 26;
var aUppZ = 90;
var aLowA = 97;
var aLowZ = 122;*/

do {var phrase = prompt("Ingresa una frase  \n ***números, carácteres extaños o espacios no son válidos***");
    }
    while (!phrase || !/^[a-zA-Z]*$/.test(phrase));

function cipher (phrase) {
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
