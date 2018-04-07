var A = {};
var B = Object.create(null);
var C = Object.create(B);

B.number = 100;

Object.prototype.name="Объект A";

show(A);
show(B);
show(C);

function show(obj) {
    for (var s in obj) {
        document.write(s + " -> " + obj[s]);
    }
    document.write("<br>");
}