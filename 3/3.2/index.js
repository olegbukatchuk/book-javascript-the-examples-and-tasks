var myText = "Глвальная переменная";

document.write(myText + "<br>");

function show() {
    var myText;

    myText = "Локальная переменная";

    document.write(myText + "<br>");
}

show();

document.write(myText + "<br>");