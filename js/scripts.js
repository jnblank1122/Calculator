// var num1 = parseInt(prompt("Enter a number: "));
// var num2 = parseInt(prompt("Enter another number: "));
// var add = function(num1,num2) {return(num1+num2);};
//
// alert(add(num1,num2));
//
// var num3 = parseInt(prompt("Enter a number: "));
// var num4 = parseInt(prompt("Enter another number: "));
// var sub = function(num3,num4) {return(num3-num4);};
//
// alert(sub(num3,num4));
//
//
// var num1 = parseInt(prompt("Enter a number: "));
// var num2 = parseInt(prompt("Enter another number: "));
// var mult = function(num1,num2) {return(num1*num2);};
//
// alert(mult(num1,num2));
//
//
// var num1 = parseInt(prompt("Enter a number: "));
// var num2 = parseInt(prompt("Enter another number: "));
// var div = function(num1,num2) {return(num1/num2);};
//
// alert(div(num1,num2));

//BMI = ( Weight in Pounds / ( Height in inches x Height in inches ) )
// x 703


// var weight = parseInt(prompt("Enter your weight in pounds: "));
// var height = parseInt(prompt("Enter your height in inches: "));
//
// var bmi = function(weight,height) {
//   return (weight/(height*height)*703);
// };
// alert("Your BMI is: " + bmi(weight,height).toFixed(2));

// var convert = function(degree) {return ((degree * 1.8)+32);
// };
//
// var degree = parseFloat(prompt("Enter a degree to be converted to fahrenheit: "));
//
// alert("The temp is converted " + convert(degree) + "degrees fahrenheit");
// var convert = function(gallons) {return (gallons*4);};
// var reconvert = function(cups) {return (cups*8);};
// var gallons = parseInt(prompt("Enter an amount of gallons: "));
// var cups = parseInt(prompt("Enter an amount of cups: "));
//
// alert("Amount of liters in your gallons: " + convert(gallons) + "amount of ounces in your cups: " + reconvert(cups));
//
// $(Document).ready(function(){
//   jQuery("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $("p").click(function() {
//     alert("This is a Paragraph.");
//   });
//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });

//var sentence = function(input);
function reverses(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
var sentence = prompt("Enter a sentence: ");

var firstlast = function(sentence){
  return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase()
};

var reverse = function(x) {
  return x.charAt(1) + x.charAt(0);
};

var letterreverse = function(sentence){
  return sentence + reverse(firstlast(sentence))
};

var middleletter = function(sentence){
  return sentence.charAt(sentence.length/2) + letterreverse(sentence)
};
//var letter = sentence.charAt(count.toPrecision(1));
console.log(middleletter(sentence));

alert(reverses(middleletter(sentence)));
//var final = (letter + " " + sentence + " " + reverse);
