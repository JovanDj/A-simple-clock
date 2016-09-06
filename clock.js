function printTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var output = document.getElementById("output");
    output.innerHTML = h + " : " + m + " : " + s;
}

setInterval(printTime, 1000);