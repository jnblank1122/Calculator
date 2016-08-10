var add = function(num1, num2){
  return num1 + num2;
};
var mult = function(num1, num2){
  return num1 * num2;
};
var div = function(num1, num2){
  return num1 / num2;
};
var sub = function(num1, num2){
  return num1 - num2;
};


$("document").ready(function(){

  var getInput = $("form#input").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());

    var numArray = [num1, num2];
    return numArray;
  });


  $("form#add").submit(function(event) {
    event.preventDefault();
    debugger;
    var num1 = parseInt(getInput().charAt(0));
    var num2 = parseInt(getInput().charAt(1));
    var result = add(num1, num2);
    $("#result").text(result);
  });

  $("form#mult").submit(function(event) {
    event.preventDefault();
    debugger;
    var num1 = parseInt(getInput().charAt(0));
    var num2 = parseInt(getInput().charAt(1));
    var result = mult(num1, num2);
    $("#result").text(result);
  });

  $("form#div").submit(function(event) {
    event.preventDefault();
    debugger;
    var num1 = parseInt(getInput().charAt(0));
    var num2 = parseInt(getInput().charAt(1));
    var result = div(num1, num2);
    $("#result").text(result);
  });

  $("form#sub").submit(function(event) {
    event.preventDefault();
    debugger;
    var num1 = parseInt(getInput().charAt(0));
    var num2 = parseInt(getInput().charAt(1));
    var result = sub(num1, num2);
    $("#result").text(result);
  });

});
