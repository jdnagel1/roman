$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // User Interface Logic
    // var userInput = $("input#input").val();
    // var translatedString = translateSentenceToPigLatin(userInput);
    $('.result').show();
    $('#original').text(userInput);
    $('#romanNumeralTranslation').text(translatedString);
  });
  // console.log(isVowel(""));
});


// business logic

// put them in object as key value pairs vvv
function convertToRoman(num) {
 var romanToNum = {
   M: 1000,
   CM: 900,
   D: 500,
   CD: 400,
   C: 100,
   XC: 90,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1
 };

  var roman = "";

  for (var key in romanToNum) {
    // console.log("key: ", key)
    // console.log("value: ", romanToNum[key]);
    while (num >= romanToNum[key]) {
      roman += key;
      num -= romanToNum[key];
      console.log("Num is decreased: ", num)
    }
  }
 return roman;
}

convertToRoman(8);





// function romanize (num) {
// 	if (!+num)
// 		return false;
// 	var	digits = String(+num).split(""),
// 		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
// 		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
// 		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
// 		roman = "",
// 		i = 3;
// 	while (i--)
// 		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
// 	return Array(+digits.join("") + 1).join("M") + roman;
// }
//
// function deromanize (str) {
// 	var	str = str.toUpperCase(),
// 		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
// 		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
// 		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
// 		num = 0, m;
// 	if (!(str && validator.test(str)))
// 		return false;
// 	while (m = token.exec(str))
// 		num += key[m[0]];
// 	return num;
// }
