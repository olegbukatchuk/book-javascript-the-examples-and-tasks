var A = {
    number: 100
};

Object.prototype.name = "объект A";

for (var a in A) {
    document.write(a + " | ")
}

test('"toString" in A');
test('"valueOf" in A');
test('"constructor" in A');

function test(txt) {
    document.write("<br>" + txt + " -> " + eval(txt))
}