Array.prototype.toString = function() {
    return this.join(" ") + "<br>";
};

var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
document.write("<b>Массив A</b>:<br>");
document.write(A);

var i, j, m = 3, n = 4;
var B = new Array(m);

for (i = 0; i < B.length; i++) {
    B[i] = new Array(n);
    for (j = 0; j < B[i].length; j++) {
        B[i][j] = "b<sub>" + (i + 1) + (j + 1) + "</sub>";
    }
}

document.write("<b>Массив B</b>:<br>");
document.write(B);