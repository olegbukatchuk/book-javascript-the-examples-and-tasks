var myText = "Глобальная переменная";

document.write(myText + "<br>");

function show() {
    myText = "Переменная с намёком на глобальность";
    document.write(myText + "<br>");

    var myText = "Локальная переменная";
    document.write(myText + "<br>");
}

show();

document.write(myText + "<br>");