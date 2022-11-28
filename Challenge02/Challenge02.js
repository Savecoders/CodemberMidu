


function descryptMessage(message) {
  const ASCII_LOWER = 48;
  let uncruptedMessage = "";

  for (let i = 0; i < message.length - 2; i++) {

    if (parseInt(message[i] + message[i + 1]) >= ASCII_LOWER) {

      uncruptedMessage += String.fromCharCode(
        parseInt(message[i] + message[i + 1])
      );
      i += 1;
    } else {
      uncruptedMessage += String.fromCharCode(
        parseInt(message[i] + message[i + 1] + message[i + 2])
      );
      i += 2;
    }
  }
  return uncruptedMessage;
}

function resolveEncrypted(message) {
  const separedMessage = message.split(" ");
  return separedMessage.map((word) => descryptMessage(word)).join(" ");
}

async function christmasLights() {
  const res = await fetch("https://codember.dev/encrypted.txt");
  const message = await res.text();
  //console.log(resolveEncrypted(message));
}

christmasLights();


console.log(resolveEncrypted('11511798109105116 116561181061045651505752561029911097108'))
