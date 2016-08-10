var add = function(num1, num2){
  return num1 + num2;
};


$("document").ready(function(){

  $("form#add").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());

    var sum = add(num1, num2);
    $("#addResult").text(sum);
  });

});
