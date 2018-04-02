var obj = {};

obj.name="Иван Петров";
obj.age=38;
obj.show = function() {
    document.write("<b>Имя</b>: " + this.name + "<br>");
    document.write("<b>Возраст</b>: " + this.age + "<br>")
};

obj.show();