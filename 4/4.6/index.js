function Fellow(name,age) {
    this.name = name;
    this.age = age;
    this.show = function() {
        document.write("<b>Имя</b>: " + this.name + "<br>");
        document.write("<b>Возраст</b>: " + this.age + "<br>");
    }
}

var objA = new Fellow("Иван Петров", 38);
var objB = new Fellow("Петр Иванов", 39);

objA.show();
objB.show();