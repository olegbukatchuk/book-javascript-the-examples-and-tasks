function mlog(x) {
    var s = 0, k = 1, q = x;
    var n = 100;

    while(k <= n) {
        doNext();
    }

    return s;

    function doNext() {
        s += q / k;
        q *= (-1) * x;
        k++;
    }
}

document.write("<h4>Использование внутренней функции</h4>");

var x = 0.5;

document.write("ln(1 + " + x + ") = " + mlog(x) + "<br>");
document.write("Проверка: " + Math.log(1 + x) + "<br>");