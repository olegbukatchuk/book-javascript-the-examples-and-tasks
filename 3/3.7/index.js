var x="Альфа"

show("Браво")

function show(x){
    document.write("<h4>Выполнение функции</h4>")
    document.write("Аргумент: " + x + "<br>")
    document.write("Переменная: " + window.x + "<br>")
}