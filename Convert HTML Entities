/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List") should return Schindler&​apos;s LonvertHTML("<>") should return &​lt;&​onvertHTML("abc") should return abc.
*/

function convertHTML(str) {
  let arr = str.split("");
  
  let HTML = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };
  //console.log(HTML["\""]);
  
  let result = str.split("").map(function (x) {
    if (HTML[x] === undefined) {
      return x;
    }
    return HTML[x];
  }).join("");
  
  console.log(result);
  return result;
}

convertHTML('Stuff in "quotation marks"');