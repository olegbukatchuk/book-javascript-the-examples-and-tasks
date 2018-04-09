for (var x = -1; x <= 1; x += 2) {
    try {
        document.write("Начало внешнего <code>try-catch</code> блока<br>");
        try {
            document.write("Начало внутреннего <code>try-catch</code> блока<br>");
            var A = new Array(x);
            var B = C;
        } catch(e) {
            if (e.name == "RangeError") {
                e.message = "Неверный размер массива (Ошибка <code>RangeError</code>)";
                throw e;
            }
            document.write("Некорректное присваивание<br>");
        } finally {
            document.write("Завершение внутреннего <code>try-catch</code> блока<br>");
        }
        document.write("Ошибки <code>RangeError</code> не было<br>");
    } catch(err) {
        document.write(err.message + "<br>");
    }
    document.write("Завершение внешнего <code>try-catch</code> блока<hr>");
}