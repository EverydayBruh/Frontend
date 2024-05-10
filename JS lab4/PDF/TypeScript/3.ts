type UserType = {
  name: string;
  age: number;
  hello(): void;
}

class User2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  hello(): void {
    console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
  }
}

const user_2: UserType = new User2("Ann", 32);
user_2.hello(); 