$(document).ready(function () {
  $(".op").on("click", function () {
    var a = parseFloat($("#num1").val());
    var b = parseFloat($("#num2").val());
    var op = $(this).data("op");
    var r;
    if (isNaN(a) || isNaN(b)) {
      $("#result").val("Số không hợp lệ");
      return;
    }
    switch (op) {
      case "+": r = a + b; break;
      case "-": r = a - b; break;
      case "*": r = a * b; break;
      case "/": r = (b === 0) ? "Không chia được cho 0" : a / b; break;
      case "^": r = Math.pow(a, b); break;
    }
    $("#result").val(r);
  });
});
