/*
Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
  Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
  Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
*/

class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate() {
        console.log("First Number: ",this.a)
        console.log("Second Number: ",this.b)
        console.log("You want to perform: ",this.operation)

        switch (this.operation) {
            case 'add':
                return this.a + this.b;
            case 'subtract':
                return this.a - this.b;
            case 'multiply':
                return this.a * this.b;
            case 'divide':
                return this.b !== 0 ? this.a / this.b : 'Division by zero error';
            default:
                return 'Invalid operation';
        }
    }
}


const calc = new Calculator(10.5, 5.5, 'add');
console.log("Answer: ",calc.calculate());       
   
