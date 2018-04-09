function zero(txt) {
    document.write("<b>" + txt + "</b><hr>");
}

zero.toString = function() {
    var t = "Название функции - zero<br>";
    t += "Количество аргументов - " + this.length + "<br>";
    return t;
};

function one(txt) {
    document.write("<b>" + txt + "</b><br>");
    for (var s in this) {
        document.write(this[s] + "<br>");
    }
    document.write("<hr>");
}

one.toString = function() {
    var t = "Метод one()<br>";
    t += "Количество аргументов - " + this.length + "<br>";
    return t;
};

var A = [];

A[1] = one;
A[0]("Начальный элемент массива");
A[1]("Элемент с единым индексом");