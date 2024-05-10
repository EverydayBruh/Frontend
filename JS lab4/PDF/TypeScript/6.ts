// Adapter

class LegacyPrinter {
  printText(text: string) {
    console.log(`Legacy Printer: ${text}`);
  }
}

interface Printer {
  print(content: string): void;
}

class PrinterAdapter implements Printer {
  private legacyPrinter: LegacyPrinter;

  constructor(legacyPrinter: LegacyPrinter) {
    this.legacyPrinter = legacyPrinter;
  }

  print(content: string): void {
    this.legacyPrinter.printText(content);
  }
}

// Использование
const legacyPrinter = new LegacyPrinter();
const adapter = new PrinterAdapter(legacyPrinter);

adapter.print("Hello, Adapter!"); // Legacy Printer: Hello, Adapter!




// Strategy
interface SortStrategy {
  sort(data: number[]): number[];
}

class BubbleSortStrategy implements SortStrategy {
  sort(data: number[]): number[] {
    return data.slice().sort((a, b) => a - b);
  }
}

class QuickSortStrategy implements SortStrategy {
  sort(data: number[]): number[] {
    return data.slice().sort((a, b) => a - b);
  }
}

class Sorter {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

// Использование
const data = [5, 3, 8, 1, 2];

const bubbleSorter = new Sorter(new BubbleSortStrategy());
console.log(bubbleSorter.sort(data)); // [1, 2, 3, 5, 8]

const quickSorter = new Sorter(new QuickSortStrategy());
console.log(quickSorter.sort(data)); // [1, 2, 3, 5, 8]



// Observer
interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];
  private data: any;

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data: any): void {
    this.data = data;
    this.observers.forEach((observer) => observer.update(data));
  }
}

class ConcreteObserver1 implements Observer {
  update(data: any): void {
    console.log(`ConcreteObserver1: ${data}`);
  }
}

class ConcreteObserver2 implements Observer {
  update(data: any): void {
    console.log(`ConcreteObserver2: ${data}`);
  }
}

// Использование
const subject = new Subject();

const observer1 = new ConcreteObserver1();
subject.attach(observer1);

const observer2 = new ConcreteObserver2();
subject.attach(observer2);

subject.notify("Hello, Observers!");