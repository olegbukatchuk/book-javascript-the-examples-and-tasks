var A = [1, 2, 3, 4, 5];
document.write("A = [" + A + "]<br>");

var B = ["a", "b", "c"];
document.write("B = [" + B + "]<br>");
B = A;
document.write("После присваивания <code>B = A</code>:<br>");
document.write("B = [" + B + "]<br>");
A[0] = 100;
document.write("После присваивания <code>A[0] = 100</code>:<br>");
document.write("B = [" + B + "]<br>");