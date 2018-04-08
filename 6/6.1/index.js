try{
    document.write("Начало выполнения <code>try</code> блока<br>");
    var txt;
    txt = prompt("Введите выражение для вычисления:");
    document.write("Результат вычисления выражения: " + eval(txt) + "<br>")
} catch(e) {
    document.write("<b>Произошла ошибка</b><br>")
}