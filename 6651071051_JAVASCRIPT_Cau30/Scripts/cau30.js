function insert_Row() {
    var table = document.getElementById("sampleTable");
    var n = table.rows.length + 1;
    var row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML = "Row" + n + " cell1";
    row.insertCell(1).innerHTML = "Row" + n + " cell2";
}
