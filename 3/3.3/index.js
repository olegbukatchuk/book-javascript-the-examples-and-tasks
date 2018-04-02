var myText = "Глобальная переменная";

document.write(myText + "<br>");

function show() {
    myText = "Это не локальная переменная";
    document.write(myText + "<br>");
}

show();

document.write(myText + "<br>");