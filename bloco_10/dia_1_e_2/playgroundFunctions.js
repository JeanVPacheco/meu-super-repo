module.exports = {
  encode,
  decode,
};

function encode(codificar) {
  let codificarSplit = codificar.split("");
for (index = 0; index < codificarSplit.length; index += 1){
  if (codificarSplit[index] == 'a'){
    codificarSplit[index] = '1';
  }
  else if (codificarSplit[index] == 'e'){
    codificarSplit[index] = '2';
  }
  else if (codificarSplit[index] == 'i'){
    codificarSplit[index] = '3';
  }
  else if (codificarSplit[index] == 'o'){
    codificarSplit[index] = '4';
  }
  else if (codificarSplit[index] == 'u'){
    codificarSplit[index] = '5';
  }
}
  return codificarSplit.join('');
}
function decode(decodificar) {
  let decodificarSplit = decodificar.split("");
  for (let index = 0; index < decodificarSplit.length; index += 1){
    if (decodificarSplit[index] == '1'){
      decodificarSplit[index] = 'a';
    }
    else if (decodificarSplit[index] == '2'){
      decodificarSplit[index] = 'e';
    }
    else if (decodificarSplit[index] == '3'){
      decodificarSplit[index] = 'i';
    }
    else if (decodificarSplit[index] == '4'){
      decodificarSplit[index] = 'o';
    }
    else if (decodificarSplit[index] == '5'){
      decodificarSplit[index] = 'u';
    }
  }
    return decodificarSplit.join('');
}