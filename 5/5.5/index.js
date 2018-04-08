document.write("<h4>Числа Фибоначчи</h4>");

var n = 15;
var fibs = new Array(1, 1);

while (fibs.length < n) {
    fibs[fibs.length] = fibs[fibs.length - 1] + fibs[fibs.length - 2]
}

for (var k = 0; k < fibs.length; k++) {
    document.write(fibs[k] + " | ")
}