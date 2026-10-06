function removecolor() {
    var sel = document.getElementById("colorSelect");
    if (sel.options.length === 0) {
        alert("Danh sách đã hết phần tử!");
        return;
    }
    sel.remove(sel.selectedIndex);
}
