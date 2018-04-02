var n = 100, s = 0, k = 1;
var txt = "1<sup>2</sup> + 2<sup>2</sup> + ... + ";

txt += n + "<sup>2</sup> = ";

for (;;) {
    s += k * k;
    k++;

    if (k > n) {
        break;
    }
}

document.write(txt + s);