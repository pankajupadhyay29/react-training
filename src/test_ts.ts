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
  
    public getValue = () => {
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
    
  }