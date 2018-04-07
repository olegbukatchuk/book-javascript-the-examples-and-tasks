var A = Object.create(Math);
var B = Object.create(A);
var C = Object.create(B);
var D = Object.create(C);

Object.getPrototypeOf(A).f = function(x) {
    return 2 * x + 1;
};

var t = 2;

document.write("Функция f(" + t + ") = " + Math.f(t) + "<br>");

t = 3;

document.write("Функция f(" + t + ") = " + D.f(t) + "<br>");

var obj = Object.getPrototypeOf(Object.getPrototypeOf(D));

document.write("obj == B -> " + (obj == B) + "<br>");