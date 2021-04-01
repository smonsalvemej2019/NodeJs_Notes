//we can pass classes as well
class student
{
    constructor(name,age,gpa)//we create a constructor
    {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    greeting()
    {
        console.log('Hello from the student.js module! My name is' , this.name);
        console.log('I am ', this.age, 'years old, and my gpa is a', this.gpa);
    }

}

module.exports = student;
