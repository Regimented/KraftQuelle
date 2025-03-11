import React from "react";
import Layout from "../../../../../components/Layout";
import CodeBlock from "../../../../../components/CodeBlock";

const FunctionReturnTypes: React.FC = () => {
  return (
    <Layout>
      <h1>Function Return Types</h1>
      <p>
        In TypeScript, function return types are a critical feature that enhance
        the language's type safety and developer experience by explicitly
        specifying what a function will return. This capability builds on
        JavaScript's dynamic nature, where return types are implicitly
        determined at runtime, by providing static type checking during
        development. By annotating return types, developers can enforce
        consistency, reduce runtime errors, and improve code documentation,
        making it easier for teams to understand and maintain complex codebases.
        TypeScript supports a variety of return type annotations, ranging from
        primitive types to complex constructs like unions, objects, and even the
        special <span className="inline-code">void</span> and{" "}
        <span className="inline-code">never</span> types. This section explores
        these return types in depth, offering detailed explanations and
        practical examples to illustrate their usage in real-world scenarios.
      </p>
      <br />
      <p>
        Using explicit return types in TypeScript provides several benefits: it
        creates self-documenting code, enables better IDE support with
        intelligent code completion, catches type-related errors during
        compilation rather than runtime, and serves as a design tool when
        planning function behavior. The syntax for declaring return types places
        a colon and type annotation after the function parameters but before the
        function body:{" "}
        <span className="inline-code">
          function functionName(parameters): ReturnType {/* implementation */}
        </span>
        .
      </p>
      <br />
      <h2 id="primitive-return-types">1. Primitive Return Types</h2>
      <p>
        TypeScript's primitive return types include{" "}
        <span className="inline-code">string</span>,{" "}
        <span className="inline-code">number</span>,{" "}
        <span className="inline-code">boolean</span>,{" "}
        <span className="inline-code">symbol</span>,{" "}
        <span className="inline-code">bigint</span>,{" "}
        <span className="inline-code">undefined</span>, and{" "}
        <span className="inline-code">null</span>. When a function is expected
        to return a specific primitive value, annotating it with the appropriate
        type ensures that the function implementation always returns a value of
        that type. This creates a contract that both the function author and
        consumers must respect, leading to more predictable code behavior and
        better error detection during development.
      </p>
      <CodeBlock>
        {`function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

function calculateTax(amount: number, rate: number): number {
    return amount * (rate / 100);
}

function isAdult(age: number): boolean {
    return age >= 18;
}

const message = greet("Alice");       // Returns: "Hello, Alice!"
const tax = calculateTax(100, 15);    // Returns: 15
const canVote = isAdult(20);          // Returns: true`}
      </CodeBlock>
      <p>
        These primitive return types form the foundation of TypeScript's type
        system. They enable developers to create functions with clear,
        predictable outputs that can be validated during the compilation
        process, preventing many common runtime errors before code reaches
        production.
      </p>
      <br />

      <h2 id="object-return-types">2. Object Return Types</h2>
      <p>
        Object return types in TypeScript allow functions to return complex data
        structures with specific property signatures. These can be defined using
        interfaces, type aliases, or inline object type annotations. By
        specifying the exact shape of returned objects, TypeScript ensures that
        consumers of your functions can safely access properties without
        encountering undefined property errors. Object return types are
        particularly valuable in API responses, data transformations, and
        factory functions where structured data needs to be consistently
        formatted.
      </p>
      <CodeBlock>
        {`interface User {
    id: number;
    name: string;
    active: boolean;
}

function getUser(id: number): User {
    return { id, name: "Bob", active: true };
}

type ProductDetails = {
    id: string;
    price: number;
    inStock: boolean;
    variants?: string[];
};

function createProduct(name: string, price: number): ProductDetails {
    return {
        id: \`prod_\${Date.now()}\`,
        price,
        inStock: true
    };
}

const user = getUser(1);                  // Returns: { id: 1, name: "Bob", active: true }
const product = createProduct("Shirt", 29.99);  // Returns product object with generated ID`}
      </CodeBlock>
      <p>
        Using object return types helps establish clear contracts between
        functions and their consumers. It enables developers to leverage
        TypeScript's structural typing system to ensure that returned objects
        conform to expected shapes, facilitating safer property access,
        destructuring, and method invocation operations throughout the codebase.
      </p>
      <br />

      <h2 id="array-return-types">3. Array Return Types</h2>
      <p>
        Array return types in TypeScript specify functions that return
        collections of values with consistent element types. These can be
        declared using either the bracket notation (
        <span className="inline-code">ElementType[]</span>) or the generic{" "}
        <span className="inline-code">Array&lt;ElementType&gt;</span> syntax.
        Array return types ensure type consistency across all elements in the
        returned collection, enabling safer iteration, mapping, and filtering
        operations. They're particularly valuable for functions that generate
        sequences, transform collections, or retrieve multiple records from data
        sources.
      </p>
      <CodeBlock>
        {`function getNumbers(count: number): number[] {
    const numbers: number[] = [];
    for (let i = 1; i <= count; i++) {
        numbers.push(i);
    }
    return numbers;
}

function splitText(text: string, delimiter: string): string[] {
    return text.split(delimiter);
}

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

function getTasks(userId: number): Array<Task> {
    return [
        { id: 1, title: "Complete report", completed: false },
        { id: 2, title: "Review code", completed: true },
        { id: 3, title: "Fix bugs", completed: false }
    ];
}

const nums = getNumbers(3);                  // Returns: [1, 2, 3]
const words = splitText("hello,world", ","); // Returns: ["hello", "world"]
const tasks = getTasks(42);                  // Returns: array of Task objects`}
      </CodeBlock>
      <p>
        TypeScript's array return types support complex element types, including
        objects, unions, and nested arrays. They can also be combined with
        modifiers like <span className="inline-code">readonly</span> to
        communicate that the returned array should not be modified. By enforcing
        element type consistency, array return types help prevent type-related
        errors during common array operations while providing enhanced code
        completion and documentation in development environments.
      </p>
      <br />

      <h2 id="union-return-types">4. Union Return Types</h2>
      <p>
        Union return types in TypeScript allow functions to return values of
        different types depending on their execution path. Defined using the
        pipe symbol (<span className="inline-code">|</span>), union types
        specify a discrete set of possible return types. This flexibility is
        particularly useful for functions that perform different operations
        based on input parameters, handle potential error cases, or need to
        return special values like <span className="inline-code">null</span>.
        TypeScript's flow analysis works with union returns to provide
        appropriate type checking based on runtime type checks.
      </p>
      <CodeBlock>
        {`function parseInput(input: string): string | number {
    const num = Number(input);
    return isNaN(num) ? input : num;
}

type ApiResponse<T> = {
    data: T;
    status: number;
} | {
    error: string;
    status: number;
};

function fetchData<T>(url: string): Promise<ApiResponse<T>> {
    // Implementation omitted for brevity
    return Promise.resolve({ data: {} as T, status: 200 });
}

function findElement<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
    return array.find(predicate);
}

const result1 = parseInput("123");          // Returns: 123 (number)
const result2 = parseInput("abc");          // Returns: "abc" (string)
const element = findElement([1, 2, 3], n => n > 5);  // Returns: undefined`}
      </CodeBlock>
      <p>
        When working with union return types, TypeScript requires runtime type
        narrowing (using type guards like{" "}
        <span className="inline-code">typeof</span>,{" "}
        <span className="inline-code">instanceof</span>, or custom predicates)
        to safely access type-specific properties. This ensures that developers
        handle each possible return type appropriately, leading to more robust
        code that accounts for all potential execution paths. Union return types
        strike a balance between flexibility and type safety, accommodating
        diverse function behaviors while maintaining compile-time checks.
      </p>
      <br />

      <h2 id="void-return-type">5. Void Return Type</h2>
      <p>
        The <span className="inline-code">void</span> return type in TypeScript
        indicates that a function does not return any value or that its return
        value should be ignored. While functions with a{" "}
        <span className="inline-code">void</span> return type technically return{" "}
        <span className="inline-code">undefined</span> in JavaScript, the{" "}
        <span className="inline-code">void</span> annotation communicates that
        the function is called for its side effects rather than its output. This
        type is commonly used for functions that perform operations like
        logging, DOM manipulation, state updates, or I/O operations where the
        return value has no semantic meaning to the caller.
      </p>
      <CodeBlock>
        {`function logMessage(message: string): void {
    console.log(message);
    // No return statement needed
}

function updateUserStatus(userId: number, active: boolean): void {
    // Update user in database
    console.log(\`User \${userId} status updated to \${active}\`);
    // Return value will be ignored even if provided
}

function forEach<T>(array: T[], callback: (item: T, index: number) => void): void {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

logMessage("Hello, TypeScript!");                   // Logs message, returns undefined
updateUserStatus(42, true);                         // Performs update, returns undefined
forEach([1, 2, 3], item => console.log(item * 2));  // Logs 2, 4, 6, returns undefined`}
      </CodeBlock>
      <p>
        Despite being annotated with <span className="inline-code">void</span>,
        these functions can still contain{" "}
        <span className="inline-code">return</span> statements without values to
        exit early. However, returning any other value will trigger a type error
        during compilation. The <span className="inline-code">void</span> type
        helps distinguish between functions that produce values and those that
        are called solely for their effects, making code intentions clearer and
        preventing accidental dependencies on undefined return values.
      </p>
      <br />

      <h2 id="never-return-type">6. Never Return Type</h2>
      <p>
        The <span className="inline-code">never</span> return type in TypeScript
        represents functions that never return normally—they either throw
        exceptions, terminate the program, or continue indefinitely. Unlike{" "}
        <span className="inline-code">void</span>, which indicates that a
        function returns <span className="inline-code">undefined</span>,{" "}
        <span className="inline-code">never</span> signifies that the function
        doesn't complete execution or return any value at all. This type is
        crucial for accurate type inference in control flow analysis,
        exhaustiveness checking in switch statements, and modeling
        error-throwing utility functions that prevent execution from continuing.
      </p>
      <CodeBlock>
        {`function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("Running...");
    }
}

function assertNever(x: never): never {
    throw new Error(\`Unexpected value: \${x}\`);
}

type Shape = Circle | Square;

function processShape(shape: Shape): string {
    if ('radius' in shape) {
        return 'Circle';
    } else if ('width' in shape) {
        return 'Square';
    } else {
        // This branch ensures type exhaustiveness
        return assertNever(shape);
    }
}

// This throws an error, execution stops
throwError("Something went wrong!");

// This function never returns to the caller
infiniteLoop();`}
      </CodeBlock>
      <p>
        The <span className="inline-code">never</span> type is a bottom type in
        TypeScript's type hierarchy, meaning it's assignable to every type, but
        no type is assignable to <span className="inline-code">never</span>{" "}
        (except <span className="inline-code">never</span> itself). This makes
        it particularly useful for implementing exhaustiveness checks in
        discriminated unions and ensuring that error handling is comprehensive.
        By using <span className="inline-code">never</span> appropriately,
        developers can leverage TypeScript's type system to catch logical errors
        at compile time rather than runtime.
      </p>
      <br />
      <p>
        Function return types are a fundamental aspect of TypeScript that
        significantly contribute to the language's type safety and developer
        experience. By explicitly declaring the expected output of functions,
        developers create clearer contracts between function implementations and
        their consumers, leading to more maintainable and error-resistant
        codebases. Whether you're working with primitive values, complex
        objects, collections, or specialized types like{" "}
        <span className="inline-code">void</span> and{" "}
        <span className="inline-code">never</span>, understanding how to apply
        appropriate return type annotations will help you harness TypeScript's
        full potential for building robust applications.
      </p>
    </Layout>
  );
};

export default FunctionReturnTypes;
