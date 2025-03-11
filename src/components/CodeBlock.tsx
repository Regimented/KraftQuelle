import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = "typescript",
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      className="code-block"
      customStyle={{ fontSize: "1.1rem" }}
      codeTagProps={{ style: { fontSize: "1.1rem" } }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
