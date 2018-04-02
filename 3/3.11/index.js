function diff(f, x, dx) {
    return (f(x + dx) - f(x)) / dx;
}

function G(x) {
    return x * x + x;
}

function g(x) {
    return 2 * x + 1;
}

document.write("<h4>Вычисление производной</h4>");

for (var z = 0; z <= 2; z += 0.5) {
    document.write(g(z) + " vs. " + diff(G, z, 0.001) + "<br>");
}