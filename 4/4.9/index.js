document.write("<h4>Проверка свойств объекта</h4>");

var colors = {
    red: "красный",
    yellow: "жёлтый",
    green: "зелёный"
};

var a = "red" in colors;
var b = "blue" in colors;

document.write("Наличие свойства red: " + a + "<br>");
document.write("Наличие свойства blue: " + b + "<br>");
