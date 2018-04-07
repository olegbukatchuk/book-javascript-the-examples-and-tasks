var A = {};

Object.defineProperty(
    A,
    "number",
    {
        value: 100,
        enumerable: true,
        writable: true,
        configurable: true
    });

var descriptor = {
    value: "объект A",
    enumerable: true,
    writable: true,
    configurable: true
};

Object.defineProperty(A, "name" , descriptor);

show(A);
Object.defineProperty(A, "number", {value: 200, enumerable: false});

show(A);

document.write("A.number = " + A.number);

function show(obj) {
    document.write("{|");
    for(var s in obj) {
        document.write(" <b>" + s + "</b> : " + obj[s] + " |");
    }
    document.write("}<br>");
}