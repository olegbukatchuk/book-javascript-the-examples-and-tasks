var obj = {
    name: "Иван Петров",
    age: 38,
    show: function() {
        document.write("<b>Имя</b>: " + this.name + "<br>");
        document.write("<b>Возраст</b>: " + this.age + "<br>");
    }
};

obj.show();

obj.name="Петр Иванов";
obj.age++;

obj.show();