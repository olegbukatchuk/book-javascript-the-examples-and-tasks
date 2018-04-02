var obj = {
    name: "Иван Петров",
    age: 38
};

document.write("<b>Имя</b>: " + obj.name + "<br>");
document.write("<b>Возраст</b>: " + obj.age + "<br>");

obj.name = "Петр Иванов";
obj.age++;

document.write("<b>Имя</b>: " + obj.name + "<br>");
document.write("<b>Возраст</b>: " + obj.age + "<br>");
