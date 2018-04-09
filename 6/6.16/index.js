var text = "Мы изучаем JavaScript";

document.write("<b>" + text + "</b><br>");

for (var k = 11; k < text.length; k++) {
    document.write(text[k]);
}

document.write("<br>" + text.slice(0, 10));
document.write("<br>" + text.slice(11));
document.write("<br>" + text.substring(11));
document.write("<br>" + text.substr(11));
document.write("<br>" + text.toUpperCase());
document.write("<br>" + text.toLowerCase());
document.write("<br>" + text.search("Java"));
document.write("<br>" + text.replace("изучаем","любим"));
document.write("<br><b>" + text + "</b>");