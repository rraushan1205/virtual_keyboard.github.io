document.addEventListener('keydown', function(event) {
  var keyDisplay = document.getElementById('key-disp');
    keyDisplay.textContent = event.key;
    m = event.key;
    keys = checkchar(m);
    console.log(event.key);
    var detectkey = document.querySelector('.' + keys);
    detectkey.style.backgroundColor = 'rgb(252, 84, 140)';
    detectkey.style.boxShadow = "0 0 0 0 rgba(70, 2, 2, 0.75)";
});
document.addEventListener('keyup', function(event) {
  var keyDisplay = document.getElementById('key-disp');
    keyDisplay.textContent = event.key;
    m = event.key;
    keys = checkchar(m);
    var detectkey = document.querySelector('.' + keys);
    detectkey.style.backgroundColor = 'pink';
    detectkey.style.boxShadow = "0px 2px 1px 2px rgba(70, 2, 2, 0.75)";
});
function checkchar(keygain) {
  if (keygain.toLowerCase() == 'control') {
    var keys = 'ctrl';
  }
  else if (keygain.toLowerCase() == ' ') {
    var keys = 'spacebar';
  } 
  else if (keygain.toLowerCase() == ',') {
    var keys = 'com';
  }
  else if (keygain.toLowerCase() == '.') {
    var keys = 'dot';
  }
  else if (keygain.toLowerCase() == '/') {
    var keys = 'sl';
  }
  else if (keygain.toLowerCase() == ';') {
    var keys = 'sem';
  }
  else if (keygain.toLowerCase() == "'") {
    var keys = 'icom';
  }
  else if (keygain.toLowerCase() == '[') {
    var keys = 'obr';
  }
  else if (keygain.toLowerCase() == ']') {
    var keys = 'ocr';
  }
  else if (keygain.toLowerCase() == '\\') {
    var keys = 'fsl';
  }
  else if (!isNaN(keygain)) {
    var keys = 'num' + keygain;
  }
   else {
    var keys =  keygain.toLowerCase();
  }
  return keys;
}