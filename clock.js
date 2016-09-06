function printTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var output = document.getElementById("output");
    output.innerHTML = h + " : " + m + " : " + s;

    var progHour = document.getElementById("progHour");
    progHour.value = h;

    var progMin = document.getElementById("progMin");
    progMin.value = m;

    var progSec = document.getElementById("progSec");
    progSec.value = s;
}

setInterval(printTime, 1000);

