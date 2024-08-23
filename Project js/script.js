// Caesar Cipher
function caesarCipher() {
    const input = document.getElementById('caesar-input').value;
    const shift = parseInt(document.getElementById('caesar-shift').value);
    let output = '';
  
    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        output += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        output += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        // Non-alphabetic characters
        output += input.charAt(i);
      }
    }
  
    document.getElementById('caesar-output').value = output;
  }
  
  // RSA Encryption
  function modPow(base, exponent, modulus) {
    // modPow function implementation
  }
  
  function rsaEncryptDecrypt() {
    const input = document.getElementById('rsa-input').value;
    const p = BigInt(5), q = BigInt(7), e = BigInt(17), d = BigInt(53);
    const n = p * q;
    let output = '';
  
    for (let i = 0; i < input.length; i++) {
      let charCode = BigInt(input.charCodeAt(i));
      let encrypted = modPow(charCode, e, n);
      let decrypted = modPow(encrypted, d, n);
      output += decrypted.toString(10); // Convert BigInt to string in base 10
    }
  
    document.getElementById('rsa-output').value = output;
  }
  