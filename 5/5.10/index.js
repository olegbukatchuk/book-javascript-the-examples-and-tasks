function show(name, array) {
    document.write(name + " = " + array.join(" | ") + "<br>");
}

var A = [1, 2, 3, 4, 5];
show("A", A);

var B = A.slice(0);
document.write("После присваивания̈ <code>B = A.slice(0)</code>:<br>");
show("B", B);

A[0] = 100;
document.write("После присваивания <code>A[0] = 100</code>:<br>");
show("A", A);
show("B", B);

document.write("Массив содержит среди элементов другой массив:<br>");

var C = [1, [2, 3], 4, 5];
show("C", C);

var D = C.slice(0);
document.write("После присваивания <code>D = C.slice(0)</code>:<br>");
show("D", D);

C[1][0] = 200;
C[3] = 500;

document.write("После выполнения команд <code>C[1][0] = 200</code> и <code>C[3] = 500</ code>:<br>");
show("C", C);
show("D", D);