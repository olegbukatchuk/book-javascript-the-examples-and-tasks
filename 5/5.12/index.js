Array.prototype.toString = function() {
    var txt = "< " + this.join(" ; ") + " >";
    return txt;
}

Array.prototype.valueOf = function() {
    return eval(this.join("+")) / this.length;
}

var A = [1, [2, 3], 4, "текст", true];
document.write("Массив:<br>");
document.write(A);

var B = [3, 5, 1, 8, 2];
document.write(["<br>B = ", B].join(""));
document.write("<br>Среднее значение: " + B + "<br>");
document.write("Массив " + [1, 2, 3, 4].toString() + " - среднее " + [1, 2, 3, 4].valueOf());
