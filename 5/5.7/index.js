var a = [1, 2, 3];
document.write("Массив <code>a</code>:<br>");
show(a);

var b = ["x", "y", "z"];
document.write("Массив <code>b</code>:<br>");
show(b);

var A = a.concat(b);
document.write("Массив <code>A = a.concat(b)</code>:<br>");
show(A);

A.reverse();
document.write("Массив <code>A</code> после выполнения команды <code>A.reverse()</ code>:<br>");
show(A);

A.shift();
document.write("Массив <code>A</code> после выполнения команды <code>A.shift()</ code>:<br>");
show(A);

A.pop();
document.write("Массив <code>A</code> после выполнения команды <code>A.pop()</ code>:<br>");
show(A);

A.unshift(10, 20, 30);
document.write("Массив <code>A</code> после выполнения команды <code>A.unshift(10, 20, 30)</code>:<br>");
show(A);

A.push(1, 0);
document.write("Массив <code>A</code> после выполнения команды <code>A.push(1, 0)</ code>:<br>");
show(A);

document.write("Значение выражения <code>A.slice(2,6)</code>:<br>");
show(A.slice(2, 6));

document.write("Массив <code>A</code> после выполнения команды <code>A.slice(2, 6)</ code>:<br>");
show(A);

A.splice(3, 2, -1, -2, -3);
document.write("Массив <code>A</code> после выполнения команды <code>A.splice(3,2,-1,- 2,-3)</code>:<br>");
show(A);

document.write("Значение выражения <code>A.map(function(x){return 2 * x + 1})</code>:<br>");
show(A.map(function(x){return 2 * x + 1}));

document.write("Массив <code>A</code> после выполнения команды <code> A.map(function(x) {return 2*x+1})</code>:<br>");
show(A);

document.write('Значение выражения <code>eval(A.join("+"))</code>:<br>');
document.write(eval(A.join("+")) + "<br>");
document.write("Значение выражения <code>A.filter(myTest)</code>:<br>");
show(A.filter(myTest));

document.write("Массив <code>A</code> после выполнения команды <code>A.filter(myTest)</ code>:<br>");
show(A);

A.sort();
document.write("Массив <code>A</code> после выполнения команды <code>A.sort()</ code>:<br>");
show(A);

A.sort(mySort);
document.write("Массив <code>A</code> после выполнения команды <code>A.sort(mySort)</ code>:<br>");
show(A);

function show(array) {
    document.write(array.join(" | ") + "<br>");
}

function myTest(x) {
    return (x > -3) && (x < 10);
}

function mySort(a, b) {
    if (a < b) {
        return -1;
    }
    if (b > 1) {
        return 1;
    }
    return 0;
}