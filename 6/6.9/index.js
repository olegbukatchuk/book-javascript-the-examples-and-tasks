function testArgs(func) {
    var n = func.length;
    var words;

    switch (n) {
        case 0: words = "нет аргументов.";
        break;
        case 1: words = "один аргумент.";
        break;
        case 2:
        case 3:
        case 4: words = n + " аргумента.";
        break;
        default: words = n + " аргументов.";
    }

    document.write("Функция " + func + ": " + words + "<br>");
}

function show() {
    document.write("Всем привет!");
}

function F(a, b, c, d, e, f) {
    return a * b * c * d * e * f;
}

testArgs(eval);
testArgs(Math.pow);
testArgs(show);
testArgs(F);

function getFunc(f1, f2) {
    if (f1.length <= f2.length) {
        return f1;
    } else {
        return f2;
    }
}

var x = getFunc(Math.pow, F)(2, 3);
document.write(x + "<br>");
getFunc(show, eval)();