// Adapter
var LegacyPrinter = /** @class */ (function () {
    function LegacyPrinter() {
    }
    LegacyPrinter.prototype.printText = function (text) {
        console.log("Legacy Printer: ".concat(text));
    };
    return LegacyPrinter;
}());
var PrinterAdapter = /** @class */ (function () {
    function PrinterAdapter(legacyPrinter) {
        this.legacyPrinter = legacyPrinter;
    }
    PrinterAdapter.prototype.print = function (content) {
        this.legacyPrinter.printText(content);
    };
    return PrinterAdapter;
}());
// Использование
var legacyPrinter = new LegacyPrinter();
var adapter = new PrinterAdapter(legacyPrinter);
adapter.print("Hello, Adapter!"); // Legacy Printer: Hello, Adapter!
var BubbleSortStrategy = /** @class */ (function () {
    function BubbleSortStrategy() {
    }
    BubbleSortStrategy.prototype.sort = function (data) {
        return data.slice().sort(function (a, b) { return a - b; });
    };
    return BubbleSortStrategy;
}());
var QuickSortStrategy = /** @class */ (function () {
    function QuickSortStrategy() {
    }
    QuickSortStrategy.prototype.sort = function (data) {
        return data.slice().sort(function (a, b) { return a - b; });
    };
    return QuickSortStrategy;
}());
var Sorter = /** @class */ (function () {
    function Sorter(strategy) {
        this.strategy = strategy;
    }
    Sorter.prototype.sort = function (data) {
        return this.strategy.sort(data);
    };
    return Sorter;
}());
// Использование
var data = [5, 3, 8, 1, 2];
var bubbleSorter = new Sorter(new BubbleSortStrategy());
console.log(bubbleSorter.sort(data)); // [1, 2, 3, 5, 8]
var quickSorter = new Sorter(new QuickSortStrategy());
console.log(quickSorter.sort(data)); // [1, 2, 3, 5, 8]
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.detach = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Subject.prototype.notify = function (data) {
        this.data = data;
        this.observers.forEach(function (observer) { return observer.update(data); });
    };
    return Subject;
}());
var ConcreteObserver1 = /** @class */ (function () {
    function ConcreteObserver1() {
    }
    ConcreteObserver1.prototype.update = function (data) {
        console.log("ConcreteObserver1: ".concat(data));
    };
    return ConcreteObserver1;
}());
var ConcreteObserver2 = /** @class */ (function () {
    function ConcreteObserver2() {
    }
    ConcreteObserver2.prototype.update = function (data) {
        console.log("ConcreteObserver2: ".concat(data));
    };
    return ConcreteObserver2;
}());
// Использование
var subject = new Subject();
var observer1 = new ConcreteObserver1();
subject.attach(observer1);
var observer2 = new ConcreteObserver2();
subject.attach(observer2);
subject.notify("Hello, Observers!");
