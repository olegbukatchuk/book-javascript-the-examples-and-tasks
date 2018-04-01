var myText="Глобальная переменная"
document.write(myText+"<br>")

function show() {
    var myText="Локальная переменная"
    window.myText="Переменная с намёком на глобальность"
    document.write(myText + "<br>")
    document.write(window.myText + "<br>")
}

show()

document.write(myText + "<br>")