function MyObj() {
    this.number = 0
}

var A = new MyObj();
var F = A.constructor;
var B = new F();

document.write("Свойство B.number = " + B.number + "<br>");

A = {};
F = A.constructor;

document.write("F == Object -> " + (F == Object) + "<br>");

A = new function() {
    this.name = "объект"
}();

F = A.constructor;
B = new F();

document.write("Свойство B.name = " + B.name);