document.write("<h4>Удаление свойств и методов</h4>")

var colors = {
    red:"красный",
    yellow:"жёлтый",
    green:"зелёный",
    show: function() {
        with (document) {
            write("Свойства и методы объекта:<br>");
            for (var s in this) {
                write(s + " | ")
            }
            write("<hr>")
        }
    }
};

colors.show();
delete colors.red;

colors.show();
delete colors.yellow;

colors.show();
delete colors.show;

var tst='"show" in colors';
document.write(tst + " -> " + eval(tst) + "<br>");
tst = '"green" in colors';
document.write(tst + " -> " + eval(tst));