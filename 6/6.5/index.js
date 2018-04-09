function MyError(id, message) {
    this.id = id;
    this.message = message || "Ошибка пользовательского типа";
}

MyError.prototype = Object.create(Error.prototype);
MyError.prototype.name = "MyError";

MyError.prototype.toString = function() {
    var t = this.message + ": " + this.name + ". ";
    t += "Код ошибки: " + this.id + ".";
    return t;
};

MyError.prototype.constructor = MyError;

try {
    try {
        throw new MyError(200, "Рукотворная ошибка");
    } catch(e) {
        document.write(e + "<br>");
        throw new e.constructor(100);
    }
} catch(e) {
    document.write(e);
}