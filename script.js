class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name; 
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  study() {
    return `${this.name} is studying`;
  }
}

class Teacher extends Person {
  teach() {
    return `${this.name} is teaching`;
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

const person = new Person("john", 25);
console.log(person.name);
person.age = 30;
console.log(person.age);

const student = new Student("alice", 22);
console.log(student.study());

const teacher = new Teacher("bob", 40);
console.log(teacher.teach());
