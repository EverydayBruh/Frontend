interface IUser {
  name: string;
  age: number;
  hello(): void;
}

class User implements IUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
  }
}

const user_1 = new User("John", 30);
user_1.hello();