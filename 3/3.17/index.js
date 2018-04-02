var f = function(msg) {
    document.write(msg + "<br>");
};

f("Анонимная функция");

(function(msg) {
    document.write("<b>" + msg + "</b><br>");
} ("Ещё одна функция"));
