document.write("<h4>Цвета</h4>");

var colors = {
    red: "красный",
    yellow: "жёлтый",
    green: "зелёный"
};

for (var s in colors) {
    document.write(s + " - " + colors[s] + "<br>")
}