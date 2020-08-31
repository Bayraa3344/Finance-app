// Эдгээрийг function далдлалт гэдэг.

// user interface controller буюу дэлгэцийн controller module
var uiController = (function () {
  var x = 150;
  //   object return хийх ёстой
  function add(y) {
    return x + y;
  }
  return {
    add: function (y) {
      console.log(x + y);
    },
    publicAdd: function (a) {
      console.log("хүлээн авсан утга бол: " + a);
    },
    publicAdd2: function (a) {
      a = add(a);
      console.log("Боловсруулсан утга: " + a);
    },
  };
})();

// finance controller Санхүүгийн controller module
var financeController = (function () {})();

// Холбогч Controller eventlistener/or/something
var appController = (function (
  uiController,
  financeController /* parametr утгаа авч байна */
) {
  uiController.add(50);
  uiController.publicAdd(30);
  uiController.publicAdd2(10);
})(uiController, financeController); /* IIFE argument-руу дамжуулж байна. */
