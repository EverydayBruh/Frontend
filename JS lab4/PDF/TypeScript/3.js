var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    User2.prototype.hello = function () {
        console.log("Hi! My name is ".concat(this.name, ". And I am ").concat(this.age, " years old."));
    };
    return User2;
}());
var user_2 = new User2("Ann", 32);
user_2.hello();
