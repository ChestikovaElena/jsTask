const string = "Привет! Как дела?";

const getVowels = stringToFilter => {
  let resultString = "";

  for (let i = 0; i < stringToFilter.length; i++) {
    if (isVowel(stringToFilter[i].toLowerCase())) {
      resultString += stringToFilter[i];
    }
  }

  return resultString;
}

const isVowel = letter => {
  const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  
  if (vowels.includes(letter)) {
    return true;
  }
  return false;
}

console.log(getVowels(string));