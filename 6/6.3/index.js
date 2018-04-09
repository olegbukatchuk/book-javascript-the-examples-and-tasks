var A = [2, 5, 9, 1, 0, 3, 7, 8, 6, 4];
var num;

for (var k = 0; k < A.length; k++) {
    num = A[k];
    try {
        if (num == 0) {
            throw "нулевое значение";
        }
        document.write("Отличное от нуля число: " + num + "<br>");
    } catch(e) {
        document.write("Внимание: " + e + "<hr>");
        continue;
    }

    try{
        if(num % 3 == 0) {
            throw new Error("Число делится на три");
        }
    } catch(e) {
        document.write(e.message)
    }
    document.write("<hr>")
}