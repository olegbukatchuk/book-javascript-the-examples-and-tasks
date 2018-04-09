function f(text, number) {
    this.text = text;
    this.number = number;
}

var A = {};
var B = {
    show: function() {
        for (var s in this) {
            document.write(s + ": " + this[s] + "<br>");
        }
    }
};

var C = {};
C.method = f;

f("", 100);
f.call(A, "объект A", 200);
f.apply(B, ["объект B", 300]);
C.method("объект C", 400);

document.write(text + " | " + number + "<br>");
document.write(A.text + " | " + A.number + "<br>");
document.write(B.text + " | " + B.number + "<br>");
document.write(C.text + " | " + C.number + "<br>");

document.write(("f" in A) + "<br>");
document.write(("f" in B) + "<br>");
document.write(("f" in C) + "<br>");

document.write("<b>Объект B:</b><br>");
B.show();

document.write("<b>Объект A:</b><br>");
B.show.call(A);

document.write("<b>Объект C:</b><br>");
B["show"].call(C);