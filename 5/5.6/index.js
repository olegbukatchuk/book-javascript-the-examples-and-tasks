document.write("<h4>Числа Фибоначчи</h4>");

var n = 15, a, b;
var fibs = new Array();

fibs.push(1, 1);

while (fibs.length < n) {
    a = fibs[fibs.length - 1];
    b = fibs[fibs.length - 2];
    fibs.push(a + b);
}

for (var k = 0; k < fibs.length; k++) {
    document.write(fibs[k] + " | ")
}