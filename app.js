// Эдгээрийг function далдлалт гэдэг.

// user interface controller буюу дэлгэцийн controller module
var uiController = (function () {})();

// finance controller Санхүүгийн controller module
var financeController = (function () {})();

// Холбогч Controller eventlistener/or/something
var appController = (function (
  uiController,
  financeController /* parametr утгаа авч байна */
) {
  var ctrlAddItem = function () {
    // 1. Оруулсан өгөгдөлүүдээ олж авна.
    console.log("gggg");
    // 2. Олж авсан өгөгдөлүүдээ Санхүүгийн controller-т дамжуулж өгнө.
    // 3. Олж авсан өгөгдлөө дэлгэцэн дээр тохирох хэсэгт гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController); /* IIFE argument-руу дамжуулж байна. */
