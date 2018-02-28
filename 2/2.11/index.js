function show(x,y,op) {
    var msg

    switch(op) {
    case "сумма":
        msg=x+" + "+ y+" = "+(x+y)+"<br>"
        break
    case "разность":
        msg=x+" - "+ y+" = "+(x-y)+"<br>"
        break
    case "произведение":
        msg=x+" * "+ y+" = "+(x*y)+"<br>"
        break
    case "частное":
        msg=x+" / "+ y+" = "+(x/y)+"<br>"
        break
    default:
        msg="<b>"+op+"</b> - неизвестная операция<br>"
    }

    document.write(msg)
}

show(8,4,"произведение")
show(8,4,"сумма")
show(8,4,"частное")
show(8,4,"разность")
show(8,4,"подмигивание")