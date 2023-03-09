/*get the number of characters*/
function generatePassword() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}|:>?<~[];'./";

  let charLength = document.getElementById("length").value;
  let password = "";

  for (let i = 0; i < charLength; i++) {
    if (document.getElementById("uppercase").checked) {
      password += upperCase.charAt(
        Math.floor(Math.random() * upperCase.length)
      );
    }
    if (document.getElementById("lowercase").checked) {
      password += lowerCase.charAt(
        Math.floor(Math.random() * lowerCase.length)
      );
    }
    if (document.getElementById("numbers").checked) {
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    if (document.getElementById("symbols").checked) {
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
  }

  password = password.slice(0, charLength);
  document.getElementById("password__result").value = password;
}

document.getElementById("length").addEventListener("input", generatePassword);
document.getElementById("btn").addEventListener("click", generatePassword);
