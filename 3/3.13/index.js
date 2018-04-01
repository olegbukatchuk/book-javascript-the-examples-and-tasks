function mlog(x) {
    var s=0, k
    var n = 100

    for (k = 1; k <= n; k++) {
        s -= power(-x, k) / k
    }

    return s

    function power(z, m) {
        var p=1, i

        for(i = 1; i <= m; i++) {
            p *= z
        }

        return p
    }
}

document.write("<h4>Использование ынутренней функции</h4>")

var x = 0.5

document.write("ln(1 + "+ x +") = " + mlog(x) + "<br>")
document.write("Проверка: "+ Math.log(1 + x) + "<br>")
