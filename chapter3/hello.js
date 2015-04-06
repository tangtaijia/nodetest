module.exports = function () {
    this.name = 'P';
    this.setName = function(name) {
        this.name = name;
    };
    this.sayHello = function() {
        console.info("Hello " + this.name);
    }
};