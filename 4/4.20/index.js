var A = {
    name: "объект A",
    n: 0,
    get number() {
        return this.n % 10
    },
    set number(x) {
        this.n = (x % 10)
    }
};

A.number = 123;
document.write(A.name + "<br>" + A.number + "<hr>");

A.number = 5;
document.write(A.name + "<br>" + A.number + "<hr>");

A.n = 12;
document.write(A.name + "<br>" + A.number + "<hr>");