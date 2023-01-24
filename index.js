function rot13(str) {
  var decodedString = "";
  var charCode;
  
  for (var i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i);
    
    if (charCode < 65 || charCode > 90) {
      decodedString += str.charAt(i);
    } else if (charCode < 78) {
      decodedString += String.fromCharCode(charCode + 13);
    } else {
      decodedString += String.fromCharCode(charCode - 13);
    }
  }
  return decodedString;
}



rot13("SERR PBQR PNZC");