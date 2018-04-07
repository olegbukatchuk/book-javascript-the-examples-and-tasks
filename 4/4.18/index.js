var A = {
    number: 100
};

var descriptor = Object.getOwnPropertyDescriptor(A, "number");

show(A);
show(descriptor);

function show(obj) {
    document.write("{| ");
    for (var s in obj) {
        document.write(" <b>" + s + "</b> : " + obj[s] + " |")
    }
    document.write("}<br>")
}