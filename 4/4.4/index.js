var objA = {
    name: "Иван Петров",
    age: 38,
    show: function() {
        document.write("<u>Имя</u>: " + this.name + "<br>");
        document.write("<u>Возраст</u>: " + this.age + "<br>");
    }
};

document.write("<b>Объект objA:</b><br>");
objA.show();

var objB = objA;

document.write("<b>Объект objB:</b><br>");
objB.show();

objA.name="Петр Иванов";
objA.age++;

document.write("<b>Объект objA:</b><br>");
objA.show();

document.write("<b>Объект objB:</b><br>");
objB.show();
