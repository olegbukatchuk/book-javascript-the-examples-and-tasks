with (document) {
    write ("<h4>Знакомство с пёсиком</h4>");

    var dog = {
        name: "Рекс",
        breed: "Овчарка",
        age: 3
    };

    with (dog) {
        write("Кличка: " + name + "<br>");
        write("Порода: " + breed + "<br>");
        write("Возраст: " + age + "<br>");
    }
}