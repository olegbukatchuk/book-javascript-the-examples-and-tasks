var k, n = 6, rnd, color

for (k = 1; k <= n; k++) {
    rnd = Math.random()

    if (rnd < 0.2) {
        color = function() {
            document.write("Красный<br>")
        }
    } else {
        if (rnd < 0.5) {
            color = function() {
                document.write("Желтый<br>")
            }
        } else {
            color = function() {
                document.write("Зелёный<br>")
            }
        }
    }

    color()
}