function f(x) {
    var argType

    argType = typeof(x)

    switch(argType) {
        case "number":
            document.write("Числовой аргумент<br>")
            break
        case "string":
            document.write("Текстовый аргумент<br>")
            break
        default:
            document.write("Не текст и не число<br>")
    }
}

f("текст")
f(123)
f(10.5)
f(true)

var a
f(a)