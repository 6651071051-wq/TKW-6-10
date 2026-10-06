$(document).ready(function () {
  $("#form1").on("submit", function (e) {
    e.preventDefault();
    var fname = $.trim($("input[name='fname']").val());
    var lname = $.trim($("input[name='lname']").val());
    alert("Họ và tên: " + fname + " " + lname);
  });
});
