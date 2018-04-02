function first() {
    document.write("Первая функция<br>");
}

function second() {
    document.write("Вторая функция<br>");
}

first();
second();

var tmp;

tmp = first;
first = second;
second = tmp;

first();
second();