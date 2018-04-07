var txt = '"name" in Math';

document.write(txt + " -> " + eval(txt) + "<br>");

var A = {
    color: "красный"
};

var B = new Object();

B.number = 100;

showAll();

Object.prototype.name = "объект A";
document.write(txt + " -> " + eval(txt) + "<br>");

showAll();

B.name="объект B";
document.write("Math.name -> " + Math.name + "<br>");

showAll();

delete Object.prototype.name;
document.write(txt + " -> " + eval(txt) + "<br>");

showAll();

function show(obj) {
    for (var s in obj) {
        document.write(s + " -> " + obj[s] + " | ")
    }
    document.write("<br>")
}

function showAll() {
    document.write("объект A: ");
    show(A);
    document.write("объект B: ");
    show(B);
    document.write("<br>");
}