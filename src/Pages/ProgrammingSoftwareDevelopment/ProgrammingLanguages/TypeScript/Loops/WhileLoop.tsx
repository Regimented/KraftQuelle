import Layout from "../../../../../components/Layout";

function WhileLoop() {
  return (
    <Layout section="typescript">
      <h1>While Loops</h1>
      <p>
        While loops in TypeScript execute a block of code as long as a specified
        condition is true. Unlike for loops, while loops are ideal when the
        number of iterations is not known beforehand.
      </p>
      <br />
      <h2>Basic Syntax</h2>
      <pre>
        <code>
          {`let count: number = 0;

while (count < 5) {
    console.log(count);
    count++;
}`}
        </code>
      </pre>
      <br />
      <h2>Do-While Loop</h2>
      <p>
        TypeScript also supports do-while loops, which execute the code block at
        least once before checking the condition:
      </p>
      <pre>
        <code>
          {`let i: number = 0;

do {
    console.log(i);
    i++;
} while (i < 5);`}
        </code>
      </pre>
      <br />
      <p>
        While loops are particularly useful for scenarios like reading data
        until a certain condition is met, processing user input, or implementing
        game loops.
      </p>
    </Layout>
  );
}

export default WhileLoop;
