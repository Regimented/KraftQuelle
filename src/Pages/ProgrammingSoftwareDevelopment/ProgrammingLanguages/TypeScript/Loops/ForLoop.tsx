import Layout from "../../../../../components/Layout";

function ForLoop() {
  return (
    <Layout section="typescript">
      <h1>For Loops</h1>
      <p>
        For loops are one of the most commonly used iteration structures in
        TypeScript. They provide a concise way to iterate a specific number of
        times or through collections with known boundaries.
      </p>
      <br />
      <p>
        The standard for loop consists of three expressions: initialization,
        condition, and increment/decrement. In TypeScript, you can declare typed
        variables in the initialization part, providing better type safety
        during iteration.
      </p>
      <br />
      <h2>Basic Syntax</h2>
      <pre>
        <code>
          {`for (let i: number = 0; i < 5; i++) {
    console.log(i);
}`}
        </code>
      </pre>
      <br />
      <h2>Iterating Through Arrays</h2>
      <pre>
        <code>
          {`const numbers: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}`}
        </code>
      </pre>
      <br />
      <p>
        TypeScript also supports for...of and for...in loops for more convenient
        iteration over arrays and objects, respectively.
      </p>
    </Layout>
  );
}

export default ForLoop;
