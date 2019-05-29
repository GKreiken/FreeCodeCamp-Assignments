/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
  let firstVowel = str.split('').findIndex(x => ['a', 'e', 'i', 'o', 'u'].includes(x));
  console.log(firstVowel);
  
  if (firstVowel === -1) {
    console.log(str + "ay");
    return str + "ay";
  } else if (firstVowel === 0) {
    console.log(str + "way");
    return str + "way";
  } else {
    let result = str.split("");
    console.log(result)
    for (let i = 0; i < firstVowel; i++) {
      result.push(result[0]);
      result.shift();
      console.log(result);
    }
    console.log(result.join("") + "ay");
    return result.join("") + "ay"
    
  }
}

translatePigLatin("glove");