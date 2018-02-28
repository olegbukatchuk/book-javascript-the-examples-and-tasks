document.write("<h4>Случайные числа</h4>")
var rnd,msg

for(var k=1,n=20;k<=n;k++) {
    rnd=6+Math.floor(10*Math.random())
    msg="<b>"+rnd+"</b> - "

    switch(rnd) {
        case 6:
            msg+="совершенное число || "
            break
        case 7:
        case 11:
        case 13:
            msg+="простое число || "
            break
        case 10:
        case 15:
            msg+="делится на пять || "
            break
        default:
        msg+="самое обычное число || "
    }

    document.write(msg)
}