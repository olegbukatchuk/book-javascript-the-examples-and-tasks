function makePolynom(a, b, c) {
    return function(x) {
        return a + b * x + c * x * x
    }
}

var P,Q

P = makePolynom(1, 2, 1)
Q = makePolynom(2, -1, 1)

var z=2

document.write("P(" + z + ") = " + P(z) + "<br>")
document.write("Q(" + z + ") = " + Q(z) + "<br>")