var txt, name;
txt = "Давайте познакомимся! Как вас зовут?";
name = prompt(txt);

if (name == "") {
    document.write("Жаль, но вы так и не представились")
} else {
    document.write("Приятно познакомится " + name + "!")
};