try{
    document.write("Начало выполнения <code>try</code>-блока<br>");

    var txt=prompt("Введите выражение для вычисления:");

    document.write("Результат вычисления выражения: " + eval(txt) + "<br>");
    document.write("Выполнение <code>try</code>-блока завершено<br>");
} catch(e) {
    var name = e.name;
    var message = e.message;
    var str;

    switch (name) {
        case "ReferenceError": str = "Некоректная ссылка";
        break;
        case "SyntaxError": str = "Синтаксическая ошибка";
        break;
        default: str = "Ошибка " + name;
    }

    document.write("<b>Внимание! Произошла ошибка</b><br>");
    document.write("<b>Тип ошибки: </b>" + str + "<br>");
    document.write("<b>Описание ошибки: </b>" + message + "<br>");

    if ("fileName" in e) {
        document.write("<b>Файл с ошибкой: </b>" + e.fileName + "<br>");
    }
}
document.write("Выполнение сценария завершено");
