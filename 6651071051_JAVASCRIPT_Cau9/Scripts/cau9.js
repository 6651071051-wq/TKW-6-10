$(document).ready(function () {

  function setError(id, msg) {
    $("#e-" + id).text(msg || "");
    $("#" + id).toggleClass("invalid", !!msg);
    return !msg;
  }

  // Email: đúng 1 dấu @; account có nhiều nhất 1 dấu chấm; domain có ít nhất 1 dấu chấm
  function validEmail(s) {
    return /^[^@\s.]+(\.[^@\s.]+)?@[^@\s.]+(\.[^@\s.]+)+$/.test(s);
  }

  // Ngày sinh: mm/dd/yyyy hoặc mm-dd-yyyy
  function validDate(s) {
    var m = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/.exec(s);
    if (!m) return "Định dạng phải là mm/dd/yyyy hoặc mm-dd-yyyy";
    var mm = +m[1], dd = +m[3], yy = +m[4];
    if (mm < 1 || mm > 12) return "Tháng phải từ 1 đến 12";
    if (yy >= new Date().getFullYear()) return "Năm phải nhỏ hơn năm hiện tại";
    var dt = new Date(yy, mm - 1, dd);
    if (dt.getMonth() !== mm - 1 || dt.getDate() !== dd) return "Ngày không hợp lệ";
    return "";
  }

  function required(id) {
    return setError(id, $.trim($("#" + id).val()) === "" ? "Không được để trống" : "");
  }

  $("#btnFinish").on("click", function () {
    var ok = true;
    ok = required("name") && ok;
    ok = setError("sex", $("input[name='sex']:checked").length ? "" : "Vui lòng chọn giới tính") && ok;

    var email = $.trim($("#email").val());
    if (email === "") ok = setError("email", "Không được để trống") && ok;
    else ok = setError("email", validEmail(email) ? "" : "Email không hợp lệ") && ok;

    var bd = $.trim($("#birthday").val());
    if (bd === "") ok = setError("birthday", "Không được để trống") && ok;
    else ok = setError("birthday", validDate(bd)) && ok;

    ok = required("street") && ok;
    ok = required("city") && ok;
    ok = setError("region", $("#region").val() === "" ? "Vui lòng chọn khu vực" : "") && ok;

    var zip = $.trim($("#zip").val());
    if (zip === "") ok = setError("zip", "Không được để trống") && ok;
    else ok = setError("zip", /^\d{5}$/.test(zip) ? "" : "Zip code phải có đúng 5 số") && ok;

    if (ok) alert("Đăng ký thành công!");
  });

  $("#btnClear").on("click", function () {
    $("#regForm")[0].reset();
    $(".err").text("");
    $(".invalid").removeClass("invalid");
  });
});
