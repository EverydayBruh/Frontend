
class User1{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`)
    }
}


function User2(name, age) {
    this.name = name;
    this.age = age;
  
    this.hello = () => {
      console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    };
  }


function createUser1() {
    const user = new User1("Alice", 30);
    user.hello();
}

function createUser2() {
    const user = new User2("Bob", 25);
    user.hello();
}

  
class User3 {
    #age;  
    #tel;  

    constructor(name, age) {
        this.name = name;  
        this.#age = null;
        this.age = age; 
        this.#tel = null;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (Number.isInteger(value) && value >= 1 && value <= 100) {
            this.#age = value;
        } else {
            console.error("Возраст должен быть целым числом от 1 до 100");
        }
    }

    get tel() {
        return this.#tel;
    }

    set tel(value) {
        const phoneRegex = /^\+7\d{10}$/;
        if (phoneRegex.test(value)) {
            this.#tel = value;
        } else {
            console.error("Телефон должен быть в формате +7xxxxxxxxxx");
        }
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}


function createUser3() {
    const user = new User3("Charlie", 28);
    user.tel = "+71234567890"; 
    console.log(user.tel); 
    user.hello();
    user.age = 101; 
    console.log(user.age); 
}


class Student extends User3 {
    #knowledge
    constructor(name, age) {
      super(name, age);
      this.#knowledge = 0;
    }
  
    learn() {
      this.#knowledge += 1;
    }
  
    hello() {
      console.log(`Hi! My name is ${this.name}. I am ${this.age} years old. And I am a student!`);
    }

    get knowledge(){
        return this.#knowledge;
    }
  }

  function createStudent() {
    const student = new Student("Vasiliy", 20);
    student.tel = "+71234567890";
    console.log(student.tel);
    student.hello();
    student.age = 101;
    console.log(student.age);
    student.learn();
    student.learn();
    console.log(`Knowledge level: ${student.knowledge}`);
}


Array.prototype.reverse = function() {
    let old_length = this.length;
    for(let i = 0; i < old_length; i++){
        this.push(this[i]);
    }
    return this;
}; 

function reverseArray() {
    console.log([1, 2, 3, 4, 5].reverse());
}