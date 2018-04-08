with(document) {
    var A = [5, 3, 2];
    write("A = [" + A + "]<br>");
    write("Результат выполнения команды <code>A.reduce(Math.pow)</code>:<br>");
    write(A.reduce(Math.pow) + "<br>");
    write("Результат выполнения команды <code>A.reduceRight(Math.pow)</code>:<br>");
    write(A.reduceRight(Math.pow)+"<br>");

    var B = [1, 2,,4, 5, 6, 7,,9];
    write("B = [" + B + "]<br>");
    write("Результат выполнения команды <code>B.forEach(fillIt)</code>:<br>");
    B.forEach(fillIt);
    write("B = [" + B + "]<br>");
    B.splice(2, 1);
    write("После выполнения команды <code>B.splice(2, 1)</code>:<br>");
    write("B = [" + B + "]<br>");
    B.splice(6, 1);
    write("После выполнения команды <code>B.splice(6, 1)</code>:<br>");
    write("B = [" + B + "]<br>");
    write("Результат выполнения команды <code>B.some(isIt)</code>:<br>");
    write(B.some(isIt) + "<br>");
    write("Результат выполнения команды <code>B.every(isInRange)</code>:<br>");
    write(B.every(isInRange) + "<br>");
    write("Результат выполнения команды <code>A.every(isInRange)</code>:<br>");
    write(A.every(isInRange)+"<br>");
}

function fillIt(value, index, array) {
    array[index] *= 10;
    document.write(index + ": " + value + "<br>");
}

function isIt(value, index, array) {
    return (index <= array.length / 2) && (value < 30);
}

function isInRange(value, index, array) {
    return (value > 0) && (value < 50);
}