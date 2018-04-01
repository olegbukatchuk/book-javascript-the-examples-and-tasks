function power(x,n) {
    if(typeof(n) == "undefined") {
        n=1
    }

    if(typeof(x) == "undefined") {
        x=1
    }

    var s=1, k

    for(k=1; k<=n; k++) {
        s*=x
    }

    return s
}

document.write("2<sup>3</sup> = " + power(2,3) + "<br>")
document.write("5<sup>1</sup> = " + power(5) + "<br>")
document.write("1<sup>1</sup> = " + power() + "<br>")