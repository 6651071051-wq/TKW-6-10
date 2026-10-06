function getFormvalue() {
    var f = document.getElementById("form1");
    var fullName = f.elements["fname"].value + " " + f.elements["lname"].value;
    alert("Họ và tên: " + fullName);
    console.log(fullName);
    return false; // không reload trang
}
