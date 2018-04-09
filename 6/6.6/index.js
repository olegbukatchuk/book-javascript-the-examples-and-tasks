var obj = {
    name: "объект",
    code: 123
};

obj["text"] = "текст";

for (var k = 1; k <= 5; k++) {
    obj["symbol_" + k] = String.fromCharCode("A".charCodeAt(0) + k - 1);
}

for (var s in obj) {
    document.write("Свойство <b>" + s + "</b>: " + obj[s] + "<br>");
}

var list = Object.keys(obj);
document.write("[" + list.join(" | ") + "]");