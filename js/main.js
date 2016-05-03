$(document).ready(function(){
  var str;
  var firstNum = 0;
  var opFunc;

  var number = $("span").not('.operator').on("click", function(){
    // console.log($(this).text());
    $("#screen").text($("#screen").text()+$(this).text());
  });
   var operand = $('.operator').not('#calc').on("click", function(){
    firstNum = $("#screen").text();
    $("#screen").empty();
    opFunc = $(this).text().replace('x','*').replace('\u00f7','/');
  });
  $("#calc").click(function(){
    str = firstNum + opFunc + $("#screen").text();
    $("#screen").text(eval(str));
  });
  var clear = $("#cancel").on("click", function(){
    $("#screen").text('');
  });


});
