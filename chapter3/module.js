var name;
// exports 设置为对外提供的接口
exports.setName = function (thyName) {
    name = thyName;
};
exports.sayHello = function () {
    console.info('Hello ' + name);
};