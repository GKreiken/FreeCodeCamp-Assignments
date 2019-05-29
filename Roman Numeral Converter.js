/*

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convertToRoman(num) {
 let countdown = num;
 const roman = [];
 
  while (countdown > 0) {
    while (countdown >= 1000) {
      roman.push('M');
      countdown -= 1000;
    }; 
    while (countdown >= 500) {
      if (countdown >= 900) {
        roman.push('CM');
        countdown -= 900;
      } else {
        roman.push('D');
        countdown -= 500;
      };
    }; 
    while (countdown >= 100) {
      if (countdown >= 400) {
        roman.push('CD');
        countdown -= 400;
      } else {
        roman.push('C');
        countdown -= 100;
      };
    };
    while (countdown >= 50) {
      if (countdown >= 90) {
        roman.push('XC');
        countdown -= 90;
      } else {
        roman.push('L');
        countdown -= 50;
      };
    };
    while (countdown >= 10) {
      if (countdown >= 40) {
        roman.push('XL');
        countdown -= 40;
      } else {
        roman.push('X');
        countdown -= 10;
      };
    };
    while (countdown >= 5) {
      if (countdown >= 9) {
        roman.push('IX');
        countdown -= 9;
      } else {
        roman.push('V');
        countdown -= 5;
      };
    };
    while (countdown >= 1) {
      if (countdown >= 4) {
        roman.push('IV');
        countdown -= 4;
      } else {
        roman.push('I');
        countdown -= 1;
      };
    };
  }
  console.log(roman);
 return roman.join('');
}
convertToRoman(2);