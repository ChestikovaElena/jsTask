const string = "Привет! Как дела?";
let resultString = "";

function getVowels(string) {
  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      resultString += string[i];
    }
  }
  return resultString;
}

function isVowel(letter) {
  const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] == letter.toLowerCase()) {
      return true;
    }
  }
  return false;
}

console.log(getVowels(string));