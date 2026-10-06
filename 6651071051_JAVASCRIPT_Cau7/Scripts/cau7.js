$(document).ready(function () {
  $("#linkForm").on("submit", function (e) {
    e.preventDefault();
    var link = $.trim($("#linkInput").val());
    if (link === "") {
      alert("Vui lòng nhập đường link!");
      return;
    }
    if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(link)) {
      link = "http://" + link;
    }
    if (confirm("Bạn có muốn chuyển đến:\n" + link + " ?")) {
      window.location.href = link;
    }
    // Cancel: không làm gì cả
  });
});
