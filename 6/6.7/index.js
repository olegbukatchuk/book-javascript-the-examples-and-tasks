Object.prototype.toString = function() {
    var t = "<u>Собственные свойства объекта:</u><br>";
    for (var s in this) {
        t += "<b>" + s + "</b>: " + this[s] + "</br>";
    }
    return t;
};

Object.prototype.valueOf = function() {
    return Object.keys(this).length;
};

var A = {
    one: 100,
    two: 200,
    three: 300,
    four: 400,
    five: 500
};

document.write(A);
document.write("Количество свойств в объекте - " + A + "<br>");

var B = {
    first: "первый",
    second: "второй",
    third: "третий"
};

document.write(B);
document.write("Количество свойств в объекте - " + B + "<br>");

function Person(name, age, gender) {
    var g;

    if (gender) {
        g = "муж.";
    } else {
        g = "жен.";
    }

    this.name = name;
    this.age = age;

    Object.defineProperty(
        this,
        "gender",
        {
            get: function() {
                return g;
            }
        });
}

Person.prototype.toString = function() {
    var t = "<u>Персональные данные:</u><br>";
    t += "<b>Имя:</b> " + this.name + "<br>";
    t += "<b>Возраст:</b> " + this + " лет<br>";
    t += "<b>Пол:</b> " + this.gender + "<br>";
    return t;
};

Person.prototype.valueOf = function() {
    return this.age;
};

var X = new Person("Ирина", 20, false);
var Y = new Person("Андрей", 25, true);

document.write(X);
document.write(Y);

document.write("Возраст Ирины - " + X + " лет<br>");
document.write("Возраст Андрея - " + Y + " лет");