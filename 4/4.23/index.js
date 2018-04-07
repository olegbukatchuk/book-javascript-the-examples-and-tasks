var z = {
    re: 3,
    im: 4
};

Object.defineProperty(
    z,
    "abs",
    {
        get: function() {
            return Math.sqrt(this.re * this.re + this.im * this.im);
        }
    });

document.write("z = " + z.re + " + " + z.im + "i<br>");
document.write("|z| = " + z.abs);