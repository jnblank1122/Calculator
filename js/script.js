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

  $("form#input").submit(function(event){
    event.preventDefault();
  });

  $(".btn").click(function(event){
    var currentFunction=$(this).attr("id");
    var first = parseInt($("#num1").val());
    var second = parseInt($("#num2").val());
    if (currentFunction ==="add"){
      var answer = add(first, second);
    }
    else if (currentFunction ==="mult"){
      var answer = mult(first, second);
    }
    else if (currentFunction ==="div"){
      var answer = div(first, second);
    }
    else {
      var answer = sub(first, second);
    }
    $("#result").text(answer);
  });

});
