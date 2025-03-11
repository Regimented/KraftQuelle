import React from "react";
import Layout from "../../../../../components/Layout";
import CodeBlock from "../../../../../components/CodeBlock";

const ArrowFunctions: React.FC = () => {
  return (
    <Layout>
      <h1>Arrow Functions</h1>
      <p>
        Arrow functions in TypeScript build upon the concise syntax introduced
        in ES6 JavaScript, adding powerful type annotations that enhance code
        reliability and maintainability. These functions provide a more compact
        alternative to traditional function expressions, with implicit returns
        for single expressions, lexical binding of the 'this' keyword, and
        seamless integration with TypeScript's type system. For developers
        working on modern web applications, mastering arrow functions with
        proper type annotations is essential for writing clear, predictable, and
        type-safe code. This guide explores the syntax, use cases, and
        TypeScript-specific features of arrow functions, demonstrating how they
        combine JavaScript's expressiveness with TypeScript's robust type
        checking to produce elegant and reliable code.
      </p>
      <br />
      <p>
        Arrow functions offer several advantages in TypeScript: they provide a
        more concise syntax for simple functions, maintain lexical scoping of
        'this' which prevents common bugs in event handlers and callbacks, and
        support the full range of TypeScript's type annotations for parameters
        and return types. The basic syntax follows the pattern:{" "}
        <span className="inline-code">
          (param1: Type1, param2: Type2): ReturnType =&gt; expression
        </span>{" "}
        or using a block body:{" "}
        <span className="inline-code">
          (param1: Type1, param2: Type2): ReturnType =&gt; {"{ statements }"}
        </span>
        .
      </p>
      <br />
      <h2 id="basic-arrow-function-syntax">1. Basic Arrow Function Syntax</h2>
      <p>
        TypeScript arrow functions follow the same syntax as JavaScript arrow
        functions with the addition of type annotations. The basic form consists
        of parameters (optionally typed), followed by the arrow (=&gt;)
        operator, followed by either an expression (implicit return) or a block
        of statements (explicit return required). Arrow functions are
        particularly useful for short, one-line operations where the more
        concise syntax improves readability. They also automatically capture the
        'this' value from their surrounding context, avoiding a common source of
        bugs in traditional function expressions.
      </p>
      <CodeBlock>
        {`// Basic arrow function with implicit return
const add = (a: number, b: number): number => a + b;

// Arrow function with block body and explicit return
const multiply = (a: number, b: number): number => {
    const result = a * b;
    return result;
};

// Parameterless arrow function
const getRandomNumber = (): number => Math.random();

// Arrow function with single untyped parameter (parentheses optional)
const double = (x: number): number => x * 2;

// Using arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n: number): number => n * 2);
const evens = numbers.filter((n: number): boolean => n % 2 === 0);

console.log(add(5, 3));         // Returns: 8
console.log(multiply(4, 2));    // Returns: 8
console.log(double(6));         // Returns: 12
console.log(doubled);           // Returns: [2, 4, 6, 8, 10]
console.log(evens);             // Returns: [2, 4]`}
      </CodeBlock>
      <p>
        The simplicity of arrow functions makes them ideal for callback
        functions, array method chains, and other situations where a small,
        focused function is needed. TypeScript's type annotations ensure that
        these concise functions maintain type safety, allowing you to write
        clean, compact code without sacrificing the benefits of static typing.
      </p>
      <br />

      <h2 id="type-annotations-in-arrow-functions">
        2. Type Annotations in Arrow Functions
      </h2>
      <p>
        Type annotations in arrow functions can be applied to parameters, return
        values, and the function itself. With TypeScript's type inference, you
        can often omit explicit return types for simple expressions, but adding
        them improves code documentation and prevents accidental type changes.
        Parameter types can be specified individually or through interfaces,
        type aliases, or generics. TypeScript provides several ways to define
        function types, including using the Function type, function type
        expressions, and interfaces or type aliases with call signatures.
      </p>
      <CodeBlock>
        {`// Parameter and return type annotations
const greet = (name: string): string => \`Hello, \${name}!\`;

// Using interfaces for complex parameter types
interface User {
    id: number;
    name: string;
    age: number;
}

const formatUser = (user: User): string => {
    return \`User \${user.id}: \${user.name} (age \${user.age})\`;
};

// Arrow function type assigned to a variable
type MathOperation = (a: number, b: number) => number;
const subtract: MathOperation = (a, b) => a - b;

// Typing arrow functions with generics
const firstElement = <T>(array: T[]): T | undefined => array.length > 0 ? array[0] : undefined;

// Type inference in arrow functions
const names = ["Alice", "Bob", "Charlie"];
const lengths = names.map(name => name.length); // TypeScript infers number[] return type

console.log(greet("TypeScript"));             // Returns: "Hello, TypeScript!"
console.log(subtract(10, 5));                 // Returns: 5
console.log(firstElement([1, 2, 3]));         // Returns: 1
console.log(firstElement(["a", "b", "c"]));   // Returns: "a"`}
      </CodeBlock>
      <p>
        TypeScript's advanced type system allows for precise typing of arrow
        functions, ensuring type safety across complex operations. While type
        inference can often determine the correct types, explicitly annotating
        function parameters and return types serves as valuable documentation
        and helps catch errors during development rather than runtime. This
        combination of concise syntax and strong typing makes arrow functions
        particularly powerful in TypeScript projects.
      </p>
      <br />

      <h2 id="arrow-functions-with-object-destructuring">
        3. Arrow Functions with Object Destructuring
      </h2>
      <p>
        Arrow functions in TypeScript work seamlessly with object destructuring,
        allowing you to extract and type specific properties from objects passed
        as parameters. This approach makes functions more readable by clarifying
        which properties are being used while maintaining type safety.
        TypeScript provides several ways to annotate destructured parameters,
        including inline annotations, type aliases, interfaces, and optional
        properties. This pattern is particularly useful when working with API
        responses, component props, or configuration objects.
      </p>
      <CodeBlock>
        {`// Basic destructuring with type annotations
const getUserInfo = ({ name, age }: { name: string; age: number }): string => {
    return \`\${name} is \${age} years old\`;
};

// Using interfaces for cleaner type annotations
interface PersonData {
    name: string;
    age: number;
    address?: string;
}

const formatPerson = ({ name, age, address = "Unknown" }: PersonData): string => {
    return \`Name: \${name}, Age: \${age}, Address: \${address}\`;
};

// Nested destructuring with type annotations
interface CompanyData {
    name: string;
    location: {
        city: string;
        country: string;
    };
}

const getCompanyLocation = ({ name, location: { city, country } }: CompanyData): string => {
    return \`\${name} is located in \${city}, \${country}\`;
};

// Destructuring with rest parameters
interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
}

const summarizeProduct = ({ id, name, ...details }: Product): object => {
    return { id, name, detailsProvided: Object.keys(details) };
};

// Usage examples
const person = { name: "Alice", age: 30 };
const company = { name: "Acme Inc", location: { city: "New York", country: "USA" } };
const product = { id: "p123", name: "Laptop", price: 999, category: "Electronics", description: "Powerful laptop" };

console.log(getUserInfo(person));             // Returns: "Alice is 30 years old"
console.log(formatPerson(person));            // Returns: "Name: Alice, Age: 30, Address: Unknown"
console.log(getCompanyLocation(company));     // Returns: "Acme Inc is located in New York, USA"
console.log(summarizeProduct(product));       // Returns object with id, name, and detailsProvided properties`}
      </CodeBlock>
      <p>
        Object destructuring in arrow functions helps create more maintainable
        code by making parameter usage explicit and reducing the need to
        reference deeply nested properties. TypeScript enhances this pattern by
        ensuring that destructured properties match the expected types and by
        providing autocompletion in development environments. When combined with
        default values, optional properties, and rest parameters, destructured
        arrow functions become a powerful tool for handling complex data
        structures in a type-safe manner.
      </p>
      <br />

      <h2 id="using-arrow-functions-with-higher-order-functions">
        4. Using Arrow Functions with Higher-Order Functions
      </h2>
      <p>
        Arrow functions excel when used with higher-order functions—functions
        that take other functions as arguments or return them as results.
        TypeScript adds type safety to these patterns, ensuring that callbacks
        match the expected parameter and return types. Common higher-order
        functions include Array methods like map, filter, and reduce, as well as
        custom utilities for operations like memoization, function composition,
        and partial application. TypeScript's type system helps prevent errors
        in these complex functional programming patterns.
      </p>
      <CodeBlock>
        {`// Arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

const sumOfSquares = numbers
    .map((num: number): number => num * num)
    .reduce((sum: number, square: number): number => sum + square, 0);

// Function composition with arrow functions
type Transformer<T> = (input: T) => T;

const compose = <T>(...fns: Transformer<T>[]): Transformer<T> => 
    (input: T): T => fns.reduceRight((value, fn) => fn(value), input);

const addOne: Transformer<number> = (n: number): number => n + 1;
const double: Transformer<number> = (n: number): number => n * 2;
const square: Transformer<number> = (n: number): number => n * n;

const transformNumber = compose(square, double, addOne);

// Higher-order function that creates event handlers
type EventHandler = (event: Event) => void;
const withLogging = (handler: EventHandler): EventHandler => 
    (event: Event): void => {
        console.log('Event triggered:', event.type);
        handler(event);
    };

// Currying with arrow functions
const curriedAdd = (a: number) => (b: number): number => a + b;
const add5 = curriedAdd(5);

console.log(sumOfSquares);              // Returns: 55
console.log(transformNumber(3));        // Returns: 64 (square(double(addOne(3))) => square(double(4)) => square(8) => 64)
console.log(add5(10));                  // Returns: 15`}
      </CodeBlock>
      <p>
        Higher-order functions with arrow functions create powerful abstractions
        that can simplify complex operations. TypeScript enhances this approach
        by tracking types throughout the function chain, providing type checking
        and autocompletion at each step. The concise syntax of arrow functions
        makes these functional patterns more readable, while TypeScript's type
        system ensures they remain maintainable even as the codebase grows. This
        combination is particularly valuable in reactive programming, data
        processing, and UI development where functional patterns are commonly
        used.
      </p>
      <br />

      <h2 id="this-binding-in-arrow-functions">
        5. 'this' Binding in Arrow Functions
      </h2>
      <p>
        One of the most significant features of arrow functions is their lexical
        binding of the 'this' keyword. Unlike traditional functions, which
        define their own 'this' context based on how they're called, arrow
        functions inherit 'this' from the surrounding scope. This behavior is
        particularly valuable in TypeScript classes, React components, and event
        handlers where maintaining the correct 'this' context is crucial.
        TypeScript enhances this feature by providing proper typing for 'this'
        and flagging potential context issues.
      </p>
      <CodeBlock>
        {`// The "this" problem in traditional functions
class Counter {
    count: number = 0;

    // Problem: "this" context is lost when the function is passed as a callback
    incrementProblem() {
        function addOne() {
            // "this" is undefined or refers to the global object
            this.count += 1; // TypeScript error: 'this' implicitly has type 'any'
        }
        
        // If we passed addOne as a callback, it would lose its "this" context
        // setTimeout(addOne, 1000); // Would fail at runtime
    }

    // Solution: Arrow functions maintain lexical "this"
    increment = (): void => {
        this.count += 1; // "this" refers to the Counter instance
    };

    // Arrow functions in methods
    delayedIncrement(): void {
        setTimeout(() => {
            // "this" still refers to the Counter instance
            this.count += 1;
            console.log(this.count);
        }, 1000);
    }
}

// Event handlers in class-based components
class Button {
    text: string;
    
    constructor(text: string) {
        this.text = text;
    }
    
    // Arrow function property maintains "this" context
    handleClick = (event: MouseEvent): void => {
        console.log(\`\${this.text} button clicked\`);
    };
    
    render(): void {
        const button = document.createElement('button');
        button.textContent = this.text;
        // No need for .bind(this) with arrow functions
        button.addEventListener('click', this.handleClick);
        document.body.appendChild(button);
    }
}

// Example usage
const counter = new Counter();
counter.increment();
console.log(counter.count);  // Returns: 1

const submitButton = new Button("Submit");
submitButton.render();  // When clicked, logs "Submit button clicked"`}
      </CodeBlock>
      <p>
        The lexical 'this' binding in arrow functions solves one of the most
        common sources of bugs in JavaScript, especially when working with
        callbacks, event handlers, and asynchronous code. In TypeScript, this
        feature is enhanced with static type checking to ensure that 'this'
        references are valid. When working with classes and object methods,
        arrow functions eliminate the need for workarounds like binding methods
        in constructors or using closure variables to capture the correct
        context. This leads to cleaner, more maintainable code that correctly
        handles the 'this' context in all situations.
      </p>
      <br />

      <h2 id="limitations-and-considerations">
        6. Limitations and Considerations
      </h2>
      <p>
        While arrow functions offer many advantages, they also have limitations
        and specific use cases where traditional functions might be more
        appropriate. Arrow functions cannot be used as constructors, don't have
        their own 'arguments' object, cannot have their 'this' context changed
        with call(), apply(), or bind(), and might not be suitable for methods
        that need to access the prototype chain. TypeScript helps identify these
        limitations through its type system, flagging errors when arrow
        functions are used inappropriately. Understanding these constraints
        helps developers choose the right function syntax for each situation.
      </p>
      <CodeBlock>
        {`// Cannot use arrow functions as constructors
const Person = (name: string): void => {
    this.name = name; // Error: 'this' implicitly has type 'any'
};

// Cannot use new with arrow functions
// const john = new Person("John"); // Error: Person is not a constructor

// No arguments object in arrow functions
const sum = (...args: number[]): number => {
    // This won't work: return arguments.length ? arguments[0] + sum(...) : 0;
    
    // Use rest parameters instead:
    return args.length ? args[0] + sum(...args.slice(1)) : 0;
};

// Cannot rebind 'this' in arrow functions
const greet = (): void => {
    console.log(\`Hello, \${this.name}\`); // 'this' refers to surrounding scope
};

const person = { name: "Alice" };
// These don't change 'this' in arrow functions:
// greet.call(person);
// greet.apply(person);
// greet.bind(person)();

// Arrow functions in class prototype methods can cause issues
class BadExample {
    name: string = "example";
    
    // Arrow function doesn't have access to instance properties via this
    getName = (): string => this.name;
    
    // Better as a regular method for prototype methods
    getBetterName(): string {
        return this.name;
    }
}

// Methods that need to use 'super' can't be arrow functions
class Parent {
    protected value: number = 42;
    getValue(): number { return this.value; }
}

class Child extends Parent {
    // Won't work with arrow functions:
    // getParentValue = (): number => super.getValue();
    
    // Use regular method instead:
    getParentValue(): number {
        return super.getValue();
    }
}`}
      </CodeBlock>
      <p>
        Understanding when to use arrow functions and when to prefer traditional
        function syntax is key to writing effective TypeScript code. In general,
        arrow functions excel for short, non-method functions where lexical
        'this' binding is beneficial, such as callbacks, event handlers, and
        functional programming patterns. Traditional functions remain better for
        constructors, prototype methods, functions that need their own 'this'
        binding, and methods that use 'super' or 'arguments'. TypeScript's type
        system helps guide these decisions by flagging inappropriate uses and
        ensuring type safety regardless of which function style you choose.
      </p>
      <br />
      <p>
        Arrow functions are a powerful feature in TypeScript that combine
        concise syntax with robust type checking. They simplify callback-heavy
        code, eliminate common 'this' binding issues, and integrate seamlessly
        with TypeScript's type system. By mastering arrow functions with proper
        type annotations, you can write more expressive, maintainable, and
        error-resistant code. Whether you're working with functional programming
        patterns, class methods, or asynchronous operations, TypeScript's
        implementation of arrow functions provides the right balance of
        convenience and type safety to improve your development experience and
        code quality.
      </p>
    </Layout>
  );
};

export default ArrowFunctions;
