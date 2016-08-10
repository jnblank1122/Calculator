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

var currentfunction;

$("document").ready(function(){

  $("form#input").submit(function(event) {
    event.preventDefault();
    var first = parseInt($("#num1").val());
    var second = parseInt($("#num2").val());
    if (currentfunction ==="add"){
      var answer = add(first, second);
      $("#result").text(answer);
    }
    else if (currentfunction ==="mult"){
      var answer = mult(first, second);
      $("#result").text(answer);
    }
    else if (currentfunction ==="div"){
      var answer = div(first, second);
      $("#result").text(answer);
    }
    else if (currentfunction ==="sub"){
      var answer = sub(first, second);
      $("#result").text(answer);
    }
    //currentfunction(first,second);
  });

  $(".btn").click(function(event){
    currentfunction=$(this).attr("id");
    console.log(currentfunction);
  });

});
