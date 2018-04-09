function caller(func) {
    return func;
}

function show(txt) {
    document.write(txt + "<br>");
}

var obj = {
    text: "объект obj",
    hi: function() {
        document.write(this.text + "<br>")
    },
    toString: function() {
        return this.text;
    }
};

caller(show)("функция show()");
obj.hi();

caller(obj.hi)();
caller(obj.hi.bind(obj))();

var powerOfTwo = Math.pow.bind(Math, 2);
var n = 5;

document.write("2<sup>" + n + "</sup> = " + powerOfTwo(n) + "<br>");

function f(x) {
    return this + x;
}

var one = f.bind(10);
var two = f.bind(obj);

document.write(one(5) + "<br>");
document.write(two(" - это он") + "<br>");

obj.text = "тот же объект";

document.write(two(" - новое значение") + "<br>");