function MyObj(name) {
    var n;
    this.name = name;
    Object.defineProperty(
        this,
        "number",
        {
            get: function() {
                return n % 10;
            },
            set: function(x) {
                n = (x % 10);
            }
        });
}

var A = new MyObj("объект A");

A.number = 123;
document.write(A.name + "<br>" + A.number + "<hr>");

A.number = 5;
document.write(A.name + "<br>" + A.number + "<hr>");

A.n = 12;
document.write(A.name + "<br>" + A.number + "<hr>");