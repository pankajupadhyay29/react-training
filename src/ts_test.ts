export class Test {
  public static varTest() {
    for (var i = 0; i <= 5; i++) {
      setTimeout(() => console.log(i));
    }
  }

  public static letTest() {
    for (let i = 0; i <= 5; i++) {
      setTimeout(() => console.log(i));
    }
  }

  private value: number = 0;

  public getValue() {
    console.log(this.value);
    return this.value;
  }

  public setValue(value: number) {
    this.value = value;
  }
}

interface IStudent {
  firstName: string;
  lastName: string;
  age: number;
}

interface IKeyValuePair {
    [subject: string]: number; 
}

export class Student implements IStudent {
  public firstName: string;
  public lastName: string;
  public age: number;
  public marks: IKeyValuePair = {};

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public get Name() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  }

  public addMarks(subject: string, marks: number) {
    this.marks[subject] = marks;
  }

  public printMarks() {
    Object.keys(this.marks).forEach(key => console.log(`${key} -> ${this.marks[key]}`));
  }

  public marksArray() {
    return Object.keys(this.marks).map(key => [key, this.marks[key]]);
  }

  public addDefaultMarks = () => {
    this.addMarks('JS', 10);
    this.addMarks('C#', 10);
    this.addMarks('TS', 6);
    this.addMarks('React', 4);
  }
  
}
