function prepareFood() {
    var x = document.getElementById("selectedItem");
    var text = "";
    var i;
    var table_number = document.getElementsByName("tblnum")[0].value;
    for (i = 1; i < x.length; i++) {
        text += x.elements[i].value + " ";
    }
    text1 = text.split(" ", i-1);
    console.log("Preparing food for items - [" + text1 + "]");
    serveFood(table_number, text1);
}
function serveFood(tblnum, txt) {
    console.log("Serving food for items - [" + txt + "] for table number - " + tblnum);
}

